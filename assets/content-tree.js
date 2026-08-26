/* =========================================================
   CONTENT TREE — single source of truth for the sidebar,
   breadcrumbs, and progress/mastery keys.
   Structure follows the official Cambridge IGCSE Islamiyat
   0493 syllabus, section 5 (5.1 Paper 1 / 5.2 Paper 2).
   Paths are ROOT-RELATIVE (no leading slash) — every page
   prefixes them with its own window.ROOT ("../../" etc.)
   so the site works from any subfolder depth.
   ========================================================= */
window.CONTENT_TREE = {
  title: "IGCSE Islamiyat",
  home: "index.html",
  papers: [
    {
      id: "paper-1",
      title: "Paper 1",
      href: "paper-1/index.html",
      topics: [
        { id: "topic-1", num: "1", title: "Major themes of the Qur’an", status: "soon" },
        {
          id: "topic-2", num: "2", title: "The history and importance of the Qur’an",
          status: "built", href: "paper-1/topic-2/index.html",
          lessons: [
            { id: "2-1", num: "2.1", title: "The Revelation of the Qur’an",
              lessonHref: "paper-1/topic-2/2-1/lesson.html", testHref: "paper-1/topic-2/2-1/test.html", testId: "test-ch21" },
            { id: "2-2", num: "2.2", title: "The Compilation under the Khalifas",
              lessonHref: "paper-1/topic-2/2-2/lesson.html", testHref: "paper-1/topic-2/2-2/test.html", testId: "test-ch22" },
            { id: "2-3", num: "2.3", title: "The Qur’an in Legal Thinking",
              lessonHref: "paper-1/topic-2/2-3/lesson.html", testHref: "paper-1/topic-2/2-3/test.html", testId: "test-ch23" }
          ],
          challengeHref: "paper-1/topic-2/challenge.html", challengeId: "challenge"
        },
        { id: "topic-3", num: "3", title: "The life and importance of the Prophet Muhammad (pbuh)", status: "soon" },
        { id: "topic-4", num: "4", title: "The first Islamic community", status: "soon" }
      ]
    },
    {
      id: "paper-2",
      title: "Paper 2",
      href: "paper-2/index.html",
      topics: [
        { id: "topic-1", num: "1", title: "Major teachings in the Hadiths of the Prophet", status: "soon" },
        { id: "topic-2", num: "2", title: "The history and importance of the Hadiths", status: "soon" },
        { id: "topic-3", num: "3", title: "The period of rule of the Rightly Guided Caliphs", status: "soon" },
        { id: "topic-4", num: "4", title: "The Articles of Faith and the Pillars of Islam", status: "soon" }
      ]
    }
  ]
};
