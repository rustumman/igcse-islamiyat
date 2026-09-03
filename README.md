# IGCSE Islamiyat

An open, illustrated Khan Academy–style course covering **Cambridge IGCSE Islamiyat 0493** (both papers). Structured to match the official syllabus, one level deeper than the syllabus itself specifies:

**IGCSE Islamiyat → Paper → Topic → Unit → Lesson**

Right now one topic is fully built out — **Paper 1, Topic 2: "The history and importance of the Qur'an"** — split into three units (2.1 Revelation, 2.2 Compilation under the Khalifas, 2.3 The Qur'an in Legal Thinking), each broken further into lesson-sized chunks matching how revision guides like ZNotes actually teach this material. Every other topic in both papers is scaffolded in the navigation and marked "Coming soon," ready to be filled in the same way.

It's designed around the learning techniques from Peter Brown, Henry Roediger & Mark McDaniel's *Make It Stick: The Science of Successful Learning* — retrieval practice, generation prompts, interleaving, and spaced review — delivered as a full assessment ladder at every level of the hierarchy, with a persistent course sidebar, mastery tracking, and XP.

**Stack:** Astro static site. Course content and the question bank live in the repo (not in Supabase). Supabase is optional and only syncs each student's progress.

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

All of it lives in one flat, tagged array in [`src/data/quiz-bank.ts`](src/data/quiz-bank.ts):

```js
{ id:"2-1--first-revelation--q1", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"first-revelation",
  q:"...", choices:[...], correct:1, explain:"..." }
```

A Practice Quiz or Quiz pool is that array filtered to one `lesson`; a Unit Test filters to one `unit` (every lesson under it); a Topic Challenge filters to one `topic`; a Paper Challenge filters to one `paper`. [`src/scripts/app.js`](src/scripts/app.js) builds these pools by parsing the assessment's id — `practice--2-1--first-revelation`, `quiz--2-1--first-revelation`, `unit-test--2-1`, `topic-challenge--topic-2`, `paper-challenge--paper-1` — no separate registry to keep in sync.

**Deck-cycling:** each assessment draws its fixed-size batch from a persisted shuffled order of its whole pool rather than always using every question, so a student sees every question once before anything repeats — the deck reshuffles once fully consumed.

## Structure

```
src/pages/                                    Astro routes
  index.astro                                 Course home
  progress.astro
  paper-1/…  paper-2/…                        Papers, topics, units, lessons
src/layouts/CourseLayout.astro                Shared shell (sidebar, fonts, scripts)
src/styles/app.css                            Design system + sidebar/layout
src/scripts/app.js                            Sidebar, breadcrumbs, auth/sync, XP, quiz engine
src/scripts/bootstrap.ts                      Loads content tree + quiz bank + Supabase client, then app.js
src/data/content-tree.ts                      Course hierarchy
src/data/quiz-bank.ts                         Tagged question database
supabase/schema.sql                           Progress table + row-level security
templates/unit-content-template.md            Authoring template for new units
```

URLs stay bookmarkable (`…/lesson.html`, `…/2-1/index.html`, etc.). Astro builds static HTML into `dist/`.

## Adding a new lesson, unit, topic or paper

1. Add it to [`src/data/content-tree.ts`](src/data/content-tree.ts).
2. Add matching pages under `src/pages/` (copy an existing lesson/practice/quiz/unit set).
3. Add that lesson's questions to [`src/data/quiz-bank.ts`](src/data/quiz-bank.ts).

## Optional: sign-in and progress sync

Progress sync uses Supabase + Google OAuth. Keys live in `.env` as `PUBLIC_SUPABASE_URL` and `PUBLIC_SUPABASE_ANON_KEY` (see `.env.example`). The anon key is public by design; RLS protects each student's row. See [`supabase/schema.sql`](supabase/schema.sql).

## Publishing with GitHub Pages

This repo deploys via GitHub Actions ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)), which runs `npm run build` and publishes `dist/`.

1. Push to `main` on GitHub.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions** (not “Deploy from a branch”).
3. After the workflow succeeds, the site is at `https://<your-username>.github.io/igcse-islamiyat/`.

If Source is still “Deploy from a branch”, GitHub will serve the README instead of the course.

## Contributing

Corrections, additional past-paper cross-references, and clearer explanations are welcome — open an issue or a pull request. Please keep direct quotations from the Qur'an and hadith collections faithful to their standard published translations, and cite sources for any new factual claims.

## License

The original chapter text, structure, design and code in this repository are © the author and licensed under **[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)** — see `LICENSE`. You're free to share and adapt it, including commercially, as long as you credit the source and license your version the same way.

This license does **not** cover the underlying religious texts quoted within it: Qur'anic verses and hadith are treated as public-domain primary sources in their standard translations, and any material drawn from Abu Ammaar Yasir Qadhi's *An Introduction to the Sciences of the Qur'aan* (Al-Hidaayah Publishing, 1999) is used as attributed background research, not reproduced at length — consult that book directly for its own copyright terms.

## Disclaimer

This is a study aid produced with AI assistance and cross-checked against primary and academic sources, but it is not a substitute for your official Cambridge syllabus, past papers, or a qualified teacher's guidance. Please verify facts, dates and appendix passage lists against the current official syllabus before an exam.
