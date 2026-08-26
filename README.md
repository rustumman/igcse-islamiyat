# IGCSE Islamiyat

An open, illustrated Khan Academy–style course covering **Cambridge IGCSE Islamiyat 0493** (both papers). Structured to match the official syllabus:

**IGCSE Islamiyat → Paper 1 / Paper 2 → Topics → Lessons**

Right now one topic is fully built out — **Paper 1, Topic 2: "The history and importance of the Qur'an"** (2.1 Revelation, 2.2 Compilation under the Khalifas, 2.3 The Qur'an in Legal Thinking). Every other topic in both papers is scaffolded in the navigation and marked "Coming soon," ready to be filled in the same way.

It's designed around the learning techniques from Peter Brown, Henry Roediger & Mark McDaniel's *Make It Stick: The Science of Successful Learning* — retrieval practice, generation prompts, interleaving, and spaced review — delivered as separate lesson/quiz/test pages with a persistent course sidebar, mastery tracking, and XP, rather than a flat wall of text to re-read.

**Live version:** open `index.html` in a browser, or see "Publishing with GitHub Pages" below for a shareable link.

## Structure

```
index.html                              Course home (Paper 1 / Paper 2)
paper-1/index.html                      Paper 1 topic list
paper-1/topic-2/index.html              Topic overview: lesson list + review planner
paper-1/topic-2/2-1/lesson.html         2.1 lesson content + Quick Checks
paper-1/topic-2/2-1/test.html           2.1 Unit Test
paper-1/topic-2/2-2/...                 (same pattern for 2.2, 2.3)
paper-1/topic-2/challenge.html          Cross-topic Course Challenge
paper-2/index.html                      Paper 2 topic list (all "Coming soon")
assets/app.css                          Shared design system + sidebar/layout
assets/app.js                           Sidebar, breadcrumbs, auth/sync, XP, quiz engine
assets/content-tree.js                  The course hierarchy (papers → topics → lessons)
assets/quiz-bank.js                     All Quick Check / Unit Test / Course Challenge questions
supabase/schema.sql                     Progress table + row-level security
```

Every page is a thin HTML shell that loads the shared `assets/` files — there's no build step, but the site behaves like a real multi-page app: distinct, bookmarkable URLs per lesson/quiz/test, browser back/forward, and a persistent sidebar that doesn't reload between pages... except it does reload (no client-side router), which is fine for a course this size and keeps things simple and debuggable.

## What's inside

- Content drawn from the Qur'an, Sahih al-Bukhari, and cross-checked academic sources on the Uthmanic compilation, plus every relevant past-paper question and mark-scheme pattern from the 2021–2025 exam sessions.
- Past-paper style model answers (AO1/AO2 structure) with examiner notes.
- **Quick Checks** — one-question, instant-feedback retrieval prompts embedded throughout each lesson (12 total in Topic 2).
- **Unit Tests** — an 8-question scored test per lesson, one-question-at-a-time flow, progress dots, a final score screen, and mastery bands (Mastered / Practicing / Keep going).
- A **Course Challenge** per topic — a 12-question mixed test interleaving all its sub-topics, the same cumulative-review idea *Make It Stick* recommends over massed, single-topic drilling.
- **XP and levels** — every correct Quick Check and every Unit Test/Course Challenge result earns XP shown in the sidebar, purely as a function of your saved progress (never stored separately, so it can't drift out of sync).
- A Day 0/1/3/7/16 spaced-review planner per topic.
- Full light/dark theme support.
- Optional Google sign-in so a student's mastery, quick-check completion, and planner progress follow them across devices (see "Optional: sign-in and progress sync" below). Without it, progress is still saved locally in the browser — nothing is sent anywhere.

## Using it

Open `index.html` in any browser — no build step, no server required beyond static file hosting (opening the HTML files directly via `file://` also works, since all paths are relative). It works offline once loaded, except for the Google Fonts it links to and, if configured, the optional cloud sync described below.

## Adding a new topic or paper

1. Add the topic to `assets/content-tree.js` (set `status: "built"`, add a `href`, and a `lessons` array if it has sub-topics) — the sidebar and breadcrumbs pick it up automatically.
2. Create the topic's folder (e.g. `paper-1/topic-1/`) with an `index.html` overview page, following the pattern in `paper-1/topic-2/index.html`.
3. For each sub-topic, add a `lesson.html` and `test.html` following the pattern in `paper-1/topic-2/2-1/`.
4. Add that lesson's Quick Check and Unit Test questions to `assets/quiz-bank.js`.
5. Each page sets `window.ROOT` (relative path back to the site root, matching its folder depth) and `window.PAGE` (its breadcrumb/sidebar context) before loading `assets/app.js` — copy these from a sibling page and adjust.

## Growing a Unit Test's question pool

A Unit Test or Course Challenge doesn't have to use every question in its pool every time. Each entry in `assets/quiz-bank.js` has a `perAttempt` (e.g. `8`) separate from its full `questions` array — the test always shows `perAttempt` questions, drawn from a shuffled deck of the whole pool that persists per student and reshuffles only once it's been fully used. So a student sees every question once before anything repeats, and the more questions you add beyond `perAttempt`, the less likely two attempts look alike.

To add questions to an existing unit:
1. Give each new question a stable `id` (e.g. `"test-ch21-q9"`, `"test-ch21-q10"`, ...) — this is what lets a student's in-progress deck survive you adding more questions later without resetting.
2. Append it to that quiz's `questions` array in `assets/quiz-bank.js`, same shape as the existing entries: `{ id, q, choices, correct, explain }`.
3. Leave `perAttempt` as-is (or raise it) — no other code changes needed.

## Optional: sign-in and progress sync

By default every student's progress lives only in `localStorage` on that one browser — it's lost if they clear site data or switch devices. To let each student sign in with their own Google account and have their progress follow them anywhere, wire up a free [Supabase](https://supabase.com) project:

1. **Create a Supabase project** at supabase.com (free tier is enough).
2. **Run the schema** — open the SQL editor in your project and run [`supabase/schema.sql`](supabase/schema.sql). This creates a `progress` table with row-level security so each student can only read/write their own row. The table stores two JSON columns, `card_state` and `planner_state`; `card_state` holds `{ mastery, quickDone }`.
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
