/* =========================================================
   CONTENT TREE — single source of truth for the sidebar,
   breadcrumbs, and progress/mastery keys.
   Hierarchy: Paper > Topic > Unit > Lesson, matching the
   official Cambridge IGCSE Islamiyat 0493 syllabus (section 5)
   and, one level deeper, the same lesson-sized chunks the
   ZNotes revision guide breaks each unit into.
   Paths are ROOT-RELATIVE (no leading slash) — every page
   prefixes them with its own window.ROOT ("../../" etc.)
   so the site works from any subfolder depth.
   ========================================================= */
window.CONTENT_TREE = {
  title: "IGCSE Islamiyat",
  home: "index.html",
  papers: [
    {
      id: "paper-1", num: "1", title: "Paper 1",
      href: "paper-1/index.html",
      challengeHref: "paper-1/paper-challenge.html",
      topics: [
        { id: "topic-1", num: "1", title: "Major themes of the Qur’an", status: "soon" },
        {
          id: "topic-2", num: "2", title: "The history and importance of the Qur’an",
          status: "built", href: "paper-1/topic-2/index.html",
          challengeHref: "paper-1/topic-2/topic-challenge.html",
          units: [
            {
              id: "2-1", num: "2.1", title: "The Revelation of the Qur’an",
              href: "paper-1/topic-2/2-1/index.html",
              testHref: "paper-1/topic-2/2-1/unit-test.html",
              lessons: [
                { id: "first-revelation", title: "First Revelation",
                  base: "paper-1/topic-2/2-1/first-revelation/" },
                { id: "conditions-of-revelation", title: "Conditions of Revelation",
                  base: "paper-1/topic-2/2-1/conditions-of-revelation/" },
                { id: "why-gradual-revelation", title: "Why Gradual Revelation",
                  base: "paper-1/topic-2/2-1/why-gradual-revelation/" },
                { id: "makki-madani-surahs", title: "Makki and Madani Surahs",
                  base: "paper-1/topic-2/2-1/makki-madani-surahs/" },
                { id: "preservation-of-quran", title: "Preservation of the Qur’an",
                  base: "paper-1/topic-2/2-1/preservation-of-quran/" }
              ]
            },
            {
              id: "2-2", num: "2.2", title: "The Compilation under the Khalifas",
              href: "paper-1/topic-2/2-2/index.html",
              testHref: "paper-1/topic-2/2-2/unit-test.html",
              lessons: [
                { id: "preservation-before-compilation", title: "Preservation Before Compilation",
                  base: "paper-1/topic-2/2-2/preservation-before-compilation/" },
                { id: "compilation-under-abu-bakr", title: "Compilation under Abu Bakr",
                  base: "paper-1/topic-2/2-2/compilation-under-abu-bakr/" },
                { id: "compilation-under-uthman", title: "Compilation under ’Uthman",
                  base: "paper-1/topic-2/2-2/compilation-under-uthman/" }
              ]
            },
            {
              id: "2-3", num: "2.3", title: "The Qur’an in Legal Thinking",
              href: "paper-1/topic-2/2-3/index.html",
              testHref: "paper-1/topic-2/2-3/unit-test.html",
              lessons: [
                { id: "four-sources-of-law", title: "The Four Sources of Law",
                  base: "paper-1/topic-2/2-3/four-sources-of-law/" },
                { id: "quran-and-sunnah", title: "The Relationship of the Qur’an with Hadith",
                  base: "paper-1/topic-2/2-3/quran-and-sunnah/" },
                { id: "ijma", title: "Ijma’ — Consensus",
                  base: "paper-1/topic-2/2-3/ijma/" },
                { id: "qiyas", title: "Qiyas — Analogy",
                  base: "paper-1/topic-2/2-3/qiyas/" }
              ]
            }
          ]
        },
        { id: "topic-3", num: "3", title: "The life and importance of the Prophet Muhammad (pbuh)", status: "soon" },
        { id: "topic-4", num: "4", title: "The first Islamic community", status: "soon" }
      ]
    },
    {
      id: "paper-2", num: "2", title: "Paper 2",
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
