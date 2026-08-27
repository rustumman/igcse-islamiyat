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
    q:"According to Qur’an 42:51, how many distinct channels does God use to communicate with a chosen messenger?",
    choices:["One","Two","Three","Five"],
    correct:2, explain:"42:51 names three channels: inspiration without an intermediary, speech from behind a veil, and revelation through a sent messenger." },

  { id:"2-1--conditions-of-revelation--q2", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"conditions-of-revelation",
    q:"Which of the following is NOT one of the three channels named in Qur’an 42:51?",
    choices:["Inspiration without an intermediary","Speech from behind a veil","Revelation through a sent messenger","Revelation through studying earlier scripture"],
    correct:3, explain:"Studying earlier scripture is how Waraqah recognised what had happened to the Prophet — it is not itself one of the three channels named in 42:51." },

  { id:"2-1--conditions-of-revelation--q3", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"conditions-of-revelation",
    q:"What was the very first form of revelation the Prophet experienced, even before his prophethood formally began?",
    choices:["True dreams","The sound of a ringing bell","Direct, unmediated speech from God","Jibreel appearing as a man"],
    correct:0, explain:"’A’ishah reported that his earliest dreams “came true like the rising of the sun,” predating the start of his mission." },

  { id:"2-1--conditions-of-revelation--q4", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"conditions-of-revelation",
    q:"Which prophet’s dream, commanding him to sacrifice his son, is given as an example of revelation through dreams?",
    choices:["Musa","Ibrahim","Dawud","Yunus"],
    correct:1, explain:"Ibrahim’s dream of sacrificing Isma’il (Qur’an 37:102) is the classic example of a prophetic dream carrying real, actionable instruction." },

  { id:"2-1--conditions-of-revelation--q5", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"conditions-of-revelation",
    q:"Which later event is described as the fulfilment of a dream the Prophet had seen, according to Qur’an 48:27?",
    choices:["Entering Makkah to perform ’Umrah, fulfilled after the Treaty of Hudaybiyyah","The Battle of Badr","The Night Journey and Ascension","The first revelation in the Cave of Hira"],
    correct:0, explain:"The Prophet’s dream of performing ’Umrah in Makkah was fulfilled the following year, as promised in the Treaty of Hudaybiyyah — confirmed in 48:27." },

  { id:"2-1--conditions-of-revelation--q6", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"conditions-of-revelation",
    q:"Did the actual text of the Qur’an ever come to the Prophet through a dream?",
    choices:["No — scholars hold that the Qur’an’s text was never delivered this way","Yes — most of it came through dreams","Yes, but only the final surah","This cannot be determined"],
    correct:0, explain:"Dreams were a genuine channel of revelation for the Prophet, but not for the actual wording of the Qur’an itself." },

  { id:"2-1--conditions-of-revelation--q7", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"conditions-of-revelation",
    q:"Direct speech “from behind a veil” is exemplified by God’s communication with which prophet at Mount Tur?",
    choices:["Musa","Ibrahim","’Isa","Nuh"],
    correct:0, explain:"Qur’an 7:143 describes God speaking directly to Musa at Mount Tur — the classic example of speech from behind a veil." },

  { id:"2-1--conditions-of-revelation--q8", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"conditions-of-revelation",
    q:"During which event is the Prophet reported to have experienced something like “speech from behind a veil” himself?",
    choices:["The Night Journey and Ascension (al-Isra’ wal-Mi’raj)","The first revelation in the Cave of Hira","The Battle of Uhud","The migration to Madinah"],
    correct:0, explain:"When asked whether he saw God during al-Isra’ wal-Mi’raj, the Prophet replied, “Light — how could I see Him?”, describing a veil of light." },

  { id:"2-1--conditions-of-revelation--q9", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"conditions-of-revelation",
    q:"Who is the angel God chose as the primary messenger of revelation to the prophets?",
    choices:["Jibreel","Mika’il","Israfil","Azra’il"],
    correct:0, explain:"Jibreel is identified in the Qur’an (e.g. 2:97, 26:192–194) as the trustworthy angel who brought revelation down." },

  { id:"2-1--conditions-of-revelation--q10", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"conditions-of-revelation",
    q:"What happened to the angels of heaven, according to the hadith describing how Jibreel first received revelation from God?",
    choices:["They fell into a swoon at the sound of God’s speech","They immediately relayed it to the Prophet themselves","They argued about its meaning","Nothing — only Jibreel was present"],
    correct:0, explain:"The hadith describes the angels falling into a swoon at the sound of God’s speech, with Jibreel the first to raise his head afterwards." },

  { id:"2-1--conditions-of-revelation--q11", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"conditions-of-revelation",
    q:"When the other angels ask Jibreel what God said, how does he reply, according to the hadith (referencing Qur’an 34:23)?",
    choices:["“The Truth” — and He is the Most High, the Most Great","“I cannot tell you”","“Ask Muhammad”","“It is a secret”"],
    correct:0, explain:"Jibreel answers “The Truth,” per the hadith connected to Qur’an 34:23." },

  { id:"2-1--conditions-of-revelation--q12", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"conditions-of-revelation",
    q:"Which of the following describes the “hardest” form Jibreel used to deliver revelation to the Prophet?",
    choices:["The sound of a ringing bell","Jibreel appearing as a man","A true dream","Speech from behind a veil"],
    correct:0, explain:"The bell-like sound is explicitly described by the Prophet as the hardest form of revelation to receive." },

  { id:"2-1--conditions-of-revelation--q13", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"conditions-of-revelation",
    q:"Which form of revelation via Jibreel was easier for the Prophet to receive?",
    choices:["Jibreel appearing in the form of a man and speaking directly","The sound of a ringing bell","A dream during sleep","Direct, unmediated speech"],
    correct:0, explain:"The Prophet himself described the man-form as easier than the bell-like sound." },

  { id:"2-1--conditions-of-revelation--q14", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"conditions-of-revelation",
    q:"Who asked the Prophet directly, “How is the divine message revealed to you?”, prompting the famous description of the bell and the man?",
    choices:["Waraqah ibn Nawfal","Harith ibn Hisham (reported via ’A’ishah)","Zayd ibn Thabit","Abu Dharr"],
    correct:1, explain:"’A’ishah reported that Harith ibn Hisham asked the Prophet this question directly, prompting his description of the two forms." },

  { id:"2-1--conditions-of-revelation--q15", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"conditions-of-revelation",
    q:"On what occasion did Jibreel appear to the Prophet in his true, full angelic form?",
    choices:["Rarely — most famously at the very first revelation in the Cave of Hira","Every single time revelation was delivered","Only after the Prophet’s death","Only during the Hijrah"],
    correct:0, explain:"Jibreel’s true angelic form was seen only on rare occasions, most notably during the first revelation." },

  { id:"2-1--conditions-of-revelation--q16", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"conditions-of-revelation",
    q:"What physical sign did ’A’ishah report even on the coldest of days when the Prophet received revelation?",
    choices:["His forehead would be running with sweat","He would fall asleep instantly","He would lose his voice","He would shiver uncontrollably"],
    correct:0, explain:"’A’ishah observed that his forehead would be sweating by the time a revelation ended, even in cold weather." },

  { id:"2-1--conditions-of-revelation--q17", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"conditions-of-revelation",
    q:"Which companion described the Prophet’s face changing colour and his head lowering during revelation?",
    choices:["’Ubadah ibn as-Samit","Ya’la ibn Umayyah","Zayd ibn Thabit","Waraqah ibn Nawfal"],
    correct:0, explain:"’Ubadah ibn as-Samit gave this specific description of the Prophet’s face and posture during revelation." },

  { id:"2-1--conditions-of-revelation--q18", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"conditions-of-revelation",
    q:"During which state was the Prophet in when Ya’la ibn Umayyah observed his face turn deep red with a sound like snoring?",
    choices:["While asleep at home","While in the state of ihram","While leading prayer","While travelling to Madinah"],
    correct:1, explain:"Ya’la ibn Umayyah made this observation while the Prophet was in ihram, standing close enough to witness it directly." },

  { id:"2-1--conditions-of-revelation--q19", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"conditions-of-revelation",
    q:"Which companion reported that the Prophet’s thigh became so heavy during revelation that he feared his own thigh would be crushed?",
    choices:["Zayd ibn Thabit","’Ubadah ibn as-Samit","Ya’la ibn Umayyah","Khadija bint Khuwaylid"],
    correct:0, explain:"Zayd ibn Thabit reported this account of physical weight during a revelation while his thigh was beneath the Prophet’s." },

  { id:"2-1--conditions-of-revelation--q20", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"conditions-of-revelation",
    q:"Which Qur’an verse describes revelation in terms matching this sense of physical weight?",
    choices:["Qur’an 25:32","Qur’an 73:5 — “a heavy word”","Qur’an 96:1–5","Qur’an 42:51"],
    correct:1, explain:"Qur’an 73:5 states, “Verily, We shall cast upon you a heavy word,” matching the physical sense of weight companions described." },

  { id:"2-1--conditions-of-revelation--q21", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"conditions-of-revelation",
    q:"Why does this lesson argue that the “hardest” form of revelation (the bell-sound) mattered, rather than God only ever using the easier form?",
    choices:["It reflects the seriousness and weight of what was being delivered, not just the Prophet’s comfort","It made the Prophet stronger physically over time","It was used only once and then abandoned","It has no particular significance"],
    correct:0, explain:"The continued use of the harder form throughout 23 years is read as a sign the process was about conveying weighty truth, not mere convenience." },

  { id:"2-1--conditions-of-revelation--q22", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"conditions-of-revelation",
    q:"Why might the variety of physical signs described by different companions strengthen the historical case for their authenticity?",
    choices:["Independent witnesses reporting different but consistent physical effects is harder to dismiss as a single invented story","It proves nothing at all","It shows the companions disagreed and cannot be trusted","It means the signs were exaggerated for effect"],
    correct:0, explain:"Multiple independent companions describing different but compatible physical effects strengthens rather than weakens the historical record." },

  { id:"2-1--conditions-of-revelation--q23", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"conditions-of-revelation",
    q:"Which lesson should a student use for a question about the specific Cave of Hira narrative, rather than this lesson?",
    choices:["The “First Revelation” lesson","The “Why Gradual Revelation” lesson","The “Makki and Madani Surahs” lesson","None — this lesson covers it fully"],
    correct:0, explain:"The Cave of Hira story, Khadija and Waraqah belong to the dedicated “First Revelation” lesson, not this one." },

  { id:"2-1--conditions-of-revelation--q24", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"conditions-of-revelation",
    q:"Which lesson should a student use for a question about why revelation was spread across 23 years?",
    choices:["The “Why Gradual Revelation” lesson","This lesson (“Conditions of Revelation”)","The “Makki and Madani Surahs” lesson","None of the above"],
    correct:0, explain:"Timing and pacing questions belong to the “Why Gradual Revelation” lesson, not this one, which covers the forms revelation took." },

  { id:"2-1--conditions-of-revelation--q25", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"conditions-of-revelation",
    q:"Which three real past-paper questions does this lesson’s “forms of revelation” material most directly answer, in their part (a)?",
    choices:["J21 s11, J23 s12, and N24 w11","J22 s12 and J23 s11 only","N25 w11 only","None — this content has never been examined"],
    correct:0, explain:"These three sessions all set “different ways revelation came to the Prophet” as their part (a), each paired with a different part (b)." },

  { id:"2-1--conditions-of-revelation--q26", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"conditions-of-revelation",
    q:"What is the most common mark-losing mistake on the “different ways revelation came” question, according to this lesson’s Exam Lab notes?",
    choices:["Answering with the Cave of Hira narrative instead of the range of forms revelation took","Writing too briefly","Quoting too many Qur’an verses","Discussing Khadija in too much detail"],
    correct:0, explain:"Candidates frequently substitute the specific first-revelation story for the broader “range of forms” this question actually asks for." },

  { id:"2-1--conditions-of-revelation--q27", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"conditions-of-revelation",
    q:"Which academic source structures this lesson’s account of the procedure of wahy?",
    choices:["Chapter 3, “Inspiration — al-Wahy,” in Yasir Qadhi’s An Introduction to the Sciences of the Qur’aan","Ibn Ishaq’s Sirat Rasul Allah","The Sealed Nectar by Safiur Rahman al-Mubarakpuri","Sahih Muslim alone"],
    correct:0, explain:"This lesson follows Chapter 3, Section III (“The Procedure of Wahy”) of Yasir Qadhi’s book." },

  { id:"2-1--conditions-of-revelation--q28", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"conditions-of-revelation",
    q:"Why, according to this lesson, might it matter as evidence of authenticity that the Qur’an’s actual wording never came through a private dream?",
    choices:["A dream is unverifiable by anyone else, while an angel’s appearance with observable physical effects could at least be partly witnessed","Dreams are considered unreliable in every context","The Prophet never had any dreams at all","It has no bearing on authenticity"],
    correct:0, explain:"Choosing the more externally observable channel, with physical effects others could see, is harder to dismiss as a purely private, unverifiable claim." },

  { id:"2-1--conditions-of-revelation--q29", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"conditions-of-revelation",
    q:"What term describes the phrase “true dream” used in the hadith about what remains of prophethood after the Prophet’s death?",
    choices:["Mubashshirat (glad tidings)","Wahy matluww","Hadith Qudsi","Asbab an-nuzul"],
    correct:0, explain:"The Prophet described what remains of prophethood as “mubashshirat,” explained as a true dream." },

  { id:"2-1--conditions-of-revelation--q30", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"conditions-of-revelation",
    q:"What is the safest exam strategy for distinguishing this lesson’s content from the “Why Gradual Revelation” lesson’s content?",
    choices:["This lesson covers the forms revelation took; the other covers why it was spread over time","They are the same content and can be used interchangeably","This lesson only covers dreams; the other covers everything else","Neither lesson is linked to any real past paper"],
    correct:0, explain:"Keeping “forms” (this lesson) and “timing” (the sibling lesson) separate is the key distinction examiners test for." },

  { id:"2-1--why-gradual-revelation--q1", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"why-gradual-revelation",
    q:"According to Qur’an 25:32, why did opponents object to how the Qur’an was revealed?",
    choices:["They said it should not have been revealed to an Arab","They asked why it was not revealed all at once","They said it should have been revealed only in Madinah","They said it should have been written before being recited"],
    correct:1, explain:"The objection recorded in 25:32 is specifically that the Qur’an was not revealed all at once, unlike earlier scriptures." },

  { id:"2-1--why-gradual-revelation--q2", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"why-gradual-revelation",
    q:"Which earlier prophet’s scripture does the Qur’an cite as an example of revelation given complete, in one piece?",
    choices:["’Isa’s Injeel","Musa’s Tawrah","Ibrahim’s Suhuf","Dawud’s Zabur"],
    correct:1, explain:"Qur’an 7:144–154 confirms Musa received the Tawrah all at once, unlike the Qur’an’s gradual delivery." },

  { id:"2-1--why-gradual-revelation--q3", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"why-gradual-revelation",
    q:"What is the first of the three stages by which the Qur’an reached the Prophet?",
    choices:["Written on al-Lawh al-Mahfuz, the Preserved Tablet","Recited by Jibreel directly to the Quraysh","Sent piecemeal over 23 years","Memorised by the angels in heaven"],
    correct:0, explain:"The first stage was its eternal inscription on al-Lawh al-Mahfuz, the Preserved Tablet, before creation." },

  { id:"2-1--why-gradual-revelation--q4", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"why-gradual-revelation",
    q:"In the second stage, where and when was the whole Qur’an sent down at once?",
    choices:["To Bayt al-’Izzah in the lowest heaven, on Laylat al-Qadr in Ramadan","To the Cave of Hira, on the night of the first revelation","To Madinah, on the night of the Hijrah","To Jibreel’s own dwelling, at an unspecified time"],
    correct:0, explain:"The complete Qur’an descended to Bayt al-’Izzah (“the House of Honour”) in the lowest heaven on Laylat al-Qadr, in Ramadan." },

  { id:"2-1--why-gradual-revelation--q5", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"why-gradual-revelation",
    q:"In the third stage, how was the Qur’an delivered to the Prophet?",
    choices:["Piecemeal, by Jibreel, over approximately 23 years","All at once, in a single night","Directly by God, without an intermediary","Through dreams only"],
    correct:0, explain:"The third stage was Jibreel bringing the Qur’an to the Prophet in portions, over roughly 23 years, according to circumstances." },

  { id:"2-1--why-gradual-revelation--q6", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"why-gradual-revelation",
    q:"According to the classical scholar Abu Shama, what “double honour” did the middle stage (Bayt al-’Izzah) give the Prophet?",
    choices:["It matched him to earlier prophets in one respect, while distinguishing him by piecemeal delivery afterwards","It proved he could read and write","It gave him permission to reveal the Qur’an himself","It meant he never needed to memorise anything"],
    correct:0, explain:"Abu Shama explained that the initial complete descent matched the pattern of earlier prophets, while the following piecemeal delivery uniquely honoured Muhammad (pbuh)." },

  { id:"2-1--why-gradual-revelation--q7", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"why-gradual-revelation",
    q:"What is the strongest scholarly opinion on how long revelation continued?",
    choices:["10 years","20 years","23 years","40 years"],
    correct:2, explain:"The strongest and most widely held opinion is 23 years, based on the Prophet beginning his mission at 40 and passing away at 63." },

  { id:"2-1--why-gradual-revelation--q8", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"why-gradual-revelation",
    q:"Why is there some scholarly disagreement over the exact length of the revelation period?",
    choices:["Because the Prophet’s exact age at death is itself disputed (60, 63 or 65)","Because nobody recorded when revelation began","Because the Qur’an gives three different figures","Because Jibreel visited on an irregular calendar"],
    correct:0, explain:"All scholars agree the Prophet was forty when his mission began and spent ten years in Madinah — the dispute is over his exact age at death." },

  { id:"2-1--why-gradual-revelation--q9", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"why-gradual-revelation",
    q:"Roughly how many verses did Jibreel typically bring at one time, according to authenticated narrations?",
    choices:["It varied — sometimes five or ten verses, sometimes less","Always exactly one full surah","Always exactly one hundred verses","Always the same fixed number every time"],
    correct:0, explain:"The quantity varied by situation — sometimes five or ten verses, sometimes even a small part of a single verse." },

  { id:"2-1--why-gradual-revelation--q10", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"why-gradual-revelation",
    q:"Which reason for gradual revelation is stated explicitly within the Qur’an’s own text, in 25:32?",
    choices:["To strengthen the Prophet’s heart","To make the Qur’an rhyme better","To confuse the Quraysh","To shorten the overall text"],
    correct:0, explain:"Qur’an 25:32 states directly that spacing out the revelation was “that We may strengthen your heart thereby.”" },

  { id:"2-1--why-gradual-revelation--q11", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"why-gradual-revelation",
    q:"Why did gradual revelation suit how the Prophet’s community actually learned?",
    choices:["It was a largely oral, unlettered society better able to memorise short portions than a complete book","They preferred written text over recitation","They had no interest in memorising anything","Makkah had no oral tradition at all"],
    correct:0, explain:"Short, regular portions matched a society reliant on memorisation, especially given the Prophet himself could not read or write." },

  { id:"2-1--why-gradual-revelation--q12", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"why-gradual-revelation",
    q:"Which case study is used in this lesson to illustrate gradual, staged legislation?",
    choices:["The prohibition of gambling","The prohibition of alcohol","The introduction of the five daily prayers","The rules of inheritance"],
    correct:1, explain:"The staged prohibition of alcohol (16:67 → 2:219 → 4:43 → 5:90–91) is the lesson’s example of gradual legal implementation." },

  { id:"2-1--why-gradual-revelation--q13", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"why-gradual-revelation",
    q:"What did Qur’an 4:43 specifically restrict, as one stage in the alcohol case study?",
    choices:["Approaching prayer while intoxicated","All consumption of alcohol, at any time","Selling alcohol to non-Muslims","Growing grapes"],
    correct:0, explain:"4:43 restricted approaching prayer while intoxicated — an intermediate stage before the full prohibition in 5:90–91." },

  { id:"2-1--why-gradual-revelation--q14", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"why-gradual-revelation",
    q:"Which verse delivers the final, complete prohibition of alcohol?",
    choices:["Qur’an 16:67","Qur’an 2:219","Qur’an 4:43","Qur’an 5:90–91"],
    correct:3, explain:"5:90–91 delivers the final, unambiguous prohibition, describing intoxicants as defilement from the work of Satan." },

  { id:"2-1--why-gradual-revelation--q15", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"why-gradual-revelation",
    q:"What is meant by “asbab an-nuzul”?",
    choices:["The causes or occasions of revelation — the real events verses responded to","The rules for reciting the Qur’an aloud","The names of the surahs","The science of Hadith authentication"],
    correct:0, explain:"Asbab an-nuzul refers to the specific historical events or questions that prompted particular revelations." },

  { id:"2-1--why-gradual-revelation--q16", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"why-gradual-revelation",
    q:"Why does responding to real events (asbab an-nuzul) make gradual revelation more effective?",
    choices:["Guidance tied to an actual situation carries more relevance and conviction than abstract advance rules","It makes the Qur’an shorter overall","It means no laws were ever needed","It removed the need for the Prophet to explain anything"],
    correct:0, explain:"Verses answering a real, live problem land with more force and relevance than rules issued with no immediate context." },

  { id:"2-1--why-gradual-revelation--q17", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"why-gradual-revelation",
    q:"How does the Makki-to-Madani shift (belief first, then law) connect to gradual revelation?",
    choices:["Core belief had to be established before a community existed that detailed law could apply to","It shows belief and law were always revealed simultaneously","It shows Madani surahs came before Makki surahs","It has no connection to gradual revelation at all"],
    correct:0, explain:"Detailed legislation only makes sense for an existing, believing community — which is why belief (Makki) preceded law (Madani)." },

  { id:"2-1--why-gradual-revelation--q18", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"why-gradual-revelation",
    q:"What is described in this lesson as a “standing miracle” of gradual revelation?",
    choices:["The Qur’an’s stylistic and thematic consistency despite 23 years of fragmented, varied circumstances","The exact number of verses in the Qur’an","The fact that it was written in Arabic","The fact that it has 114 surahs"],
    correct:0, explain:"Remaining consistent across decades of fragmented delivery, under wildly different circumstances, is seen by Muslims as evidence against ordinary human authorship." },

  { id:"2-1--why-gradual-revelation--q19", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"why-gradual-revelation",
    q:"Which angel is described as “trustworthy” in Qur’an 26:193, guaranteeing the revelation was safely delivered?",
    choices:["Mika’il","Jibreel","Israfil","Malik"],
    correct:1, explain:"Qur’an 26:193 describes Jibreel as “the trustworthy Spirit,” safeguarding the Qur’an’s accurate delivery." },

  { id:"2-1--why-gradual-revelation--q20", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"why-gradual-revelation",
    q:"What did God guarantee the Prophet regarding his memory of the revelation, according to Qur’an 75:16–19?",
    choices:["That his memory of it and his ability to recite it were secured by God","That he would never need to recite it again","That Jibreel would write it down for him","That he could forget parts without consequence"],
    correct:0, explain:"75:16–19 instructs the Prophet not to rush his recitation, as God Himself guaranteed its collection and his ability to recite it." },

  { id:"2-1--why-gradual-revelation--q21", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"why-gradual-revelation",
    q:"According to Qur’an 5:67, what would happen if the Prophet failed to convey the revelation he received?",
    choices:["It would mean he had failed in his very mission as a messenger","Nothing — conveying it was optional","Jibreel would convey it instead","The revelation would be lost forever"],
    correct:0, explain:"5:67 makes conveying the message a condition of the Prophet’s mission itself — failure to do so would mean failing that mission." },

  { id:"2-1--why-gradual-revelation--q22", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"why-gradual-revelation",
    q:"Which verses rule out the possibility that the Prophet fabricated the revelation himself?",
    choices:["53:3–4 and 69:44–46","2:185 and 97:1","26:192–194 only","7:144–154"],
    correct:0, explain:"53:3–4 states he does not speak from his own desire, and 69:44–46 warns of severe punishment for forging a false revelation." },

  { id:"2-1--why-gradual-revelation--q23", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"why-gradual-revelation",
    q:"Why does “The Qur’an has remained unchanged since revelation” benefit Muslims today, according to this lesson?",
    choices:["It gives confidence the text is the same message revealed 1,400 years ago, unifying belief and law worldwide","It means no translation of the Qur’an is ever needed","It means every Muslim automatically memorises it","It has no practical benefit, only historical interest"],
    correct:0, explain:"Knowing the text is unaltered gives Muslims a single, trustworthy, unifying reference point for belief and law across the world." },

  { id:"2-1--why-gradual-revelation--q24", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"why-gradual-revelation",
    q:"Which past-paper question is explicitly about the “forms” revelation took, rather than why it came gradually?",
    choices:["“Different ways revelation came to the Prophet” (e.g. N24 w11 part a)","“Why was it important for revelations to come over time?” (J23 s12 part b)","“Significance of the Qur’an being revealed over 23 years” (J22 s12 part b)","All of the above are about gradual revelation"],
    correct:0, explain:"“Different ways revelation came” tests the forms of wahy (e.g. bell-sound, angel as a man) — a separate topic from this lesson’s focus on why revelation was gradual." },

  { id:"2-1--why-gradual-revelation--q25", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"why-gradual-revelation",
    q:"Which two real past-paper questions does this lesson’s “why gradual” material most directly answer?",
    choices:["J22 s12(b) and J23 s12(b)","J21 s11(a) and N24 w11(a)","Only questions about the compilation of the Qur’an","Only questions about Makki and Madani surahs"],
    correct:0, explain:"J22 s12(b) (“significance of 23 years”) and J23 s12(b) (“why important for revelations to come over time”) are functionally the same underlying question this lesson equips students to answer." },

  { id:"2-1--why-gradual-revelation--q26", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"why-gradual-revelation",
    q:"What is the primary academic source this lesson’s account of the three stages and safeguards is drawn from?",
    choices:["Chapter 4, “Gradual Revelation,” in Yasir Qadhi’s An Introduction to the Sciences of the Qur’aan","Sahih Muslim alone","The Sealed Nectar by Safiur Rahman al-Mubarakpuri","Ibn Ishaq’s Sirat Rasul Allah"],
    correct:0, explain:"This lesson follows Chapter 4 of Yasir Qadhi’s An Introduction to the Sciences of the Qur’aan for the stages of revelation and the safeguards against corruption." },

  { id:"2-1--why-gradual-revelation--q27", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"why-gradual-revelation",
    q:"Why does this lesson note that its list of “wisdom” reasons was built from broader scholarship rather than quoted directly from the project’s copy of Qadhi’s book?",
    choices:["The Drive extraction of the book cuts off before reaching that specific section","Qadhi’s book does not discuss the wisdom of gradual revelation at all","The reasons are disputed and have no scholarly basis","The syllabus forbids referencing that section"],
    correct:0, explain:"The available extracted copy of Qadhi’s book ends partway through Chapter 4, before its “Wisdom Behind the Gradual Revelation” section — so that material was built from cross-checked standard scholarship instead." },

  { id:"2-1--why-gradual-revelation--q28", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"why-gradual-revelation",
    q:"What is the safest way to distinguish “why gradual revelation mattered” answers from “different ways revelation came” answers in an exam?",
    choices:["Focus on reasons for timing and pacing, not on the physical forms wahy took","Always answer both questions the same way","Focus only on Jibreel’s physical appearance","Focus only on the length of individual surahs"],
    correct:0, explain:"“Why gradual” questions want reasons for the 23-year pacing; “different ways” questions want the physical forms revelation took — keep the two separate." },

  { id:"2-1--why-gradual-revelation--q29", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"why-gradual-revelation",
    q:"Which verse pairs with 25:32 to form the core Qur’anic justification cited in this lesson for gradual revelation?",
    choices:["Qur’an 96:1–5","No second verse is needed — 25:32 alone gives the Qur’an’s own explicit reason","Qur’an 112:1–4","Qur’an 108:1–3"],
    correct:1, explain:"25:32 is the Qur’an’s own direct statement of purpose (“that We may strengthen your heart thereby”) — the other reasons in this lesson are scholarly elaborations built around it." },

  { id:"2-1--why-gradual-revelation--q30", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"why-gradual-revelation",
    q:"What overall exam strategy does this lesson recommend for “why gradual” questions worth 4 marks?",
    choices:["Name and briefly develop three to four genuinely distinct reasons, not one reason repeated","Write as much as possible about the first revelation narrative instead","Give only one very long, detailed reason","List every verse number you can remember without explanation"],
    correct:0, explain:"Full marks come from distinct, developed points — three to four separate reasons briefly explained beats one idea repeated in different words." },

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
    q:"How many independent “tracks” of preservation does this lesson describe as running during the Prophet’s lifetime?",
    choices:["One","Two","Three","Four"],
    correct:1, explain:"The two tracks were memorisation (by the huffaz) and writing (by the Scribes of the Revelation), running in parallel." },

  { id:"2-1--preservation-of-quran--q2", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"preservation-of-quran",
    q:"What were companions who had memorised the entire Qur’an called?",
    choices:["Kuttab","Huffaz","Qurra’ al-Ashara","Ansar"],
    correct:1, explain:"Huffaz is the term for those who had committed the complete Qur’an to memory." },

  { id:"2-1--preservation-of-quran--q3", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"preservation-of-quran",
    q:"Roughly how many huffaz were there by the time of the Prophet’s death?",
    choices:["About a dozen","About fifty","In the hundreds","Over ten thousand"],
    correct:2, explain:"By the Prophet’s death, companions who had memorised the entire Qur’an numbered in the hundreds." },

  { id:"2-1--preservation-of-quran--q4", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"preservation-of-quran",
    q:"According to the hadith in Sahih al-Bukhari, which four companions did the Prophet specifically recommend learning Qur’anic recitation from?",
    choices:["’Abdullah ibn Mas’ud, Salim, Mu’adh ibn Jabal, and Ubay ibn Ka’b","Abu Bakr, ’Umar, ’Uthman, and ’Ali","Zayd ibn Thabit, Khadija, Waraqah, and ’A’ishah","Bilal, Salman, Suhayb, and ’Ammar"],
    correct:0, explain:"The Prophet named these four specifically as reliable teachers of Qur’anic recitation, per Sahih al-Bukhari." },

  { id:"2-1--preservation-of-quran--q5", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"preservation-of-quran",
    q:"What was the title given to the companions who wrote down the Qur’an as it was revealed?",
    choices:["Kuttab al-Wahy (Scribes of the Revelation)","Huffaz al-Qur’an","Ahl as-Suffah","Al-Muhajirun"],
    correct:0, explain:"Kuttab al-Wahy, “Scribes of the Revelation,” is the specific title for those who wrote down verses as they came." },

  { id:"2-1--preservation-of-quran--q6", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"preservation-of-quran",
    q:"Which companion is named in this lesson as one of the Scribes of the Revelation, and later played a central role in compiling the Qur’an after the Prophet’s death?",
    choices:["Zayd ibn Thabit","Waraqah ibn Nawfal","’Ubadah ibn as-Samit","Ya’la ibn Umayyah"],
    correct:0, explain:"Zayd ibn Thabit served as a scribe during the Prophet’s lifetime and was later chosen to lead the compilation of the Qur’an after his death." },

  { id:"2-1--preservation-of-quran--q7", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"preservation-of-quran",
    q:"Which of the following was NOT one of the materials used to write down verses during the Prophet’s lifetime, according to this lesson?",
    choices:["Palm-leaf stalks","Shoulder blades of animals","Sheets of paper from a bound printed book","Pieces of leather and parchment"],
    correct:2, explain:"No printed paper or bound book existed yet — materials included palm-leaf stalks, flat stones, shoulder blades, leather and parchment." },

  { id:"2-1--preservation-of-quran--q8", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"preservation-of-quran",
    q:"Why, according to this lesson, was there still no single bound copy of the Qur’an during the Prophet’s own lifetime?",
    choices:["Revelation was still ongoing, and verses could still be abrogated or reassigned in order","Writing materials did not exist at all","The Prophet forbade anyone from writing the Qur’an down","No companions were literate enough to write"],
    correct:0, explain:"Binding a book before revelation itself had finished, while verses could still be abrogated or reordered, would not have made sense." },

  { id:"2-1--preservation-of-quran--q9", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"preservation-of-quran",
    q:"Who decided exactly where each new verse should be placed within its surah?",
    choices:["Each individual scribe, using his own judgement","The Prophet, following Jibreel’s instruction","Abu Bakr, after the Prophet’s death","A council of huffaz"],
    correct:1, explain:"The Prophet personally directed, on Jibreel’s instruction, exactly where each verse belonged — this was never left to a scribe’s own choice." },

  { id:"2-1--preservation-of-quran--q10", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"preservation-of-quran",
    q:"How often did Jibreel review the revealed Qur’an with the Prophet?",
    choices:["Only once, at the very end of his life","Every Ramadan","Every Friday","Only during the Hijrah"],
    correct:1, explain:"Jibreel reviewed everything revealed so far with the Prophet every Ramadan throughout his prophethood." },

  { id:"2-1--preservation-of-quran--q11", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"preservation-of-quran",
    q:"What was different about the Ramadan review in the final year of the Prophet’s life?",
    choices:["It happened twice instead of once","It did not happen at all that year","It was conducted by Zayd ibn Thabit instead of Jibreel","It included only half of the Qur’an"],
    correct:0, explain:"In his final Ramadan, the review with Jibreel happened twice — later understood by companions as a sign his death was approaching." },

  { id:"2-1--preservation-of-quran--q12", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"preservation-of-quran",
    q:"Who is reported to have been present for the Prophet’s final, doubled Ramadan review?",
    choices:["Zayd ibn Thabit","Waraqah ibn Nawfal","Khadija bint Khuwaylid","’Ubadah ibn as-Samit"],
    correct:0, explain:"Zayd ibn Thabit is reported to have been present for this final review, part of why Abu Bakr later chose him to lead compilation." },

  { id:"2-1--preservation-of-quran--q13", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"preservation-of-quran",
    q:"Besides writing the Qur’an, what other tasks did the Scribes of the Prophet perform?",
    choices:["Writing letters to rulers, recording treaties, and keeping administrative records","Leading the five daily prayers in the Prophet’s absence","Collecting the zakat in person from every household","Teaching the Arabic alphabet to children"],
    correct:0, explain:"The same body of scribes also wrote diplomatic letters, treaty terms (such as Hudaybiyyah), and administrative/zakat records." },

  { id:"2-1--preservation-of-quran--q14", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"preservation-of-quran",
    q:"Which treaty is given as an example of an agreement the Scribes recorded in writing?",
    choices:["The Treaty of Hudaybiyyah","The Constitution of Madinah","The Treaty of Yamama","The Pledge of ’Aqabah"],
    correct:0, explain:"The Treaty of Hudaybiyyah is the example given of a formal agreement the Scribes recorded." },

  { id:"2-1--preservation-of-quran--q15", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"preservation-of-quran",
    q:"Which two companions does this lesson name as the ones most closely associated with recording the Qur’an specifically, among the several dozen who served as scribes?",
    choices:["Zayd ibn Thabit and Ubay ibn Ka’b","Abu Bakr and ’Umar","Waraqah and Khadija","Bilal and Salman"],
    correct:0, explain:"Zayd ibn Thabit and Ubay ibn Ka’b are the two names that recur most often in connection with writing down the Qur’an." },

  { id:"2-1--preservation-of-quran--q16", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"preservation-of-quran",
    q:"What is the key difference between “Scribes of the Prophet” and “Scribes of the Revelation” as titles?",
    choices:["“Scribes of the Prophet” is the broader title, covering Qur’an-writing plus letters and administrative records; “Scribes of the Revelation” refers specifically to Qur’an-writing","They refer to two completely unrelated groups of people","“Scribes of the Revelation” is the broader title","There is no difference — the terms are fully interchangeable in every source"],
    correct:0, explain:"“Scribes of the Prophet” covers a wider range of secretarial duties; “Scribes of the Revelation” (Kuttab al-Wahy) refers specifically to those recording the Qur’an." },

  { id:"2-1--preservation-of-quran--q17", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"preservation-of-quran",
    q:"Why did having both memorisation and writing matter, rather than relying on just one method?",
    choices:["Each track acted as an independent check on the other, making the text far harder to corrupt or lose","Writing was considered more reliable, so memorisation was just a backup with no real value","Memorisation was forbidden, so writing was the only real method","They were actually the same method described two different ways"],
    correct:0, explain:"Two independent tracks meant a single failure in one (a lost document, a mistaken memory) could be checked and corrected against the other." },

  { id:"2-1--preservation-of-quran--q18", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"preservation-of-quran",
    q:"What event, occurring within a year of the Prophet’s death, showed how the memorisation track alone could be put at risk?",
    choices:["The Battle of Yamama, in which a large number of huffaz were killed","The Battle of Badr","The Farewell Pilgrimage","The Treaty of Hudaybiyyah"],
    correct:0, explain:"The Battle of Yamama (12 AH) killed a large number of the Qur’an’s memorisers, prompting the later compilation effort — covered in the following unit." },

  { id:"2-1--preservation-of-quran--q19", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"preservation-of-quran",
    q:"Which unit of this course covers Abu Bakr’s and ’Uthman’s roles in compiling the Qur’an into one book?",
    choices:["A separate unit (2.2), not this lesson","This same lesson, in full","The “Why Gradual Revelation” lesson","The “Conditions of Revelation” lesson"],
    correct:0, explain:"Compilation after the Prophet’s death belongs to a separate unit (2.2), already covered in this project’s textbook, not to this during-his-lifetime lesson." },

  { id:"2-1--preservation-of-quran--q20", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"preservation-of-quran",
    q:"Why does this lesson’s Source Box disclose a gap in the Yasir Qadhi extraction used across this project?",
    choices:["The relevant section of Qadhi’s book (Ch. 8, Section I, p. 125) falls outside the page range currently available, so cross-checked alternative sources were used instead","Yasir Qadhi’s book does not cover this topic at all","The Qadhi extraction contradicts all other sources on this topic","This lesson uses no academic sourcing at all"],
    correct:0, explain:"The available extraction of Qadhi’s book reaches only to roughly page 80, short of Chapter 8’s page 125 — so this lesson draws on other cross-checked material instead." },

  { id:"2-1--preservation-of-quran--q21", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"preservation-of-quran",
    q:"Both Exam Lab questions in this lesson are catalogued by the exam board under which broader topic area?",
    choices:["The First Islamic Community","History and Importance of the Qur’an","Articles of Faith","The Pillars of Islam"],
    correct:0, explain:"Both questions are filed under “The First Islamic Community” because they’re framed around the Scribes as companions, even though their content matches this Qur’an-history lesson closely." },

  { id:"2-1--preservation-of-quran--q22", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"preservation-of-quran",
    q:"In session J22 s11, what part (b) question was paired with “tasks performed by the Scribes”?",
    choices:["Benefits of the Qur’an being available to everyone on the internet","Is it easier to record Islamic knowledge now than in the Prophet’s time?","Why was it important the Qur’an wasn’t revealed all at once?","Significance of the Qur’an being written as a book"],
    correct:0, explain:"J22 s11’s part (b) asked about the benefits of the Qur’an’s availability on the internet." },

  { id:"2-1--preservation-of-quran--q23", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"preservation-of-quran",
    q:"In session N25 w12, what part (b) question was paired with “main roles played by the Scribes of the Prophet”?",
    choices:["Is it easier to record Islamic knowledge now than in the Prophet’s time?","Benefits of the Qur’an being available to everyone on the internet","Significance of the Qur’an being written as a book","How useful is it that Muslims can access the Qur’an in many formats?"],
    correct:0, explain:"N25 w12’s part (b) asked whether recording Islamic knowledge is easier now than in the Prophet’s time." },

  { id:"2-1--preservation-of-quran--q24", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"preservation-of-quran",
    q:"What is the strongest way to answer “Is it easier to record Islamic knowledge now than in the Prophet’s time?” for full marks?",
    choices:["Give a balanced answer: recording is faster and more accessible now, but accuracy still depends on the same kind of careful verification the Scribes and huffaz provided then","Simply answer “yes” with no further explanation","Simply answer “no” with no further explanation","Describe only the writing materials used in the Prophet’s time"],
    correct:0, explain:"This AO2 question rewards weighing both sides rather than a one-sided yes/no answer." },

  { id:"2-1--preservation-of-quran--q25", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"preservation-of-quran",
    q:"What common exam mistake does this lesson’s third Source Box warn candidates about?",
    choices:["Assuming a question filed under “First Islamic Community” cannot be about the Scribes’ Qur’an-writing role","Confusing the Scribes with the Rightly Guided Caliphs","Writing about the wrong battle entirely","Naming the wrong angel as the source of revelation"],
    correct:0, explain:"The Source Box explains that despite the exam board’s topic label, these two questions’ content matches this lesson closely and should not be overlooked." },

  { id:"2-1--preservation-of-quran--q26", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"preservation-of-quran",
    q:"Which of these correctly separates this lesson’s scope from the next unit’s scope?",
    choices:["This lesson: preservation while the Prophet was alive. The next unit: compilation after his death.","This lesson: compilation after his death. The next unit: preservation while he was alive.","Both lessons cover exactly the same time period.","Neither lesson has any defined time period."],
    correct:0, explain:"This lesson is strictly about during-the-Prophet’s-lifetime preservation; the post-death compilation is a separate unit’s territory." },

  { id:"2-1--preservation-of-quran--q27", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"preservation-of-quran",
    q:"What convinced companions, in hindsight, that the Prophet’s death was approaching?",
    choices:["Jibreel’s final Ramadan review of the Qur’an happening twice instead of once","A dream reported by ’A’ishah","The loss of huffaz at the Battle of Yamama","Waraqah ibn Nawfal’s death"],
    correct:0, explain:"The doubling of the final Ramadan review was understood afterwards as a sign that the Prophet’s death was near — the Yamama losses came later, after his death." },

  { id:"2-1--preservation-of-quran--q28", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"preservation-of-quran",
    q:"What role did Arabia’s existing oral culture play in the memorisation track of preservation?",
    choices:["Arabs already prized and practised memorising long tribal poetry, which supported memorising the Qur’an accurately","It played no role at all — memorisation was a completely new skill for Arabs","It made memorisation harder, since poetry and Qur’an were seen as rivals","It only affected the writing track, not memorisation"],
    correct:0, explain:"A culture already skilled at memorising long poetic works gave companions a strong foundation for memorising the Qur’an precisely." },

  { id:"2-1--preservation-of-quran--q29", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"preservation-of-quran",
    q:"Why does the Prophet’s practice of directing verse-placement himself matter for this lesson’s argument?",
    choices:["It shows the Qur’an’s order was fixed by revelation itself, not decided later by editors or compilers","It shows the Qur’an had no fixed order until ’Uthman’s time","It shows the scribes were free to arrange verses however they liked","It has no real significance for preservation"],
    correct:0, explain:"Because the Prophet fixed each verse’s place under Jibreel’s instruction, the order was never left to later editorial choice — reinforcing that the text was safeguarded from the moment of revelation." },

  { id:"2-1--preservation-of-quran--q30", paper:"paper-1", topic:"topic-2", unit:"2-1", lesson:"preservation-of-quran",
    q:"What is the safest way to open an answer that asks specifically about preservation “during the Prophet’s lifetime”?",
    choices:["Describe the two parallel tracks — memorisation and writing — and Jibreel’s Ramadan reviews, without drifting into Abu Bakr or ’Uthman’s later compilation","Start with the Battle of Yamama and Abu Bakr’s compilation","Start with ’Uthman’s standard copies sent to different provinces","Discuss only the Cave of Hira narrative"],
    correct:0, explain:"Keeping strictly to the during-lifetime content (memorisation, writing, Jibreel’s reviews) avoids the most common mark-losing drift into the later, separate compilation story." },

  { id:"2-2--preservation-before-compilation--q1", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"preservation-before-compilation",
    q:"How many independent “tracks” of preservation does this lesson describe as running during the Prophet’s lifetime?",
    choices:["One","Two","Three","Four"],
    correct:1, explain:"The two tracks were memorisation (by the huffaz) and writing (by the Scribes of the Revelation), running in parallel." },

  { id:"2-2--preservation-before-compilation--q2", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"preservation-before-compilation",
    q:"What were companions who had memorised the entire Qur’an called?",
    choices:["Kuttab","Huffaz","Qurra’ al-Ashara","Ansar"],
    correct:1, explain:"Huffaz is the term for those who had committed the complete Qur’an to memory." },

  { id:"2-2--preservation-before-compilation--q3", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"preservation-before-compilation",
    q:"Roughly how many huffaz were there by the time of the Prophet’s death?",
    choices:["About a dozen","About fifty","In the hundreds","Over ten thousand"],
    correct:2, explain:"By the Prophet’s death, companions who had memorised the entire Qur’an numbered in the hundreds." },

  { id:"2-2--preservation-before-compilation--q4", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"preservation-before-compilation",
    q:"According to the hadith in Sahih al-Bukhari, which four companions did the Prophet specifically recommend learning Qur’anic recitation from?",
    choices:["’Abdullah ibn Mas’ud, Salim, Mu’adh ibn Jabal, and Ubay ibn Ka’b","Abu Bakr, ’Umar, ’Uthman, and ’Ali","Zayd ibn Thabit, Khadija, Waraqah, and ’A’ishah","Bilal, Salman, Suhayb, and ’Ammar"],
    correct:0, explain:"The Prophet named these four specifically as reliable teachers of Qur’anic recitation, per Sahih al-Bukhari." },

  { id:"2-2--preservation-before-compilation--q5", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"preservation-before-compilation",
    q:"What was the title given to the companions who wrote down the Qur’an as it was revealed?",
    choices:["Kuttab al-Wahy (Scribes of the Revelation)","Huffaz al-Qur’an","Ahl as-Suffah","Al-Muhajirun"],
    correct:0, explain:"Kuttab al-Wahy, “Scribes of the Revelation,” is the specific title for those who wrote down verses as they came." },

  { id:"2-2--preservation-before-compilation--q6", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"preservation-before-compilation",
    q:"Which companion is named in this lesson as one of the Scribes of the Revelation, and later plays a central role in the very next chapter of this unit?",
    choices:["Zayd ibn Thabit","Waraqah ibn Nawfal","’Ubadah ibn as-Samit","Ya’la ibn Umayyah"],
    correct:0, explain:"Zayd ibn Thabit served as a scribe during the Prophet’s lifetime and goes on to lead the compilation covered in the next chapter, “Compilation under Abu Bakr.”" },

  { id:"2-2--preservation-before-compilation--q7", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"preservation-before-compilation",
    q:"Which of the following was NOT one of the materials used to write down verses during the Prophet’s lifetime, according to this lesson?",
    choices:["Palm-leaf stalks","Shoulder blades of animals","Sheets of paper from a bound printed book","Pieces of leather and parchment"],
    correct:2, explain:"No printed paper or bound book existed yet — materials included palm-leaf stalks, flat stones, shoulder blades, leather and parchment." },

  { id:"2-2--preservation-before-compilation--q8", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"preservation-before-compilation",
    q:"Why, according to this lesson, was there still no single bound copy of the Qur’an during the Prophet’s own lifetime?",
    choices:["Revelation was still ongoing, and verses could still be abrogated or reassigned in order","Writing materials did not exist at all","The Prophet forbade anyone from writing the Qur’an down","No companions were literate enough to write"],
    correct:0, explain:"Binding a book before revelation itself had finished, while verses could still be abrogated or reordered, would not have made sense." },

  { id:"2-2--preservation-before-compilation--q9", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"preservation-before-compilation",
    q:"Who decided exactly where each new verse should be placed within its surah?",
    choices:["Each individual scribe, using his own judgement","The Prophet, following Jibreel’s instruction","Abu Bakr, after the Prophet’s death","A council of huffaz"],
    correct:1, explain:"The Prophet personally directed, on Jibreel’s instruction, exactly where each verse belonged — this was never left to a scribe’s own choice." },

  { id:"2-2--preservation-before-compilation--q10", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"preservation-before-compilation",
    q:"How often did Jibreel review the revealed Qur’an with the Prophet?",
    choices:["Only once, at the very end of his life","Every Ramadan","Every Friday","Only during the Hijrah"],
    correct:1, explain:"Jibreel reviewed everything revealed so far with the Prophet every Ramadan throughout his prophethood." },

  { id:"2-2--preservation-before-compilation--q11", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"preservation-before-compilation",
    q:"What was different about the Ramadan review in the final year of the Prophet’s life?",
    choices:["It happened twice instead of once","It did not happen at all that year","It was conducted by Zayd ibn Thabit instead of Jibreel","It included only half of the Qur’an"],
    correct:0, explain:"In his final Ramadan, the review with Jibreel happened twice — later understood by companions as a sign his death was approaching." },

  { id:"2-2--preservation-before-compilation--q12", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"preservation-before-compilation",
    q:"Who is reported to have been present for the Prophet’s final, doubled Ramadan review?",
    choices:["Zayd ibn Thabit","Waraqah ibn Nawfal","Khadija bint Khuwaylid","’Ubadah ibn as-Samit"],
    correct:0, explain:"Zayd ibn Thabit is reported to have been present for this final review, part of why Abu Bakr later chose him to lead compilation." },

  { id:"2-2--preservation-before-compilation--q13", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"preservation-before-compilation",
    q:"Besides writing the Qur’an, what other tasks did the Scribes of the Prophet perform?",
    choices:["Writing letters to rulers, recording treaties, and keeping administrative records","Leading the five daily prayers in the Prophet’s absence","Collecting the zakat in person from every household","Teaching the Arabic alphabet to children"],
    correct:0, explain:"The same body of scribes also wrote diplomatic letters, treaty terms (such as Hudaybiyyah), and administrative/zakat records." },

  { id:"2-2--preservation-before-compilation--q14", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"preservation-before-compilation",
    q:"Which treaty is given as an example of an agreement the Scribes recorded in writing?",
    choices:["The Treaty of Hudaybiyyah","The Constitution of Madinah","The Treaty of Yamama","The Pledge of ’Aqabah"],
    correct:0, explain:"The Treaty of Hudaybiyyah is the example given of a formal agreement the Scribes recorded." },

  { id:"2-2--preservation-before-compilation--q15", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"preservation-before-compilation",
    q:"Which two companions does this lesson name as the ones most closely associated with recording the Qur’an specifically, among the several dozen who served as scribes?",
    choices:["Zayd ibn Thabit and Ubay ibn Ka’b","Abu Bakr and ’Umar","Waraqah and Khadija","Bilal and Salman"],
    correct:0, explain:"Zayd ibn Thabit and Ubay ibn Ka’b are the two names that recur most often in connection with writing down the Qur’an." },

  { id:"2-2--preservation-before-compilation--q16", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"preservation-before-compilation",
    q:"What is the key difference between “Scribes of the Prophet” and “Scribes of the Revelation” as titles?",
    choices:["“Scribes of the Prophet” is the broader title, covering Qur’an-writing plus letters and administrative records; “Scribes of the Revelation” refers specifically to Qur’an-writing","They refer to two completely unrelated groups of people","“Scribes of the Revelation” is the broader title","There is no difference — the terms are fully interchangeable in every source"],
    correct:0, explain:"“Scribes of the Prophet” covers a wider range of secretarial duties; “Scribes of the Revelation” (Kuttab al-Wahy) refers specifically to those recording the Qur’an." },

  { id:"2-2--preservation-before-compilation--q17", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"preservation-before-compilation",
    q:"Why did having both memorisation and writing matter, rather than relying on just one method?",
    choices:["Each track acted as an independent check on the other, making the text far harder to corrupt or lose","Writing was considered more reliable, so memorisation was just a backup with no real value","Memorisation was forbidden, so writing was the only real method","They were actually the same method described two different ways"],
    correct:0, explain:"Two independent tracks meant a single failure in one (a lost document, a mistaken memory) could be checked and corrected against the other." },

  { id:"2-2--preservation-before-compilation--q18", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"preservation-before-compilation",
    q:"What event, occurring within a year of the Prophet’s death, showed how the memorisation track alone could be put at risk?",
    choices:["The Battle of Yamama, in which a large number of huffaz were killed","The Battle of Badr","The Farewell Pilgrimage","The Treaty of Hudaybiyyah"],
    correct:0, explain:"The Battle of Yamama (12 AH) killed a large number of the Qur’an’s memorisers, prompting the compilation covered in the next chapter of this unit." },

  { id:"2-2--preservation-before-compilation--q19", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"preservation-before-compilation",
    q:"Which chapter of this unit covers Abu Bakr’s role in compiling the Qur’an into one book?",
    choices:["“Compilation under Abu Bakr,” the next chapter in this unit","This same lesson, in full","A lesson under a completely different topic","The syllabus overview document only"],
    correct:0, explain:"Compilation after the Prophet’s death is covered in the next chapter of this same unit (2.2), not in this before-compilation lesson." },

  { id:"2-2--preservation-before-compilation--q20", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"preservation-before-compilation",
    q:"Why does this lesson’s Source Box disclose a gap in the Yasir Qadhi extraction used across this project?",
    choices:["The relevant section of Qadhi’s book (Ch. 8, Section I) falls outside the page range currently available, so cross-checked alternative sources were used instead","Yasir Qadhi’s book does not cover this topic at all","The Qadhi extraction contradicts all other sources on this topic","This lesson uses no academic sourcing at all"],
    correct:0, explain:"The available extraction of Qadhi’s book reaches only to roughly page 80, short of Chapter 8’s material — so this lesson draws on other cross-checked material instead." },

  { id:"2-2--preservation-before-compilation--q21", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"preservation-before-compilation",
    q:"Both Exam Lab questions in this lesson are catalogued by the exam board under which broader topic area?",
    choices:["The First Islamic Community","History and Importance of the Qur’an","Articles of Faith","The Pillars of Islam"],
    correct:0, explain:"Both questions are filed under “The First Islamic Community” because they’re framed around the Scribes as companions, even though their content matches this Qur’an-history lesson closely." },

  { id:"2-2--preservation-before-compilation--q22", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"preservation-before-compilation",
    q:"In session J22 s11, what part (b) question was paired with “tasks performed by the Scribes”?",
    choices:["Benefits of the Qur’an being available to everyone on the internet","Is it easier to record Islamic knowledge now than in the Prophet’s time?","Why was it important the Qur’an wasn’t revealed all at once?","Significance of the Qur’an being written as a book"],
    correct:0, explain:"J22 s11’s part (b) asked about the benefits of the Qur’an’s availability on the internet." },

  { id:"2-2--preservation-before-compilation--q23", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"preservation-before-compilation",
    q:"In session N25 w12, what part (b) question was paired with “main roles played by the Scribes of the Prophet”?",
    choices:["Is it easier to record Islamic knowledge now than in the Prophet’s time?","Benefits of the Qur’an being available to everyone on the internet","Significance of the Qur’an being written as a book","How useful is it that Muslims can access the Qur’an in many formats?"],
    correct:0, explain:"N25 w12’s part (b) asked whether recording Islamic knowledge is easier now than in the Prophet’s time." },

  { id:"2-2--preservation-before-compilation--q24", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"preservation-before-compilation",
    q:"What is the strongest way to answer “Is it easier to record Islamic knowledge now than in the Prophet’s time?” for full marks?",
    choices:["Give a balanced answer: recording is faster and more accessible now, but accuracy still depends on the same kind of careful verification the Scribes and huffaz provided then","Simply answer “yes” with no further explanation","Simply answer “no” with no further explanation","Describe only the writing materials used in the Prophet’s time"],
    correct:0, explain:"This AO2 question rewards weighing both sides rather than a one-sided yes/no answer." },

  { id:"2-2--preservation-before-compilation--q25", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"preservation-before-compilation",
    q:"What role did Arabia’s existing oral culture play in the memorisation track of preservation?",
    choices:["Arabs already prized and practised memorising long tribal poetry, which supported memorising the Qur’an accurately","It played no role at all — memorisation was a completely new skill for Arabs","It made memorisation harder, since poetry and Qur’an were seen as rivals","It only affected the writing track, not memorisation"],
    correct:0, explain:"A culture already skilled at memorising long poetic works gave companions a strong foundation for memorising the Qur’an precisely." },

  { id:"2-2--preservation-before-compilation--q26", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"preservation-before-compilation",
    q:"Why does the Prophet’s practice of directing verse-placement himself matter for this lesson’s argument?",
    choices:["It shows the Qur’an’s order was fixed by revelation itself, not decided later by editors or compilers","It shows the Qur’an had no fixed order until ’Uthman’s time","It shows the scribes were free to arrange verses however they liked","It has no real significance for preservation"],
    correct:0, explain:"Because the Prophet fixed each verse’s place under Jibreel’s instruction, the order was never left to later editorial choice — reinforcing that the text was safeguarded from the moment of revelation." },

  { id:"2-2--preservation-before-compilation--q27", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"preservation-before-compilation",
    q:"What convinced companions, in hindsight, that the Prophet’s death was approaching?",
    choices:["Jibreel’s final Ramadan review of the Qur’an happening twice instead of once","A dream reported by ’A’ishah","The loss of huffaz at the Battle of Yamama","A letter sent by Zayd ibn Thabit"],
    correct:0, explain:"The doubling of the final Ramadan review was understood afterwards as a sign that the Prophet’s death was near — the Yamama losses came later, after his death." },

  { id:"2-2--preservation-before-compilation--q28", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"preservation-before-compilation",
    q:"Which of these correctly separates this lesson’s scope from the rest of this unit?",
    choices:["This lesson: preservation while the Prophet was alive. The rest of the unit: compilation and standardisation after his death.","This lesson: compilation after his death. The rest of the unit: preservation while he was alive.","Both cover exactly the same time period.","Neither has any defined time period."],
    correct:0, explain:"This lesson is strictly about during-the-Prophet’s-lifetime preservation; the post-death compilation and standardisation is this unit’s remaining chapters’ territory." },

  { id:"2-2--preservation-before-compilation--q29", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"preservation-before-compilation",
    q:"Why did having both memory and writing still not fully protect the Qur’an once the Prophet had died?",
    choices:["Both tracks stopped growing at his death, and the living authority who could confirm wording and order at any moment was gone","Because writing had never actually been used during his lifetime","Because none of the huffaz survived him","Because the Qur’an was still incomplete when he died"],
    correct:0, explain:"Once the Prophet died, no new confirmation was possible, and what existed — scattered across memory and writing — was all there would ever be, setting up the urgency behind the next chapter." },

  { id:"2-2--preservation-before-compilation--q30", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"preservation-before-compilation",
    q:"What is the safest way to open an answer that asks specifically about preservation “during the Prophet’s lifetime”?",
    choices:["Describe the two parallel tracks — memorisation and writing — and Jibreel’s Ramadan reviews, without drifting into Abu Bakr or ’Uthman’s later compilation","Start with the Battle of Yamama and Abu Bakr’s compilation","Start with ’Uthman’s standard copies sent to different provinces","Discuss only the Cave of Hira narrative"],
    correct:0, explain:"Keeping strictly to the during-lifetime content (memorisation, writing, Jibreel’s reviews) avoids the most common mark-losing drift into the later, separate compilation story." },

  { id:"2-2--compilation-under-abu-bakr--q1", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-abu-bakr",
    q:"What event, occurring within about a year of the Prophet’s death, triggered the first compilation of the Qur’an?",
    choices:["The Battle of Badr","The Battle of Yamama","The Treaty of Hudaybiyyah","The conquest of Makkah"],
    correct:1, explain:"The Battle of Yamama (12 AH), fought against the false prophet Musaylimah, killed a large number of huffaz and triggered the first compilation." },

  { id:"2-2--compilation-under-abu-bakr--q2", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-abu-bakr",
    q:"Who was Musaylimah?",
    choices:["A Christian scholar who confirmed the Prophet’s mission","A man who falsely claimed prophethood, based in Yamama","One of Abu Bakr’s generals","A companion who memorised the whole Qur’an"],
    correct:1, explain:"Musaylimah was a false prophet based in the region of Yamama, defeated by a Muslim army during the Ridda Wars." },

  { id:"2-2--compilation-under-abu-bakr--q3", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-abu-bakr",
    q:"What were the Ridda Wars?",
    choices:["A series of uprisings and tribal rebellions against the new Muslim leadership after the Prophet’s death","The wars fought during the Prophet’s own lifetime against Makkah","’Uthman’s military campaigns in Armenia and Azerbaijan","The conflict that led to the standardisation of the Qur’an"],
    correct:0, explain:"The Ridda Wars (“Wars of Apostasy”) were rebellions by several Arabian tribes shortly after the Prophet’s death, which Abu Bakr had to suppress." },

  { id:"2-2--compilation-under-abu-bakr--q4", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-abu-bakr",
    q:"Which general led the Muslim army at the Battle of Yamama?",
    choices:["’Umar ibn al-Khattab","Khalid ibn al-Walid","Zayd ibn Thabit","’Uthman ibn ’Affan"],
    correct:1, explain:"Khalid ibn al-Walid led the Muslim army that defeated Musaylimah at the Battle of Yamama." },

  { id:"2-2--compilation-under-abu-bakr--q5", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-abu-bakr",
    q:"Roughly how many of the Qur’an’s reciters (huffaz) are traditionally said to have been killed at Yamama?",
    choices:["About five","About twenty","Around seventy","Over a thousand"],
    correct:2, explain:"Traditional accounts put the number of reciters killed at Yamama at around seventy, a substantial fraction of the several hundred alive at the time." },

  { id:"2-2--compilation-under-abu-bakr--q6", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-abu-bakr",
    q:"Who first raised the alarm with Abu Bakr about the risk of losing parts of the Qur’an after Yamama?",
    choices:["’Umar ibn al-Khattab","’Uthman ibn ’Affan","Hudhayfah ibn al-Yaman","Khuzaymah ibn Thabit"],
    correct:0, explain:"’Umar was the first to warn Abu Bakr and to press him to authorise a single written compilation." },

  { id:"2-2--compilation-under-abu-bakr--q7", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-abu-bakr",
    q:"What was Abu Bakr’s first reaction to ’Umar’s proposal?",
    choices:["Reluctance, because the Prophet himself had never ordered it done","Immediate, unhesitating agreement","He refused permanently and the matter was dropped","He asked Zayd ibn Thabit to decide instead"],
    correct:0, explain:"Abu Bakr initially hesitated, seeing the compilation as something the Prophet had not himself commissioned, before ’Umar persuaded him." },

  { id:"2-2--compilation-under-abu-bakr--q8", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-abu-bakr",
    q:"What phrase does Abu Bakr use, in the hadith, to describe finally agreeing to the compilation?",
    choices:["“Allah opened my chest for that which He had opened the chest of ’Umar”","“This was always my own idea from the start”","“I agree only because Zayd insists”","“The Prophet commanded this before he died”"],
    correct:0, explain:"Abu Bakr described his change of heart using this phrase, acknowledging that ’Umar had reached the right conclusion first." },

  { id:"2-2--compilation-under-abu-bakr--q9", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-abu-bakr",
    q:"Who did Abu Bakr appoint to lead the compilation of the Qur’an?",
    choices:["’Abdullah ibn Mas’ud","Zayd ibn Thabit","Ubay ibn Ka’b","Hudhayfah ibn al-Yaman"],
    correct:1, explain:"Zayd ibn Thabit, one of the Prophet’s Scribes of the Revelation, was chosen to lead the compilation." },

  { id:"2-2--compilation-under-abu-bakr--q10", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-abu-bakr",
    q:"Which qualification made Zayd ibn Thabit a natural choice to lead the compilation?",
    choices:["His years of direct scribal experience taking dictation from the Prophet, and having memorised the whole Qur’an","His position as a military commander at Yamama","His membership of the Quraysh tribe","His marriage to one of the Prophet’s daughters"],
    correct:0, explain:"Zayd’s experience as a Scribe of the Revelation and his own complete memorisation of the Qur’an made him well suited to lead the compilation." },

  { id:"2-2--compilation-under-abu-bakr--q11", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-abu-bakr",
    q:"How did Zayd ibn Thabit describe being asked to undertake the compilation?",
    choices:["As feeling heavier than being ordered to move a mountain","As the easiest task he had ever been given","As something he had long wanted to do himself","As a task he refused outright and never carried out"],
    correct:0, explain:"Zayd said that if he had been ordered to move a mountain, it would not have felt heavier to him than this task." },

  { id:"2-2--compilation-under-abu-bakr--q12", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-abu-bakr",
    q:"What standard did Zayd ibn Thabit use to decide whether to include a piece of written Qur’an in his compilation?",
    choices:["It had to be corroborated by independent witness testimony as well as being written down","Any written fragment found anywhere was included automatically","Only Zayd’s own personal memory was used, with no written material","Only material ’Uthman later approved was included"],
    correct:0, explain:"Zayd required written material to be corroborated by witnesses who had heard it directly from the Prophet, cross-checking writing against memory." },

  { id:"2-2--compilation-under-abu-bakr--q13", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-abu-bakr",
    q:"Where did Zayd search for written fragments of the Qur’an, according to the hadith’s own description?",
    choices:["Parchments, scapula bones, palm-leaf stalks, and the memory of men","Only official government archives in Madinah","Only the Prophet’s own personal notebooks","Only copies already owned by ’Uthman"],
    correct:0, explain:"The hadith describes Zayd searching parchments, animal shoulder-blade bones, palm-leaf stalks, and corroborating human memory." },

  { id:"2-2--compilation-under-abu-bakr--q14", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-abu-bakr",
    q:"Which two verses were, according to this account, found written down only in the possession of one companion?",
    choices:["The closing verses of Surah al-Tawbah (9:128–129)","The opening verses of Surah al-’Alaq","Ayat al-Kursi","The opening of Surah al-Fatiha"],
    correct:0, explain:"The last two verses of Surah al-Tawbah were found written only with one companion, making them the hardest case in Zayd’s compilation." },

  { id:"2-2--compilation-under-abu-bakr--q15", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-abu-bakr",
    q:"With which companion were the closing verses of Surah al-Tawbah found?",
    choices:["Khuzaymah ibn Thabit al-Ansari","Waraqah ibn Nawfal","Ubay ibn Ka’b","’Abdullah ibn Mas’ud"],
    correct:0, explain:"Khuzaymah ibn Thabit al-Ansari was the sole companion found to have these verses in writing." },

  { id:"2-2--compilation-under-abu-bakr--q16", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-abu-bakr",
    q:"Why were the Surah al-Tawbah verses accepted despite only one witness having them in writing?",
    choices:["The Prophet had already testified to this companion’s exceptional reliability, so his witness alone was treated as sufficient","Zayd simply lowered his standard for every verse after this point","’Umar personally overruled Zayd’s usual method","The verses were later found written elsewhere too"],
    correct:0, explain:"The Prophet’s own prior testimony to Khuzaymah’s reliability was treated as making his single witness sufficient, as a specific, explained exception." },

  { id:"2-2--compilation-under-abu-bakr--q17", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-abu-bakr",
    q:"Who decided exactly where each verse belonged within its surah, according to this lesson?",
    choices:["The order the Prophet himself had specified, following Jibreel’s instruction","Zayd ibn Thabit’s own personal judgement","’Umar’s personal judgement","Whichever order the earliest written fragment happened to use"],
    correct:0, explain:"Zayd confirmed each verse’s placement against the order the Prophet had specified during his own lifetime, rather than deciding order himself." },

  { id:"2-2--compilation-under-abu-bakr--q18", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-abu-bakr",
    q:"What is the term used for Abu Bakr’s completed compilation, kept as one manuscript rather than distributed widely?",
    choices:["The suhuf","The mushaf","The Mushaf al-Imam","The Preserved Tablet"],
    correct:0, explain:"Abu Bakr’s compilation is referred to as the suhuf — sheets or leaves forming a single manuscript kept for safekeeping." },

  { id:"2-2--compilation-under-abu-bakr--q19", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-abu-bakr",
    q:"Was the suhuf distributed to the wider Muslim community as multiple public copies?",
    choices:["No — it was one single manuscript, kept for safekeeping, not mass-distributed","Yes — dozens of copies were sent to every province immediately","Yes — it was sold publicly in the markets of Madinah","No — it was destroyed shortly after being completed"],
    correct:0, explain:"The suhuf was a single private manuscript kept safely, not yet distributed — that distribution stage came later, under ’Uthman." },

  { id:"2-2--compilation-under-abu-bakr--q20", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-abu-bakr",
    q:"After Abu Bakr’s death, who kept custody of the suhuf?",
    choices:["’Umar ibn al-Khattab","’Uthman ibn ’Affan","Hafsa bint ’Umar","Zayd ibn Thabit"],
    correct:0, explain:"’Umar kept the suhuf in his own custody throughout his caliphate, after Abu Bakr’s death." },

  { id:"2-2--compilation-under-abu-bakr--q21", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-abu-bakr",
    q:"Who kept custody of the suhuf after ’Umar’s death?",
    choices:["’Uthman ibn ’Affan directly","Hafsa bint ’Umar","’A’ishah bint Abu Bakr","’Abdullah ibn al-Zubayr"],
    correct:1, explain:"On ’Umar’s death, the suhuf passed into the personal custody of his daughter Hafsa bint ’Umar, one of the Prophet’s widows." },

  { id:"2-2--compilation-under-abu-bakr--q22", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-abu-bakr",
    q:"What was Hafsa bint ’Umar’s relationship to the Prophet, beyond being ’Umar’s daughter?",
    choices:["She was one of the Prophet’s wives","She was one of the Prophet’s daughters","She was Zayd ibn Thabit’s wife","She had no other relationship to the Prophet"],
    correct:0, explain:"Hafsa bint ’Umar was both ’Umar’s daughter and one of the Prophet’s own wives." },

  { id:"2-2--compilation-under-abu-bakr--q23", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-abu-bakr",
    q:"Why does it matter, for the story told in the next lesson, that Hafsa kept the suhuf safe for roughly a decade?",
    choices:["Because ’Uthman’s later standardisation project depended on borrowing her still-intact suhuf as its source text","It has no significance for later events","Because she personally led the standardisation committee","Because she destroyed all rival copies herself"],
    correct:0, explain:"’Uthman’s standardisation, covered in the next lesson, was only possible because Hafsa’s suhuf still existed safely when he needed it." },

  { id:"2-2--compilation-under-abu-bakr--q24", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-abu-bakr",
    q:"Which two men’s initial hesitation to compile the Qur’an is highlighted in this lesson?",
    choices:["Abu Bakr and Zayd ibn Thabit","’Umar and ’Uthman","Hudhayfah ibn al-Yaman and Zayd ibn Thabit","Khalid ibn al-Walid and ’Umar"],
    correct:0, explain:"Both Abu Bakr and Zayd ibn Thabit initially hesitated, on the same grounds — that the Prophet had not himself ordered the compilation." },

  { id:"2-2--compilation-under-abu-bakr--q25", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-abu-bakr",
    q:"What does the shared hesitation of Abu Bakr and Zayd suggest about the compilation, according to this lesson’s reasoning?",
    choices:["That it was undertaken carefully and conscientiously, only after real deliberation, not casually","That neither man actually believed the task was necessary","That the compilation was rushed and poorly checked","That ’Umar acted alone without their input"],
    correct:0, explain:"Their hesitation shows the decision was weighed seriously against religious principle before being carried out, supporting rather than undermining its careful execution." },

  { id:"2-2--compilation-under-abu-bakr--q26", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-abu-bakr",
    q:"What was the underlying principle behind Zayd’s method of cross-checking writing against witness testimony?",
    choices:["The same two-track principle (memory checking writing, writing checking memory) used during the Prophet’s own lifetime, now applied retrospectively","A completely new method with no connection to earlier practice","Relying on writing alone, with memory playing no role","Relying on memory alone, with writing playing no role"],
    correct:0, explain:"This lesson explains Zayd’s method as the same two-independent-tracks principle from the Prophet’s lifetime, now used once, under pressure, to build a single trustworthy text." },

  { id:"2-2--compilation-under-abu-bakr--q27", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-abu-bakr",
    q:"In which hadith collection is the core account of Abu Bakr’s compilation preserved?",
    choices:["Sahih Muslim","Sahih al-Bukhari","Sunan Abu Dawud","Muwatta Malik"],
    correct:1, explain:"The account is preserved in Sahih al-Bukhari, Kitab Fada’il al-Qur’an, narrated by Zayd ibn Thabit." },

  { id:"2-2--compilation-under-abu-bakr--q28", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-abu-bakr",
    q:"Which unit’s content does this lesson’s final Source Box warn against confusing this lesson with?",
    choices:["“Compilation under ’Uthman” — Hudhayfah’s warning, the committee, and the Quraysh-dialect rule belong there, not here","“Preservation of the Qur’an” — the two tracks during the Prophet’s lifetime","“The First Revelation” — the Cave of Hira narrative","“Why Gradual Revelation” — the reasons for revelation over 23 years"],
    correct:0, explain:"This lesson stops at Hafsa’s custody of the suhuf; ’Uthman’s standardisation is a separate, later lesson." },

  { id:"2-2--compilation-under-abu-bakr--q29", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-abu-bakr",
    q:"Why did Abu Bakr’s compilation happen only once, producing one manuscript, rather than being an ongoing open project?",
    choices:["Because it was a specific, urgent response to the Yamama crisis, completed and then kept safely rather than continually revised","Because the Prophet had ordered it to be repeated every year","Because ’Uthman insisted it never be finished","Because no companions were available to help after the first attempt"],
    correct:0, explain:"It was a focused, urgent project completed once in response to the specific threat exposed at Yamama, then preserved rather than reopened." },

  { id:"2-2--compilation-under-abu-bakr--q30", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-abu-bakr",
    q:"Which of the following best summarises the purpose of Abu Bakr’s compilation, according to this lesson?",
    choices:["To guarantee the complete Qur’an existed in one fixed, carefully verified written place, in case memory alone was ever put under pressure again","To create multiple official copies for distribution across a growing empire","To resolve regional disputes over correct recitation between Syria and Iraq","To replace memorisation entirely with a written text"],
    correct:0, explain:"Abu Bakr’s compilation was about guaranteeing one safe, verified written record — distribution across a growing empire was ’Uthman’s later, different purpose." },

  { id:"2-2--compilation-under-uthman--q1", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-uthman",
    q:"What kind of crisis prompted ’Uthman’s standardisation of the Qur’an, as opposed to Abu Bakr’s compilation?",
    choices:["Regional recitation disputes as the empire expanded, not a loss-of-memory crisis","A second battle in which huffaz were killed","A fire that destroyed the original suhuf","A demand from a non-Muslim ruler"],
    correct:0, explain:"’Uthman’s standardisation responded to growing regional recitation differences and disputes, a different kind of threat from the memory-loss crisis Abu Bakr faced." },

  { id:"2-2--compilation-under-uthman--q2", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-uthman",
    q:"Why did regional differences in recitation begin to emerge as Islam spread beyond Arabia?",
    choices:["Arabic contained multiple regional dialects, and different companions taught the styles they themselves had learned in different garrison towns","The Qur’an’s wording had genuinely changed between regions","Different regions used completely different scriptures","Zayd ibn Thabit taught a different version in each city himself"],
    correct:0, explain:"Natural dialect variation and different local teachers led to small regional differences in recitation style, not any real change in the Qur’an’s content." },

  { id:"2-2--compilation-under-uthman--q3", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-uthman",
    q:"Who first warned ’Uthman about disputes over Qur’anic recitation between Muslims from different regions?",
    choices:["Hudhayfah ibn al-Yaman","Zayd ibn Thabit","’Abdullah ibn Mas’ud","Khuzaymah ibn Thabit"],
    correct:0, explain:"Hudhayfah ibn al-Yaman, alarmed by disputes among soldiers from Syria and Iraq, brought the warning directly to ’Uthman." },

  { id:"2-2--compilation-under-uthman--q4", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-uthman",
    q:"Where was Hudhayfah ibn al-Yaman serving when he witnessed the recitation dispute that alarmed him?",
    choices:["On military campaigns in Armenia and Azerbaijan","On pilgrimage in Makkah","In Madinah itself","In Yamama"],
    correct:0, explain:"Hudhayfah witnessed the dispute among soldiers from Syria and Iraq while serving on campaigns in Armenia and Azerbaijan." },

  { id:"2-2--compilation-under-uthman--q5", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-uthman",
    q:"Which two regions’ Muslims did Hudhayfah report as disputing over correct recitation?",
    choices:["Syria and Iraq","Makkah and Madinah","Yemen and Bahrain","Egypt and Syria"],
    correct:0, explain:"Soldiers from Syria and Iraq were disputing sharply over whose regional recitation of the Qur’an was correct." },

  { id:"2-2--compilation-under-uthman--q6", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-uthman",
    q:"To which earlier religious communities did Hudhayfah compare the risk facing the Muslim community over the Qur’an?",
    choices:["The Jews and the Christians, over their own Scriptures","The Persians and the Romans","The tribes of Makkah before Islam","The people of Yamama"],
    correct:0, explain:"Hudhayfah warned ’Uthman to act “before they differ about the Book as the Jews and the Christians differed about their Scriptures before.”" },

  { id:"2-2--compilation-under-uthman--q7", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-uthman",
    q:"What did ’Uthman request from Hafsa bint ’Umar to begin the standardisation project?",
    choices:["Her suhuf — the manuscript compiled under Abu Bakr, which she had kept in safekeeping","Permission to remarry her","A list of every reciter in Madinah","Her own personal, separate copy of the Qur’an"],
    correct:0, explain:"’Uthman borrowed Hafsa’s suhuf specifically to use as the verified source text for his standardisation committee." },

  { id:"2-2--compilation-under-uthman--q8", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-uthman",
    q:"Why did ’Uthman use Hafsa’s suhuf rather than compiling a completely new text from scratch?",
    choices:["It was already a single, carefully verified manuscript, making it the natural source for standardisation rather than verification","No other written material existed anywhere by that point","Zayd ibn Thabit had lost his own notes","Hafsa insisted her copy be used exclusively"],
    correct:0, explain:"Using the already-verified suhuf meant the committee’s task was standardising and multiplying an established text, not re-verifying from scratch." },

  { id:"2-2--compilation-under-uthman--q9", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-uthman",
    q:"Who led ’Uthman’s committee to produce the standardised text of the Qur’an?",
    choices:["Zayd ibn Thabit","Hudhayfah ibn al-Yaman","’Abdullah ibn Mas’ud","Hafsa bint ’Umar"],
    correct:0, explain:"Zayd ibn Thabit, who had also led Abu Bakr’s original compilation, was again chosen to lead ’Uthman’s standardisation committee." },

  { id:"2-2--compilation-under-uthman--q10", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-uthman",
    q:"How many companions from the tribe of Quraysh joined Zayd ibn Thabit on ’Uthman’s standardisation committee?",
    choices:["One","Two","Three","Five"],
    correct:2, explain:"Three Qurashi companions — ’Abdullah ibn al-Zubayr, Sa’id ibn al-’As, and ’Abd al-Rahman ibn al-Harith ibn Hisham — joined Zayd on the committee." },

  { id:"2-2--compilation-under-uthman--q11", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-uthman",
    q:"Name one of the three Qurashi companions on ’Uthman’s committee.",
    choices:["’Abdullah ibn al-Zubayr","Khuzaymah ibn Thabit","Waraqah ibn Nawfal","Khalid ibn al-Walid"],
    correct:0, explain:"’Abdullah ibn al-Zubayr was one of the three Qurashi companions who joined Zayd ibn Thabit on the committee." },

  { id:"2-2--compilation-under-uthman--q12", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-uthman",
    q:"What rule did ’Uthman give his committee for resolving any disagreement over how a word should be written?",
    choices:["Write it in the dialect of Quraysh, since the Qur’an was revealed in that dialect","Write it in the dialect most commonly used in Syria","Ask ’A’ishah to decide each disputed word","Leave the disputed word out of the text entirely"],
    correct:0, explain:"’Uthman instructed the committee to resolve any dispute over wording by writing it in the dialect of Quraysh." },

  { id:"2-2--compilation-under-uthman--q13", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-uthman",
    q:"Why specifically the dialect of Quraysh, rather than any other regional dialect?",
    choices:["Because the Qur’an had first been revealed in that dialect","Because it was the easiest dialect to write down","Because Hudhayfah personally spoke that dialect","Because it was chosen at random to be fair to all regions"],
    correct:0, explain:"The dialect of Quraysh was chosen because it was the dialect the Qur’an was originally revealed in." },

  { id:"2-2--compilation-under-uthman--q14", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-uthman",
    q:"Roughly how many standard copies did ’Uthman’s committee produce and distribute?",
    choices:["Exactly one","Several (traditionally around four to seven)","Over a hundred","None — the suhuf itself was distributed as-is"],
    correct:1, explain:"Traditional accounts vary but generally put the number of standard copies distributed at somewhere between four and seven." },

  { id:"2-2--compilation-under-uthman--q15", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-uthman",
    q:"Name two of the major centres to which ’Uthman’s standard copies were sent.",
    choices:["Syria (Damascus) and Kufa","Rome and Constantinople","Jerusalem and Cairo only","Yamama and Ta’if"],
    correct:0, explain:"Standard copies were sent to major centres including Makkah, Syria, Kufa and Basra, with one retained in Madinah." },

  { id:"2-2--compilation-under-uthman--q16", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-uthman",
    q:"What is the reference copy retained in Madinah itself sometimes called?",
    choices:["The Mushaf al-Imam","The Preserved Tablet","The suhuf of Khuzaymah","The Meccan Recension"],
    correct:0, explain:"The copy kept in Madinah as the reference text is sometimes called the Mushaf al-Imam." },

  { id:"2-2--compilation-under-uthman--q17", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-uthman",
    q:"What happened to Hafsa’s original suhuf manuscript once ’Uthman’s committee had finished its work?",
    choices:["It was returned to her, rather than destroyed","It was destroyed along with the rival copies","It was sent to Syria as one of the standard copies","It was kept permanently by Zayd ibn Thabit"],
    correct:0, explain:"Hafsa’s original suhuf was returned to her; it was the other personal and partial copies that were ordered destroyed." },

  { id:"2-2--compilation-under-uthman--q18", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-uthman",
    q:"What happened to other personal or partial copies of the Qur’an, such as those associated with ’Abdullah ibn Mas’ud, after the standard text was distributed?",
    choices:["They were gathered and deliberately destroyed","They were declared the only authentic versions","They were combined into one longer text","Nothing — they continued to circulate freely"],
    correct:0, explain:"’Uthman ordered rival personal copies gathered and destroyed, to remove any competing “correct version” once one standard text existed." },

  { id:"2-2--compilation-under-uthman--q19", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-uthman",
    q:"Why, according to this lesson, were rival personal copies destroyed rather than simply left in circulation?",
    choices:["To remove the possibility of multiple competing “correct versions” once a single standard text existed","Because they were believed to contain false verses","Because ’Uthman disliked the companions who owned them","Because they were physically damaged and unusable"],
    correct:0, explain:"The goal was uniformity — removing competing written versions — not a judgement that the companions’ personal copies were inaccurate." },

  { id:"2-2--compilation-under-uthman--q20", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-uthman",
    q:"Which companion is reported to have been particularly unhappy about ’Uthman’s standardisation project?",
    choices:["’Abdullah ibn Mas’ud","Zayd ibn Thabit","Hudhayfah ibn al-Yaman","Khuzaymah ibn Thabit"],
    correct:0, explain:"’Abdullah ibn Mas’ud is reported to have been unhappy, both at not being on the committee and at his own copy being called in." },

  { id:"2-2--compilation-under-uthman--q21", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-uthman",
    q:"What two reasons does this lesson give for Ibn Mas’ud’s unhappiness?",
    choices:["Not being included on the standardising committee, and having his own long-used personal copy called in","Being exiled from Madinah as punishment","Disagreeing with the Quraysh-dialect rule on religious grounds","Being blamed personally for the Syrian/Iraqi dispute"],
    correct:0, explain:"Ibn Mas’ud’s reported unhappiness stemmed from being excluded from the committee and from his personal copy being gathered in." },

  { id:"2-2--compilation-under-uthman--q22", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-uthman",
    q:"Did opposition to ’Uthman’s standardisation ultimately split the Muslim community’s text?",
    choices:["No — opposition did not persist, and the standardised text became the single agreed text everywhere","Yes — it led to two permanently different versions of the Qur’an","Yes — Ibn Mas’ud’s version is still used exclusively in some regions today","The outcome is unknown and undocumented"],
    correct:0, explain:"Despite initial resistance, the ’Uthmanic standard text became, and has remained, the single agreed text across the Muslim world." },

  { id:"2-2--compilation-under-uthman--q23", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-uthman",
    q:"What is ’Uthman’s standardised text commonly called in modern scholarship?",
    choices:["The ’Uthmanic codex (or Mushaf ’Uthmani)","The Preserved Tablet","The Suhuf of Ibrahim","The Meccan Recension"],
    correct:0, explain:"Modern scholarship refers to ’Uthman’s standardised text as the ’Uthmanic codex or Mushaf ’Uthmani." },

  { id:"2-2--compilation-under-uthman--q24", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-uthman",
    q:"What is the key practical difference between Abu Bakr’s “suhuf” and ’Uthman’s “mushaf” copies?",
    choices:["The suhuf was one private manuscript kept for safekeeping; the mushaf copies were multiple official texts deliberately distributed","They refer to exactly the same single document","The suhuf was distributed widely and the mushaf was kept privately","The mushaf was produced before the suhuf"],
    correct:0, explain:"The suhuf (Abu Bakr’s) was a single safekeeping manuscript; the mushaf copies (’Uthman’s) were multiple standard texts sent out publicly." },

  { id:"2-2--compilation-under-uthman--q25", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-uthman",
    q:"Why is ’Uthman’s standardisation given as evidence for the Qur’an’s preserved authenticity today?",
    choices:["Because it is the direct, traceable reason every printed Qur’an worldwide is textually identical, across fourteen centuries","Because it proves the Qur’an was first written after the Prophet’s death","Because it shows different regions still use different texts today","Because it was never accepted by any companions"],
    correct:0, explain:"The ’Uthmanic standardisation explains the remarkable worldwide textual uniformity of the Qur’an that has persisted ever since, across every region and era." },

  { id:"2-2--compilation-under-uthman--q26", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-uthman",
    q:"Which companion led both Abu Bakr’s original compilation and ’Uthman’s later standardisation committee?",
    choices:["Zayd ibn Thabit","Hudhayfah ibn al-Yaman","’Abdullah ibn Mas’ud","Khuzaymah ibn Thabit al-Ansari"],
    correct:0, explain:"Zayd ibn Thabit led both projects, a decade apart, giving direct continuity between the two stages." },

  { id:"2-2--compilation-under-uthman--q27", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-uthman",
    q:"In which hadith collection is the core account of ’Uthman’s standardisation preserved?",
    choices:["Sahih Muslim","Sahih al-Bukhari","Sunan Abu Dawud","Muwatta Malik"],
    correct:1, explain:"The account is preserved in Sahih al-Bukhari, Kitab Fada’il al-Qur’an, narrated by Anas ibn Malik." },

  { id:"2-2--compilation-under-uthman--q28", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-uthman",
    q:"Which of these correctly separates the two lessons’ scope?",
    choices:["“Compilation under Abu Bakr”: the Yamama crisis and the suhuf. “Compilation under ’Uthman”: Hudhayfah’s warning and the standardised mushaf copies.","Both lessons cover exactly the same events in the same order.","“Compilation under Abu Bakr” covers events after ’Uthman’s caliphate.","Neither lesson involves Zayd ibn Thabit."],
    correct:0, explain:"The two lessons split the story at Hafsa’s custody of the suhuf — everything before that point is the Abu Bakr lesson, everything from Hudhayfah’s warning onward is this lesson." },

  { id:"2-2--compilation-under-uthman--q29", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-uthman",
    q:"What single past-paper detail most reliably signals that a question needs this lesson’s content specifically, rather than the Abu Bakr lesson?",
    choices:["Any explicit mention of ’Uthman, multiple standard copies, different regions, or recitation disputes","Any mention of the word “Qur’an” at all","Any mention of the Prophet’s own lifetime","Any mention of Zayd ibn Thabit, since he appears in both lessons"],
    correct:0, explain:"Mentions of ’Uthman by name, multiple copies, regional distribution, or recitation disputes point specifically to this lesson’s content, even though Zayd ibn Thabit appears in both lessons." },

  { id:"2-2--compilation-under-uthman--q30", paper:"paper-1", topic:"topic-2", unit:"2-2", lesson:"compilation-under-uthman",
    q:"What is the safest way to open an answer to a question that names both Abu Bakr and ’Uthman, such as “compilation and standardisation of the Qur’an”?",
    choices:["Cover Abu Bakr’s compilation first (Yamama, Zayd, the suhuf, the custody chain), then ’Uthman’s standardisation second (Hudhayfah, the committee, the Quraysh rule, distribution and destruction of rivals)","Cover only ’Uthman’s standardisation, since it came later and is more detailed","Cover only Abu Bakr’s compilation, since it came first","Discuss the Battle of Badr as background before either compilation"],
    correct:0, explain:"A full-marks answer to a question naming both Caliphs needs both stages, told in chronological order — this lesson’s Exam Lab entries model exactly that structure." },

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

  { id:"2-3--quran-first-source-of-law--q1", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-first-source-of-law",
    q:"Which of the four sources of Islamic law is described as “independent,” not drawing its authority from any of the others?",
    choices:["Sunnah","Ijma’","Qiyas","Qur’an"],
    correct:3, explain:"Because Muslims hold the Qur’an to be the literal word of Allah, its authority does not depend on any other text — the other three sources all derive some part of their authority from it." },

  { id:"2-3--quran-first-source-of-law--q2", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-first-source-of-law",
    q:"Which verse describes the Qur’an as a book “explaining all things”?",
    choices:["Qur’an 4:59","Qur’an 16:89","Qur’an 5:45","Qur’an 2:2"],
    correct:1, explain:"Qur’an 16:89 describes the Book as “explaining all things, a guide, a mercy, and glad tidings to Muslims.”" },

  { id:"2-3--quran-first-source-of-law--q3", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-first-source-of-law",
    q:"What Arabic term describes Allah’s sovereignty as the source of legal authority in Islam?",
    choices:["Ijma’","Qiyas","Al-hakimiyyah","Al-fatrah"],
    correct:2, explain:"Al-hakimiyyah refers to the principle that ultimate legal authority belongs to Allah, expressed in Qur’an 12:40, “The command is for none but Allah.”" },

  { id:"2-3--quran-first-source-of-law--q4", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-first-source-of-law",
    q:"Which verse states “The command is for none but Allah”?",
    choices:["Qur’an 2:2","Qur’an 12:40","Qur’an 24:4","Qur’an 8:41"],
    correct:1, explain:"Qur’an 12:40 is the classic reference for the principle of Allah’s sovereignty in law-making." },

  { id:"2-3--quran-first-source-of-law--q5", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-first-source-of-law",
    q:"What term describes acts of worship such as prayer, fasting, zakat and hajj?",
    choices:["’Ibadat","Mu’amalat","Hudud","Qisas"],
    correct:0, explain:"’Ibadat refers to acts of worship, as distinct from mu’amalat, which covers dealings and transactions between people." },

  { id:"2-3--quran-first-source-of-law--q6", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-first-source-of-law",
    q:"What term describes transactions and dealings between people, such as marriage, trade and government?",
    choices:["’Ibadat","Mu’amalat","Fatrah","Wahy"],
    correct:1, explain:"Mu’amalat covers civil and social dealings between people — the Qur’an legislates for this alongside ’ibadat." },

  { id:"2-3--quran-first-source-of-law--q7", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-first-source-of-law",
    q:"According to Qur’an 5:38, what is the prescribed penalty for theft?",
    choices:["A fine equal to the value stolen","Cutting off the hand","Eighty lashes","Exile from the community"],
    correct:1, explain:"Qur’an 5:38 prescribes cutting off the hand of the thief, male or female, “a punishment by way of example from Allah.”" },

  { id:"2-3--quran-first-source-of-law--q8", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-first-source-of-law",
    q:"Which verse condemns those who give short measure or weight in trade — “Woe to those that deal in fraud”?",
    choices:["Qur’an 5:90","Qur’an 83:1–3","Qur’an 59:7","Qur’an 6:152"],
    correct:1, explain:"Qur’an 83:1–3 (Surah al-Mutaffifin) condemns traders who exact full measure when receiving but give less than due when giving." },

  { id:"2-3--quran-first-source-of-law--q9", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-first-source-of-law",
    q:"Which verse establishes the principle “life for life, eye for eye… wounds equal for equal”?",
    choices:["Qur’an 4:11","Qur’an 5:45","Qur’an 24:4","Qur’an 47:4"],
    correct:1, explain:"Qur’an 5:45 lays down the principle of qisas — proportionate retaliation." },

  { id:"2-3--quran-first-source-of-law--q10", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-first-source-of-law",
    q:"What is the legal term for the principle of proportionate retaliation established in Qur’an 5:45?",
    choices:["Hudud","Qisas","Ijma’","Mahr"],
    correct:1, explain:"Qisas refers to the principle of equivalent retaliation for injury or killing." },

  { id:"2-3--quran-first-source-of-law--q11", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-first-source-of-law",
    q:"What penalty does Qur’an 24:4 prescribe for falsely accusing a chaste person of unchastity without four witnesses?",
    choices:["A fine and public apology","Eighty lashes and permanent loss of testimony (unless four witnesses are produced)","Exile for one year","Cutting off the hand"],
    correct:1, explain:"Qur’an 24:4 prescribes eighty lashes for false accusation (qadhf) and permanently disqualifies the accuser’s testimony unless four witnesses support the claim." },

  { id:"2-3--quran-first-source-of-law--q12", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-first-source-of-law",
    q:"Which verse instructs that guardians should not touch an orphan’s property except to improve it?",
    choices:["Qur’an 4:19","Qur’an 6:152","Qur’an 8:41","Qur’an 76:8"],
    correct:1, explain:"Qur’an 6:152 warns guardians not to approach an orphan’s property “except to improve it” — a near-identical warning appears at 17:34." },

  { id:"2-3--quran-first-source-of-law--q13", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-first-source-of-law",
    q:"Which chapter of the Qur’an sets out detailed, numerical inheritance shares for family members?",
    choices:["Surah al-Baqarah","Surah an-Nisa","Surah al-Ma’idah","Surah al-Anfal"],
    correct:1, explain:"Qur’an 4:11–12, in Surah an-Nisa, sets out fixed inheritance shares in precise detail." },

  { id:"2-3--quran-first-source-of-law--q14", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-first-source-of-law",
    q:"According to Qur’an 8:41, what share of war booty is set aside for Allah, the Messenger, relatives, orphans, the needy and the wayfarer?",
    choices:["A tenth","A fifth","A quarter","A half"],
    correct:1, explain:"Qur’an 8:41 assigns one-fifth of war booty (khums) to these categories, with the rest divided among those who fought." },

  { id:"2-3--quran-first-source-of-law--q15", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-first-source-of-law",
    q:"According to Qur’an 47:4, once an enemy is subdued in war, prisoners should be dealt with through which two options?",
    choices:["Execution or exile","Generosity or ransom","Immediate release only","Forced labour"],
    correct:1, explain:"Qur’an 47:4 instructs that after subduing an enemy, captives are to be treated through either generosity (freeing them) or ransom." },

  { id:"2-3--quran-first-source-of-law--q16", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-first-source-of-law",
    q:"Which verse warns against wealth “circulating solely among the wealthy”?",
    choices:["Qur’an 4:11","Qur’an 59:7","Qur’an 5:38","Qur’an 2:2"],
    correct:1, explain:"Qur’an 59:7 warns against a system where wealth simply circulates among those who already have it." },

  { id:"2-3--quran-first-source-of-law--q17", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-first-source-of-law",
    q:"Which verse instructs husbands to “live with them [their wives] in kindness”?",
    choices:["Qur’an 4:19","Qur’an 4:36","Qur’an 24:33","Qur’an 90:13"],
    correct:0, explain:"Qur’an 4:19 instructs husbands to treat their wives with kindness." },

  { id:"2-3--quran-first-source-of-law--q18", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-first-source-of-law",
    q:"What is the mukatabah, referenced in Qur’an 24:33?",
    choices:["The dowry paid at marriage","A contract allowing a slave to purchase their own freedom","The fixed share of inheritance for a widow","The penalty for breaking a business contract"],
    correct:1, explain:"Mukatabah is a legal contract by which a slave could formally work to purchase their own freedom." },

  { id:"2-3--quran-first-source-of-law--q19", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-first-source-of-law",
    q:"Which four sources of Islamic law does the syllabus expect students to know, in order of authority?",
    choices:["Sunnah, Qur’an, Qiyas, Ijma’","Qur’an, Sunnah, Ijma’, Qiyas","Ijma’, Qiyas, Qur’an, Sunnah","Qur’an, Qiyas, Sunnah, Ijma’"],
    correct:1, explain:"The Qur’an is first and independent, followed by the Sunnah (which explains it), then ijma’ and qiyas, which fill gaps within the boundaries the first two sources set." },

  { id:"2-3--quran-first-source-of-law--q20", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-first-source-of-law",
    q:"Why is the Sunnah’s authority as a legal source described as “dependent” rather than independent?",
    choices:["Because the Sunnah was written down after the Qur’an","Because the Qur’an itself instructs believers to obey the Prophet, which is what authorises the Sunnah as law","Because the Sunnah only applies outside Arabia","Because scholars disagree about what the Sunnah contains"],
    correct:1, explain:"Qur’an 4:59 commands obedience to the Messenger, and it is this Qur’anic instruction that gives the Sunnah its authority as a source of law — hence it is dependent on the Qur’an rather than independent." },

  { id:"2-3--quran-first-source-of-law--q21", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-first-source-of-law",
    q:"What is the general Arabic term for Islamic law as a whole?",
    choices:["Fiqh","Shari’ah","Sunnah","’Aqidah"],
    correct:1, explain:"Shari’ah is the overall term for Islamic law, drawn from the four sources: Qur’an, Sunnah, ijma’ and qiyas." },

  { id:"2-3--quran-first-source-of-law--q22", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-first-source-of-law",
    q:"Which of these is an example of a fixed, prescribed criminal punishment (hudud) found directly in the Qur’an?",
    choices:["The five daily prayers","Cutting off the hand for theft","The distribution of war booty","The mahr (dowry) in marriage"],
    correct:1, explain:"Hudud are fixed punishments prescribed directly in the Qur’an; the penalty for theft in 5:38 is a classic example." },

  { id:"2-3--quran-first-source-of-law--q23", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-first-source-of-law",
    q:"Which pair of terms correctly describes the two broad categories of conduct the Qur’an legislates for?",
    choices:["’Ibadat (worship) and mu’amalat (transactions/dealings)","Hudud (punishments) and qisas (retaliation) only","Makki and Madani verses","Sahih and Da’if rulings"],
    correct:0, explain:"’Ibadat covers acts of worship; mu’amalat covers everyday dealings and transactions between people — together these make up the Qur’an’s full scope as a source of law." },

  { id:"2-3--quran-first-source-of-law--q24", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-first-source-of-law",
    q:"Which example is most often used to illustrate qiyas (analogical reasoning) extending a Qur’anic ruling to new cases?",
    choices:["Extending the penalty for theft to fraud","Extending the prohibition of khamr (wine) to modern intoxicants and drugs","Extending inheritance law to adopted children","Extending zakat to charitable trusts"],
    correct:1, explain:"The Qur’an names khamr specifically; scholars later used qiyas to extend the same prohibition to intoxicants not directly named, reasoning from the shared cause of impairing the mind." },

  { id:"2-3--quran-first-source-of-law--q25", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-first-source-of-law",
    q:"Why does calling the Qur’an the “primary” source of law matter in practice for a Muslim jurist?",
    choices:["It means the Qur’an is only consulted if the other three sources disagree","It means the Qur’an is always consulted first, and no other source may contradict a clear ruling it establishes","It means only the Qur’an may be used, and the other three sources are optional","It means the Qur’an only applies to matters of worship, not law"],
    correct:1, explain:"“Primary” means the Qur’an takes precedence — it is consulted first, and Sunnah, ijma’ and qiyas must all operate within the limits it sets." },

  { id:"2-3--quran-first-source-of-law--q26", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-first-source-of-law",
    q:"What does the completeness described in Qur’an 16:89 actually mean, according to this lesson?",
    choices:["That every possible legal case is spelled out explicitly in the text","That the Qur’an lays down the essential principles and clearest rulings needed to guide every sphere of life, leaving detail to the other sources","That no further legal reasoning is ever needed after the Qur’an","That the Qur’an only addresses spiritual matters, not practical ones"],
    correct:1, explain:"The Qur’an does not list a rule for every conceivable situation; it provides the guiding principles and clear rulings, with the Sunnah, ijma’ and qiyas working out further detail within that framework." },

  { id:"2-3--quran-and-sunnah--q1", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-and-sunnah",
    q:"What is the Sunnah?",
    choices:["Only the Qur’an’s legal verses","The Prophet’s (pbuh) example — his words, actions and silent approvals","The consensus of Islamic scholars","A form of analogical reasoning"],
    correct:1, explain:"Sunnah refers to the Prophet’s own example — everything he said, did, or approved of in others." },

  { id:"2-3--quran-and-sunnah--q2", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-and-sunnah",
    q:"What is a Hadith, strictly speaking?",
    choices:["A verse of the Qur’an about law","An individually recorded report transmitting the Prophet’s words, actions or approvals","A ruling reached by scholarly consensus","A legal ruling reached by analogy"],
    correct:1, explain:"A Hadith is a recorded report, traced through a chain of narrators, that documents part of the Prophet’s Sunnah." },

  { id:"2-3--quran-and-sunnah--q3", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-and-sunnah",
    q:"Which source of Islamic law is recognised as the second primary source, after the Qur’an?",
    choices:["Ijma’","Qiyas","Hadith (Sunnah)","’Urf (custom)"],
    correct:2, explain:"Hadith/Sunnah is the second primary source, following the Qur’an in authority." },

  { id:"2-3--quran-and-sunnah--q4", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-and-sunnah",
    q:"Why is Hadith called a “dependent” source rather than an independent one?",
    choices:["Because it was written down centuries after the Prophet’s death","Because its authority as law rests on the Qur’an’s own command to obey the Prophet (4:59)","Because Hadith only applies outside Arabia","Because scholars disagree about which hadiths are authentic"],
    correct:1, explain:"Qur’an 4:59 commands obedience to the Messenger, and this Qur’anic instruction is what gives Hadith its authority as a source of law." },

  { id:"2-3--quran-and-sunnah--q5", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-and-sunnah",
    q:"What did ’A’ishah say when asked to describe the Prophet’s character?",
    choices:["“He never made a mistake”","“His character was the Qur’an”","“He was chosen before he was born”","“He could not read or write”"],
    correct:1, explain:"’A’ishah’s description, recorded in Sahih Muslim, is understood to mean that the Prophet’s life was the Qur’an’s teaching put into practice." },

  { id:"2-3--quran-and-sunnah--q6", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-and-sunnah",
    q:"Which matter is settled by Hadith rather than by the Qur’an’s own inheritance verses?",
    choices:["The son’s share of inheritance","The daughter’s share of inheritance","The grandmother’s share of inheritance","The husband’s share of inheritance"],
    correct:2, explain:"The Qur’an’s inheritance verses (4:11–12) do not mention the grandmother; her one-sixth share comes from Hadith." },

  { id:"2-3--quran-and-sunnah--q7", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-and-sunnah",
    q:"What share of inheritance did the Prophet rule that a grandmother receives, according to Hadith?",
    choices:["One-half","One-quarter","One-sixth","One-eighth"],
    correct:2, explain:"This ruling — a one-sixth share — is recorded in Sunan Abu Dawud and Sunan al-Tirmidhi, not in the Qur’an." },

  { id:"2-3--quran-and-sunnah--q8", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-and-sunnah",
    q:"In which collections is the grandmother’s inheritance hadith recorded?",
    choices:["Sahih al-Bukhari only","Sunan Abu Dawud and Sunan al-Tirmidhi","The Qur’an, Surah an-Nisa","Sahih Muslim only"],
    correct:1, explain:"The ruling is narrated via al-Mughirah ibn Shu’bah and Muhammad ibn Maslamah, and recorded in Sunan Abu Dawud and Sunan al-Tirmidhi." },

  { id:"2-3--quran-and-sunnah--q9", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-and-sunnah",
    q:"According to Hadith, on how few camels is zakat NOT due?",
    choices:["Fewer than three","Fewer than five","Fewer than ten","Fewer than twenty"],
    correct:1, explain:"The hadith narrated by Abu Sa’id al-Khudri in Sahih al-Bukhari states there is no zakat due on fewer than five camels." },

  { id:"2-3--quran-and-sunnah--q10", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-and-sunnah",
    q:"What unit does the zakat nisab hadith use for the minimum amount of silver on which zakat becomes due?",
    choices:["Dinars","Awaq (uqiyyah)","Mithqals","Ratls"],
    correct:1, explain:"The hadith specifies five awaq (units of uqiyyah) of silver as the minimum before zakat is due." },

  { id:"2-3--quran-and-sunnah--q11", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-and-sunnah",
    q:"Which hadith collection records the zakat nisab hadith (five camels, five awsuq, five awaq)?",
    choices:["Sunan Abu Dawud","Sahih al-Bukhari","Muwatta Malik","Musnad Ahmad only"],
    correct:1, explain:"This hadith is narrated by Abu Sa’id al-Khudri and recorded in Sahih al-Bukhari’s Book of Zakat." },

  { id:"2-3--quran-and-sunnah--q12", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-and-sunnah",
    q:"Who narrated the hadith “Pray as you have seen me praying”?",
    choices:["Abu Sa’id al-Khudri","Malik ibn al-Huwayrith","’A’ishah","Mu’adh ibn Jabal"],
    correct:1, explain:"Malik ibn al-Huwayrith narrated this hadith, recorded in Sahih al-Bukhari." },

  { id:"2-3--quran-and-sunnah--q13", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-and-sunnah",
    q:"What does “Pray as you have seen me praying” demonstrate about the relationship between Qur’an and Hadith?",
    choices:["That Hadith can override the Qur’an’s command to pray","That Hadith supplies the exact method for a general Qur’anic command","That the Qur’an contains the full method of prayer already","That prayer is not actually commanded in the Qur’an"],
    correct:1, explain:"The Qur’an commands prayer but does not detail its method — Hadith supplies that missing practical detail." },

  { id:"2-3--quran-and-sunnah--q14", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-and-sunnah",
    q:"What did the Prophet say about the rites of hajj during his Farewell Pilgrimage?",
    choices:["“Hajj is not obligatory for everyone”","“Take from me your rites [of hajj]”","“Perform hajj only once in your lifetime”","“Hajj may be performed in any month”"],
    correct:1, explain:"Recorded in Sahih Muslim, this instruction means the exact sequence of hajj rituals is learned from the Prophet’s demonstrated practice." },

  { id:"2-3--quran-and-sunnah--q15", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-and-sunnah",
    q:"What example from purification/impurity rulings shows Hadith supplying detail the Qur’an does not give?",
    choices:["The number of daily prayers","Washing a vessel licked by a dog seven times","The zakat nisab for silver","The grandmother’s inheritance share"],
    correct:1, explain:"This purification ruling is recorded in Sahih Muslim and is not detailed anywhere in the Qur’an." },

  { id:"2-3--quran-and-sunnah--q16", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-and-sunnah",
    q:"Which of the four classical categories describes Hadith adding a brand-new ruling on a matter the Qur’an does not mention at all?",
    choices:["Ta’kid (confirming)","Bayan/tafsir (explaining)","Taqyid (restricting)","Istiqlal (ruling independently)"],
    correct:3, explain:"Istiqlal describes Hadith establishing a ruling entirely on its own authority, as with the grandmother’s inheritance share." },

  { id:"2-3--quran-and-sunnah--q17", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-and-sunnah",
    q:"Which of the four classical categories best describes the zakat nisab hadith?",
    choices:["Ta’kid (confirming)","Istiqlal (ruling independently)","Taqyid (restricting)","None of these categories apply"],
    correct:2, explain:"The nisab hadith narrows and specifies the Qur’an’s general command to pay zakat, which is why it is classed as “restricting.”" },

  { id:"2-3--quran-and-sunnah--q18", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-and-sunnah",
    q:"Which of the four classical categories best describes “Pray as you have seen me praying”?",
    choices:["Taqyid (restricting)","Bayan/tafsir (explaining)","Istiqlal (ruling independently)","Ta’kid (confirming)"],
    correct:1, explain:"This hadith explains, in practical detail, how to carry out the Qur’an’s general command to pray." },

  { id:"2-3--quran-and-sunnah--q19", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-and-sunnah",
    q:"Can a Hadith ever contradict a clear ruling already established in the Qur’an?",
    choices:["No — it can only confirm, explain, restrict, or fill a genuine silence","Yes, if enough scholars agree","Yes, but only regarding worship, not law","Yes, if the Hadith is very well authenticated"],
    correct:0, explain:"Hadith’s role is always to work with the Qur’an — confirming, explaining, restricting, or ruling where the Qur’an is silent — never to override it." },

  { id:"2-3--quran-and-sunnah--q20", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-and-sunnah",
    q:"What was Mu’adh ibn Jabal’s answer when the Prophet asked how he would judge cases as a governor sent to Yemen?",
    choices:["By local custom alone","By the Qur’an first, then the Sunnah, then his own reasoning if neither addressed the case","By asking the Prophet every time","By majority vote of the community"],
    correct:1, explain:"This exchange, recorded in Sunan Abu Dawud and Sunan al-Tirmidhi, is often cited as the origin of using personal reasoning (ijtihad/qiyas) once the Qur’an and Sunnah are exhausted." },

  { id:"2-3--quran-and-sunnah--q21", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-and-sunnah",
    q:"What did the Prophet do when Mu’adh ibn Jabal gave this answer?",
    choices:["He corrected Mu’adh and told him to rely on custom instead","He approved of Mu’adh’s approach","He forbade any use of personal reasoning","He sent someone else in Mu’adh’s place"],
    correct:1, explain:"The Prophet’s approval of Mu’adh’s answer is used as evidence that personal reasoning was sanctioned as a legitimate last resort in Islamic law." },

  { id:"2-3--quran-and-sunnah--q22", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-and-sunnah",
    q:"What is the “isnad” of a Hadith?",
    choices:["The chain of narrators transmitting it back to the Prophet","The actual wording/content of the hadith","A collection arranged by topic","A collection arranged by narrator"],
    correct:0, explain:"Isnad refers to the chain of transmission — the list of narrators through whom a hadith was passed down." },

  { id:"2-3--quran-and-sunnah--q23", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-and-sunnah",
    q:"What is the “matn” of a Hadith?",
    choices:["The chain of narrators","The actual text/content being transmitted","A synonym for Sunnah","The scholar who first compiled it"],
    correct:1, explain:"Matn is the substantive wording of the hadith itself, distinct from its chain of transmission (isnad)." },

  { id:"2-3--quran-and-sunnah--q24", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-and-sunnah",
    q:"What distinguishes a “musannaf” hadith collection from a “musnad” one?",
    choices:["Musannaf is arranged by topic; musnad is arranged by narrator","Musannaf only contains weak hadith; musnad only contains authentic ones","Musannaf is written in Arabic; musnad is translated","There is no real difference between them"],
    correct:0, explain:"Musannaf collections group hadith by subject (e.g. zakat, inheritance); musnad collections group them by the Companion who first narrated them." },

  { id:"2-3--quran-and-sunnah--q25", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-and-sunnah",
    q:"Why does it matter for Muslims today that hadith were compiled with checked isnad and matn?",
    choices:["It allows the exact wording and chain behind a ruling to still be verified, protecting Islamic law from corruption or invention","It means every hadith automatically overrides the Qur’an","It means Hadith no longer needs to be studied today","It replaced the need to compile the Qur’an"],
    correct:0, explain:"Careful compilation means today’s Muslims can trace a ruling like the zakat nisab or the grandmother’s inheritance share back to a verified, checkable source rather than rumour." },

  { id:"2-3--quran-and-sunnah--q26", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"quran-and-sunnah",
    q:"Which of these best summarises the overall relationship between the Qur’an and Hadith in Islamic law?",
    choices:["Hadith is more authoritative than the Qur’an because it gives more detail","Hadith and Qur’an are unrelated, separate legal systems","Hadith explains, restricts, confirms, or fills genuine silences in the Qur’an, but can never override it","The Qur’an only covers worship, and Hadith only covers law"],
    correct:2, explain:"This is the core relationship this lesson demonstrates through every example — zakat, prayer, hajj, purification, and the grandmother’s inheritance." },

  { id:"2-3--ijma--q1", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"ijma",
    q:"What is Ijma’?",
    choices:["The recorded words and actions of the Prophet","The unanimous agreement of qualified Muslim jurists on a matter the Qur’an and Hadith do not address","The literal word-for-word revelation from Allah","Reasoning by analogy from an existing ruling to a new case"],
    correct:1, explain:"Ijma’ is the consensus of qualified jurists (mujtahids) on a ruling for a question the Qur’an and Hadith are silent on." },

  { id:"2-3--ijma--q2", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"ijma",
    q:"Which numbered source of Islamic law is Ijma’?",
    choices:["First","Second","Third","Fourth"],
    correct:2, explain:"Ijma’ is the third source, after the Qur’an (first) and Hadith/Sunnah (second), and before qiyas (fourth)." },

  { id:"2-3--ijma--q3", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"ijma",
    q:"Why are Ijma’ and qiyas often described as “secondary” or “derived” sources?",
    choices:["Because they are less important than the Qur’an and Hadith","Because neither introduces new revealed text — both derive rulings from what the Qur’an and Hadith already establish","Because they were only used after the Prophet’s death","Because they only apply to matters of worship"],
    correct:1, explain:"Unlike the Qur’an and Hadith, Ijma’ and qiyas do not bring new revelation — they are methods of extending existing rulings to new situations." },

  { id:"2-3--ijma--q4", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"ijma",
    q:"Which hadith gives Ijma’ its religious authority as a source of law?",
    choices:["“Pray as you have seen me praying”","“My Ummah will never unite upon error”","“His character was the Qur’an”","“Take from me your rites”"],
    correct:1, explain:"This hadith, recorded in Sunan Ibn Majah and Sunan al-Tirmidhi, is the classical basis for trusting scholarly consensus as a genuine source of law." },

  { id:"2-3--ijma--q5", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"ijma",
    q:"In which two hadith collections is “My Ummah will never unite upon error” recorded?",
    choices:["Sahih al-Bukhari and Sahih Muslim only","Sunan Ibn Majah and Sunan al-Tirmidhi","The Qur’an and Sahih Muslim","Muwatta Malik only"],
    correct:1, explain:"The hadith appears (with some variation in wording) in Sunan Ibn Majah (Hadith 3950) and Sunan al-Tirmidhi (Hadith 2167)." },

  { id:"2-3--ijma--q6", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"ijma",
    q:"Which Qur’anic verse is commonly cited as supporting evidence for the community’s collective religious judgement?",
    choices:["Qur’an 16:89","Qur’an 3:110","Qur’an 5:45","Qur’an 4:59"],
    correct:1, explain:"Qur’an 3:110, “You are the best of peoples...”, is commonly cited alongside the hadith evidence for ijma’." },

  { id:"2-3--ijma--q7", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"ijma",
    q:"What historical event is the standard example of Ijma’ among the Companions?",
    choices:["The Battle of Badr","The compilation of the Qur’an into a single text","The Farewell Pilgrimage","The first revelation in the Cave of Hira"],
    correct:1, explain:"The Companions’ agreement, first under Abu Bakr and then under ’Uthman, to compile and standardise the Qur’an is the classic example of Ijma’ al-Sahaba." },

  { id:"2-3--ijma--q8", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"ijma",
    q:"Which caliph’s committee produced the single standard mushaf accepted by the Companions’ consensus?",
    choices:["Abu Bakr","’Umar","’Uthman","’Ali"],
    correct:2, explain:"’Uthman’s committee produced the standardised mushaf; Abu Bakr’s earlier compilation was the first written copy, and both stages involved ijma’ of the Companions." },

  { id:"2-3--ijma--q9", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"ijma",
    q:"Which type of Ijma’ is given the highest weight, since those reaching it witnessed revelation and the Prophet’s practice directly?",
    choices:["Ijma’ of the Sahaba (Companions)","Ijma’ of the Mujtahids","Ijma’ Sukuti","All three carry exactly equal weight"],
    correct:0, explain:"Ijma’ of the Companions is ranked highest because of their direct, firsthand connection to revelation and the Prophet’s own practice." },

  { id:"2-3--ijma--q10", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"ijma",
    q:"What is Ijma’ Sukuti?",
    choices:["Consensus reached only by the Prophet’s family","Tacit consensus — where scholars are aware of a stated ruling and raise no objection to it","Consensus that is written down in the Qur’an","A type of qiyas"],
    correct:1, explain:"Ijma’ Sukuti forms when qualified scholars become aware of a ruling and their silence, without objection, is treated as agreement." },

  { id:"2-3--ijma--q11", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"ijma",
    q:"Who introduced the second adhan (call to prayer) for the Friday congregational prayer?",
    choices:["Hazrat Abu Bakr","Hazrat ’Umar","Hazrat ’Uthman","Hazrat ’Ali"],
    correct:2, explain:"This is recorded in Sahih al-Bukhari — a point often mistakenly attributed to ’Umar instead." },

  { id:"2-3--ijma--q12", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"ijma",
    q:"Why was the second adhan introduced?",
    choices:["To replace the Friday sermon","Because Madinah’s growth meant many people could no longer hear the original single call and were missing the prayer","Because the Qur’an commanded two calls to prayer","To shorten the length of the Friday prayer"],
    correct:1, explain:"As Madinah grew, people in the marketplace could not hear the original adhan given from the mosque, so an earlier additional call was introduced to prevent them missing the obligatory prayer." },

  { id:"2-3--ijma--q13", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"ijma",
    q:"What does the second-adhan example best demonstrate about Ijma’?",
    choices:["That Ijma’ can override a clear command of the Qur’an","That Ijma’ can find a practical solution that protects an existing obligation, without contradicting it","That only the Prophet could ever introduce new practices","That the adhan is not actually obligatory in Islam"],
    correct:1, explain:"The second adhan solved a real problem without changing or contradicting anything the Qur’an or Hadith had already established about the Friday prayer." },

  { id:"2-3--ijma--q14", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"ijma",
    q:"Which rule must every valid Ijma’ obey?",
    choices:["It must be reached within one day","It must not contradict a clear ruling already established by the Qur’an or an authentic Hadith","It must involve every Muslim in the world, not just scholars","It can only be used for matters of worship, never for law"],
    correct:1, explain:"Ijma’ operates only within the boundaries the Qur’an and Hadith already set — it can never override them." },

  { id:"2-3--ijma--q15", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"ijma",
    q:"Who is qualified to take part in a valid Ijma’?",
    choices:["Any adult Muslim","Only the ruling caliph","Recognised, qualified jurists (mujtahids)","Only descendants of the Prophet’s family"],
    correct:2, explain:"Ijma’ specifically requires the agreement of qualified mujtahids, not popular opinion or a majority vote among ordinary Muslims." },

  { id:"2-3--ijma--q16", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"ijma",
    q:"Which modern medical procedure is commonly used as an example of Ijma’ addressing a completely new question?",
    choices:["Organ transplantation","In-vitro fertilisation (IVF)","Vaccination","Blood transfusion"],
    correct:1, explain:"IVF is a leading modern example, since it is a situation entirely unaddressed by the Qur’an or Hadith." },

  { id:"2-3--ijma--q17", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"ijma",
    q:"Which body is cited in this lesson as having ruled on the permissibility of IVF?",
    choices:["The United Nations","The International Islamic Fiqh Academy","A single individual scholar acting alone","The Cambridge examination board"],
    correct:1, explain:"The International Islamic Fiqh Academy, affiliated with the Organisation of Islamic Cooperation, is a contemporary body that issues collective fiqh rulings of this kind." },

  { id:"2-3--ijma--q18", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"ijma",
    q:"Under what condition did scholars generally rule IVF permissible?",
    choices:["Only if a third-party donor’s egg or sperm is used","Only using the married couple’s own egg and sperm","Only if performed anonymously","IVF was ruled impermissible under all conditions"],
    correct:1, explain:"Rulings permitting IVF generally require it to use only the married couple’s own gametes, ruling out third-party donation to protect established principles of lineage." },

  { id:"2-3--ijma--q19", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"ijma",
    q:"Why is third-party donor IVF generally not permitted under these rulings?",
    choices:["Because IVF itself is always forbidden","Because it would conflict with established Qur’anic and Hadith principles about lineage and paternity","Because doctors are not permitted to perform the procedure","Because it was explicitly forbidden by name in the Qur’an"],
    correct:1, explain:"Even in ruling on a new question, ijma’ still cannot contradict principles the Qur’an and Hadith have already firmly established, such as those governing lineage." },

  { id:"2-3--ijma--q20", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"ijma",
    q:"What word describes a qualified Islamic jurist capable of taking part in Ijma’ or performing qiyas?",
    choices:["Sahabi","Mujtahid","Muhaddith","Hafiz"],
    correct:1, explain:"A mujtahid is a scholar qualified to exercise independent legal reasoning, whether through ijma’ or qiyas." },

  { id:"2-3--ijma--q21", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"ijma",
    q:"Which of these is NOT one of the three types of Ijma’ covered in this lesson?",
    choices:["Ijma’ of the Sahaba","Ijma’ of the Mujtahids","Ijma’ Sukuti","Ijma’ Qiyasi"],
    correct:3, explain:"“Ijma’ Qiyasi” is not a recognised category — the three types covered are Ijma’ of the Sahaba, Ijma’ of the Mujtahids, and Ijma’ Sukuti." },

  { id:"2-3--ijma--q22", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"ijma",
    q:"What common student error does this lesson specifically warn against regarding the second adhan?",
    choices:["Forgetting that it happened in Makkah","Attributing it to ’Umar instead of ’Uthman","Saying it happened before the Hijrah","Confusing it with the adhan for Fajr prayer"],
    correct:1, explain:"The second adhan is often mistakenly credited to ’Umar; it was actually introduced by ’Uthman ibn ’Affan." },

  { id:"2-3--ijma--q23", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"ijma",
    q:"Why do scholars still treat “My Ummah will never unite upon error” as reliable evidence, despite some individual chains being weak?",
    choices:["Because it is supported by multiple independent narrations and by hadiths of similar meaning in Sahih al-Bukhari and Sahih Muslim","Because weak hadith are always treated as fully authentic in Islamic law","Because it appears word-for-word in the Qur’an","Because no scholar has ever questioned any part of its chain"],
    correct:0, explain:"Its meaning is considered established through the cumulative weight of several corroborating narrations, even though individual chains have some weaknesses." },

  { id:"2-3--ijma--q24", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"ijma",
    q:"What is the key difference between Ijma’ and qiyas as sources of law?",
    choices:["Ijma’ is a primary, independent source, while qiyas is not a source at all","Ijma’ is agreement among qualified scholars on a ruling; qiyas is reasoning by analogy from an existing ruling to a new case","Ijma’ only applies to worship; qiyas only applies to criminal law","There is no meaningful difference between them"],
    correct:1, explain:"Ijma’ is a collective agreed ruling; qiyas (covered in the next lesson) is an individual or collective process of analogical reasoning from an existing text-based ruling." },

  { id:"2-3--ijma--q25", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"ijma",
    q:"Which of these best summarises why Ijma’ matters as a source of Islamic law?",
    choices:["It allows any individual Muslim to change the law as they see fit","It lets qualified scholars reach a trusted, collective ruling on matters the Qur’an and Hadith do not directly address, without ever contradicting them","It replaces the need for the Qur’an and Hadith altogether","It only applied during the time of the Companions and has no relevance today"],
    correct:1, explain:"Ijma’ fills genuine gaps — from compiling the Qur’an to ruling on IVF — while always remaining bound by what the Qur’an and Hadith have already established." },

  { id:"2-3--qiyas--q1", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"qiyas",
    q:"What is Qiyas?",
    choices:["The literal word-for-word revelation of Allah","The unanimous agreement of qualified scholars","Deriving a ruling for a new case by analogy with an existing ruling that shares the same underlying cause","The recorded words and actions of the Prophet"],
    correct:2, explain:"Qiyas is analogical reasoning: extending an existing ruling to a new case on the basis of a shared effective cause." },

  { id:"2-3--qiyas--q2", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"qiyas",
    q:"Which source of Islamic law is Qiyas?",
    choices:["First","Second","Third","Fourth (and last)"],
    correct:3, explain:"Qiyas is the fourth and final source, used only once the Qur’an, Hadith and ijma’ have all been consulted and found silent." },

  { id:"2-3--qiyas--q3", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"qiyas",
    q:"When is qiyas used?",
    choices:["Whenever a jurist personally prefers a different ruling","Only when the Qur’an, Hadith and ijma’ are all silent on a matter","Before consulting the Qur’an or Hadith","Only during the lifetime of the Prophet"],
    correct:1, explain:"Qiyas is a last resort, used only after the first three sources have offered no answer." },

  { id:"2-3--qiyas--q4", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"qiyas",
    q:"Which hadith is the classical basis for treating personal reasoning (and therefore qiyas) as legitimate?",
    choices:["“My Ummah will never unite upon error”","The Prophet’s exchange with Mu’adh ibn Jabal before sending him to Yemen","“His character was the Qur’an”","“Pray as you have seen me praying”"],
    correct:1, explain:"The Prophet’s approval of Mu’adh’s plan to use his own reasoning (ijtihad) if the Qur’an and Sunnah offered no answer is the classical foundation for qiyas." },

  { id:"2-3--qiyas--q5", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"qiyas",
    q:"In the Mu’adh ibn Jabal hadith, what did Mu’adh say he would consult first?",
    choices:["The Book of Allah (the Qur’an)","His own opinion","The consensus of scholars","Local custom"],
    correct:0, explain:"Mu’adh said he would judge by the Qur’an first, then the Sunnah, and only then by his own reasoning." },

  { id:"2-3--qiyas--q6", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"qiyas",
    q:"What did the Prophet do when Mu’adh explained this approach?",
    choices:["He forbade Mu’adh from ever using his own reasoning","He approved of it","He sent a different judge instead","He said only the Qur’an should ever be used"],
    correct:1, explain:"The Prophet expressed approval, which is treated as sanctioning qualified personal reasoning as a legitimate last resort." },

  { id:"2-3--qiyas--q7", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"qiyas",
    q:"What is the “asl” in a qiyas?",
    choices:["The original case with an existing, established ruling","The new case with no ruling of its own","The shared underlying cause","The extended ruling"],
    correct:0, explain:"The asl is the existing case already ruled on directly by the Qur’an or Hadith." },

  { id:"2-3--qiyas--q8", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"qiyas",
    q:"What is the “’illah” in a qiyas?",
    choices:["The new, unaddressed case","The effective cause shared between the original and new cases","The final extended ruling","A type of scholarly consensus"],
    correct:1, explain:"The ’illah is the underlying reason that connects the original case to the new one, making the analogy valid." },

  { id:"2-3--qiyas--q9", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"qiyas",
    q:"What is the “far’” in a qiyas?",
    choices:["The existing case with a clear ruling","The shared cause","The new case with no ruling of its own","The scholar performing the reasoning"],
    correct:2, explain:"The far’ is the new, previously unaddressed situation that qiyas is being used to rule on." },

  { id:"2-3--qiyas--q10", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"qiyas",
    q:"What is the “hukm” in a qiyas?",
    choices:["The original case","The shared cause","The new case","The ruling, extended from the original case to the new one"],
    correct:3, explain:"The hukm is the actual legal ruling that gets transferred from the asl to the far’, once the shared ’illah is established." },

  { id:"2-3--qiyas--q11", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"qiyas",
    q:"In the khamr example, what is the asl?",
    choices:["The Qur’an’s prohibition of khamr (wine)","Modern synthetic drugs","Intoxication","The prohibition extended to modern drugs"],
    correct:0, explain:"The Qur’anic prohibition of khamr in 5:90–91 is the existing, established ruling that forms the asl." },

  { id:"2-3--qiyas--q12", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"qiyas",
    q:"In the khamr example, what is identified as the ’illah?",
    choices:["The taste of grapes","Intoxication — impairing the mind and judgement","The method of production","The price of the substance"],
    correct:1, explain:"Jurists identify intoxication as the underlying reason khamr was prohibited, which is why the ruling can be extended to anything sharing that effect." },

  { id:"2-3--qiyas--q13", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"qiyas",
    q:"In the khamr example, what is the far’?",
    choices:["The Qur’an’s prohibition itself","Modern drugs and synthetic intoxicants","The Prophet’s own practice","The consensus of the Companions"],
    correct:1, explain:"Modern drugs, unnamed in the Qur’an or Hadith, are the new case (far’) that qiyas extends the ruling to." },

  { id:"2-3--qiyas--q14", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"qiyas",
    q:"Which two Islamic texts together form the “asl” for the wudu/nail-polish example?",
    choices:["Qur’an 16:89 and the hadith of ’A’ishah on character","Qur’an 5:6 and the hadith of Abu Dharr (Sunan Abu Dawud 332)","Qur’an 5:45 and the hadith on the second adhan","Qur’an 4:59 and the hadith of Mu’adh ibn Jabal"],
    correct:1, explain:"Qur’an 5:6 commands washing in wudu, and Abu Dharr’s hadith (“let water touch your skin”) establishes that water must physically reach the skin." },

  { id:"2-3--qiyas--q15", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"qiyas",
    q:"What did classical jurists identify as barriers comparable to nail polish, long before nail polish existed?",
    choices:["Sand and dust","Dried dough, wax and thick henna","Perfume and oil","Soap"],
    correct:1, explain:"Classical jurists had already applied the “barrier to water” reasoning to substances like dough, wax and henna on the fingers." },

  { id:"2-3--qiyas--q16", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"qiyas",
    q:"Is the statement “’A’ishah said wudu is invalid if dough dries on the nails” an authenticated hadith?",
    choices:["Yes, recorded in Sahih al-Bukhari","Yes, recorded in Sahih Muslim","No — a Saudi fatwa council confirmed it is not an authenticated hadith, but a later juristic principle","Yes, but only in Sunan Abu Dawud"],
    correct:2, explain:"This is a commonly repeated claim that is not actually transmitted as an authentic saying of the Prophet or ’A’ishah — it is a juristic maxim built on genuine textual evidence elsewhere." },

  { id:"2-3--qiyas--q17", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"qiyas",
    q:"What is the actual juristic principle behind the nail-polish ruling, according to this lesson?",
    choices:["“Anything that prevents water from reaching the skin must be removed”","“Beauty products are always forbidden in Islam”","“Women may not perform wudu”","“Only men are required to complete wudu fully”"],
    correct:0, explain:"This maxim, derived from Qur’an 5:6 and the hadith of Abu Dharr, is the genuine basis jurists used — not a supposed statement from ’A’ishah about dough specifically." },

  { id:"2-3--qiyas--q18", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"qiyas",
    q:"Who is permitted to perform qiyas?",
    choices:["Any Muslim adult","Only the ruling head of state","Qualified jurists (mujtahids)","Only descendants of the Prophet’s family"],
    correct:2, explain:"As with ijma’, only mujtahids with deep training in the Qur’an, Hadith and legal method may validly perform qiyas." },

  { id:"2-3--qiyas--q19", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"qiyas",
    q:"Can a ruling reached by qiyas ever contradict the Qur’an, Hadith or an established ijma’?",
    choices:["No — it must always remain consistent with all three","Yes, if the jurist is highly respected","Yes, but only in matters of worship","Yes, if enough people agree with the new ruling"],
    correct:0, explain:"Qiyas is a derived source and can never override rulings already established by the higher sources." },

  { id:"2-3--qiyas--q20", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"qiyas",
    q:"Why is qiyas described as a “secondary” or “derived” source, like ijma’?",
    choices:["Because it is rarely used in practice","Because it does not introduce new revealed text, only extends existing rulings to new cases","Because only non-Arabic speakers may use it","Because it was invented after the classical period ended"],
    correct:1, explain:"Like ijma’, qiyas works with rulings the Qur’an and Hadith have already established, rather than producing new revelation." },

  { id:"2-3--qiyas--q21", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"qiyas",
    q:"What is the correct order of authority among the four sources of Islamic law?",
    choices:["Hadith, Qur’an, Qiyas, Ijma’","Qur’an, Hadith, Ijma’, Qiyas","Ijma’, Qur’an, Hadith, Qiyas","Qiyas, Ijma’, Hadith, Qur’an"],
    correct:1, explain:"The Qur’an is first and independent, followed by Hadith, then ijma’, then qiyas as the last resort." },

  { id:"2-3--qiyas--q22", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"qiyas",
    q:"What is the main difference between how ijma’ and qiyas reach a ruling?",
    choices:["Ijma’ is agreement among scholars; qiyas is reasoning by analogy from an existing textual ruling","Ijma’ only applies to worship; qiyas only applies to crime","Ijma’ requires no scholars at all; qiyas requires the whole Ummah","There is no meaningful difference between them"],
    correct:0, explain:"Ijma’ is a collective agreed judgement; qiyas is a method of reasoning that transfers an existing ruling to a new case via a shared ’illah." },

  { id:"2-3--qiyas--q23", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"qiyas",
    q:"Why must the ’illah in a valid qiyas be more than “a superficial resemblance”?",
    choices:["Because a mistaken or superficial ’illah would produce an incorrect ruling, not a genuine analogy","Because Islamic law does not permit any comparisons at all","Because only the Prophet could identify an ’illah","Because ’illah only applies to matters of worship"],
    correct:0, explain:"A valid qiyas depends on correctly identifying the real underlying cause connecting two cases — a superficial similarity is not sufficient grounds for extending a ruling." },

  { id:"2-3--qiyas--q24", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"qiyas",
    q:"Which example in this lesson concerns worship and purification rather than criminal or moral law?",
    choices:["The khamr-to-modern-drugs example","The wudu-and-nail-polish example","The Mu’adh ibn Jabal hadith","The four sources hierarchy"],
    correct:1, explain:"The nail-polish example applies qiyas to the requirements of ritual purification (wudu) rather than to criminal or moral law." },

  { id:"2-3--qiyas--q25", paper:"paper-1", topic:"topic-2", unit:"2-3", lesson:"qiyas",
    q:"What happens once all four sources — Qur’an, Hadith, ijma’ and qiyas — have been properly consulted in order?",
    choices:["The process starts again from qiyas backwards","A jurist has followed the complete, correctly ordered method of Islamic legal reasoning","Only qiyas is considered valid, and the earlier three are ignored","The ruling automatically becomes part of the Qur’an"],
    correct:1, explain:"This is the complete four-source method this whole unit has built up to, each source consulted strictly in order and never contradicted by a later one." }

];
