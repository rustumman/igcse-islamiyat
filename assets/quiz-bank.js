/* =========================================================
   QUESTION BANK — a single flat, tagged database.
   Every question carries {paper, topic, unit, lesson}. Pools
   for a Practice Quiz / Quiz / Unit Test / Topic Challenge /
   Paper Challenge are all built by filtering this one array
   by however much of that tag path is specified — see
   buildPool() in app.js.
   ========================================================= */
window.QUESTION_BANK = [
  { id:"2-1--first-revelation--q1", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"first-revelation",
    q:"At what age was the Prophet Muhammad (pbuh) when he received the first revelation?",
    choices:["25","35","40","63"],
    correct:2, explain:"He was forty years old — the age by which he had developed the habit of retreating to the Cave of Hira for reflection." },

  { id:"2-1--first-revelation--q2", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"first-revelation",
    q:"In which month did the first revelation take place?",
    choices:["Muharram","Rajab","Ramadan","Dhu al-Hijjah"],
    correct:2, explain:"The first revelation came in the month of Ramadan, in the year later reckoned as 610 CE — which is part of why Ramadan holds special significance for Muslims." },

  { id:"2-1--first-revelation--q3", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"first-revelation",
    q:"On which mountain is the Cave of Hira located?",
    choices:["Jabal Uhud","Jabal al-Nur","Jabal Thawr","Jabal Rahmah"],
    correct:1, explain:"The Cave of Hira sits on Jabal al-Nur (“the Mountain of Light”), just outside Makkah." },

  { id:"2-1--first-revelation--q4", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"first-revelation",
    q:"What was the angel Jibreel’s first command to the Prophet in the cave?",
    choices:["“Rise and warn”","“Proclaim the message”","“Iqra” (“Read”)","“Cover yourself”"],
    correct:2, explain:"Jibreel’s command was the single Arabic word “Iqra,” meaning “Read.”" },

  { id:"2-1--first-revelation--q5", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"first-revelation",
    q:"How did the Prophet first respond to Jibreel’s command?",
    choices:["He recited immediately","He said he could not read","He fled the cave","He asked Jibreel to repeat himself"],
    correct:1, explain:"He answered honestly that he could not read — he had never learned to." },

  { id:"2-1--first-revelation--q6", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"first-revelation",
    q:"How many times did Jibreel embrace the Prophet and repeat the command before reciting the verses himself?",
    choices:["Once","Twice","Three times","Seven times"],
    correct:2, explain:"Each time the Prophet said he could not read, Jibreel embraced him tightly, released him, and repeated the command — three times in total." },

  { id:"2-1--first-revelation--q7", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"first-revelation",
    q:"Which surah contains the first verses ever revealed?",
    choices:["Surah al-Fatiha","Surah al-’Alaq","Surah al-Muddaththir","Surah al-Baqarah"],
    correct:1, explain:"The first revealed verses became the opening of Surah al-’Alaq (Chapter 96), verses 1–5." },

  { id:"2-1--first-revelation--q8", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"first-revelation",
    q:"According to the first revealed verses, what did God teach man?",
    choices:["The five daily prayers","The stories of earlier prophets","By the pen — what he did not know","The rules of pilgrimage"],
    correct:2, explain:"Surah al-’Alaq 96:4–5 says God “taught by the pen — taught man that which he knew not,” linking the first revelation to knowledge and writing." },

  { id:"2-1--first-revelation--q9", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"first-revelation",
    q:"Man is described in Surah al-’Alaq 96:2 as having been created from what?",
    choices:["Light","Water alone","A clinging substance (a clot of congealed blood)","Dust and fire"],
    correct:2, explain:"Verse 2 describes man as created “from a clinging substance,” often translated as a clot of congealed blood." },

  { id:"2-1--first-revelation--q10", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"first-revelation",
    q:"What did the Prophet say to Khadija when he arrived home trembling?",
    choices:["“I have seen God”","“Cover me! Cover me!”","“Call Waraqah at once”","“I must leave Makkah”"],
    correct:1, explain:"Shaking and afraid, he asked to be wrapped and covered until his trembling passed." },

  { id:"2-1--first-revelation--q11", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"first-revelation",
    q:"What was the main basis of Khadija’s reassurance to her husband?",
    choices:["A dream she herself had had","Advice from a fortune-teller","His known good character — honesty, generosity and care for others","A promise that nothing unusual had happened"],
    correct:2, explain:"Khadija reasoned that God would never disgrace a man who kept good relations with relatives, helped the poor, and was generous to guests." },

  { id:"2-1--first-revelation--q12", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"first-revelation",
    q:"Who was Waraqah ibn Nawfal?",
    choices:["Khadija’s elderly cousin, a scholar of earlier scripture","The Prophet’s uncle and guardian","A merchant travelling with the Prophet","A leader of the Quraysh"],
    correct:0, explain:"Waraqah was Khadija’s cousin, a Christian who had studied the Torah and the Gospel." },

  { id:"2-1--first-revelation--q13", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"first-revelation",
    q:"What term did Waraqah use to identify the angel who had appeared to the Prophet?",
    choices:["Ruh al-Qudus only","The Namus, sent to Musa","The Malak al-Mawt","A jinn"],
    correct:1, explain:"Waraqah recognised the visitor as the Namus — the angel of revelation — the same one who had brought revelation to Musa (Moses)." },

  { id:"2-1--first-revelation--q14", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"first-revelation",
    q:"What did Waraqah predict would happen to the Prophet?",
    choices:["That he would become a wealthy trader","That he would be welcomed by all of Makkah","That his own people would turn him out and treat him with hostility","That he would live a long, peaceful life"],
    correct:2, explain:"Waraqah predicted persecution, saying no man had ever brought what the Prophet brought without being treated with hostility." },

  { id:"2-1--first-revelation--q15", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"first-revelation",
    q:"What did Waraqah promise if he lived to see the Prophet’s persecution?",
    choices:["To leave Makkah himself","To support him strongly","To remain neutral","To warn the Quraysh in advance"],
    correct:1, explain:"Waraqah said, “If I live to see that day, I will support you strongly” — though he died before it fully unfolded." },

  { id:"2-1--first-revelation--q16", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"first-revelation",
    q:"Which hadith collection and reference records the core narrative of the first revelation?",
    choices:["Sahih Muslim, Hadith 100","Sahih al-Bukhari, Hadith 3","Sunan Abu Dawud, Hadith 3","Muwatta Malik, Hadith 3"],
    correct:1, explain:"This narrative is recorded in Sahih al-Bukhari, Hadith 3 (Kitab Bad’ al-Wahy), narrated by ’A’ishah." },

  { id:"2-1--first-revelation--q17", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"first-revelation",
    q:"Who narrated the hadith recording the events of the first revelation?",
    choices:["Abu Hurairah","Umar ibn al-Khattab","’A’ishah","Ali ibn Abi Talib"],
    correct:2, explain:"The Prophet’s wife ’A’ishah is the narrator of this account in Sahih al-Bukhari." },

  { id:"2-1--first-revelation--q18", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"first-revelation",
    q:"What habit had the Prophet developed before the first revelation that explains why he was in the cave?",
    choices:["Trading journeys to Syria","Periods of solitary retreat (tahannuth) for reflection","Leading prayers at the Ka’ba","Studying with Jewish and Christian scholars"],
    correct:1, explain:"He regularly withdrew to the Cave of Hira for tahannuth — solitary spiritual retreat — before prophethood began." },

  { id:"2-1--first-revelation--q19", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"first-revelation",
    q:"Why is it significant that the Prophet could not read or write when he received the first revelation?",
    choices:["It supports the Qur’an being from God rather than his own composition","It made the revelation easier for him to memorise","It meant Jibreel had to write the words down instead","It is not considered significant by Muslims"],
    correct:0, explain:"His being unlettered (ummi) is seen as evidence the Qur’an’s eloquent content could not have been fabricated by him, and rules out the accusation he copied earlier scriptures." },

  { id:"2-1--first-revelation--q20", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"first-revelation",
    q:"According to Qur’an 42:51, which of the following is NOT one of the three ways God communicates with a chosen messenger?",
    choices:["Direct inspiration without an intermediary","Speech from behind a veil","Through a sent messenger (an angel)","Through the study of earlier scriptures"],
    correct:3, explain:"Studying earlier scripture is how Waraqah recognised what had happened — it is not itself one of the three channels of revelation named in 42:51." },

  { id:"2-1--first-revelation--q21", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"first-revelation",
    q:"What is the term Muslims use for the process by which God communicated the Qur’an to the Prophet?",
    choices:["Sunnah","Al-wahy","Ijma’","Isnad"],
    correct:1, explain:"Al-wahy means inspiration or divine communication — the general process behind all revelation, including the first revelation." },

  { id:"2-1--first-revelation--q22", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"first-revelation",
    q:"What event followed the first revelation, involving a period with no further revelation?",
    choices:["The Hijrah","The fatrah (a pause in revelation)","The Night Journey (al-Isra)","The conquest of Makkah"],
    correct:1, explain:"After the first revelation, there was a gap known as the fatrah, before revelation resumed with Surah al-Muddaththir." },

  { id:"2-1--first-revelation--q23", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"first-revelation",
    q:"Which surah was revealed after the fatrah, marking the start of the Prophet’s public mission?",
    choices:["Surah al-Muddaththir","Surah al-’Alaq","Surah Yusuf","Surah al-Ikhlas"],
    correct:0, explain:"Surah al-Muddaththir (74:1–5), opening “O you wrapped in a cloak! Arise and warn!”, marked the start of his public preaching mission." },

  { id:"2-1--first-revelation--q24", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"first-revelation",
    q:"Where, according to the earliest Sira biographies, did the Prophet see Jibreel filling the horizon immediately after the Hira encounter?",
    choices:["Inside the Ka’ba","While descending the mountain from the cave","In the marketplace of Makkah","In a dream several days later"],
    correct:1, explain:"Ibn Ishaq’s Sira records that as he descended the mountainside in fear, he heard a voice and saw the angel filling the horizon, announcing “I am Jibreel.”" },

  { id:"2-1--first-revelation--q25", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"first-revelation",
    q:"Why do many students confuse two separate “angel in the sky” moments in this story?",
    choices:["A near-identical vision is recorded by Bukhari at a later point too, after the fatrah","There is only one such vision and no risk of confusion","Jibreel appeared in the sky every night of Ramadan","The Qur’an describes the vision twice in the same surah"],
    correct:0, explain:"Sahih al-Bukhari places a very similar “angel filling the horizon” vision after the fatrah, just before Surah al-Muddaththir — distinct from the version some Sira sources place right after Hira." },

  { id:"2-1--first-revelation--q26", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"first-revelation",
    q:"What does Khadija’s reaction on the night of the first revelation best illustrate?",
    choices:["Fear and disbelief","Immediate faith reasoned from her husband’s known character","Indifference to what had happened","A demand for proof before comforting him"],
    correct:1, explain:"Khadija reassured him at once, reasoning from years of firsthand knowledge of his honesty and generosity — not from blind hope." },

  { id:"2-1--first-revelation--q27", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"first-revelation",
    q:"Which of these best explains why Waraqah’s confirmation mattered so much?",
    choices:["He was an independent, scripturally trained outsider with no reason to flatter the Prophet","He was the Prophet’s closest family member","He had witnessed the revelation himself","He was a well-known Makkan idol-worshipper"],
    correct:0, explain:"Waraqah had no personal stake in flattering the Prophet — his recognition came from independent knowledge of earlier scripture, which strengthens it as evidence." },

  { id:"2-1--first-revelation--q28", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"first-revelation",
    q:"What is the primary academic source used in this lesson for the classification of forms of revelation (wahy)?",
    choices:["The Sealed Nectar by Safiur Rahman al-Mubarakpuri","An Introduction to the Sciences of the Qur’aan by Abu Ammaar Yasir Qadhi","The Life of Muhammad by A. Guillaume","Sunan Abu Dawud"],
    correct:1, explain:"Yasir Qadhi’s An Introduction to the Sciences of the Qur’aan (Al-Hidaayah, 1999) is the academic source used for the classification of wahy and its Qur’anic framing (42:51)." },

  { id:"2-1--first-revelation--q29", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"first-revelation",
    q:"In an exam answer about “the first revelation,” which sequence of events is the safest and most tightly source-supported to write?",
    choices:["Cave of Hira → “Iqra” x3 → Surah al-’Alaq 96:1–5 → home to Khadija → her reassurance → Waraqah’s confirmation","Surah al-Muddaththir → the fatrah → Cave of Hira → Waraqah’s confirmation","Khadija’s reassurance → Cave of Hira → “Iqra” x3 → Waraqah’s confirmation","Waraqah’s confirmation → Cave of Hira → Khadija’s reassurance"],
    correct:0, explain:"This is the correct chronological order and the one most directly supported by Sahih al-Bukhari, Hadith 3." },

  { id:"2-1--first-revelation--q30", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"first-revelation",
    q:"Why is the number of times Jibreel repeated “Iqra” (three) worth remembering precisely for exams?",
    choices:["It has no significance and is rarely tested","It is a specific, checkable AO1 detail examiners commonly credit","It only appears in Surah al-Muddaththir, not this story","It changes depending on which hadith collection is used"],
    correct:1, explain:"Precise, checkable details like “three times” are exactly the kind of specific AO1 fact that distinguishes a full-marks answer from a vague one." },

  { id:"2-1--conditions-of-revelation--q1", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"conditions-of-revelation",
    q:"According to ’A’ishah’s hadith, which form of revelation did the Prophet describe as the hardest to receive?",
    choices:["The angel appearing in the form of a man and speaking directly","A sound like the ringing of a bell","True dreams during sleep","Direct speech from behind a veil"],
    correct:1, explain:"“...like the ringing of a bell, and that is the hardest on me” (Sahih al-Bukhari). The man-form was, in his own words, easier to receive." },

  { id:"2-1--conditions-of-revelation--q2", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"conditions-of-revelation",
    q:"According to the hadith literature, which of these is a genuine reported sign of how physically demanding revelation was?",
    choices:["The Prophet’s voice became inaudible for several minutes","His riding animal’s legs strained under a sudden, otherwise inexplicable weight","He lost the ability to speak Arabic temporarily","His skin changed colour permanently"],
    correct:1, explain:"Companions reported the Prophet’s mount straining under a sudden weight during revelation, alongside sweating in the cold, a change in facial colour, and — as Zayd ibn Thabit described — an intense heaviness and heat." },

  { id:"2-1--conditions-of-revelation--q3", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"conditions-of-revelation",
    q:"Which physical sign did companions observe accompanying the Prophet’s reception of revelation?",
    choices:["His voice would disappear completely","He would fall permanently unconscious","Sweating even in cold weather, and a change in facial colour","His hands would shake uncontrollably for days afterward"],
    correct:2, explain:"’A’ishah reported sweat on his forehead even on cold mornings; ’Ubadah ibn as-Samit reported a change in his facial colour and lowered head." },

  { id:"2-1--conditions-of-revelation--q4", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"conditions-of-revelation",
    q:"According to ’A’ishah, which of revelation’s two forms did the Prophet find harder?",
    choices:["The angel appearing as a man","Like the ringing of a bell","True dreams","Direct unmediated speech"],
    correct:1, explain:"“...like the ringing of a bell, and that is the hardest on me.”" },

  { id:"2-1--why-gradual-revelation--q1", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"why-gradual-revelation",
    q:"All of the following are reasons scholars give for the Qur’an’s gradual revelation, EXCEPT one. Which is the odd one out?",
    choices:["It let legislation (like the ban on alcohol) arrive in achievable stages","It allowed revelation to respond directly to real events as they happened","It made the text easier to translate into other languages","It strengthened the Prophet’s heart during years of hardship"],
    correct:2, explain:"Ease of translation is never cited as a reason. The standard reasons concern legislation, real-time responsiveness, memorisation/practice, strengthening the Prophet’s heart, and standing as evidence against fabrication." },

  { id:"2-1--why-gradual-revelation--q2", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"why-gradual-revelation",
    q:"According to Qur’an 25:32, why was the Qur’an revealed gradually rather than all at once?",
    choices:["To make it easier to translate","To strengthen the Prophet’s heart","Because Jibreel could only carry small portions","Because earlier scriptures were also revealed gradually"],
    correct:1, explain:"“...that We may strengthen your heart thereby, and We have spaced it distinctly” (25:32) — the direct Qur’anic answer to the disbelievers’ objection." },

  { id:"2-1--why-gradual-revelation--q3", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"why-gradual-revelation",
    q:"Which classic example illustrates the ‘gradual legislation’ benefit of piecemeal revelation?",
    choices:["The staged revelations progressively prohibiting alcohol (2:219, 4:43, 5:90–91)","The single, immediate ban on gambling","The order to fast during Ramadan","The instruction to face Makkah in prayer"],
    correct:0, explain:"Alcohol was addressed across three revelations of increasing firmness rather than an outright ban imposed all at once on a society not yet ready." },

  { id:"2-1--why-gradual-revelation--q4", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"why-gradual-revelation",
    q:"Beyond strengthening the Prophet’s heart, name a genuine reason for gradual revelation.",
    choices:["It made the Qur’an easier to set to music","It allowed gradual, achievable legislation, like the staged prohibition of alcohol","It reduced the total number of verses needed","It let non-Arabic speakers understand it more easily"],
    correct:1, explain:"The staged prohibition of alcohol (2:219, 4:43, 5:90–91) is the strongest named example." },

  { id:"2-1--makki-madani-surahs--q1", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"makki-madani-surahs",
    q:"What is the standard scholarly definition used to classify a verse as Makki or Madani?",
    choices:["Whether it was revealed inside or outside the city of Makkah","Whether it was revealed before or after the Prophet’s Hijrah to Madinah","Whether it is long or short","Whether it mentions the Ka’ba"],
    correct:1, explain:"The standard, majority definition is chronological — before or after the Hijrah — not based on physical location." },

  { id:"2-1--makki-madani-surahs--q2", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"makki-madani-surahs",
    q:"Why is a purely geographical definition of Makki/Madani considered problematic by scholars?",
    choices:["Some Madani verses were revealed physically near or in Makkah after the Hijrah","No verses were ever revealed in Makkah","The Prophet never travelled after the Hijrah","Geography and chronology always give the same answer, so it doesn’t matter"],
    correct:0, explain:"Surahs like al-Fath were revealed near Makkah years after the Hijrah, yet are still classified as Madani — showing location alone cannot decide the classification." },

  { id:"2-1--makki-madani-surahs--q3", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"makki-madani-surahs",
    q:"Which surah is the classic example of a Madani surah revealed geographically close to Makkah?",
    choices:["Surah al-Baqarah","Surah al-Fath","Surah al-’Alaq","Surah al-Fatiha"],
    correct:1, explain:"Surah al-Fath was revealed near Hudaybiyyah, close to Makkah, in the sixth year after the Hijrah — but is Madani because of when, not where, it came down." },

  { id:"2-1--makki-madani-surahs--q4", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"makki-madani-surahs",
    q:"What are the two methods scholars used to establish whether a verse was Makki or Madani?",
    choices:["Transmitted testimony from the Companions, and deduction from internal evidence","Carbon dating and manuscript analysis","Guesswork and popular vote","Comparing translations in different languages"],
    correct:0, explain:"Scholars relied on direct transmitted reports (naql) where available, and on deducing the period from a verse’s internal language, themes and historical context otherwise." },

  { id:"2-1--makki-madani-surahs--q5", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"makki-madani-surahs",
    q:"Which of these is a typical theme of Makki verses?",
    choices:["Detailed inheritance law","Rules for writing commercial contracts","The Oneness of God and the reality of the afterlife","Regulations for treaties with other tribes"],
    correct:2, explain:"Makki verses focus on establishing core belief — tawhid (God’s Oneness) and the afterlife — since the audience did not yet believe." },

  { id:"2-1--makki-madani-surahs--q6", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"makki-madani-surahs",
    q:"Which of these is a typical theme of Madani verses?",
    choices:["Practical legislation, such as family law and criminal penalties","Stories of earlier prophets rejected by their people","Oaths by the sun, moon and stars","Warnings to the Quraysh about the Day of Judgement"],
    correct:0, explain:"Madani verses address the practical needs of an established Muslim community — law, governance and social regulation." },

  { id:"2-1--makki-madani-surahs--q7", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"makki-madani-surahs",
    q:"Why did legal rulings tend to come in the Madani period rather than the Makki period?",
    choices:["There was no organised Muslim community to legislate for until after the Hijrah","Legal rulings were considered unimportant","The Quraysh demanded legal rulings first","Makki verses were too short to contain laws"],
    correct:0, explain:"Detailed law only makes sense once a real community exists to be governed by it — which only came into being after the migration to Madinah." },

  { id:"2-1--makki-madani-surahs--q8", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"makki-madani-surahs",
    q:"Which phrase characteristically opens Madani verses, addressing an established community of believers?",
    choices:["“O mankind”","“O you who believe”","“By the sun and its brightness”","“Read, in the name of your Lord”"],
    correct:1, explain:"“O you who believe” (yaa ayyuhal-ladheena aamanoo) directly addresses a Muslim community that already exists — a Madani marker." },

  { id:"2-1--makki-madani-surahs--q9", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"makki-madani-surahs",
    q:"Which phrase is more typical of Makki verses, addressing a broader, not-yet-believing audience?",
    choices:["“O mankind”","“O you who believe”","“O Prophet, tell your wives”","“O People of the Book”"],
    correct:0, explain:"“O mankind” (yaa ayyuhan-naas) addresses everyone, believers and non-believers alike — fitting the Makki period, before an established community of believers existed." },

  { id:"2-1--makki-madani-surahs--q10", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"makki-madani-surahs",
    q:"Roughly how many surahs open with the mysterious “disjointed letters” (al-huroof al-muqatta’ah)?",
    choices:["2","14","29","96"],
    correct:2, explain:"Twenty-nine surahs open with disjointed letters such as Alif-Laam-Meem." },

  { id:"2-1--makki-madani-surahs--q11", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"makki-madani-surahs",
    q:"Which two surahs are the well-known exception to the rule that disjointed letters mark a Makki surah?",
    choices:["Al-Fatiha and al-Ikhlas","Al-Baqarah and Aal-’Imran","An-Nisa and al-Ma’idah","Al-Fath and at-Tawbah"],
    correct:1, explain:"Al-Baqarah and Aal-’Imran both open with disjointed letters yet are Madani — the standard exception worth remembering precisely." },

  { id:"2-1--makki-madani-surahs--q12", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"makki-madani-surahs",
    q:"Most of the Qur’an’s recognised sajdah (prostration) verses occur in which type of surah?",
    choices:["Makki","Madani","Neither — they are evenly split","Only in mixed surahs"],
    correct:0, explain:"The majority of the Qur’an’s sajdah verses fall within Makki surahs." },

  { id:"2-1--makki-madani-surahs--q13", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"makki-madani-surahs",
    q:"In general, how do Makki verses and surahs compare in length to Madani ones?",
    choices:["Makki verses/surahs tend to be shorter; Madani ones tend to be longer","Makki verses/surahs tend to be longer; Madani ones tend to be shorter","There is no length difference at all","Both are always exactly the same length"],
    correct:0, explain:"Makki material tends toward short, urgent verses; Madani material tends toward longer, more detailed legal and social verses." },

  { id:"2-1--makki-madani-surahs--q14", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"makki-madani-surahs",
    q:"What stylistic feature — swearing “by the sun,” “by the night,” and so on — is especially associated with Makki surahs?",
    choices:["Oaths","Inheritance formulas","Treaty clauses","Marriage contracts"],
    correct:0, explain:"Frequent oaths by natural phenomena are a recognisable Makki stylistic marker, adding urgency and emphasis." },

  { id:"2-1--makki-madani-surahs--q15", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"makki-madani-surahs",
    q:"Surah al-’Alaq, containing the first words ever revealed, is classified as:",
    choices:["Purely Makki","Purely Madani","Mixed","Unclassifiable"],
    correct:0, explain:"Surah al-’Alaq was revealed in the Cave of Hira, well before the Hijrah — purely Makki." },

  { id:"2-1--makki-madani-surahs--q16", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"makki-madani-surahs",
    q:"Surah al-Baqarah, the Qur’an’s longest surah, is classified as:",
    choices:["Purely Makki","Purely Madani","Mixed","Unclassifiable"],
    correct:1, explain:"Surah al-Baqarah was revealed after the Hijrah and is dense with Madinan-period legislation." },

  { id:"2-1--makki-madani-surahs--q17", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"makki-madani-surahs",
    q:"What is a “mixed” surah, in this classification system?",
    choices:["A surah containing verses revealed in both the Makki and Madani periods","A surah with no clear theme","A surah revealed to more than one prophet","A surah with disputed authorship"],
    correct:0, explain:"Mixed surahs combine verses from different periods within the single, final chapter as it appears in the mushaf." },

  { id:"2-1--makki-madani-surahs--q18", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"makki-madani-surahs",
    q:"How is a mixed surah’s overall Makki/Madani classification usually decided?",
    choices:["By whichever period contributed the majority of its verses, or where its opening verses were revealed","By its position in the mushaf","By its length alone","It is left unclassified"],
    correct:0, explain:"Scholars typically classify a mixed surah by the majority content or the period of its opening verses." },

  { id:"2-1--makki-madani-surahs--q19", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"makki-madani-surahs",
    q:"Does the order of surahs in the Qur’an today reflect the order they were revealed in?",
    choices:["No — the mushaf is arranged by a different principle, not by revelation order","Yes — surah 1 was revealed first, surah 114 last","Yes, but only for Makki surahs","Yes, but only for Madani surahs"],
    correct:0, explain:"The mushaf’s arrangement is unrelated to chronological revelation order — Surah al-’Alaq (96th in the book) contains the very first revealed words." },

  { id:"2-1--makki-madani-surahs--q20", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"makki-madani-surahs",
    q:"What is the primary way scholars reconstruct the actual chronological order of revelation, separate from the book’s final arrangement?",
    choices:["Using Makki/Madani classification and other internal/historical evidence","Guessing based on surah length","Following the order in modern printed Qur’ans","It cannot be reconstructed at all"],
    correct:0, explain:"Makki/Madani classification (and further sub-dating within each period) is one of the main tools used to reconstruct the true chronological sequence of revelation." },

  { id:"2-1--makki-madani-surahs--q21", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"makki-madani-surahs",
    q:"Which of these benefits of knowing Makki/Madani classification directly supports understanding “abrogation” (naskh)?",
    choices:["Knowing which of two seemingly contradictory verses came first","Knowing how many letters a surah contains","Knowing which reciter transmitted a verse","Knowing the surah’s position in the mushaf"],
    correct:0, explain:"When two verses appear to conflict, knowing their chronological order (via Makki/Madani classification) is the essential first step in understanding how later guidance refined earlier guidance." },

  { id:"2-1--makki-madani-surahs--q22", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"makki-madani-surahs",
    q:"Which academic source structures this lesson’s classification of Makki and Madani verses?",
    choices:["Sahih al-Bukhari alone","Abu Ammaar Yasir Qadhi’s An Introduction to the Sciences of the Qur’aan","The Sealed Nectar by Safiur Rahman al-Mubarakpuri","The Qur’an’s own index"],
    correct:1, explain:"This lesson follows Chapter 6 of Yasir Qadhi’s An Introduction to the Sciences of the Qur’aan (Al-Hidaayah, 1999)." },

  { id:"2-1--makki-madani-surahs--q23", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"makki-madani-surahs",
    q:"Which past-paper question type does deep Makki/Madani knowledge most directly strengthen?",
    choices:["“Why was it important for revelations to come over time?” — the significance of gradual, 23-year revelation","“Roles of Abu Bakr, ’Umar and ’Uthman in compiling the Qur’an”","“How Qur’an and Sunna are used in Islamic Law”","“Life of Khadija, the Prophet’s first wife”"],
    correct:0, explain:"Understanding the Makki-to-Madani shift from belief to law is the strongest AO2 material for explaining why revelation needed to unfold gradually." },

  { id:"2-1--makki-madani-surahs--q24", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"makki-madani-surahs",
    q:"Approximately what share of the Qur’an’s total length comes from Madani material, despite Madani surahs being fewer in number?",
    choices:["A large share, because Madani surahs and verses tend to run much longer","A tiny share, since Madani surahs are always very short","Exactly half, by design","None — all lengthy surahs are Makki"],
    correct:0, explain:"Although there are fewer Madani surahs overall, their greater average length means they make up a substantial portion of the Qur’an’s total text." },

  { id:"2-1--makki-madani-surahs--q25", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"makki-madani-surahs",
    q:"Which of the following best explains why “Makki” surahs rarely contain detailed legal rulings?",
    choices:["There was not yet an organised community for such rulings to apply to","Legal rulings were forbidden in Makkah","The Quraysh had already written their own laws","Makki surahs are too short to contain any content at all"],
    correct:0, explain:"Detailed law-making presupposes an existing, believing community to govern — something that did not yet exist during the Makki period." },

  { id:"2-1--makki-madani-surahs--q26", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"makki-madani-surahs",
    q:"Surah an-Nisa’s verse on inheritance shares (Qur’an 4:11) is best described as an example of which style?",
    choices:["Madani — detailed, legal, addressed to an existing community","Makki — short, oath-based, universal address","Neither Makki nor Madani style","A style unique to Surah al-Fatiha"],
    correct:0, explain:"Its length, legal precision and assumption of an existing community mark it as classic Madani-style content." },

  { id:"2-1--makki-madani-surahs--q27", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"makki-madani-surahs",
    q:"Surah al-’Asr (103:1–3) is best described as an example of which style?",
    choices:["Makki — short, oath-opened, urgent in tone","Madani — long and legally detailed","A mixed surah with no clear style","A surah with disjointed letters"],
    correct:0, explain:"Its brevity, oath (“By Time”), and broad moral warning are characteristic of Makki-style revelation." },

  { id:"2-1--makki-madani-surahs--q28", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"makki-madani-surahs",
    q:"What historical corroboration benefit does Makki/Madani classification offer, according to this lesson?",
    choices:["The internal evidence in the verses independently matches the outside historical account of the Prophet’s life","It proves the exact date every verse was revealed to the day","It replaces the need for hadith literature entirely","It has no historical value, only linguistic value"],
    correct:0, explain:"The themes and concerns visible inside Makki and Madani verses line up with the separately known historical timeline of the Prophet’s life, reinforcing both records." },

  { id:"2-1--makki-madani-surahs--q29", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"makki-madani-surahs",
    q:"Which chapter of Yasir Qadhi’s book comes immediately after “The Makkee and the Madanee Verses”?",
    choices:["The Causes of Revelation (Asbaab an-Nuzool)","The Qur’an","Inspiration — al-Wahy","The Compilation of the Qur’an"],
    correct:0, explain:"Chapter 7 in Qadhi’s book, immediately following the Makki/Madani chapter, covers Asbaab an-Nuzool — the causes/occasions of revelation." },

  { id:"2-1--makki-madani-surahs--q30", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"makki-madani-surahs",
    q:"What is the safest way to justify a surah’s Makki or Madani classification in an exam answer?",
    choices:["Refer to whether it was revealed before or after the Hijrah","Refer only to where the Prophet was physically standing","Refer only to the surah’s length","Refer only to its position in the mushaf"],
    correct:0, explain:"The chronological (Hijrah-based) criterion is the standard, exam-safe justification — location, length and mushaf position can all mislead." },

  { id:"2-1--preservation-of-quran--q1", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"preservation-of-quran",
    q:"During the Prophet’s own lifetime, what did NOT yet exist for the Qur’an?",
    choices:["Any written record at all","A single bound book gathering every verse in a fixed order","Companions who had memorised the Qur’an","An annual review of the revealed text with Jibreel"],
    correct:1, explain:"Verses were written on available materials and reviewed yearly with Jibreel, but a single bound volume in one fixed order was only compiled after the Prophet’s death and after revelation had ended — the subject of Topic 2.2." },

  { id:"2-2--preservation-before-compilation--q1", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"preservation-before-compilation",
    q:"During the Prophet’s own lifetime, which TWO methods together preserved the Qur’an before any single bound book existed?",
    choices:["Memorisation and oral transmission only","Writing on parchment scrolls only, checked by ’Uthman","Memorisation by the huffaz, and writing onto available materials by scribes","A single master copy kept in the Prophet’s house"],
    correct:2, explain:"Both memorisation (checked yearly, twice in the final year, against Jibreel’s recitation) and writing (by scribes such as Zayd ibn Thabit, onto palm-stalks, stones, leather) ran in parallel — no bound book existed yet because revelation was still ongoing." },

  { id:"2-2--preservation-before-compilation--q2", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"preservation-before-compilation",
    q:"Why was the Qur’an not gathered into a single bound book during the Prophet’s own lifetime?",
    choices:["Because writing materials were unavailable","Because revelation was still ongoing and verses could still be abrogated or reordered","Because the Prophet forbade writing the Qur’an down","Because no scribes were literate enough"],
    correct:1, explain:"Binding it before revelation was complete would have made no sense, since further verses or abrogations could still arrive." },

  { id:"2-2--compilation-under-abu-bakr--q1", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-abu-bakr",
    q:"What directly triggered Abu Bakr’s decision to compile the Qur’an into one mus-haf?",
    choices:["A dispute between reciters from Iraq and Syria","The death of a large number of huffaz at the Battle of Yamama","’Uthman’s concern about regional dialects","The Prophet’s own instruction before he died"],
    correct:1, explain:"The Battle of Yamama (12 AH), against Musaylimah’s rebellion, killed a large number of the Qur’an’s memorisers. The dialect dispute is what triggered ’Uthman’s LATER compilation, not this one." },

  { id:"2-2--compilation-under-abu-bakr--q2", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-abu-bakr",
    q:"Roughly how many huffaz were reported killed at the Battle of Yamama?",
    choices:["About seven","About seventy","About seven hundred","None — no huffaz were involved"],
    correct:1, explain:"Reportedly around seventy Qur’an-memorisers were among the Muslim dead, which alarmed ’Umar enough to press Abu Bakr toward compilation." },

  { id:"2-2--compilation-under-abu-bakr--q3", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-abu-bakr",
    q:"Who first proposed compiling the Qur’an into a single mus-haf, and to whom?",
    choices:["Zayd ibn Thabit, to ’Uthman","’Umar ibn al-Khattab, to Abu Bakr","Hudhayfah ibn al-Yaman, to ’Uthman","Abu Bakr, to the Prophet"],
    correct:1, explain:"’Umar raised the alarm to Caliph Abu Bakr after the losses at Yamama; Abu Bakr hesitated before agreeing." },

  { id:"2-2--compilation-under-abu-bakr--q4", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-abu-bakr",
    q:"What method did Zayd ibn Thabit use to verify each verse during the first compilation?",
    choices:["He relied solely on his own memorisation","He accepted any verse a single companion claimed to remember","He required both a written record from the Prophet’s lifetime and corroborating oral testimony","He asked ’Uthman to approve each verse personally"],
    correct:2, explain:"Zayd verified every verse against both a written source and independent testimony that it had been heard directly from the Prophet — a rigorous double-check, not a shortcut." },

  { id:"2-2--compilation-under-abu-bakr--q5", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-abu-bakr",
    q:"After ’Umar’s death, who was given custody of the original Abu Bakr–era mus-haf?",
    choices:["’Uthman ibn ’Affan","Hafsa bint ’Umar","Zayd ibn Thabit","’Ali ibn Abi Talib"],
    correct:1, explain:"Hafsa bint ’Umar, one of the Prophet’s widows, kept it — ’Uthman later borrowed it as the base text for the second compilation." },

  { id:"2-2--compilation-under-abu-bakr--q6", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-abu-bakr",
    q:"Which battle triggered Abu Bakr’s compilation, and roughly how many huffaz were lost in it?",
    choices:["Battle of Badr, around 14","Battle of Uhud, around 70","Battle of Yamama, around 70","Battle of the Trench, around 700"],
    correct:2, explain:"The Battle of Yamama (12 AH), against Musaylimah’s rebellion." },

  { id:"2-2--compilation-under-abu-bakr--q7", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-abu-bakr",
    q:"Who kept custody of Abu Bakr’s original mus-haf after ’Umar’s death?",
    choices:["’Uthman ibn ’Affan directly","Hafsa bint ’Umar","Zayd ibn Thabit","The Ka’bah’s treasury"],
    correct:1, explain:"Hafsa bint ’Umar, later lending it as the base text for ’Uthman’s standardisation." },

  { id:"2-2--compilation-under-uthman--q1", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-uthman",
    q:"When Zayd ibn Thabit and the three Qurayshi committee members disagreed on how to write a word, what rule did ’Uthman give them?",
    choices:["Zayd’s judgment always took priority, as the original compiler","Write it in the dialect of Quraysh, since the Qur’an was revealed in their tongue","Consult Hafsa bint ’Umar for a final decision","Include both versions side by side"],
    correct:1, explain:"’Uthman instructed that any disagreement be resolved in favour of the Quraysh dialect — a clear, principled standard rather than an arbitrary compromise." },

  { id:"2-2--compilation-under-uthman--q2", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-uthman",
    q:"Which verse do Muslims cite as God’s promise to protect the Qur’an from corruption?",
    choices:["Qur’an 25:32","Qur’an 42:51","Qur’an 15:9","Qur’an 96:1"],
    correct:2, explain:"“Indeed, it is We who sent down the Qur’an, and indeed, We will be its guardian” (15:9) — understood as fulfilled through, not instead of, the human efforts of Abu Bakr, ’Umar, Zayd ibn Thabit and ’Uthman." },

  { id:"2-2--compilation-under-uthman--q3", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-uthman",
    q:"What exactly alarmed Hudhayfah ibn al-Yaman enough to warn ’Uthman?",
    choices:["Soldiers from Iraq and Syria disputing whose Qur’an recitation was correct","A rumour that the mus-haf had been destroyed","Complaints that too few copies of the Qur’an existed","A demand from non-Arab converts for a translated Qur’an"],
    correct:0, explain:"Watching Iraqi and Syrian troops argue over differently-voiced (but each individually authentic) recitations during campaigns in Armenia and Azerbaijan sent Hudhayfah hurrying back to Madinah." },

  { id:"2-2--compilation-under-uthman--q4", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-uthman",
    q:"Once ’Uthman’s standard copies were distributed, what happened to other, non-standard personal copies?",
    choices:["They were kept as reference material in Madinah","They were gathered in and destroyed, to remove any basis for future dispute","They were sent to Makkah for safekeeping","Nothing — they remained in circulation alongside the standard text"],
    correct:1, explain:"Withdrawing variant copies was the final step that made the standard text truly universal — not just available, but the only version anyone could point to." },

  { id:"2-2--compilation-under-uthman--q5", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-uthman",
    q:"What is the key difference in PURPOSE between Abu Bakr’s and ’Uthman’s compilations?",
    choices:["There is no real difference — both did exactly the same job","Abu Bakr’s was about preventing loss of the text; ’Uthman’s was about preventing regional division over it","Abu Bakr’s covered only half the Qur’an; ’Uthman’s completed it","Abu Bakr’s was oral; ’Uthman’s was the first ever written version"],
    correct:1, explain:"Same rigorous method both times, but a different problem being solved — defensive preservation, then unifying standardisation." },

  { id:"2-2--compilation-under-uthman--q6", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-uthman",
    q:"Whose warning to ’Uthman triggered the second compilation?",
    choices:["Zayd ibn Thabit","Abu Bakr","Hudhayfah ibn al-Yaman","’Ali ibn Abi Talib"],
    correct:2, explain:"Hudhayfah, alarmed by recitation disputes among troops in Armenia and Azerbaijan." },

  { id:"2-2--compilation-under-uthman--q7", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-uthman",
    q:"What rule did ’Uthman give for resolving disagreements over wording?",
    choices:["Majority vote among all companions","Write it in the dialect of Quraysh","Default to Zayd ibn Thabit’s memory alone","Consult the Prophet’s widows collectively"],
    correct:1, explain:"Since the Qur’an was revealed in the Quraysh dialect." },

  { id:"2-3--four-sources-of-law--q1", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"four-sources-of-law",
    q:"Put the four sources of Islamic law in their correct order of authority, highest first.",
    choices:["Sunnah, Qur’an, Qiyas, Ijma’","Qur’an, Sunnah, Ijma’, Qiyas","Ijma’, Qiyas, Qur’an, Sunnah","Qur’an, Ijma’, Sunnah, Qiyas"],
    correct:1, explain:"Qur’an first (direct word of God), then Sunnah (explains it), then Ijma’ (used only where the first two are silent), then Qiyas (last and most cautious)." },

  { id:"2-3--four-sources-of-law--q2", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"four-sources-of-law",
    q:"Which of the four sources of Islamic law is believed to be divine in both wording AND meaning?",
    choices:["The Sunnah","Ijma’","The Qur’an","Qiyas"],
    correct:2, explain:"Only the Qur’an is held to be God’s own wording as well as meaning — which is why nothing from any other source may ever contradict it." },

  { id:"2-3--four-sources-of-law--q3", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"four-sources-of-law",
    q:"Which single rule governs the relationship between all four sources of Islamic law?",
    choices:["Each is used independently, with no fixed order","Each later source applies only where the sources above it are silent, and none may ever contradict the Qur’an","Scholars vote on which source to prioritise case by case","Only the Qur’an and Sunnah are ever actually used; Ijma’ and Qiyas are theoretical"],
    correct:1, explain:"This is the single idea examiners reward most in this topic — describing a hierarchy, not just listing four definitions." },

  { id:"2-3--four-sources-of-law--q4", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"four-sources-of-law",
    q:"State the one rule that governs how all four sources of Islamic law relate to each other.",
    choices:["All four are used together, equally, on every question","Each later source is used only where the ones above it are silent, and none may contradict the Qur’an","Only the Qur’an is ever actually applied in practice","Ijma’ and Qiyas can override the Sunnah if scholars agree"],
    correct:1, explain:"Strict hierarchy — the idea examiners reward most in this topic." },

  { id:"2-3--quran-and-sunnah--q1", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-and-sunnah",
    q:"The Qur’an commands Muslims to “establish prayer” but does not explain how. Which source supplied the missing practical detail?",
    choices:["Ijma’ (scholarly consensus)","Qiyas (analogy)","The Sunnah — e.g. ‘Pray as you have seen me praying’","A later ruling by the Rightly Guided Caliphs"],
    correct:2, explain:"The Sunnah’s role is to clarify and apply Qur’anic principle in practice — the Prophet’s own example supplied the number of prayers, their raka’at, and their physical form." },

  { id:"2-3--quran-and-sunnah--q2", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-and-sunnah",
    q:"Which statement best explains why the Sunnah is needed alongside the Qur’an?",
    choices:["The Sunnah overrides Qur’anic rulings where the two disagree","The Qur’an often gives commands as broad principle; the Sunnah supplies the practical, applied detail","The Sunnah is only used when scholars disagree","The Sunnah was revealed before the Qur’an"],
    correct:1, explain:"Salah and zakat are the classic examples — commanded in principle by the Qur’an, with their mechanics supplied entirely by the Prophet’s example." },

  { id:"2-3--quran-and-sunnah--q3", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-and-sunnah",
    q:"Which source explains Qur’anic principle in practical detail, proven by the example of salah?",
    choices:["Ijma’","Qiyas","The Sunnah — ‘Pray as you have seen me praying’","The Farewell Sermon alone"],
    correct:2, explain:"The Sunnah supplies the missing mechanics the Qur’an leaves as principle." },

  { id:"2-3--ijma--q1", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"ijma",
    q:"What does ‘Ijma’’ mean?",
    choices:["Analogical reasoning from an existing ruling to a new case","The unanimous agreement of qualified Muslim scholars on a question the Qur’an and Sunnah don’t directly settle","The Prophet’s own sayings and actions","A punishment specified directly in the Qur’an"],
    correct:1, explain:"Ijma’ is consensus — and it only carries authority where the first two sources are silent; it can never invent a ruling that contradicts them." },

  { id:"2-3--ijma--q2", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"ijma",
    q:"Which of these is a genuine example of ijma’ actually happening among the early companions?",
    choices:["The Battle of Badr","The decision to compile the Qur’an into one mus-haf after the Battle of Yamama","The revelation of Surah al-’Alaq","Zayd ibn Thabit’s appointment as a Scribe of Revelation"],
    correct:1, explain:"The compilation decision wasn’t commanded explicitly by a text — it was the companions’ collective agreement, reached using Qur’an- and Sunnah-based reasoning, in response to a new problem." },

  { id:"2-3--ijma--q3", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"ijma",
    q:"Which of these is a genuine historical example of ijma’ in action?",
    choices:["The Battle of Siffin","The companions’ collective decision to compile the Qur’an after Yamama","The revelation of the Farewell Sermon","The founding of the city of Kufa"],
    correct:1, explain:"A course of action agreed collectively, not commanded by a direct text." },

  { id:"2-3--qiyas--q1", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"qiyas",
    q:"In the qiyas example prohibiting a modern intoxicant by analogy with wine (khamr), what is the shared ’illah?",
    choices:["That both are liquids","That both cause intoxication","That both are mentioned in the same surah","That both were banned by ’Umar"],
    correct:1, explain:"The ’illah (underlying reason) shared by khamr and the new case is intoxication — that shared reason is what lets the ruling (hukm) transfer from the asl to the far’." },

  { id:"2-3--qiyas--q2", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"qiyas",
    q:"Which statement correctly describes how the four sources of Islamic law relate to each other?",
    choices:["All four sources are used together equally on every question","A later source only applies where the sources above it are silent, and none may contradict the Qur’an","Qiyas can overrule the Qur’an if scholars agree","Ijma’ replaces the need for the Sunnah once established"],
    correct:1, explain:"This is the single principle examiners reward most: strict hierarchy, and no source may ever contradict the Qur’an." },

  { id:"2-3--qiyas--q3", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"qiyas",
    q:"In the qiyas framework, what is the ‘asl’?",
    choices:["The new case with no direct textual ruling","The shared underlying reason","The original case already ruled on directly by the Qur’an or Sunnah","The final transferred ruling"],
    correct:2, explain:"Asl = the original, textually-settled case (e.g. the Qur’anic prohibition of khamr) that a new case is compared against." },

  { id:"2-3--qiyas--q4", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"qiyas",
    q:"Why is qiyas used only as a last resort, after the other three sources?",
    choices:["It’s considered less important than the beliefs it produces","Because it depends on human reasoning to identify the shared ’illah correctly, which carries a risk of error a direct text does not","Because the Prophet forbade its use entirely","Because it only applies to matters of worship, not daily life"],
    correct:1, explain:"An incorrectly identified ’illah risks producing a ruling God never actually intended — which is exactly why it’s used last, and only where the first three sources are silent." },

  { id:"2-3--qiyas--q5", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"qiyas",
    q:"What is the modern relevance most commonly tested about ijma’ and qiyas?",
    choices:["Whether they were ever used historically at all","Whether they are more or less important today, given questions the 7th-century sources never addressed directly","Whether the Qur’an ever mentions them by name","Whether only the four Rightly Guided Caliphs were allowed to use them"],
    correct:1, explain:"This is the classic AO2 (b)-part prompt — modern medicine, finance and technology raise new questions arguably making both sources more essential now." },

  { id:"2-3--qiyas--q6", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"qiyas",
    q:"Which source of Islamic law comes fourth, and what are its four components called?",
    choices:["Ijma’ — asl, far’, hukm, illah","Qiyas — asl, far’, ’illah, hukm","Sunnah — matn, isnad, sahih, da’if","Qur’an — makki, madani, naskh, mansukh"],
    correct:1, explain:"Qiyas: asl (original case), far’ (new case), ’illah (shared reason), hukm (transferred ruling)." }

];
