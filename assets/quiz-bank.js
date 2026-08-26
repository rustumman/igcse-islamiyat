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
    q:"Which of these correctly describes Madani surahs?",
    choices:["86 surahs, shorter verses, themes of tawhid and past nations","28 surahs, longer verses, themes of Islamic law, the pillars, and battles","114 surahs, revealed only in Makkah","28 surahs revealed before the Hijrah"],
    correct:1, explain:"Madani surahs number 28, were revealed after the Hijrah to Madinah, tend to be longer with legislative content, and cover Islamic law, the five pillars, and the battles and events of the Madinan state. The 86-surah, tawhid/past-nations description belongs to the Makki surahs instead." },

  { id:"2-1--makki-madani-surahs--q2", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"makki-madani-surahs",
    q:"How many surahs are classified as Makki, and how many as Madani?",
    choices:["86 Makki, 28 Madani","28 Makki, 86 Madani","57 Makki, 57 Madani","100 Makki, 14 Madani"],
    correct:0, explain:"86 Makki surahs (before the Hijrah) plus 28 Madani surahs (after it) make up the Qur’an’s 114 surahs in total." },

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
