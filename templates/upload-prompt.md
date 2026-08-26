<!--
Reusable prompt — paste this in chat alongside an uploaded, filled-in
copy of templates/unit-content-template.md.
-->

I've filled in `templates/unit-content-template.md` for a new unit — build it into the site.

1. **Parse the file** against the template's structure: the UNIT header (paper, topic, unit number/title/slug), then one or more LESSON blocks, each with Lede, Content, and whichever optional sections I included (Predict Box, Pull Quote, Steps, Timeline, Compare, Source Box, Elaborate Box, Exam Lab), followed by its Practice & Quiz question bank.

2. **Extract and label distinctly, don't merge:**
   - The lesson **content** itself (prose, quotes, steps, etc.) — this becomes `lesson.html`.
   - Every **Exam Lab** entry (past-paper reference, sessions seen, question wording, AO1 points, AO2 part, examiner note) — render each as its own `.examlab` box within the lesson content, in the position I placed it.
   - The **question bank** — these are Practice/Quiz pool questions, not lesson prose. Don't let any of them leak into the lesson content or vice versa.

3. **Wire it into the architecture** the same way every existing unit works:
   - Add the unit/lessons to `assets/content-tree.js` (mark the topic `status:"built"` if it wasn't already).
   - Append the question bank to `assets/quiz-bank.js`, tagged `{paper, topic, unit, lesson}`, with stable sequential ids in the `<unit>--<lesson>--qN` format (check existing ids first so nothing collides).
   - Create `lesson.html` + `practice.html` + `quiz.html` per lesson, and `index.html` + `unit-test.html` for the unit, following the exact page-shell pattern (ROOT depth, breadcrumb `window.PAGE`, script tags) already used by the other units — copy a sibling page as the starting point rather than building the shell from scratch.
   - If this is the unit that completes a topic, wire up that topic's Topic Challenge pool too (it should already pick up the new questions automatically via the tag filter — just confirm the pool size grew).

4. **Match the site's existing tone and structure** — Khan Academy–style lesson pages, exam-focused (explicit AO1/AO2 framing), the same box/steps/timeline/compare component styles already in use. Don't invent new HTML components; if the content doesn't fit an existing one, ask me rather than guessing.

5. **Test before committing** — serve locally, check every new page for console errors, verify the question pool sizes at lesson/unit/topic level, and click through at least one Practice Quiz and one Quiz end to end to confirm scoring and XP work.

6. **Use the usual git workflow** — feature branch, commit, push, open a PR with a clear summary of what was added, and wait for me to say go before merging.

If anything in my filled-in template is ambiguous, structurally inconsistent, or missing something the template asks for, flag it and ask rather than guessing.
