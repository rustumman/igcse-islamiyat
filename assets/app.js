/* =========================================================
   APP ENGINE — sidebar, breadcrumbs, auth/cloud sync, XP,
   and the quiz renderer. Shared by every page.
   Each page sets window.ROOT (relative path to site root)
   and window.PAGE (breadcrumb/sidebar context) BEFORE this
   script loads.

   ASSESSMENT IDS encode their own filter, so no separate
   registry is needed:
     practice--<unit>--<lesson>     e.g. practice--2-1--first-revelation
     quiz--<unit>--<lesson>
     unit-test--<unit>              e.g. unit-test--2-1
     topic-challenge--<topic>       e.g. topic-challenge--topic-2
     paper-challenge--<paper>       e.g. paper-challenge--paper-1
   Every question in assets/quiz-bank.js carries
   {paper, topic, unit, lesson} tags; a pool for any of the
   above is just QUESTION_BANK filtered by however much of
   that path the assessment id specifies.
   ========================================================= */
(function(){
  "use strict";

  var ROOT = window.ROOT || "";
  var TREE = window.CONTENT_TREE;
  var PAGE = window.PAGE || {};

  /* =========================================================
     STORAGE HELPERS (best-effort, never block the page)
     ========================================================= */
  function loadJSON(key, fallback){
    try{ var v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }catch(e){ return fallback; }
  }
  function saveJSON(key, val){
    try{ localStorage.setItem(key, JSON.stringify(val)); }catch(e){ /* ignore */ }
    pushToCloud();
  }
  var MASTERY_KEY = "islamiyat-mastery";
  var ANSWERED_KEY = "islamiyat-answered";
  var PLAN_KEY = "islamiyat-planner";
  var DECK_KEY = "islamiyat-deck";
  var HISTORY_KEY = "islamiyat-history";
  var mastery = loadJSON(MASTERY_KEY, {});
  var answered = loadJSON(ANSWERED_KEY, {});
  var plan = loadJSON(PLAN_KEY, {});
  var deck = loadJSON(DECK_KEY, {});
  var history = loadJSON(HISTORY_KEY, []);

  /* =========================================================
     HISTORY — an append-only log of every graded attempt
     (quiz / unit-test / topic-challenge / paper-challenge),
     timestamped and tagged the same way as its question pool.
     This is what the Progress page's trend charts read; unlike
     `mastery` (which only keeps the best score) this keeps
     every attempt so a trend line over time is possible.
     ========================================================= */
  var MAX_HISTORY = 1000;
  function pushHistory(entry){
    history.push(entry);
    if(history.length > MAX_HISTORY){ history = history.slice(history.length - MAX_HISTORY); }
    saveJSON(HISTORY_KEY, history);
  }

  /* =========================================================
     ASSESSMENT ID PARSING + POOL BUILDING
     ========================================================= */
  var PER_ATTEMPT = { practice:3, quiz:4, "unit-test":8, "topic-challenge":12, "paper-challenge":16 };
  var TRACKS_MASTERY = { practice:false, quiz:true, "unit-test":true, "topic-challenge":true, "paper-challenge":true };
  var KIND_LABEL = { practice:"Practice Quiz", quiz:"Quiz", "unit-test":"Unit Test", "topic-challenge":"Topic Challenge", "paper-challenge":"Paper Challenge" };
  var COMPLETION_XP = {
    quiz: { mastered:30, practicing:12, retry:5 },
    "unit-test": { mastered:100, practicing:40, retry:15 },
    "topic-challenge": { mastered:150, practicing:60, retry:20 },
    "paper-challenge": { mastered:250, practicing:100, retry:35 }
  };

  function parseAssessmentId(assessmentId){
    var parts = assessmentId.split("--");
    var kind = parts[0];
    var filter = {};
    if(kind === "practice" || kind === "quiz"){ filter.unit = parts[1]; filter.lesson = parts[2]; }
    else if(kind === "unit-test"){ filter.unit = parts[1]; }
    else if(kind === "topic-challenge"){ filter.topic = parts[1]; }
    else if(kind === "paper-challenge"){ filter.paper = parts[1]; }
    return { kind: kind, filter: filter };
  }

  function buildPool(filter){
    var bank = window.QUESTION_BANK || [];
    var keys = Object.keys(filter);
    return bank.filter(function(q){
      return keys.every(function(k){ return q[k] === filter[k]; });
    });
  }

  /* =========================================================
     XP / LEVEL — derived purely from progress state, never
     stored separately, so it can never drift out of sync.
     Two components: a small flat award the first time any
     question is ever answered correctly (any assessment kind),
     plus a completion bonus per graded assessment scaled by
     its mastery band.
     ========================================================= */
  var PER_QUESTION_XP = 3;

  function computeXP(){
    var xp = 0;
    Object.keys(answered).forEach(function(id){ if(answered[id]) xp += PER_QUESTION_XP; });
    Object.keys(mastery).forEach(function(assessmentId){
      var kind = parseAssessmentId(assessmentId).kind;
      var table = COMPLETION_XP[kind];
      if(!table) return;
      var best = mastery[assessmentId].best;
      xp += best >= 0.8 ? table.mastered : best >= 0.5 ? table.practicing : table.retry;
    });
    return xp;
  }
  function levelInfo(xp){
    var level = 1 + Math.floor(xp / 100);
    var into = xp % 100;
    return { level: level, into: into, span: 100 };
  }
  function paintXP(){
    var xp = computeXP();
    var li = levelInfo(xp);
    var levelEl = document.getElementById("xpLevel");
    var fillEl = document.getElementById("xpBarFill");
    var labelEl = document.getElementById("xpLabel");
    if(levelEl){ levelEl.textContent = li.level; }
    if(fillEl){ fillEl.style.width = Math.round((li.into / li.span) * 100) + "%"; }
    if(labelEl){ labelEl.textContent = xp + " XP · Level " + li.level; }
  }
  var xpToastTimer = null;
  function toastXP(amount){
    if(!amount) return;
    var el = document.getElementById("xpToast");
    if(!el) return;
    el.textContent = "+" + amount + " XP";
    el.classList.add("show");
    clearTimeout(xpToastTimer);
    xpToastTimer = setTimeout(function(){ el.classList.remove("show"); }, 2200);
  }

  /* =========================================================
     OPTIONAL CLOUD SIGN-IN (Google via Supabase)
     Same project used since the sign-in feature was first
     added. card_state holds { mastery, answered, deck },
     planner_state holds plan. XP itself is never stored; it's
     recomputed from these on every page load.
     ========================================================= */
  var SUPABASE_URL = "https://puaymjsployigxaozuqo.supabase.co";
  var SUPABASE_ANON_KEY = "sb_publishable_0hzw641YFST9Y0TOICxeEQ_Sk5A-21D";
  var supa = (SUPABASE_URL.indexOf("YOUR_SUPABASE") === -1 && window.supabase)
    ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    : null;
  var currentUser = null;

  function paintAuthUI(){
    var signInBtn = document.getElementById("signInBtn");
    var signOutBtn = document.getElementById("signOutBtn");
    var authStatus = document.getElementById("authStatus");
    if(!supa){
      if(signInBtn){ signInBtn.hidden = true; }
      return;
    }
    if(currentUser){
      if(signInBtn){ signInBtn.hidden = true; }
      if(signOutBtn){ signOutBtn.hidden = false; }
      if(authStatus){ authStatus.hidden = false; authStatus.textContent = "Synced · " + (currentUser.email || "signed in"); }
    } else {
      if(signInBtn){ signInBtn.hidden = false; }
      if(signOutBtn){ signOutBtn.hidden = true; }
      if(authStatus){ authStatus.hidden = true; }
    }
  }
  function wireAuthButtons(){
    var signInBtn = document.getElementById("signInBtn");
    var signOutBtn = document.getElementById("signOutBtn");
    if(signInBtn){
      signInBtn.addEventListener("click", function(){
        if(!supa){ return; }
        supa.auth.signInWithOAuth({ provider: "google", options: { redirectTo: window.location.href } });
      });
    }
    if(signOutBtn){
      signOutBtn.addEventListener("click", function(){
        if(!supa){ return; }
        supa.auth.signOut();
      });
    }
  }
  function pushToCloud(){
    if(!supa || !currentUser){ return; }
    supa.from("progress").upsert({
      user_id: currentUser.id,
      card_state: { mastery: mastery, answered: answered, deck: deck, history: history },
      planner_state: plan,
      updated_at: new Date().toISOString()
    }).then(function(){}, function(){ /* offline or RLS error — localStorage still has it */ });
  }
  function refreshPageState(){
    paintAllBadges();
    paintXP();
    remountAllQuizzes();
    wirePlanner();
    renderProgressPage();
  }
  function hydrateFromCloud(){
    if(!supa || !currentUser){ return; }
    supa.from("progress").select("card_state,planner_state").eq("user_id", currentUser.id).maybeSingle()
      .then(function(res){
        var row = res && res.data;
        var cloudCard = (row && row.card_state) || {};
        var cloudPlan = (row && row.planner_state) || {};
        var hasCloudData = row && (Object.keys(cloudCard).length || Object.keys(cloudPlan).length);
        if(hasCloudData){
          mastery = cloudCard.mastery || {};
          answered = cloudCard.answered || {};
          deck = cloudCard.deck || {};
          history = cloudCard.history || [];
          plan = cloudPlan;
          try{ localStorage.setItem(MASTERY_KEY, JSON.stringify(mastery)); }catch(e){}
          try{ localStorage.setItem(ANSWERED_KEY, JSON.stringify(answered)); }catch(e){}
          try{ localStorage.setItem(DECK_KEY, JSON.stringify(deck)); }catch(e){}
          try{ localStorage.setItem(HISTORY_KEY, JSON.stringify(history)); }catch(e){}
          try{ localStorage.setItem(PLAN_KEY, JSON.stringify(plan)); }catch(e){}
          refreshPageState();
          renderSidebar();
        } else {
          pushToCloud();
        }
      }, function(){ /* offline — keep using local state */ });
  }
  function initAuth(){
    wireAuthButtons();
    paintAuthUI();
    if(supa){
      supa.auth.onAuthStateChange(function(_event, session){
        currentUser = session && session.user;
        paintAuthUI();
        if(currentUser){ hydrateFromCloud(); }
      });
      supa.auth.getSession().then(function(res){
        currentUser = res && res.data && res.data.session && res.data.session.user;
        paintAuthUI();
        if(currentUser){ hydrateFromCloud(); }
      });
    }
  }

  /* =========================================================
     MASTERY BADGES (quiz / unit-test / topic-challenge / paper-challenge only)
     ========================================================= */
  function bandFor(pct){
    if(pct >= 0.8) return {cls:"st-mastered", label:"Mastered · " + Math.round(pct*100) + "%"};
    if(pct >= 0.5) return {cls:"st-practicing", label:"Practicing · " + Math.round(pct*100) + "%"};
    return {cls:"st-retry", label:"Keep going · " + Math.round(pct*100) + "%"};
  }
  function paintBadge(el){
    if(!el) return;
    var id = el.getAttribute("data-badge-for");
    var rec = mastery[id];
    el.classList.remove("st-mastered","st-practicing","st-retry");
    if(!rec){ el.textContent = "Not started"; return; }
    var band = bandFor(rec.best);
    el.classList.add(band.cls);
    el.textContent = band.label;
  }
  function paintAllBadges(){
    Array.prototype.slice.call(document.querySelectorAll(".mastery-badge[data-badge-for]")).forEach(paintBadge);
  }

  /* =========================================================
     PROGRESS PAGE — renders the historic trend of every graded
     attempt logged in `history`, broken down lesson by lesson
     (Quiz attempts) plus a section for Unit Tests / Topic &
     Paper Challenges. Only runs if #progressMount exists.
     ========================================================= */
  function sparkSVG(pcts, band){
    var w = 140, h = 36, pad = 4;
    var pts = pcts.length === 1 ? [pcts[0], pcts[0]] : pcts;
    var n = pts.length;
    var stepX = n > 1 ? (w - pad*2) / (n - 1) : 0;
    var coords = pts.map(function(p, i){
      return [pad + i*stepX, pad + (1 - p) * (h - pad*2)];
    });
    var d = coords.map(function(c, i){ return (i===0?"M":"L") + c[0].toFixed(1) + "," + c[1].toFixed(1); }).join(" ");
    var dots = coords.map(function(c){ return '<circle cx="' + c[0].toFixed(1) + '" cy="' + c[1].toFixed(1) + '" r="2.2"></circle>'; }).join("");
    return '<svg class="trend-spark ' + band + '" width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '">' +
      '<path d="' + d + '" fill="none"></path>' + dots + '</svg>';
  }
  function trendBandClass(pct){
    return pct >= 0.8 ? "band-mastered" : (pct >= 0.5 ? "band-practicing" : "band-retry");
  }
  function fmtDate(ts){
    try{ return new Date(ts).toLocaleDateString(undefined, { month:"short", day:"numeric" }); }catch(e){ return ""; }
  }
  function trendRow(title, sub, entries){
    if(!entries.length){
      return '<div class="trend-row trend-row-empty"><div class="tl-info"><h4>' + title + '</h4><span class="tl-meta">' + sub + ' · not attempted yet</span></div></div>';
    }
    var sorted = entries.slice().sort(function(a,b){ return a.ts - b.ts; });
    var latest = sorted[sorted.length - 1];
    var band = trendBandClass(latest.pct);
    return '<div class="trend-row">' +
      '<div class="tl-info"><h4>' + title + '</h4><span class="tl-meta">' + sub + ' · ' + sorted.length + ' attempt' + (sorted.length === 1 ? "" : "s") + ' · last ' + fmtDate(latest.ts) + '</span></div>' +
      sparkSVG(sorted.map(function(e){ return e.pct; }), band) +
      '<span class="trend-pct ' + band + '">' + Math.round(latest.pct * 100) + '%</span>' +
      '</div>';
  }
  function renderProgressPage(){
    var mount = document.getElementById("progressMount");
    if(!mount) return;

    var quizHist = history.filter(function(h){ return h.kind === "quiz"; });
    var otherHist = history.filter(function(h){ return h.kind !== "quiz"; });

    if(!history.length){
      mount.innerHTML = '<p class="mono" style="color:var(--muted); font-size:.85rem;">No graded attempts logged yet — take a Quiz, Unit Test or Challenge and it\'ll start showing up here.</p>';
      return;
    }

    var html = '';

    html += '<div class="trend-overall">' +
      sparkSVG(history.slice().sort(function(a,b){ return a.ts-b.ts; }).map(function(e){ return e.pct; }), trendBandClass(history[history.length-1].pct)) +
      '<div class="tl-info"><h4>All graded attempts</h4><span class="tl-meta">' + history.length + ' attempt' + (history.length === 1 ? "" : "s") + ' logged since ' + fmtDate(history.slice().sort(function(a,b){ return a.ts-b.ts; })[0].ts) + '</span></div>' +
      '</div>';

    TREE.papers.forEach(function(paper){
      paper.topics.forEach(function(topic){
        if(topic.status !== "built" || !topic.units) return;
        html += '<p class="eyebrow trend-section-title">' + paper.title + ' · ' + topic.num + ' ' + topic.title + '</p>';
        html += '<div class="trend-lesson-list">';
        topic.units.forEach(function(unit){
          unit.lessons.forEach(function(lesson){
            var entries = quizHist.filter(function(h){ return h.unit === unit.id && h.lesson === lesson.id; });
            html += trendRow(lesson.title, unit.num + " " + unit.title, entries);
          });
          var utEntries = otherHist.filter(function(h){ return h.kind === "unit-test" && h.unit === unit.id; });
          html += trendRow("Unit Test", unit.num + " " + unit.title, utEntries);
        });
        var tcEntries = otherHist.filter(function(h){ return h.kind === "topic-challenge" && h.topic === topic.id; });
        html += trendRow("Topic Challenge", topic.num + " " + topic.title, tcEntries);
        html += '</div>';
      });
      if(paper.challengeHref){
        var pcEntries = otherHist.filter(function(h){ return h.kind === "paper-challenge" && h.paper === paper.id; });
        html += '<p class="eyebrow trend-section-title">' + paper.title + '</p>';
        html += '<div class="trend-lesson-list">' + trendRow("Paper Challenge", paper.title, pcEntries) + '</div>';
      }
    });

    mount.innerHTML = html;
  }

  /* =========================================================
     DECK-CYCLING — an attempt draws perAttempt questions from
     a persisted shuffled order of the whole pool instead of
     always using every question. Once the deck runs out it
     reshuffles, so a student sees every question once before
     anything repeats.
     ========================================================= */
  function shuffleArr(arr){
    var a = arr.slice();
    for(var i = a.length - 1; i > 0; i--){
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function nextBatch(assessmentId, pool, perAttempt){
    perAttempt = Math.min(perAttempt, pool.length);
    var byId = {};
    pool.forEach(function(q){ byId[q.id] = q; });
    var poolIds = pool.map(function(q){ return q.id; });

    var state = deck[assessmentId];
    var sameIdSet = state && state.order && state.order.length === poolIds.length &&
      state.order.slice().sort().join("|") === poolIds.slice().sort().join("|");
    if(!sameIdSet){
      state = { order: shuffleArr(poolIds), cursor: 0 };
    }

    var order = state.order.slice();
    var cursor = state.cursor;
    var batchIds = [];
    while(batchIds.length < perAttempt){
      if(cursor >= order.length){
        var fresh = shuffleArr(poolIds);
        var picked = {};
        batchIds.forEach(function(id){ picked[id] = true; });
        var clean = fresh.filter(function(id){ return !picked[id]; });
        var clashing = fresh.filter(function(id){ return picked[id]; });
        order = clean.concat(clashing);
        cursor = 0;
      }
      batchIds.push(order[cursor]);
      cursor++;
    }

    deck[assessmentId] = { order: order, cursor: cursor };
    saveJSON(DECK_KEY, deck);
    return batchIds.map(function(id){ return byId[id]; });
  }

  /* =========================================================
     QUIZ ENGINE — one generalized renderer for every kind
     (practice / quiz / unit-test / topic-challenge / paper-challenge)
     ========================================================= */
  function renderAssessment(mount, assessmentId){
    var parsed = parseAssessmentId(assessmentId);
    var kind = parsed.kind;
    var pool = buildPool(parsed.filter);
    if(!pool.length){
      mount.innerHTML = '<p class="mono" style="color:var(--muted); font-size:.85rem;">No questions in this pool yet.</p>';
      return;
    }
    var perAttempt = Math.min(PER_ATTEMPT[kind] || pool.length, pool.length);
    var tracksMastery = !!TRACKS_MASTERY[kind];
    var kindLabel = KIND_LABEL[kind] || "Quiz";

    var wrap = document.createElement("div");
    wrap.className = "quiz-widget";
    mount.appendChild(wrap);

    var order, idx, answeredFlags, correctCount, batch;

    function start(){
      batch = nextBatch(assessmentId, pool, perAttempt);
      order = shuffleArr(batch.map(function(_, i){ return i; }));
      idx = 0;
      answeredFlags = new Array(order.length).fill(null);
      correctCount = 0;
      drawHead();
      drawQuestion();
    }

    function drawHead(){
      var dotsHtml = order.map(function(_, i){
        var cls = "quiz-dot";
        if(i === idx) cls += " current";
        if(answeredFlags[i] === true) cls += " answered-right";
        if(answeredFlags[i] === false) cls += " answered-wrong";
        return '<button type="button" class="' + cls + '" disabled></button>';
      }).join("");
      wrap.innerHTML =
        '<div class="quiz-head">' +
          '<span class="quiz-kind' + (tracksMastery && kind !== "quiz" ? " kind-test" : "") + '">' + kindLabel + '</span>' +
          '<div class="quiz-dots">' + dotsHtml + '</div>' +
          '<span class="quiz-counter">Q ' + (idx + 1) + ' of ' + order.length + '</span>' +
        '</div>' +
        '<div class="quiz-body"></div>';
    }

    function drawQuestion(){
      var qData = batch[order[idx]];
      var body = wrap.querySelector(".quiz-body");
      var letters = ["A","B","C","D","E"];
      body.innerHTML =
        '<p class="quiz-q"></p>' +
        '<ul class="quiz-choices"></ul>' +
        '<div class="quiz-feedback"></div>' +
        '<div class="quiz-actions"><button type="button" class="quiz-btn quiz-next" disabled>Next</button></div>';
      body.querySelector(".quiz-q").textContent = qData.q;
      var listEl = body.querySelector(".quiz-choices");
      var fbEl = body.querySelector(".quiz-feedback");
      var nextBtn = body.querySelector(".quiz-next");

      qData.choices.forEach(function(choiceText, i){
        var li = document.createElement("li");
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "quiz-choice";
        btn.innerHTML = '<span class="letter">' + letters[i] + '</span><span>' + choiceText + '</span>';
        btn.addEventListener("click", function(){
          if(answeredFlags[idx] !== null) return;
          var allBtns = Array.prototype.slice.call(listEl.querySelectorAll(".quiz-choice"));
          allBtns.forEach(function(b, bi){
            b.disabled = true;
            if(bi === qData.correct) b.classList.add("right");
            else if(bi === i) b.classList.add("wrong");
            else b.classList.add("dim");
          });
          var isRight = i === qData.correct;
          answeredFlags[idx] = isRight;
          if(isRight){
            correctCount++;
            if(!answered[qData.id]){
              answered[qData.id] = true;
              saveJSON(ANSWERED_KEY, answered);
              paintXP();
              toastXP(PER_QUESTION_XP);
            }
          }
          fbEl.className = "quiz-feedback show " + (isRight ? "is-right" : "is-wrong");
          fbEl.innerHTML = "<strong>" + (isRight ? "Correct. " : "Not quite. ") + "</strong>" + qData.explain;
          nextBtn.disabled = false;
          nextBtn.textContent = (idx === order.length - 1) ? "See results" : "Next";
          refreshDots();
        });
        li.appendChild(btn);
        listEl.appendChild(li);
      });

      nextBtn.addEventListener("click", function(){
        if(idx < order.length - 1){ idx++; drawHead(); drawQuestion(); }
        else{ finish(); }
      });
    }

    function refreshDots(){
      var dots = Array.prototype.slice.call(wrap.querySelectorAll(".quiz-dot"));
      dots.forEach(function(d, i){
        d.classList.toggle("current", i === idx);
        d.classList.toggle("answered-right", answeredFlags[i] === true);
        d.classList.toggle("answered-wrong", answeredFlags[i] === false);
      });
    }

    function finish(){
      var pct = correctCount / order.length;

      if(tracksMastery){
        var prev = mastery[assessmentId];
        if(!prev || pct > prev.best){
          mastery[assessmentId] = { best: pct, attempts: (prev ? prev.attempts + 1 : 1) };
        } else {
          mastery[assessmentId].attempts = (prev.attempts || 0) + 1;
        }
        saveJSON(MASTERY_KEY, mastery);
        pushHistory({
          ts: Date.now(), id: assessmentId, kind: kind,
          paper: parsed.filter.paper || null, topic: parsed.filter.topic || null,
          unit: parsed.filter.unit || null, lesson: parsed.filter.lesson || null,
          pct: pct, correct: correctCount, total: order.length
        });
        paintAllBadges();
        paintXP();
        renderSidebar();
        renderProgressPage();
      }

      var band = bandFor(pct);
      var bandClass = pct >= 0.8 ? "band-mastered" : (pct >= 0.5 ? "band-practicing" : "band-retry");

      if(!tracksMastery){
        wrap.innerHTML =
          '<div class="quiz-score">' +
            '<div class="big">' + correctCount + ' / ' + order.length + '</div>' +
            '<p class="note">Nice work. Head to the Quiz for this lesson when you\'re ready for a graded check.</p>' +
            '<div class="quiz-actions"><button type="button" class="quiz-btn quiz-retake">Practice again</button></div>' +
          '</div>';
        wrap.querySelector(".quiz-retake").addEventListener("click", start);
        return;
      }

      var completionTable = COMPLETION_XP[kind];
      var xpNow = pct >= 0.8 ? completionTable.mastered : pct >= 0.5 ? completionTable.practicing : completionTable.retry;
      var prevBest = (function(){
        var m = mastery[assessmentId];
        return m ? m.best : null;
      })();
      var xpGained = xpNow; // completion bonus is re-evaluated each attempt; only show it as "earned this attempt" when it's a new best
      var isNewBest = prevBest === null || pct >= prevBest;

      var note = pct >= 0.8
        ? "Strong work — this is exam-ready. Come back on your spaced-review days to keep it that way."
        : pct >= 0.5
        ? "Getting there. Re-read the parts your misses came from, then retake this before moving on."
        : "Worth another pass through the material before retaking — this is exactly what the struggle is supposed to feel like.";

      wrap.innerHTML =
        '<div class="quiz-score">' +
          '<div class="big">' + correctCount + ' / ' + order.length + '</div>' +
          '<span class="band ' + bandClass + '">' + band.label + '</span>' +
          '<p class="note">' + note + '</p>' +
          (isNewBest ? '<p class="xp-earned">+' + xpGained + ' XP for this result</p>' : '') +
          '<div class="quiz-actions"><button type="button" class="quiz-btn quiz-retake">Retake</button></div>' +
        '</div>';
      wrap.querySelector(".quiz-retake").addEventListener("click", start);
    }

    start();
  }

  function mountQuizzes(){
    var mounts = Array.prototype.slice.call(document.querySelectorAll(".quiz-mount[data-quiz]"));
    mounts.forEach(function(mount){
      renderAssessment(mount, mount.getAttribute("data-quiz"));
    });
    paintAllBadges();
  }
  function remountAllQuizzes(){
    var mounts = Array.prototype.slice.call(document.querySelectorAll(".quiz-mount[data-quiz]"));
    mounts.forEach(function(mount){ mount.innerHTML = ""; });
    mountQuizzes();
  }

  /* =========================================================
     REVIEW PLANNER (topic overview page)
     ========================================================= */
  function wirePlanner(){
    var planBoxes = Array.prototype.slice.call(document.querySelectorAll("[data-plan]"));
    if(!planBoxes.length) return;
    planBoxes.forEach(function(box){
      var key = box.getAttribute("data-plan");
      box.checked = !!plan[key];
      box.onchange = function(){
        plan[key] = box.checked;
        saveJSON(PLAN_KEY, plan);
      };
    });
    var resetBtn = document.getElementById("resetPlanner");
    if(resetBtn){
      resetBtn.onclick = function(){
        plan = {};
        saveJSON(PLAN_KEY, plan);
        planBoxes.forEach(function(box){ box.checked = false; });
      };
    }
  }

  /* =========================================================
     SIDEBAR — Paper > Topic > Unit > Lesson, expanding only
     the branch the current page is inside.
     ========================================================= */
  function leafDot(assessmentId){
    var rec = mastery[assessmentId];
    if(!rec) return "";
    if(rec.best >= 0.8) return " mastered";
    if(rec.best >= 0.5) return " practicing";
    return "";
  }
  function leafRow(href, label, assessmentIdForDot, isCurrent){
    var dotCls = assessmentIdForDot ? leafDot(assessmentIdForDot) : "";
    return '<a class="side-lesson-row' + (isCurrent ? " current" : "") + '" href="' + ROOT + href + '">' +
      '<span class="side-lesson-dot' + dotCls + '"></span><span>' + label + '</span></a>';
  }

  function renderSidebar(){
    var mount = document.getElementById("sidebarMount");
    if(!mount) return;
    var xp = computeXP();
    var li = levelInfo(xp);

    var html = '';
    html += '<div class="sidebar-head">';
    html += '<a class="sidebar-brand" href="' + ROOT + TREE.home + '">' + TREE.title + '<span class="dot">·</span></a>';
    html += '<div class="xp-box">';
    html += '<div class="xp-level" id="xpLevel">' + li.level + '</div>';
    html += '<div class="xp-meta"><div class="xp-label" id="xpLabel">' + xp + ' XP · Level ' + li.level + '</div>';
    html += '<div class="xp-bar-track"><div class="xp-bar-fill" id="xpBarFill" style="width:' + Math.round((li.into/li.span)*100) + '%;"></div></div></div>';
    html += '</div>';
    html += '<a class="sidebar-progress-link' + (PAGE.page === "progress" ? " current" : "") + '" href="' + ROOT + 'progress.html">My Progress</a>';
    html += '</div>';

    html += '<div class="sidebar-auth">';
    html += '<button id="signInBtn" class="auth-btn" type="button">Sign in with Google</button>';
    html += '<button id="signOutBtn" class="auth-btn" type="button" hidden>Sign out</button>';
    html += '<span id="authStatus" class="auth-status mono" hidden></span>';
    html += '</div>';

    html += '<nav class="sidebar-nav" aria-label="Course navigation">';
    TREE.papers.forEach(function(paper){
      var isCurrentPaper = PAGE.paper === paper.id;
      html += '<div class="side-paper">';
      html += '<a class="side-paper-title" href="' + ROOT + paper.href + '">' + paper.title + '</a>';
      paper.topics.forEach(function(topic){
        var isBuilt = topic.status === "built";
        var isCurrentTopic = isCurrentPaper && PAGE.topic === topic.id;
        if(!isBuilt){
          html += '<span class="side-topic-row"><span class="side-topic-num">' + topic.num + '</span><span>' + topic.title + '</span><span class="side-topic-soon">Soon</span></span>';
          return;
        }
        html += '<a class="side-topic-row built' + (isCurrentTopic && !PAGE.unit && PAGE.page !== "topic-challenge" ? " active" : "") + '" href="' + ROOT + topic.href + '">';
        html += '<span class="side-topic-num">' + topic.num + '</span><span>' + topic.title + '</span></a>';
        if(isCurrentTopic){
          html += '<div class="side-unit-list">';
          topic.units.forEach(function(unit){
            var isCurrentUnit = PAGE.unit === unit.id;
            html += '<a class="side-unit-row' + (isCurrentUnit && !PAGE.lesson && PAGE.page !== "unit-test" ? " current" : "") + '" href="' + ROOT + unit.href + '">' + unit.num + ' ' + unit.title + '</a>';
            if(isCurrentUnit){
              html += '<div class="side-lesson-list side-lesson-list-nested">';
              unit.lessons.forEach(function(lesson){
                var quizId = "quiz--" + unit.id + "--" + lesson.id;
                var isCurrentLesson = PAGE.lesson === lesson.id;
                html += leafRow(lesson.base + "lesson.html", lesson.title, quizId, isCurrentLesson);
              });
              html += leafRow(unit.testHref, "Unit Test", "unit-test--" + unit.id, PAGE.page === "unit-test");
              html += '</div>';
            }
          });
          html += leafRow(topic.challengeHref, "Topic Challenge", "topic-challenge--" + topic.id, PAGE.page === "topic-challenge");
          html += '</div>';
        }
      });
      if(paper.challengeHref){
        html += leafRow(paper.challengeHref, "Paper Challenge", "paper-challenge--" + paper.id, PAGE.page === "paper-challenge");
      }
      html += '</div>';
    });
    html += '</nav>';

    mount.innerHTML = html;
    wireAuthButtons();
    paintAuthUI();
  }

  /* =========================================================
     BREADCRUMB
     ========================================================= */
  function findPaper(id){ return TREE.papers.filter(function(p){ return p.id === id; })[0]; }
  function findTopic(paper, id){ return paper ? paper.topics.filter(function(t){ return t.id === id; })[0] : null; }
  function findUnit(topic, id){ return topic && topic.units ? topic.units.filter(function(u){ return u.id === id; })[0] : null; }
  function findLesson(unit, id){ return unit && unit.lessons ? unit.lessons.filter(function(l){ return l.id === id; })[0] : null; }

  function renderBreadcrumb(){
    var mount = document.getElementById("breadcrumbMount");
    if(!mount) return;
    var parts = [{ label: TREE.title, href: ROOT + TREE.home }];
    var paper = PAGE.paper ? findPaper(PAGE.paper) : null;
    var topic = paper && PAGE.topic ? findTopic(paper, PAGE.topic) : null;
    var unit = topic && PAGE.unit ? findUnit(topic, PAGE.unit) : null;
    var lesson = unit && PAGE.lesson ? findLesson(unit, PAGE.lesson) : null;

    if(paper){ parts.push({ label: paper.title, href: ROOT + paper.href }); }
    if(PAGE.page === "paper-challenge" && paper){ parts.push({ label: "Paper Challenge", href: null }); }
    if(topic){ parts.push({ label: topic.num + " " + topic.title, href: topic.href ? ROOT + topic.href : null }); }
    if(PAGE.page === "topic-challenge" && topic){ parts.push({ label: "Topic Challenge", href: null }); }
    if(unit){ parts.push({ label: unit.num + " " + unit.title, href: unit.href ? ROOT + unit.href : null }); }
    if(PAGE.page === "unit-test" && unit){ parts.push({ label: "Unit Test", href: null }); }
    if(lesson){
      parts.push({ label: lesson.title, href: (PAGE.page === "practice" || PAGE.page === "quiz") ? ROOT + lesson.base + "lesson.html" : null });
      if(PAGE.page === "practice"){ parts.push({ label: "Practice Quiz", href: null }); }
      if(PAGE.page === "quiz"){ parts.push({ label: "Quiz", href: null }); }
    }

    var html = parts.map(function(p, i){
      var isLast = i === parts.length - 1;
      var seg = p.href && !isLast ? '<a href="' + p.href + '">' + p.label + '</a>' : '<span class="current">' + p.label + '</span>';
      return i === 0 ? seg : '<span class="sep">/</span>' + seg;
    }).join("");
    mount.innerHTML = html;
  }

  /* =========================================================
     MOBILE SIDEBAR TOGGLE
     ========================================================= */
  function wireMobileToggle(){
    var toggleBtn = document.getElementById("sidebarToggleBtn");
    var sidebar = document.getElementById("sidebarMount") ? document.getElementById("sidebarMount").closest(".sidebar") : null;
    var scrim = document.getElementById("sidebarScrim");
    if(!toggleBtn || !sidebar) return;
    function close(){ sidebar.classList.remove("open"); if(scrim){ scrim.classList.remove("show"); } }
    function open(){ sidebar.classList.add("open"); if(scrim){ scrim.classList.add("show"); } }
    toggleBtn.addEventListener("click", function(){
      sidebar.classList.contains("open") ? close() : open();
    });
    if(scrim){ scrim.addEventListener("click", close); }
  }

  /* =========================================================
     INIT
     ========================================================= */
  function init(){
    renderSidebar();
    renderBreadcrumb();
    wireMobileToggle();
    mountQuizzes();
    wirePlanner();
    paintXP();
    renderProgressPage();
    initAuth();
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
