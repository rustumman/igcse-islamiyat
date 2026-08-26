# IGCSE Islamiyat

An open, illustrated Khan Academy–style course covering **Cambridge IGCSE Islamiyat 0493** (both papers). Structured to match the official syllabus, one level deeper than the syllabus itself specifies:

**IGCSE Islamiyat → Paper → Topic → Unit → Lesson**

Right now one topic is fully built out — **Paper 1, Topic 2: "The history and importance of the Qur'an"** — split into three units (2.1 Revelation, 2.2 Compilation under the Khalifas, 2.3 The Qur'an in Legal Thinking), each broken further into lesson-sized chunks matching how revision guides like ZNotes actually teach this material. Every other topic in both papers is scaffolded in the navigation and marked "Coming soon," ready to be filled in the same way.

It's designed around the learning techniques from Peter Brown, Henry Roediger & Mark McDaniel's *Make It Stick: The Science of Successful Learning* — retrieval practice, generation prompts, interleaving, and spaced review — delivered as a full assessment ladder at every level of the hierarchy, with a persistent course sidebar, mastery tracking, and XP.

**Live version:** open `index.html` in a browser, or see "Publishing with GitHub Pages" below for a shareable link.

## The assessment ladder

Every level of the hierarchy has its own check, each drawing from a bigger pool the level below it:

- **Lesson** → a **Practice Quiz** (3 questions, ungraded, unlimited retries — just reinforcement) then a **Quiz** (4 questions, graded, feeds that lesson's mastery badge)
- **Unit** → a **Unit Test** (8 questions, drawn from every lesson in the unit)
- **Topic** → a **Topic Challenge** (12 questions, drawn from every unit in the topic, shuffled — the interleaved "won't ask about one unit at a time" mock)
- **Paper** → a **Paper Challenge** (16 questions, drawn from every topic in the paper — grows automatically as more topics get built, no code changes needed)

## The question database

All of it lives in one flat, tagged array in `assets/quiz-bank.js`:

```js
{ id:"2-1--first-revelation--q1", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"first-revelation",
  q:"...", choices:[...], correct:1, explain:"..." }
```

A Practice Quiz or Quiz pool is that array filtered to one `lesson`; a Unit Test filters to one `unit` (every lesson under it); a Topic Challenge filters to one `topic`; a Paper Challenge filters to one `paper`. `assets/app.js` builds these pools by parsing the assessment's id — `practice--2-1--first-revelation`, `quiz--2-1--first-revelation`, `unit-test--2-1`, `topic-challenge--topic-2`, `paper-challenge--paper-1` — no separate registry to keep in sync.

**Deck-cycling:** each assessment draws its fixed-size batch from a persisted shuffled order of its whole pool rather than always using every question, so a student sees every question once before anything repeats (see "Growing a question pool" below) — the deck reshuffles once fully consumed.

## Structure

```
index.html                                    Course home (Paper 1 / Paper 2)
paper-1/index.html                            Paper 1 topic list
paper-1/paper-challenge.html                  Paper Challenge
paper-1/topic-2/index.html                    Topic overview: unit list + review planner
paper-1/topic-2/topic-challenge.html          Topic Challenge
paper-1/topic-2/2-1/index.html                Unit overview: lesson list
paper-1/topic-2/2-1/unit-test.html            Unit Test
paper-1/topic-2/2-1/first-revelation/
  lesson.html   practice.html   quiz.html      One lesson's content + its two assessments
paper-1/topic-2/2-1/<other lessons>/...        (same 3-file pattern per lesson)
paper-1/topic-2/2-2/...  paper-1/topic-2/2-3/...  (same pattern per unit)
paper-2/index.html                            Paper 2 topic list (all "Coming soon")
assets/app.css                                 Shared design system + sidebar/layout
assets/app.js                                  Sidebar, breadcrumbs, auth/sync, XP, pool-building quiz engine
assets/content-tree.js                         The course hierarchy (papers → topics → units → lessons)
assets/quiz-bank.js                            The single tagged question database
supabase/schema.sql                            Progress table + row-level security
```

Every page is a thin HTML shell that loads the shared `assets/` files — no build step, but the site behaves like a real multi-page app: distinct, bookmarkable URLs per lesson/practice/quiz/test, browser back/forward, and a persistent sidebar.

## What's inside

- Content drawn from the Qur'an, Sahih al-Bukhari, and cross-checked academic sources, plus every relevant past-paper question and mark-scheme pattern from the 2021–2025 exam sessions.
- Past-paper style model answers (AO1/AO2 structure) with examiner notes, placed in whichever lesson they're most relevant to.
- **XP and levels** — every correct answer and every graded result earns XP shown in the sidebar, purely as a function of saved progress (never stored separately, so it can't drift out of sync).
- A Day 0/1/3/7/16 spaced-review planner per topic.
- Full light/dark theme support.
- Optional Google sign-in so a student's mastery, answered-question history, and planner progress follow them across devices (see "Optional: sign-in and progress sync" below). Without it, progress is still saved locally in the browser — nothing is sent anywhere.

## Using it

Open `index.html` in any browser — no build step, no server required beyond static file hosting (opening the HTML files directly via `file://` also works, since all paths are relative). It works offline once loaded, except for the Google Fonts it links to and, if configured, the optional cloud sync described below.

## Adding a new lesson, unit, topic or paper

1. Add it to `assets/content-tree.js` — a topic needs `status:"built"`, an `href`, and a `units` array; a unit needs an `href`, a `testHref`, and a `lessons` array; a lesson needs a `base` folder path. The sidebar and breadcrumbs pick it up automatically.
2. Create the matching folder structure (a unit gets `index.html` + `unit-test.html`; a lesson gets `lesson.html` + `practice.html` + `quiz.html`) — copy an existing one as a template and adjust the title, breadcrumb `window.PAGE` object, and `window.ROOT` (relative path back to site root, matching the new page's folder depth).
3. Add that lesson's questions to `assets/quiz-bank.js`, tagged with the right `paper`/`topic`/`unit`/`lesson`.

## Growing a question pool

Every question needs a stable `id` (e.g. `"2-1--first-revelation--q14"`) — this is what lets a student's in-progress deck survive you adding more questions later without resetting. Just append new tagged entries to `assets/quiz-bank.js`; no other code changes are needed, and every level above that question (its lesson's Quiz, its unit's Unit Test, its topic's Topic Challenge, its paper's Paper Challenge) automatically draws from the bigger pool.

If you're handing over new content as Markdown, use one file per lesson or unit with this shape — GFM task-list checkboxes mark the correct choice:

```markdown
# Unit 2.1 — Revelation of the Qur'an — First Revelation

## q1
What does 'wahy' mean in the context of the Qur'an's revelation?
- [ ] The written record of the Prophet's sayings
- [x] The process of divine communication/inspiration from God to a prophet
- [ ] The Arabic script used for the Qur'an
- [ ] A title for the angel Jibreel

> Wahy is the general term for how God communicated with His chosen messengers...
```

## Optional: sign-in and progress sync

By default every student's progress lives only in `localStorage` on that one browser — it's lost if they clear site data or switch devices. To let each student sign in with their own Google account and have their progress follow them anywhere, wire up a free [Supabase](https://supabase.com) project:

1. **Create a Supabase project** at supabase.com (free tier is enough).
2. **Run the schema** — open the SQL editor in your project and run [`supabase/schema.sql`](supabase/schema.sql). This creates a `progress` table with row-level security so each student can only read/write their own row. The table stores two JSON columns, `card_state` (`{ mastery, answered, deck }`) and `planner_state`.
3. **Enable Google sign-in** — in Supabase, go to **Authentication → Providers → Google** and enable it. This requires a Google Cloud OAuth Client ID/Secret: create one in the [Google Cloud Console](https://console.cloud.google.com/apis/credentials) (OAuth consent screen + "Web application" credentials), add Supabase's callback URL as an authorized redirect URI, then paste the Client ID/Secret into Supabase.
4. **Add your project's keys** — in `assets/app.js`, find the `SUPABASE_URL` and `SUPABASE_ANON_KEY` constants near the top and replace them with your project's URL and anon (public) key, both found in **Settings → API** in Supabase.
5. Commit and redeploy. A "Sign in with Google" button will appear in the sidebar; students who sign in get their progress synced to the cloud automatically, students who don't keep working exactly as before, local-only.

Until steps 1–4 are done, the sign-in button stays hidden and the site behaves exactly as it always has.

## Publishing with GitHub Pages (get a free public URL)

1. Push this repo to GitHub (see below).
2. In the repo, go to **Settings → Pages**.
3. Under "Build and deployment", set **Source** to "Deploy from a branch", branch `main`, folder `/ (root)`.
4. Save. GitHub will publish it at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

## Contributing

Corrections, additional past-paper cross-references, and clearer explanations are welcome — open an issue or a pull request. Please keep direct quotations from the Qur'an and hadith collections faithful to their standard published translations, and cite sources for any new factual claims.

## License

The original chapter text, structure, design and code in this repository are © the author and licensed under **[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)** — see `LICENSE`. You're free to share and adapt it, including commercially, as long as you credit the source and license your version the same way.

This license does **not** cover the underlying religious texts quoted within it: Qur'anic verses and hadith are treated as public-domain primary sources in their standard translations, and any material drawn from Abu Ammaar Yasir Qadhi's *An Introduction to the Sciences of the Qur'aan* (Al-Hidaayah Publishing, 1999) is used as attributed background research, not reproduced at length — consult that book directly for its own copyright terms.

## Disclaimer

This is a study aid produced with AI assistance and cross-checked against primary and academic sources, but it is not a substitute for your official Cambridge syllabus, past papers, or a qualified teacher's guidance. Please verify facts, dates and appendix passage lists against the current official syllabus before an exam.
