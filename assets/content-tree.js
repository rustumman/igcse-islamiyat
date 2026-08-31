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
        {
          id: "topic-1", num: "1", title: "Major themes of the Qur’an",
          status: "built", href: "paper-1/topic-1/index.html",
          challengeHref: "paper-1/topic-1/topic-challenge.html",
          units: [
            {
              id: "1-1", num: "1.1", title: "Allah in Himself",
              href: "paper-1/topic-1/1-1/index.html",
              testHref: "paper-1/topic-1/1-1/unit-test.html",
              lessons: [
                { id: "ayat-al-kursi", title: "Ayat al-Kursi — The Throne Verse",
                  base: "paper-1/topic-1/1-1/ayat-al-kursi/" },
                { id: "allah-the-originator", title: "Allah, the Originator of the Heavens and Earth",
                  base: "paper-1/topic-1/1-1/allah-the-originator/" },
                { id: "signs-in-the-night-and-day", title: "Signs in the Night, the Day, and the Sky",
                  base: "paper-1/topic-1/1-1/signs-in-the-night-and-day/" },
                { id: "allahs-sovereignty-and-mercy", title: "Allah’s Sovereignty, Majesty, and Mercy",
                  base: "paper-1/topic-1/1-1/allahs-sovereignty-and-mercy/" },
                { id: "absolute-oneness-al-ikhlas", title: "Absolute Oneness — Surah al-Ikhlas",
                  base: "paper-1/topic-1/1-1/absolute-oneness-al-ikhlas/" }
              ]
            },
            {
              id: "1-2", num: "1.2", title: "Allah’s Relationship with the Created World",
              href: "paper-1/topic-1/1-2/index.html",
              testHref: "paper-1/topic-1/1-2/unit-test.html",
              lessons: [
                { id: "al-fatihah-the-opening", title: "Al-Fatihah — The Opening of Every Prayer",
                  base: "paper-1/topic-1/1-2/al-fatihah-the-opening/" },
                { id: "creator-and-sustainer", title: "Creator and Sustainer — Surah al-Baqarah 2:21–22",
                  base: "paper-1/topic-1/1-2/creator-and-sustainer/" },
                { id: "read-the-first-revelation", title: "“Read” — The First Revelation",
                  base: "paper-1/topic-1/1-2/read-the-first-revelation/" },
                { id: "the-day-the-earth-is-shaken", title: "The Day the Earth is Shaken — Surah az-Zalzalah",
                  base: "paper-1/topic-1/1-2/the-day-the-earth-is-shaken/" },
                { id: "seeking-refuge-an-nas", title: "Seeking Refuge — Surah an-Nas",
                  base: "paper-1/topic-1/1-2/seeking-refuge-an-nas/" }
              ]
            },
            {
              id: "1-3", num: "1.3", title: "Allah’s Messengers",
              href: "paper-1/topic-1/1-3/index.html",
              testHref: "paper-1/topic-1/1-3/unit-test.html",
              lessons: [
                { id: "adam-the-first-vicegerent", title: "Adam — The First Vicegerent",
                  base: "paper-1/topic-1/1-3/adam-the-first-vicegerent/" },
                { id: "ibrahims-search-for-the-truth", title: "Ibrahim’s Search for the Truth",
                  base: "paper-1/topic-1/1-3/ibrahims-search-for-the-truth/" },
                { id: "isa-a-servant-and-messenger", title: "Isa — A Servant and Messenger",
                  base: "paper-1/topic-1/1-3/isa-a-servant-and-messenger/" },
                { id: "your-lord-has-not-forsaken-you", title: "“Your Lord Has Not Forsaken You” — Surah ad-Duha",
                  base: "paper-1/topic-1/1-3/your-lord-has-not-forsaken-you/" },
                { id: "abundance-after-insult", title: "Abundance After Insult — Surah al-Kawthar",
                  base: "paper-1/topic-1/1-3/abundance-after-insult/" }
              ]
            }
          ]
        },
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
                { id: "quran-first-source-of-law", title: "The Qur’an as the First Source of Law",
                  base: "paper-1/topic-2/2-3/quran-first-source-of-law/" },
                { id: "quran-and-sunnah", title: "The Relationship of the Qur’an with Hadith",
                  base: "paper-1/topic-2/2-3/quran-and-sunnah/" },
                { id: "ijma", title: "Ijma’ — Consensus",
                  base: "paper-1/topic-2/2-3/ijma/" },
                { id: "qiyas", title: "Qiyas — Analogical Reasoning",
                  base: "paper-1/topic-2/2-3/qiyas/" }
              ]
            }
          ]
        },
        {
          id: "topic-3", num: "3", title: "The life and importance of the Prophet Muhammad (pbuh)",
          status: "built", href: "paper-1/topic-3/index.html",
          challengeHref: "paper-1/topic-3/topic-challenge.html",
          units: [
            {
              id: "3-1", num: "3.1", title: "Life in Makkah - Life before Prophethood",
              href: "paper-1/topic-3/3-1/index.html",
              testHref: "paper-1/topic-3/3-1/unit-test.html",
              lessons: [
                { id: "birth-and-early-childhood", title: "Birth and Early Childhood",
                  base: "paper-1/topic-3/3-1/birth-and-early-childhood/" },
                { id: "shepherd-and-trade-journey", title: "Shepherd, Trader, and the Making of a Reputation",
                  base: "paper-1/topic-3/3-1/shepherd-and-trade-journey/" },
                { id: "harb-al-fijar-and-hilf-al-fudul", title: "Harb al-Fijar and Hilf al-Fudul",
                  base: "paper-1/topic-3/3-1/harb-al-fijar-and-hilf-al-fudul/" },
                { id: "marriage-to-khadijah", title: "Marriage to Khadijah",
                  base: "paper-1/topic-3/3-1/marriage-to-khadijah/" },
                { id: "rebuilding-the-kaaba", title: "Rebuilding the Kaabah",
                  base: "paper-1/topic-3/3-1/rebuilding-the-kaaba/" }
              ]
            },
            {
              id: "3-2", num: "3.2", title: "Call to Prophethood (Events of the first Revelation)",
              href: "paper-1/topic-3/3-2/index.html",
              testHref: "paper-1/topic-3/3-2/unit-test.html",
              lessons: [
                { id: "first-revelation-in-the-cave-of-hira", title: "The First Revelation in the Cave of Hira",
                  base: "paper-1/topic-3/3-2/first-revelation-in-the-cave-of-hira/" },
                { id: "second-revelation-and-declaration", title: "The Second Revelation and the Declaration of Prophethood",
                  base: "paper-1/topic-3/3-2/second-revelation-and-declaration/" },
                { id: "zayd-ibn-haritha-and-seekers-of-truth", title: "Zayd ibn Harithah and the Seekers of Truth",
                  base: "paper-1/topic-3/3-2/zayd-ibn-haritha-and-seekers-of-truth/" }
              ]
            },
            {
              id: "3-3", num: "3.3", title: "Life in Makkah - Life after Prophethood",
              href: "paper-1/topic-3/3-3/index.html",
              testHref: "paper-1/topic-3/3-3/unit-test.html",
              lessons: [
                { id: "preaching-in-secret-and-in-public", title: "Preaching in Secret and in Public",
                  base: "paper-1/topic-3/3-3/preaching-in-secret-and-in-public/" },
                { id: "persecution-of-the-weak-and-the-prophet", title: "Persecution of the Weak and the Prophet",
                  base: "paper-1/topic-3/3-3/persecution-of-the-weak-and-the-prophet/" },
                { id: "migration-to-abyssinia", title: "Migration to Abyssinia",
                  base: "paper-1/topic-3/3-3/migration-to-abyssinia/" },
                { id: "conversion-of-umar-and-the-boycott", title: "Conversion of Umar and the Boycott",
                  base: "paper-1/topic-3/3-3/conversion-of-umar-and-the-boycott/" },
                { id: "year-of-sorrow-and-taif", title: "Year of Sorrow and Ta&rsquo;if",
                  base: "paper-1/topic-3/3-3/year-of-sorrow-and-taif/" },
                { id: "night-journey-and-ascension", title: "Night Journey and Ascension",
                  base: "paper-1/topic-3/3-3/night-journey-and-ascension/" },
                { id: "pledges-of-aqabah-and-the-hijrah", title: "Pledges of Aqabah and the Hijrah",
                  base: "paper-1/topic-3/3-3/pledges-of-aqabah-and-the-hijrah/" }
              ]
            },
            {
              id: "3-4", num: "3.4", title: "Life in Madinah",
              href: "paper-1/topic-3/3-4/index.html",
              testHref: "paper-1/topic-3/3-4/unit-test.html",
              lessons: [
                { id: "foundations-in-madinah", title: "Foundations in Madinah",
                  base: "paper-1/topic-3/3-4/foundations-in-madinah/" },
                { id: "battle-of-badr", title: "Battle of Badr",
                  base: "paper-1/topic-3/3-4/battle-of-badr/" },
                { id: "battle-of-uhud", title: "Battle of Uhud",
                  base: "paper-1/topic-3/3-4/battle-of-uhud/" },
                { id: "banu-nadir-and-the-trench", title: "Banu Nadir and the Trench",
                  base: "paper-1/topic-3/3-4/banu-nadir-and-the-trench/" },
                { id: "treaty-of-hudaybiyyah", title: "Treaty of Hudaybiyyah",
                  base: "paper-1/topic-3/3-4/treaty-of-hudaybiyyah/" },
                { id: "khaybar-and-letters-to-rulers", title: "Khaybar and Letters to Rulers",
                  base: "paper-1/topic-3/3-4/khaybar-and-letters-to-rulers/" },
                { id: "conquest-of-makkah", title: "Conquest of Makkah",
                  base: "paper-1/topic-3/3-4/conquest-of-makkah/" },
                { id: "mutah-and-hunayn", title: "Mu&rsquo;tah and Hunayn",
                  base: "paper-1/topic-3/3-4/mutah-and-hunayn/" },
                { id: "tabuk-expedition", title: "Tabuk Expedition",
                  base: "paper-1/topic-3/3-4/tabuk-expedition/" },
                { id: "farewell-hajj-and-death", title: "Farewell Hajj and Death",
                  base: "paper-1/topic-3/3-4/farewell-hajj-and-death/" }
              ]
            },
            {
              id: "3-5", num: "3.5", title: "Qualities",
              href: "paper-1/topic-3/3-5/index.html",
              testHref: "paper-1/topic-3/3-5/unit-test.html",
              lessons: [
                { id: "honesty-and-trustworthiness", title: "Honesty and Trustworthiness",
                  base: "paper-1/topic-3/3-5/honesty-and-trustworthiness/" },
                { id: "humility-and-simplicity", title: "Humility and Simplicity",
                  base: "paper-1/topic-3/3-5/humility-and-simplicity/" },
                { id: "generosity", title: "Generosity",
                  base: "paper-1/topic-3/3-5/generosity/" },
                { id: "justice-and-keeping-promises", title: "Justice and Keeping Promises",
                  base: "paper-1/topic-3/3-5/justice-and-keeping-promises/" },
                { id: "forgiveness-and-patience", title: "Forgiveness and Patience",
                  base: "paper-1/topic-3/3-5/forgiveness-and-patience/" }
              ]
            },
            {
              id: "3-6", num: "3.6", title: "Seal of the Prophets",
              href: "paper-1/topic-3/3-6/index.html",
              testHref: "paper-1/topic-3/3-6/unit-test.html",
              lessons: [
                { id: "seal-of-the-prophets", title: "Seal of the Prophets",
                  base: "paper-1/topic-3/3-6/seal-of-the-prophets/" }
              ]
            }
          ]
        },
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
