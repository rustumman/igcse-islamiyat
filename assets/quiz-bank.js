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
