/* =========================================================
   APP ENGINE — sidebar, breadcrumbs, auth/cloud sync, XP,
   and the quiz renderer. Shared by every page.
   Each page sets window.ROOT (relative path to site root)
   and window.PAGE (breadcrumb/sidebar context) BEFORE this
   script loads.
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
  var MASTERY_KEY = "islamiyat-t2-mastery";
  var QUICKDONE_KEY = "islamiyat-t2-quickdone";
  var PLAN_KEY = "islamiyat-t2-planner";
  var mastery = loadJSON(MASTERY_KEY, {});
  var quickDone = loadJSON(QUICKDONE_KEY, {});
  var plan = loadJSON(PLAN_KEY, {});

  /* =========================================================
     XP / LEVEL — derived purely from progress state, never
     stored separately, so it can never drift out of sync.
     ========================================================= */
  function computeXP(){
    var xp = 0;
    Object.keys(quickDone).forEach(function(id){ if(quickDone[id]) xp += 5; });
    ["test-ch21","test-ch22","test-ch23"].forEach(function(id){
      var rec = mastery[id];
      if(rec){ xp += rec.best >= 0.8 ? 100 : rec.best >= 0.5 ? 40 : 15; }
    });
    var ch = mastery["challenge"];
    if(ch){ xp += ch.best >= 0.8 ? 150 : ch.best >= 0.5 ? 60 : 20; }
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
     Same project and table used since the sign-in feature was
     first added — card_state holds { mastery, quickDone },
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
      card_state: { mastery: mastery, quickDone: quickDone },
      planner_state: plan,
      updated_at: new Date().toISOString()
    }).then(function(){}, function(){ /* offline or RLS error — localStorage still has it */ });
  }

  function refreshPageState(){
    paintAllBadges();
    paintXP();
    remountAllQuizzes();
    wirePlanner();
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
          quickDone = cloudCard.quickDone || {};
          plan = cloudPlan;
          try{ localStorage.setItem(MASTERY_KEY, JSON.stringify(mastery)); }catch(e){}
          try{ localStorage.setItem(QUICKDONE_KEY, JSON.stringify(quickDone)); }catch(e){}
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
     MASTERY BADGES
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
     QUIZ ENGINE — quick-check (single MCQ) and test (multi-Q)
     ========================================================= */
  function renderQuick(mount, quizId, quiz){
    var qData = quiz.questions[0];
    var wrap = document.createElement("div");
    wrap.className = "quiz-widget quick";
    wrap.innerHTML =
      '<div class="quiz-head"><span class="quiz-kind">Quick Check</span>' +
      '<span class="quiz-done-mark' + (quickDone[quizId] ? " show" : "") + '">✓ done</span></div>' +
      '<div class="quiz-body">' +
        '<p class="quiz-q"></p>' +
        '<ul class="quiz-choices"></ul>' +
        '<div class="quiz-feedback"></div>' +
        '<div class="quiz-actions"><button type="button" class="quiz-btn ghost quiz-retry" style="display:none;">Try again</button></div>' +
      '</div>';
    mount.appendChild(wrap);

    var qEl = wrap.querySelector(".quiz-q");
    var listEl = wrap.querySelector(".quiz-choices");
    var fbEl = wrap.querySelector(".quiz-feedback");
    var doneMark = wrap.querySelector(".quiz-done-mark");
    var retryBtn = wrap.querySelector(".quiz-retry");
    var letters = ["A","B","C","D","E"];

    function draw(){
      qEl.textContent = qData.q;
      listEl.innerHTML = "";
      fbEl.className = "quiz-feedback";
      fbEl.textContent = "";
      retryBtn.style.display = "none";
      qData.choices.forEach(function(choiceText, idx){
        var li = document.createElement("li");
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "quiz-choice";
        btn.innerHTML = '<span class="letter">' + letters[idx] + '</span><span>' + choiceText + '</span>';
        btn.addEventListener("click", function(){ pick(idx, btn); });
        li.appendChild(btn);
        listEl.appendChild(li);
      });
    }

    function pick(idx){
      var allBtns = Array.prototype.slice.call(listEl.querySelectorAll(".quiz-choice"));
      allBtns.forEach(function(b, i){
        b.disabled = true;
        if(i === qData.correct) b.classList.add("right");
        else if(i === idx) b.classList.add("wrong");
        else b.classList.add("dim");
      });
      var isRight = idx === qData.correct;
      fbEl.className = "quiz-feedback show " + (isRight ? "is-right" : "is-wrong");
      fbEl.innerHTML = "<strong>" + (isRight ? "Correct. " : "Not quite. ") + "</strong>" + qData.explain;
      if(isRight){
        var wasAlready = !!quickDone[quizId];
        quickDone[quizId] = true;
        saveJSON(QUICKDONE_KEY, quickDone);
        doneMark.classList.add("show");
        paintXP();
        if(!wasAlready){ toastXP(5); }
      }
      retryBtn.style.display = "inline-block";
    }

    retryBtn.addEventListener("click", draw);
    draw();
  }

  function shuffleArr(arr){
    var a = arr.slice();
    for(var i = a.length - 1; i > 0; i--){
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function xpForResult(quizId, pct){
    var cap = quizId === "challenge" ? 150 : 100;
    var mid = quizId === "challenge" ? 60 : 40;
    var low = 15 + (quizId === "challenge" ? 5 : 0);
    return pct >= 0.8 ? cap : pct >= 0.5 ? mid : low;
  }

  function renderTest(mount, quizId, quiz){
    var wrap = document.createElement("div");
    wrap.className = "quiz-widget";
    mount.appendChild(wrap);

    var order, idx, answered, correctCount;

    function start(){
      order = shuffleArr(quiz.questions.map(function(_, i){ return i; }));
      idx = 0;
      answered = new Array(order.length).fill(null);
      correctCount = 0;
      drawHead();
      drawQuestion();
    }

    function drawHead(){
      var kindLabel = quiz.dark ? "Course Challenge" : "Unit Test";
      var dotsHtml = order.map(function(_, i){
        var cls = "quiz-dot";
        if(i === idx) cls += " current";
        if(answered[i] === true) cls += " answered-right";
        if(answered[i] === false) cls += " answered-wrong";
        return '<button type="button" class="' + cls + '" disabled></button>';
      }).join("");
      wrap.innerHTML =
        '<div class="quiz-head">' +
          '<span class="quiz-kind kind-test">' + kindLabel + '</span>' +
          '<div class="quiz-dots">' + dotsHtml + '</div>' +
          '<span class="quiz-counter">Q ' + (idx + 1) + ' of ' + order.length + '</span>' +
        '</div>' +
        '<div class="quiz-body"></div>';
    }

    function drawQuestion(){
      var qData = quiz.questions[order[idx]];
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
          if(answered[idx] !== null) return;
          var allBtns = Array.prototype.slice.call(listEl.querySelectorAll(".quiz-choice"));
          allBtns.forEach(function(b, bi){
            b.disabled = true;
            if(bi === qData.correct) b.classList.add("right");
            else if(bi === i) b.classList.add("wrong");
            else b.classList.add("dim");
          });
          var isRight = i === qData.correct;
          answered[idx] = isRight;
          if(isRight) correctCount++;
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
        d.classList.toggle("answered-right", answered[i] === true);
        d.classList.toggle("answered-wrong", answered[i] === false);
      });
    }

    function finish(){
      var pct = correctCount / order.length;
      var prev = mastery[quizId];
      var prevBest = prev ? prev.best : null;
      if(!prev || pct > prev.best){
        mastery[quizId] = { best: pct, attempts: (prev ? prev.attempts + 1 : 1) };
      } else {
        mastery[quizId].attempts = (prev.attempts || 0) + 1;
      }
      saveJSON(MASTERY_KEY, mastery);
      paintAllBadges();
      paintXP();
      renderSidebar();

      var xpNow = xpForResult(quizId, mastery[quizId].best);
      var xpBefore = prevBest === null ? 0 : xpForResult(quizId, prevBest);
      var xpGained = Math.max(0, xpNow - xpBefore);
      if(xpGained > 0){ toastXP(xpGained); }

      var band = bandFor(pct);
      var bandClass = pct >= 0.8 ? "band-mastered" : (pct >= 0.5 ? "band-practicing" : "band-retry");
      var note = pct >= 0.8
        ? "Strong work — this topic is exam-ready. Come back on your Day 7 and Day 16 review passes to keep it that way."
        : pct >= 0.5
        ? "Getting there. Re-read the sections your misses came from, then retake this test before moving on."
        : "Worth another full pass through the lesson before retaking — you're not behind, this is exactly what the struggle is supposed to feel like.";

      wrap.innerHTML =
        '<div class="quiz-score">' +
          '<div class="big">' + correctCount + ' / ' + order.length + '</div>' +
          '<span class="band ' + bandClass + '">' + band.label + '</span>' +
          '<p class="note">' + note + '</p>' +
          (xpGained > 0 ? '<p class="xp-earned">+' + xpGained + ' XP earned</p>' : '') +
          '<div class="quiz-actions"><button type="button" class="quiz-btn quiz-retake">Retake test</button></div>' +
        '</div>';
      wrap.querySelector(".quiz-retake").addEventListener("click", start);
    }

    start();
  }

  function mountQuizzes(){
    var mounts = Array.prototype.slice.call(document.querySelectorAll(".quiz-mount[data-quiz]"));
    mounts.forEach(function(mount){
      var quizId = mount.getAttribute("data-quiz");
      var quiz = window.QUIZ_BANK && window.QUIZ_BANK[quizId];
      if(!quiz) return;
      if(quiz.type === "quick") renderQuick(mount, quizId, quiz);
      else renderTest(mount, quizId, quiz);
    });
    paintAllBadges();
  }
  function remountAllQuizzes(){
    var mounts = Array.prototype.slice.call(document.querySelectorAll(".quiz-mount[data-quiz]"));
    mounts.forEach(function(mount){ mount.innerHTML = ""; });
    mountQuizzes();
  }

  /* =========================================================
     REVIEW PLANNER (lives on the topic overview page)
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
     SIDEBAR
     ========================================================= */
  function lessonStatusDot(testId){
    var rec = mastery[testId];
    if(!rec) return "";
    if(rec.best >= 0.8) return " mastered";
    if(rec.best >= 0.5) return " practicing";
    return "";
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
    html += '</div></div>';

    html += '<div class="sidebar-auth">';
    html += '<button id="signInBtn" class="auth-btn" type="button">Sign in with Google</button>';
    html += '<button id="signOutBtn" class="auth-btn" type="button" hidden>Sign out</button>';
    html += '<span id="authStatus" class="auth-status mono" hidden></span>';
    html += '</div>';

    html += '<nav class="sidebar-nav" aria-label="Course navigation">';
    TREE.papers.forEach(function(paper){
      html += '<div class="side-paper">';
      html += '<a class="side-paper-title" href="' + ROOT + paper.href + '">' + paper.title + '</a>';
      paper.topics.forEach(function(topic){
        var isBuilt = topic.status === "built";
        var isCurrentTopic = PAGE.paper === paper.id && PAGE.topic === topic.id;
        if(isBuilt){
          html += '<a class="side-topic-row built' + (isCurrentTopic && !PAGE.lesson ? " active" : "") + '" href="' + ROOT + topic.href + '">';
          html += '<span class="side-topic-num">' + topic.num + '</span><span>' + topic.title + '</span></a>';
          if(isCurrentTopic){
            html += '<div class="side-lesson-list">';
            topic.lessons.forEach(function(lesson){
              var dotCls = lessonStatusDot(lesson.testId);
              var isCurrentLesson = PAGE.lesson === lesson.id;
              html += '<a class="side-lesson-row' + (isCurrentLesson ? " current" : "") + '" href="' + ROOT + lesson.lessonHref + '">';
              html += '<span class="side-lesson-dot' + dotCls + '"></span><span>' + lesson.num + ' ' + lesson.title + '</span></a>';
            });
            var chDot = lessonStatusDot(topic.challengeId);
            html += '<a class="side-lesson-row' + (PAGE.page === "challenge" ? " current" : "") + '" href="' + ROOT + topic.challengeHref + '">';
            html += '<span class="side-lesson-dot' + chDot + '"></span><span>Course Challenge</span></a>';
            html += '</div>';
          }
        } else {
          html += '<span class="side-topic-row"><span class="side-topic-num">' + topic.num + '</span><span>' + topic.title + '</span><span class="side-topic-soon">Soon</span></span>';
        }
      });
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
  function findLesson(topic, id){ return topic && topic.lessons ? topic.lessons.filter(function(l){ return l.id === id; })[0] : null; }

  function renderBreadcrumb(){
    var mount = document.getElementById("breadcrumbMount");
    if(!mount) return;
    var parts = [{ label: TREE.title, href: ROOT + TREE.home }];
    var paper = PAGE.paper ? findPaper(PAGE.paper) : null;
    var topic = paper && PAGE.topic ? findTopic(paper, PAGE.topic) : null;
    var lesson = topic && PAGE.lesson ? findLesson(topic, PAGE.lesson) : null;

    if(paper){ parts.push({ label: paper.title, href: ROOT + paper.href }); }
    if(topic){ parts.push({ label: topic.num + " " + topic.title, href: topic.href ? ROOT + topic.href : null }); }
    if(PAGE.page === "challenge" && topic){ parts.push({ label: "Course Challenge", href: null }); }
    if(lesson){
      parts.push({ label: lesson.num + " " + lesson.title, href: PAGE.page === "test" ? ROOT + lesson.lessonHref : null });
      if(PAGE.page === "test"){ parts.push({ label: "Unit Test", href: null }); }
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
    initAuth();
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
