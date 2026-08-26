# IGCSE Islamiyat

An open, illustrated Khan Academy–style course covering **Cambridge IGCSE Islamiyat 0493** (both papers). Structured to match the official syllabus, one level deeper than the syllabus itself specifies:

**IGCSE Islamiyat → Paper → Topic → Unit → Lesson**

Right now one topic is fully built out — **Paper 1, Topic 2: "The history and importance of the Qur'an"** — split into three units (2.1 Revelation, 2.2 Compilation under the Khalifas, 2.3 The Qur'an in Legal Thinking), each broken further into lesson-sized chunks matching how revision guides like ZNotes actually teach this material. Every other topic in both papers is scaffolded in the navigation and marked "Coming soon," ready to be filled in the same way.

It's designed around the learning techniques from Peter Brown, Henry Roediger & Mark McDaniel's *Make It Stick: The Science of Successful Learning* — retrieval practice, generation prompts, interleaving, and spaced review — delivered as a full assessment ladder at every level of the hierarchy, with a persistent course sidebar, mastery tracking, and XP.

**Stack:** [Astro](https://astro.build) static site. Course content and the question bank live in the repo (not in Supabase). Supabase is optional and only syncs each student's progress.

**Live version:** see "Publishing with GitHub Pages" below.

## Local development

```bash
npm install
npm run dev
```

Open the URL Astro prints (with base path `/igcse-islamiyat/`).

```bash
npm run build    # writes dist/
npm run preview  # serve the production build locally
```

## The assessment ladder

Every level of the hierarchy has its own check, each drawing from a bigger pool the level below it:

- **Lesson** → a **Practice Quiz** (3 questions, ungraded, unlimited retries — just reinforcement) then a **Quiz** (4 questions, graded, feeds that lesson's mastery badge)
- **Unit** → a **Unit Test** (8 questions, drawn from every lesson in the unit)
- **Topic** → a **Topic Challenge** (12 questions, drawn from every unit in the topic, shuffled — the interleaved "won't ask about one unit at a time" mock)
- **Paper** → a **Paper Challenge** (16 questions, drawn from every topic in the paper — grows automatically as more topics get built, no code changes needed)

## The question database

All of it lives in one flat, tagged array in `src/data/quiz-bank.ts`:

```js
{ id:"2-1--first-revelation--q1", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"first-revelation",
  q:"...", choices:[...], correct:1, explain:"..." }
```

A Practice Quiz or Quiz pool is that array filtered to one `lesson`; a Unit Test filters to one `unit` (every lesson under it); a Topic Challenge filters to one `topic`; a Paper Challenge filters to one `paper`. `src/scripts/app.js` builds these pools by parsing the assessment's id — `practice--2-1--first-revelation`, `quiz--2-1--first-revelation`, `unit-test--2-1`, `topic-challenge--topic-2`, `paper-challenge--paper-1` — no separate registry to keep in sync.

**Deck-cycling:** each assessment draws its fixed-size batch from a persisted shuffled order of its whole pool rather than always using every question, so a student sees every question once before anything repeats (see "Growing a question pool" below) — the deck reshuffles once fully consumed.

## Structure

```
src/pages/                                    Astro routes (same URL paths as before)
  index.astro                                 Course home
  progress.astro
  paper-1/…  paper-2/…                        Papers, topics, units, lessons
src/layouts/CourseLayout.astro                Shared shell (sidebar, fonts, scripts)
src/styles/app.css                            Design system + sidebar/layout
src/scripts/app.js                            Sidebar, breadcrumbs, auth/sync, XP, quiz engine
src/scripts/bootstrap.ts                      Loads content tree + quiz bank, then app.js
src/data/content-tree.ts                      Course hierarchy (papers → topics → units → lessons)
src/data/quiz-bank.ts                         Tagged question database
supabase/schema.sql                           Progress table + row-level security
templates/unit-content-template.md            Authoring template for new units
```

URLs stay bookmarkable (`…/lesson.html`, `…/2-1/index.html`, etc.). Astro builds static HTML into `dist/`.

## What's inside

- Content drawn from the Qur'an, Sahih al-Bukhari, and cross-checked academic sources, plus every relevant past-paper question and mark-scheme pattern from the 2021–2025 exam sessions.
- Past-paper style model answers (AO1/AO2 structure) with examiner notes, placed in whichever lesson they're most relevant to.
- **XP and levels** — every correct answer and every graded result earns XP shown in the sidebar, purely as a function of saved progress (never stored separately, so it can't drift out of sync).
- A Day 0/1/3/7/16 spaced-review planner per topic.
- Full light/dark theme support with a manual sidebar toggle and OS fallback.
- Optional Google sign-in so a student's mastery, answered-question history, and planner progress follow them across devices (see below). Without it, progress is still saved locally in the browser — nothing is sent anywhere.

## Adding a new lesson, unit, topic or paper

1. Add it to `src/data/content-tree.ts` — a topic needs `status:"built"`, an `href`, and a `units` array; a unit needs an `href`, a `testHref`, and a `lessons` array; a lesson needs a `base` folder path. The sidebar and breadcrumbs pick it up automatically.
2. Add matching pages under `src/pages/` (a unit gets `index.astro` + `unit-test.astro`; a lesson gets `lesson.astro` + `practice.astro` + `quiz.astro`) — copy an existing set and adjust the title and `page` object passed into `CourseLayout`.
3. Add that lesson's questions to `src/data/quiz-bank.ts`, tagged with the right `paper`/`topic`/`unit`/`lesson`.

## Growing a question pool

Every question needs a stable `id` (e.g. `"2-1--first-revelation--q14"`) — this is what lets a student's in-progress deck survive you adding more questions later without resetting. Just append new tagged entries to `src/data/quiz-bank.ts`; no other code changes are needed, and every level above that question (its lesson's Quiz, its unit's Unit Test, its topic's Topic Challenge, its paper's Paper Challenge) automatically draws from the bigger pool.

## Authoring new units and lessons

[`templates/unit-content-template.md`](templates/unit-content-template.md) is the template for writing a whole new unit — lesson content (lede, predict box, steps, timelines, comparisons, source/elaborate boxes, pull quotes), past-paper exam-lab entries, and the Practice/Quiz question bank, all in plain Markdown with a worked example at the bottom. Fill it in per unit and hand the finished file back to turn it into the actual lesson/practice/quiz/unit-test pages, wired into the site's navigation.

## Optional: sign-in and progress sync

By default every student's progress lives only in `localStorage` on that one browser — it's lost if they clear site data or switch devices. To let each student sign in with their own Google account and have their progress follow them anywhere, wire up a free [Supabase](https://supabase.com) project:

1. **Create a Supabase project** at supabase.com (free tier is enough).
2. **Run the schema** — open the SQL editor in your project and run [`supabase/schema.sql`](supabase/schema.sql). This creates a `progress` table with row-level security so each student can only read/write their own row. The table stores two JSON columns, `card_state` (`{ mastery, answered, deck, history }`) and `planner_state`.
3. **Enable Google sign-in** — in Supabase, go to **Authentication → Providers → Google** and enable it. This requires a Google Cloud OAuth Client ID/Secret: create one in the [Google Cloud Console](https://console.cloud.google.com/apis/credentials) (OAuth consent screen + "Web application" credentials), add Supabase's callback URL as an authorized redirect URI, then paste the Client ID/Secret into Supabase.
4. **Add your project's keys** — in `src/scripts/app.js`, find the `SUPABASE_URL` and `SUPABASE_ANON_KEY` placeholder constants (`"YOUR_SUPABASE_URL"` and `"YOUR_SUPABASE_ANON_KEY"`) near the top and replace them with your project's URL and anon (public) key, both found in **Settings → API** in Supabase.
5. Commit and redeploy. A "Sign in with Google" button will appear in the sidebar; students who sign in get their progress synced to the cloud automatically, students who don't keep working exactly as before, local-only.
6. Signing in stores the student's email and progress in your Supabase project. The sidebar includes a "Delete synced data" button that deletes that student's `progress` row and signs them out.

Until steps 1–4 are done, the sign-in button stays hidden and the site behaves exactly as it always has.

Course lessons and the quiz bank stay in this repository on purpose — Supabase is only for user progress sync.

## Publishing with GitHub Pages

This repo is set up for GitHub Pages via Actions (`.github/workflows/deploy.yml`), which runs `npm run build` and publishes `dist/`.

1. Push to `main` on GitHub.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. After the workflow succeeds, the site is at `https://<your-username>.github.io/igcse-islamiyat/` (the Astro `base` in `astro.config.mjs` must match the repo name).

## Contributing

Corrections, additional past-paper cross-references, and clearer explanations are welcome — open an issue or a pull request. Please keep direct quotations from the Qur'an and hadith collections faithful to their standard published translations, and cite sources for any new factual claims.

## License

The original chapter text, structure, design and code in this repository are © the author and licensed under **[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)** — see `LICENSE`. You're free to share and adapt it, including commercially, as long as you credit the source and license your version the same way.

This license does **not** cover the underlying religious texts quoted within it: Qur'anic verses and hadith are treated as public-domain primary sources in their standard translations, and any material drawn from Abu Ammaar Yasir Qadhi's *An Introduction to the Sciences of the Qur'aan* (Al-Hidaayah Publishing, 1999) is used as attributed background research, not reproduced at length — consult that book directly for its own copyright terms.

## Disclaimer

This is a study aid produced with AI assistance and cross-checked against primary and academic sources, but it is not a substitute for your official Cambridge syllabus, past papers, or a qualified teacher's guidance. Please verify facts, dates and appendix passage lists against the current official syllabus before an exam.
