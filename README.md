# The Book Preserved

An open, illustrated textbook covering **Cambridge IGCSE Islamiyat 0493, Paper 1, Topic 2**:

- **2.1** — The Revelation of the Qur'an
- **2.2** — The Compilation of the Qur'an under the Khalifas
- **2.3** — The Qur'an in Legal Thinking (its relationship with the Hadith, Ijma', and Qiyas)

It's built as a single self-contained HTML page, and designed around the learning techniques from Peter Brown, Henry Roediger & Mark McDaniel's *Make It Stick: The Science of Successful Learning* — retrieval practice, generation prompts, interleaving, and spaced review — delivered through Khan-Academy-style interactive quizzes rather than a flat wall of text to re-read.

**Live version (view in your browser):** open `index.html` directly, or see "Publishing with GitHub Pages" below to get a shareable link.

## What's inside

- Content drawn from the Qur'an, Sahih al-Bukhari, and cross-checked academic sources on the Uthmanic compilation, plus every relevant past-paper question and mark-scheme pattern from the 2021–2025 exam sessions.
- Past-paper style model answers (AO1/AO2 structure) with examiner notes.
- **Quick Checks** — one-question, instant-feedback retrieval prompts embedded throughout each chapter (12 total).
- **Unit Tests** — an 8-question scored test per chapter (2.1, 2.2, 2.3), with one-question-at-a-time flow, progress dots, a final score screen, and mastery bands (Mastered / Practicing / Keep going).
- A **Course Challenge** — a 12-question mixed test interleaving all three sub-topics, the same cumulative-review idea *Make It Stick* recommends over massed, single-topic drilling.
- A Day 0/1/3/7/16 spaced-review planner.
- Full light/dark theme support.
- Optional Google sign-in so a student's quiz mastery, quick-check completion, and planner progress follow them across devices (see "Optional: sign-in and progress sync" below). Without it, progress is still saved locally in the browser — nothing is sent anywhere.

## Using it

Just open `index.html` in any browser — no build step, no server required. It works offline once loaded, except for the Google Fonts it links to and, if configured, the optional cloud sync described below.

## Optional: sign-in and progress sync

By default every student's progress lives only in `localStorage` on that one browser — it's lost if they clear site data or switch devices. To let each student sign in with their own Google account and have their progress follow them anywhere, wire up a free [Supabase](https://supabase.com) project:

1. **Create a Supabase project** at supabase.com (free tier is enough).
2. **Run the schema** — open the SQL editor in your project and run [`supabase/schema.sql`](supabase/schema.sql). This creates a `progress` table with row-level security so each student can only read/write their own row. The table stores two JSON columns, `card_state` and `planner_state`; this version of the page keeps those same column names but stores `{ mastery, quickDone }` in `card_state` (quiz mastery bands and quick-check completion) rather than the old retrieval-card scores.
3. **Enable Google sign-in** — in Supabase, go to **Authentication → Providers → Google** and enable it. This requires a Google Cloud OAuth Client ID/Secret: create one in the [Google Cloud Console](https://console.cloud.google.com/apis/credentials) (OAuth consent screen + "Web application" credentials), add Supabase's callback URL as an authorized redirect URI, then paste the Client ID/Secret into Supabase.
4. **Add your project's keys** — in `index.html`, find the `SUPABASE_URL` and `SUPABASE_ANON_KEY` constants near the top of the `<script>` block and replace them with your project's URL and anon (public) key, both found in **Settings → API** in Supabase.
5. Commit and redeploy. A "Sign in with Google" button will appear in the top bar; students who sign in get their progress synced to the cloud automatically, students who don't keep working exactly as before, local-only.

Until steps 1–4 are done, the sign-in button stays hidden and the page behaves exactly as it always has.

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
