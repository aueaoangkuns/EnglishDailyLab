export type VocabularyItem = {
  word: string;
  meaning: string;
  example: string;
};

export type DailyLesson = {
  id: string;
  titleEn: string;
  titleTh: string;
  focus: string;
  goalTh: string;
  explanationTh: string;
  pattern: string;
  examples: ReadonlyArray<{ en: string; th: string }>;
  vocabulary: ReadonlyArray<VocabularyItem>;
  reviewQuestions: ReadonlyArray<string>;
  practiceTasks: ReadonlyArray<string>;
  speakingPrompt: string;
  writingPrompt: string;
  minutes: number;
};

export const curriculum = [
  {
    id: "be-and-introductions",
    titleEn: "Introduce yourself with be",
    titleTh: "แนะนำตัวเองด้วย am / is / are",
    focus: "Sentence foundation",
    goalTh: "พูดและเขียนแนะนำตัวเองได้ 5 ประโยค โดยเลือก am, is และ are ได้ถูกต้อง",
    explanationTh:
      "ประโยคพื้นฐานเริ่มจาก Subject + be + ข้อมูลเกี่ยวกับประธาน ใช้ am กับ I, is กับ he/she/it และ are กับ you/we/they วันนี้ให้เน้นความถูกต้องก่อนความเร็ว",
    pattern: "Subject + am / is / are + noun, adjective, or place",
    examples: [
      { en: "I am a software developer.", th: "ฉันเป็นนักพัฒนาซอฟต์แวร์" },
      { en: "She is interested in English.", th: "เธอสนใจภาษาอังกฤษ" },
      { en: "We are from Thailand.", th: "พวกเรามาจากประเทศไทย" },
    ],
    vocabulary: [
      { word: "introduce", meaning: "แนะนำ", example: "Let me introduce myself." },
      { word: "interested", meaning: "สนใจ", example: "I am interested in technology." },
      { word: "hometown", meaning: "บ้านเกิด", example: "My hometown is Bangkok." },
      { word: "currently", meaning: "ขณะนี้", example: "I am currently learning English." },
      { word: "improve", meaning: "พัฒนาให้ดีขึ้น", example: "I want to improve my speaking." },
    ],
    reviewQuestions: [
      "พูดชื่อ อาชีพ และจังหวัดที่อยู่เป็นภาษาอังกฤษโดยไม่เปิดพจนานุกรม",
      "ลองเขียน 3 ประโยคที่ขึ้นต้นด้วย I am...",
      "สังเกตว่าคุณยังนึกคำศัพท์ส่วนไหนไม่ออก เพื่อใช้เป็นข้อมูลตั้งต้น",
    ],
    practiceTasks: [
      "เติม am, is หรือ are ในประโยค 8 ข้อด้วยตนเอง",
      "เปลี่ยนประธาน I เป็น he, she และ they แล้วแก้ be ให้ถูกต้อง",
      "อ่านประโยคตัวอย่างออกเสียงช้า ๆ 2 รอบ แล้วอ่านด้วยจังหวะปกติอีก 1 รอบ",
    ],
    speakingPrompt: "พูดแนะนำตัวเอง 45 วินาที: ชื่อ งาน ที่อยู่ ความสนใจ และเหตุผลที่เรียนภาษาอังกฤษ",
    writingPrompt: "เขียนโปรไฟล์สั้น ๆ 5 ประโยค โดยใช้ am/is/are อย่างน้อย 4 ครั้ง",
    minutes: 30,
  },
  {
    id: "present-simple-routine",
    titleEn: "Talk about daily routines",
    titleTh: "เล่ากิจวัตรด้วย Present Simple",
    focus: "Present Simple",
    goalTh: "อธิบายกิจวัตรประจำวันตั้งแต่ตื่นจนเข้านอนได้อย่างน้อย 6 ประโยค",
    explanationTh:
      "Present Simple ใช้กับสิ่งที่ทำเป็นประจำหรือเป็นข้อเท็จจริง โครงสร้าง I/You/We/They + verb แต่ He/She/It ต้องเติม -s หรือ -es ที่กริยา",
    pattern: "Subject + base verb (he / she / it + verb-s)",
    examples: [
      { en: "I check my email after breakfast.", th: "ฉันเช็กอีเมลหลังอาหารเช้า" },
      { en: "He starts work at nine.", th: "เขาเริ่มงานเก้าโมง" },
      { en: "My lesson finishes at eight.", th: "บทเรียนของฉันจบสองทุ่ม" },
    ],
    vocabulary: [
      { word: "routine", meaning: "กิจวัตร", example: "This is my morning routine." },
      { word: "usually", meaning: "โดยปกติ", example: "I usually wake up at six." },
      { word: "prepare", meaning: "เตรียม", example: "I prepare breakfast at home." },
      { word: "commute", meaning: "เดินทางไปทำงาน", example: "I commute by train." },
      { word: "relax", meaning: "ผ่อนคลาย", example: "I relax after work." },
    ],
    reviewQuestions: [
      "ทบทวนว่า I ใช้ am และ he/she ใช้ is อย่างไร",
      "พูดแนะนำตัวจากเมื่อวานอีกครั้งโดยพยายามไม่อ่าน",
      "แก้ประโยค He are busy. และ They is from Bangkok. ให้ถูกต้อง",
    ],
    practiceTasks: [
      "เรียงกิจกรรม 6 อย่างตามเวลาที่ทำจริงในหนึ่งวัน",
      "เขียนประโยคด้วย I 3 ประโยค แล้วเปลี่ยนเป็น He หรือ She",
      "ขีดเส้นใต้กริยาที่ต้องเติม -s/-es และอ่านออกเสียง",
    ],
    speakingPrompt: "เล่ากิจวัตรวันทำงานของคุณ 1 นาที โดยใช้ first, then, after that และ finally",
    writingPrompt: "เขียน My Typical Day จำนวน 6–8 ประโยค",
    minutes: 30,
  },
  {
    id: "present-simple-questions",
    titleEn: "Ask and answer about routines",
    titleTh: "ถามและปฏิเสธด้วย do / does",
    focus: "Questions and negatives",
    goalTh: "สร้างคำถาม Yes/No และ Wh-question เกี่ยวกับชีวิตประจำวัน พร้อมตอบสั้น ๆ ได้",
    explanationTh:
      "ใช้ do กับ I/you/we/they และ does กับ he/she/it เมื่อมี do/does แล้ว กริยาหลักกลับเป็นรูปเดิมเสมอ ส่วนประโยคปฏิเสธใช้ do not หรือ does not",
    pattern: "Do / Does + subject + base verb...? | Subject + do / does not + base verb",
    examples: [
      { en: "Do you work from home?", th: "คุณทำงานจากบ้านไหม" },
      { en: "What time does she start?", th: "เธอเริ่มกี่โมง" },
      { en: "He does not drink coffee.", th: "เขาไม่ดื่มกาแฟ" },
    ],
    vocabulary: [
      { word: "schedule", meaning: "ตารางเวลา", example: "My schedule changes every week." },
      { word: "early", meaning: "แต่เช้า/เร็ว", example: "Do you wake up early?" },
      { word: "often", meaning: "บ่อย", example: "How often do you exercise?" },
      { word: "prefer", meaning: "ชอบมากกว่า", example: "I prefer tea to coffee." },
      { word: "spend", meaning: "ใช้เวลา", example: "How do you spend your evening?" },
    ],
    reviewQuestions: [
      "พูดกิจวัตร 4 ประโยคและตรวจ -s ของ he/she",
      "เปลี่ยน I start work at nine. เป็นประโยคของ she",
      "บอกกริยา 5 คำที่ใช้พูดถึงกิจวัตรเมื่อวาน",
    ],
    practiceTasks: [
      "เปลี่ยนประโยคบอกเล่า 5 ประโยคให้เป็นคำถาม",
      "ตอบคำถามแต่ละข้อทั้งแบบสั้นและแบบเต็มประโยค",
      "สร้างประโยคปฏิเสธเกี่ยวกับสิ่งที่คุณไม่ได้ทำ 4 ข้อ",
    ],
    speakingPrompt: "ถามตัวเอง 5 คำถามเกี่ยวกับกิจวัตร แล้วตอบออกเสียงเป็นประโยคเต็ม",
    writingPrompt: "เขียนคำถามสัมภาษณ์เรื่องกิจวัตร 5 ข้อ พร้อมคำตอบของคุณ",
    minutes: 30,
  },
  {
    id: "frequency-adverbs",
    titleEn: "Describe how often things happen",
    titleTh: "บอกความถี่ด้วย always ถึง never",
    focus: "Adverbs of frequency",
    goalTh: "วางคำบอกความถี่ในตำแหน่งที่ถูกต้อง และอธิบายนิสัยของตัวเองได้ชัดขึ้น",
    explanationTh:
      "always, usually, often, sometimes, rarely และ never มักอยู่หน้ากริยาทั่วไป แต่อยู่หลัง verb to be ใช้ How often...? เมื่อต้องการถามความถี่",
    pattern: "Subject + frequency adverb + main verb | Subject + be + frequency adverb",
    examples: [
      { en: "I usually study after dinner.", th: "ปกติฉันเรียนหลังอาหารเย็น" },
      { en: "She is always on time.", th: "เธอตรงเวลาเสมอ" },
      { en: "How often do you read in English?", th: "คุณอ่านภาษาอังกฤษบ่อยแค่ไหน" },
    ],
    vocabulary: [
      { word: "always", meaning: "เสมอ", example: "I always review new words." },
      { word: "usually", meaning: "โดยปกติ", example: "We usually eat at home." },
      { word: "sometimes", meaning: "บางครั้ง", example: "I sometimes watch English videos." },
      { word: "rarely", meaning: "แทบจะไม่", example: "He rarely arrives late." },
      { word: "never", meaning: "ไม่เคย", example: "I never skip breakfast." },
    ],
    reviewQuestions: [
      "สร้างคำถามด้วย Do you...? และ Does he/she...? อย่างละ 2 ข้อ",
      "อธิบายว่าทำไม Does she works? จึงผิด",
      "พูดประโยคปฏิเสธเกี่ยวกับกิจวัตร 3 ประโยค",
    ],
    practiceTasks: [
      "เรียงคำบอกความถี่จาก 100% ไป 0%",
      "วาง adverb ในประโยคที่มีกริยาทั่วไปและ verb to be อย่างละ 4 ข้อ",
      "ถาม How often...? 3 คำถามแล้วตอบด้วยข้อมูลจริง",
    ],
    speakingPrompt: "พูดถึงนิสัยการเรียน สุขภาพ และการพักผ่อน โดยใช้คำบอกความถี่อย่างน้อย 5 คำ",
    writingPrompt: "เขียน 6 ประโยคเปรียบเทียบนิสัยวันทำงานกับวันหยุด",
    minutes: 30,
  },
  {
    id: "there-is-are",
    titleEn: "Describe places around you",
    titleTh: "บรรยายสถานที่ด้วย there is / there are",
    focus: "Places and prepositions",
    goalTh: "บรรยายห้องทำงานหรือย่านที่อยู่ พร้อมบอกตำแหน่งสิ่งของได้อย่างน้อย 6 รายการ",
    explanationTh:
      "ใช้ there is กับคำนามเอกพจน์ และ there are กับพหูพจน์ จากนั้นใช้ in, on, under, next to, between และ opposite เพื่อบอกตำแหน่ง",
    pattern: "There is / are + noun + place phrase",
    examples: [
      { en: "There is a notebook next to my laptop.", th: "มีสมุดอยู่ข้างแล็ปท็อปของฉัน" },
      { en: "There are two cafés near my office.", th: "มีร้านกาแฟสองร้านใกล้ออฟฟิศ" },
      { en: "The bank is opposite the station.", th: "ธนาคารอยู่ตรงข้ามสถานี" },
    ],
    vocabulary: [
      { word: "nearby", meaning: "ใกล้ ๆ", example: "There is a market nearby." },
      { word: "opposite", meaning: "ตรงข้าม", example: "The café is opposite the bank." },
      { word: "between", meaning: "ระหว่าง", example: "The chair is between two desks." },
      { word: "corner", meaning: "มุม/หัวมุม", example: "There is a lamp in the corner." },
      { word: "entrance", meaning: "ทางเข้า", example: "The entrance is on the left." },
    ],
    reviewQuestions: [
      "พูด 3 สิ่งที่คุณ always, sometimes และ never ทำ",
      "วาง usually ให้ถูกตำแหน่งใน She is busy. และ She works at home.",
      "ถาม How often...? เกี่ยวกับการเรียนภาษาอังกฤษ 2 ข้อ",
    ],
    practiceTasks: [
      "มองรอบตัวแล้วสร้าง there is/are อย่างละ 3 ประโยค",
      "เพิ่มคำบอกตำแหน่งในทุกประโยค",
      "เปลี่ยนประโยคบอกเล่า 2 ข้อเป็น Is there...? หรือ Are there...?",
    ],
    speakingPrompt: "พาชมห้องหรือบริเวณบ้านด้วยเสียง 1 นาที โดยบอกสิ่งที่มีและตำแหน่ง",
    writingPrompt: "เขียนคำบรรยาย My Workspace 7 ประโยค",
    minutes: 30,
  },
  {
    id: "some-any-counting",
    titleEn: "Talk about quantities",
    titleTh: "พูดเรื่องจำนวนด้วย some / any / much / many",
    focus: "Countable and uncountable nouns",
    goalTh: "แยกคำนามนับได้และนับไม่ได้ พร้อมเลือกคำบอกจำนวนให้เหมาะสม",
    explanationTh:
      "คำนามนับได้มีเอกพจน์และพหูพจน์ ใช้ many/few ส่วนคำนามนับไม่ได้ใช้ much/little โดยทั่วไป some ใช้ในประโยคบอกเล่า และ any ใช้ในคำถามหรือปฏิเสธ",
    pattern: "some / any + noun | many + countable plural | much + uncountable",
    examples: [
      { en: "I have some useful books.", th: "ฉันมีหนังสือที่มีประโยชน์อยู่บ้าง" },
      { en: "Do we have any time?", th: "เรามีเวลาไหม" },
      { en: "How many exercises are there?", th: "มีแบบฝึกหัดกี่ข้อ" },
    ],
    vocabulary: [
      { word: "amount", meaning: "ปริมาณ", example: "A small amount of time is enough." },
      { word: "enough", meaning: "เพียงพอ", example: "We have enough information." },
      { word: "several", meaning: "หลาย", example: "I learned several new words." },
      { word: "a few", meaning: "เล็กน้อย (นับได้)", example: "I have a few questions." },
      { word: "a little", meaning: "เล็กน้อย (นับไม่ได้)", example: "I need a little help." },
    ],
    reviewQuestions: [
      "บรรยายโต๊ะทำงานด้วย there is/are 4 ประโยค",
      "ถาม Is there...? และ Are there...? อย่างละ 1 ข้อ",
      "ใช้ next to, between และ opposite ในประโยค",
    ],
    practiceTasks: [
      "แยกคำนาม 12 คำเป็น countable และ uncountable",
      "เติม some หรือ any ใน 8 ประโยค",
      "สร้างคำถาม How much...? และ How many...? อย่างละ 3 ข้อ",
    ],
    speakingPrompt: "อธิบายสิ่งที่มีและยังขาดสำหรับการเรียนภาษาอังกฤษของคุณ",
    writingPrompt: "เขียนรายการสิ่งที่ต้องเตรียมสำหรับทริปสั้น ๆ โดยใช้ some, any, much และ many",
    minutes: 30,
  },
  {
    id: "week-one-review",
    titleEn: "Build a clear personal profile",
    titleTh: "ทบทวนสัปดาห์แรก: โปรไฟล์และชีวิตประจำวัน",
    focus: "Review and integration",
    goalTh: "รวมเนื้อหา 6 วันที่ผ่านมาเป็นการพูดและการเขียนชิ้นเดียวโดยไม่แปลทีละคำ",
    explanationTh:
      "วันนี้ไม่เพิ่มไวยากรณ์ใหม่ แต่เชื่อม be, Present Simple, do/does, ความถี่, there is/are และคำบอกจำนวนเข้าด้วยกัน การเรียกใช้หลายเรื่องพร้อมกันช่วยให้จำได้นานขึ้น",
    pattern: "Profile → routine → frequency → place → quantity",
    examples: [
      { en: "I am a developer, and I usually work from home.", th: "ฉันเป็นนักพัฒนาและปกติทำงานจากบ้าน" },
      { en: "There are a few English books on my desk.", th: "มีหนังสือภาษาอังกฤษอยู่สองสามเล่มบนโต๊ะ" },
      { en: "I do not have much free time, but I study every day.", th: "ฉันมีเวลาว่างไม่มาก แต่เรียนทุกวัน" },
    ],
    vocabulary: [
      { word: "progress", meaning: "ความก้าวหน้า", example: "I can see my progress." },
      { word: "habit", meaning: "นิสัย", example: "Daily review is a useful habit." },
      { word: "challenge", meaning: "ความท้าทาย", example: "Speaking is my main challenge." },
      { word: "confident", meaning: "มั่นใจ", example: "I feel more confident now." },
      { word: "consistent", meaning: "สม่ำเสมอ", example: "Consistent practice is important." },
    ],
    reviewQuestions: [
      "อธิบายความต่างของ am/is/are กับ do/does",
      "สร้างประโยค Present Simple ที่มี frequency adverb 3 ข้อ",
      "บรรยายพื้นที่เรียนและสิ่งของที่มีโดยใช้ there is/are กับ some/any",
    ],
    practiceTasks: [
      "แก้ประโยคผิด 10 ข้อที่รวมเนื้อหาทั้งสัปดาห์",
      "พูดตามหัวข้อโดยดูเฉพาะคำสำคัญ ห้ามอ่านประโยคเต็ม",
      "ตรวจงานเขียนของตัวเองโดยวงประธาน กริยา และคำบอกเวลา",
    ],
    speakingPrompt: "พูด My English Learning Life 2 นาที โดยรวมข้อมูลส่วนตัว กิจวัตร พื้นที่เรียน และเป้าหมาย",
    writingPrompt: "เขียนย่อหน้า 90–120 คำหัวข้อ My English Learning Routine",
    minutes: 35,
  },
  {
    id: "past-simple-events",
    titleEn: "Tell what happened",
    titleTh: "เล่าเหตุการณ์ที่ผ่านมา ด้วย Past Simple",
    focus: "Past Simple",
    goalTh: "เล่าเหตุการณ์เมื่อวานตามลำดับเวลา และใช้กริยาช่อง 2 ที่พบบ่อยได้",
    explanationTh:
      "Past Simple ใช้กับเหตุการณ์ที่จบแล้วในอดีต กริยาปกติเติม -ed ส่วนกริยาไม่ปกติต้องจำรูป เช่น go→went, have→had, make→made",
    pattern: "Subject + past verb + finished-time expression",
    examples: [
      { en: "I finished work at six yesterday.", th: "เมื่อวานฉันเลิกงานหกโมง" },
      { en: "We went to a small restaurant.", th: "เราไปร้านอาหารเล็ก ๆ" },
      { en: "She made a simple plan last night.", th: "เมื่อคืนเธอวางแผนง่าย ๆ" },
    ],
    vocabulary: [
      { word: "yesterday", meaning: "เมื่อวาน", example: "I studied yesterday." },
      { word: "ago", meaning: "ที่แล้ว", example: "The meeting ended an hour ago." },
      { word: "happen", meaning: "เกิดขึ้น", example: "What happened next?" },
      { word: "decide", meaning: "ตัดสินใจ", example: "I decided to walk home." },
      { word: "realize", meaning: "ตระหนัก/นึกขึ้นได้", example: "I realized I was late." },
    ],
    reviewQuestions: [
      "สรุปกิจวัตรของคุณด้วย Present Simple 4 ประโยค",
      "พูดสิ่งที่มีในพื้นที่เรียนโดยใช้ some/any",
      "เลือกข้อผิดพลาดหนึ่งอย่างจากสัปดาห์แรกและอธิบายวิธีแก้",
    ],
    practiceTasks: [
      "เปลี่ยนกริยา 12 คำจากรูปปัจจุบันเป็นอดีต",
      "แยก regular และ irregular verbs",
      "เรียงเหตุการณ์เมื่อวาน 6 ขั้นด้วย first, then, after that และ finally",
    ],
    speakingPrompt: "เล่าเรื่องเมื่อวานตั้งแต่หลังเลิกงานจนเข้านอน 1–2 นาที",
    writingPrompt: "เขียน What I Did Yesterday จำนวน 8 ประโยค",
    minutes: 30,
  },
  {
    id: "past-simple-questions",
    titleEn: "Ask about past experiences",
    titleTh: "ถามเรื่องอดีตด้วย did",
    focus: "Past questions and negatives",
    goalTh: "ถามและตอบเกี่ยวกับเหตุการณ์ที่ผ่านมา โดยไม่ใช้กริยาช่อง 2 ซ้ำหลัง did",
    explanationTh:
      "คำถามอดีตใช้ Did + subject + base verb และปฏิเสธใช้ did not + base verb เมื่อมี did แล้วกริยาหลักต้องกลับเป็นรูปเดิม เช่น Did you go? ไม่ใช่ Did you went?",
    pattern: "Did + subject + base verb...? | Subject + did not + base verb",
    examples: [
      { en: "Did you study last night?", th: "เมื่อคืนคุณเรียนไหม" },
      { en: "Where did they go?", th: "พวกเขาไปที่ไหน" },
      { en: "I did not finish the exercise.", th: "ฉันทำแบบฝึกหัดไม่เสร็จ" },
    ],
    vocabulary: [
      { word: "experience", meaning: "ประสบการณ์", example: "It was a useful experience." },
      { word: "remember", meaning: "จำ", example: "Do you remember what happened?" },
      { word: "forget", meaning: "ลืม", example: "I forgot my notebook." },
      { word: "during", meaning: "ระหว่าง", example: "What did you do during lunch?" },
      { word: "recently", meaning: "เมื่อไม่นานมานี้", example: "I recently started this course." },
    ],
    reviewQuestions: [
      "พูดกริยาช่อง 2 ของ go, have, make, take และ see",
      "เล่าเมื่อวาน 4 ประโยคโดยใช้คำบอกลำดับ",
      "หาคำบอกเวลาที่ชี้ว่าเป็น Past Simple",
    ],
    practiceTasks: [
      "เปลี่ยนประโยคอดีต 5 ข้อเป็นคำถามด้วย did",
      "ตอบคำถามทั้ง Yes/No และเพิ่มรายละเอียดหนึ่งประโยค",
      "เขียนสิ่งที่ไม่ได้ทำเมื่อวาน 4 ข้อ",
    ],
    speakingPrompt: "จำลองบทสนทนาถามเพื่อน 6 คำถามเกี่ยวกับวันหยุดที่ผ่านมา แล้วตอบแทนทั้งสองฝ่าย",
    writingPrompt: "เขียนคำถาม 6 ข้อสำหรับสัมภาษณ์เรื่อง A Memorable Day พร้อมคำตอบสั้น ๆ",
    minutes: 30,
  },
  {
    id: "present-continuous",
    titleEn: "Describe what is happening now",
    titleTh: "พูดสิ่งที่กำลังเกิดขึ้นด้วย Present Continuous",
    focus: "Present Continuous",
    goalTh: "บรรยายสิ่งที่ตัวเองและคนรอบตัวกำลังทำอยู่ตอนนี้ได้",
    explanationTh:
      "Present Continuous ใช้กับสิ่งที่กำลังเกิดขึ้นตอนพูดหรือสถานการณ์ชั่วคราว โครงสร้างคือ am/is/are + verb-ing อย่าลืม verb to be",
    pattern: "Subject + am / is / are + verb-ing",
    examples: [
      { en: "I am reviewing yesterday's lesson.", th: "ฉันกำลังทบทวนบทเรียนเมื่อวาน" },
      { en: "She is working from home this week.", th: "สัปดาห์นี้เธอกำลังทำงานจากบ้าน" },
      { en: "They are not waiting for us.", th: "พวกเขาไม่ได้กำลังรอเรา" },
    ],
    vocabulary: [
      { word: "currently", meaning: "ในขณะนี้", example: "I am currently working on a project." },
      { word: "temporary", meaning: "ชั่วคราว", example: "This is a temporary change." },
      { word: "right now", meaning: "ตอนนี้", example: "What are you doing right now?" },
      { word: "focus", meaning: "จดจ่อ", example: "I am focusing on pronunciation." },
      { word: "improve", meaning: "ดีขึ้น/พัฒนา", example: "My listening is improving." },
    ],
    reviewQuestions: [
      "ถามอดีตด้วย did 3 คำถามและตอบเอง",
      "แก้ Did she went...? ให้ถูกต้องและอธิบายเหตุผล",
      "พูดสิ่งที่ไม่ได้ทำเมื่อวาน 2 ประโยค",
    ],
    practiceTasks: [
      "เติม am/is/are และเปลี่ยนกริยาเป็น -ing ใน 8 ข้อ",
      "มองรอบตัวแล้วบอก 5 สิ่งที่กำลังเกิดขึ้น",
      "สร้างคำถาม What are/is ... doing? 4 ข้อ",
    ],
    speakingPrompt: "บรรยายสิ่งที่กำลังเกิดขึ้นในห้องหรือจากภาพหนึ่งภาพเป็นเวลา 1 นาที",
    writingPrompt: "เขียนบันทึกสั้น ๆ หัวข้อ What Is Happening Around Me จำนวน 6 ประโยค",
    minutes: 30,
  },
  {
    id: "simple-vs-continuous",
    titleEn: "Choose routine or happening now",
    titleTh: "แยก Present Simple กับ Present Continuous",
    focus: "Present time contrast",
    goalTh: "เลือก tense จากความหมายและคำบอกเวลา ไม่ใช่จากการเดา",
    explanationTh:
      "Present Simple เน้นนิสัยและข้อเท็จจริง ส่วน Present Continuous เน้นตอนนี้หรือช่วงชั่วคราว ให้มองคำอย่าง usually/every day เทียบกับ now/this week",
    pattern: "Routine: base verb | Now/temporary: be + verb-ing",
    examples: [
      { en: "I work at home, but today I am working at a café.", th: "ฉันทำงานที่บ้าน แต่วันนี้กำลังทำงานที่ร้านกาแฟ" },
      { en: "She usually drives, but she is taking the train this week.", th: "ปกติเธอขับรถ แต่สัปดาห์นี้กำลังนั่งรถไฟ" },
      { en: "What do you do? What are you doing?", th: "คุณทำอาชีพอะไร / ตอนนี้กำลังทำอะไร" },
    ],
    vocabulary: [
      { word: "normally", meaning: "ตามปกติ", example: "I normally start at nine." },
      { word: "these days", meaning: "ช่วงนี้", example: "I am reading more these days." },
      { word: "at the moment", meaning: "ณ ตอนนี้", example: "I am busy at the moment." },
      { word: "instead", meaning: "แทน", example: "I am walking instead." },
      { word: "change", meaning: "เปลี่ยนแปลง", example: "My routine is changing." },
    ],
    reviewQuestions: [
      "สร้างประโยคสิ่งที่กำลังทำตอนนี้ 3 ข้อ",
      "ตั้งคำถาม Present Continuous 2 ข้อ",
      "ตรวจว่าทุกประโยค -ing มี am/is/are หรือไม่",
    ],
    practiceTasks: [
      "เลือก tense ใน 10 สถานการณ์และวงคำบอกเวลาที่ช่วยตัดสินใจ",
      "เขียนคู่ประโยค normally... but today... จำนวน 4 คู่",
      "ฝึกถาม What do you do? เทียบกับ What are you doing?",
    ],
    speakingPrompt: "เปรียบเทียบชีวิตปกติกับสิ่งที่กำลังเปลี่ยนในช่วงนี้อย่างน้อย 6 ประโยค",
    writingPrompt: "เขียน My Normal Week vs This Week จำนวน 80–100 คำ",
    minutes: 30,
  },
  {
    id: "future-plans",
    titleEn: "Talk about plans and predictions",
    titleTh: "พูดแผนอนาคตด้วย be going to และ will",
    focus: "Future forms",
    goalTh: "บอกแผนที่ตัดสินใจแล้ว และแยกจากการตัดสินใจทันทีหรือการคาดการณ์",
    explanationTh:
      "ใช้ be going to กับแผนที่คิดไว้แล้วหรือหลักฐานที่เห็น ใช้ will กับการตัดสินใจตอนพูด ข้อเสนอ คำสัญญา และการคาดการณ์ทั่วไป",
    pattern: "Subject + be going to + base verb | Subject + will + base verb",
    examples: [
      { en: "I am going to review vocabulary tonight.", th: "คืนนี้ฉันวางแผนจะทบทวนคำศัพท์" },
      { en: "I will help you with that exercise.", th: "ฉันจะช่วยคุณทำแบบฝึกหัดนั้น" },
      { en: "English will become easier with practice.", th: "ภาษาอังกฤษจะง่ายขึ้นเมื่อฝึก" },
    ],
    vocabulary: [
      { word: "plan", meaning: "วางแผน", example: "I plan to study tomorrow." },
      { word: "intend", meaning: "ตั้งใจ", example: "I intend to practice every day." },
      { word: "probably", meaning: "น่าจะ", example: "I will probably finish early." },
      { word: "promise", meaning: "สัญญา", example: "I promise I will try." },
      { word: "achieve", meaning: "บรรลุ", example: "I am going to achieve my goal." },
    ],
    reviewQuestions: [
      "ยกตัวอย่าง Present Simple 2 ข้อและ Present Continuous 2 ข้อ",
      "สร้างคู่ประโยค normally... but this week...",
      "อธิบายความต่างระหว่าง What do you do? กับ What are you doing?",
    ],
    practiceTasks: [
      "แยก 8 สถานการณ์ว่าเป็น plan, instant decision หรือ prediction",
      "เติม be going to หรือ will พร้อมเหตุผล",
      "เขียนแผนภาษาอังกฤษ 3 ข้อสำหรับสัปดาห์หน้า",
    ],
    speakingPrompt: "พูดแผน 3 อย่างสำหรับสัปดาห์หน้า และคาดการณ์ชีวิตตัวเองในอีกหนึ่งปี",
    writingPrompt: "เขียน My Plan for Better English จำนวน 8 ประโยค โดยใช้ทั้ง going to และ will",
    minutes: 30,
  },
  {
    id: "can-could-should",
    titleEn: "Ask, offer, and give advice",
    titleTh: "สื่อสารอย่างสุภาพด้วย can / could / should",
    focus: "Modal verbs",
    goalTh: "ขอความช่วยเหลือ เสนอความช่วยเหลือ และให้คำแนะนำในสถานการณ์จริงได้",
    explanationTh:
      "หลัง modal verb ใช้กริยารูปเดิมเสมอ can ใช้พูดความสามารถหรือคำขอทั่วไป could สุภาพขึ้น และ should ใช้ให้คำแนะนำ",
    pattern: "Subject + can / could / should + base verb",
    examples: [
      { en: "Could you repeat that, please?", th: "ช่วยพูดซ้ำได้ไหม" },
      { en: "I can explain the problem.", th: "ฉันอธิบายปัญหาได้" },
      { en: "You should review this lesson tomorrow.", th: "คุณควรทบทวนบทนี้พรุ่งนี้" },
    ],
    vocabulary: [
      { word: "repeat", meaning: "พูด/ทำซ้ำ", example: "Could you repeat the question?" },
      { word: "explain", meaning: "อธิบาย", example: "Can you explain this word?" },
      { word: "recommend", meaning: "แนะนำ", example: "What do you recommend?" },
      { word: "suggest", meaning: "เสนอแนะ", example: "I suggest a short break." },
      { word: "available", meaning: "ว่าง/มีให้ใช้", example: "Are you available tomorrow?" },
    ],
    reviewQuestions: [
      "บอกแผนด้วย going to 3 ข้อ",
      "ตัดสินใจทันทีด้วย will 2 สถานการณ์",
      "อธิบายว่า be ใน be going to เปลี่ยนตามประธานอย่างไร",
    ],
    practiceTasks: [
      "เปลี่ยนคำสั่งตรง ๆ 5 ข้อเป็นคำขอสุภาพด้วย could",
      "ให้คำแนะนำคนที่อยากพัฒนาภาษาอังกฤษ 5 ข้อด้วย should",
      "สร้างประโยคความสามารถ can/can't เกี่ยวกับตัวเอง",
    ],
    speakingPrompt: "จำลองสถานการณ์ขอให้เพื่อนร่วมงานอธิบายงาน แล้วเสนอว่าจะช่วยอะไรได้บ้าง",
    writingPrompt: "เขียนคำแนะนำ 7 ข้อหัวข้อ How to Study English Consistently",
    minutes: 30,
  },
  {
    id: "comparatives",
    titleEn: "Compare choices clearly",
    titleTh: "เปรียบเทียบด้วย comparative และ superlative",
    focus: "Comparisons",
    goalTh: "เปรียบเทียบวิธีเรียน สถานที่ หรือสิ่งของ และอธิบายตัวเลือกที่ดีที่สุดได้",
    explanationTh:
      "คำคุณศัพท์สั้นมักเติม -er/-est ส่วนคำยาวใช้ more/most ใช้ than หลัง comparative และใช้ the หน้า superlative ระวัง good→better→best",
    pattern: "A is adjective-er than B | A is more adjective than B | the best",
    examples: [
      { en: "Reading is easier than speaking for me.", th: "สำหรับฉัน การอ่านง่ายกว่าการพูด" },
      { en: "This exercise is more useful than the last one.", th: "แบบฝึกหัดนี้มีประโยชน์กว่าอันก่อน" },
      { en: "Daily practice is the best strategy.", th: "การฝึกทุกวันเป็นกลยุทธ์ที่ดีที่สุด" },
    ],
    vocabulary: [
      { word: "effective", meaning: "มีประสิทธิภาพ", example: "This method is more effective." },
      { word: "convenient", meaning: "สะดวก", example: "Online practice is convenient." },
      { word: "challenging", meaning: "ท้าทาย", example: "Speaking is more challenging." },
      { word: "similar", meaning: "คล้าย", example: "The two lessons are similar." },
      { word: "different", meaning: "แตกต่าง", example: "My new routine is different." },
    ],
    reviewQuestions: [
      "ขอความช่วยเหลือด้วย Could you...? 2 ข้อ",
      "ให้คำแนะนำด้วย should 3 ข้อ",
      "ตรวจว่าหลัง can/could/should ใช้กริยารูปเดิม",
    ],
    practiceTasks: [
      "เปลี่ยน adjective 10 คำเป็น comparative และ superlative",
      "เปรียบเทียบสองวิธีเรียนด้วยอย่างน้อย 4 เกณฑ์",
      "อธิบายว่าตัวเลือกไหนดีที่สุดและเพราะอะไร",
    ],
    speakingPrompt: "เปรียบเทียบการเรียนจากหนังสือ วิดีโอ และการสนทนา แล้วเลือกวิธีที่เหมาะกับคุณ",
    writingPrompt: "เขียนย่อหน้าเปรียบเทียบ Weekdays and Weekends จำนวน 90–110 คำ",
    minutes: 30,
  },
  {
    id: "cycle-review",
    titleEn: "Use English to explain your real life",
    titleTh: "ภารกิจสรุปรอบ: เล่าอดีต ปัจจุบัน และอนาคต",
    focus: "Integrated communication",
    goalTh: "สร้างเรื่องเล่าที่เชื่อมชีวิตประจำวัน เหตุการณ์ที่ผ่านมา สิ่งที่กำลังทำ และแผนอนาคต",
    explanationTh:
      "วันนี้เป็น retrieval practice: ดึงความรู้จากความจำและเลือก tense จากความหมาย งานหลักคือสื่อสารให้เข้าใจ แล้วค่อยตรวจรูปกริยาและคำเชื่อมในรอบแก้ไข",
    pattern: "Past → present routine → now → future plan → advice",
    examples: [
      { en: "I started this course two weeks ago, and now I am building a daily habit.", th: "ฉันเริ่มหลักสูตรนี้เมื่อสองสัปดาห์ก่อน และตอนนี้กำลังสร้างนิสัยรายวัน" },
      { en: "I usually study at night, but tomorrow I am going to study earlier.", th: "ปกติฉันเรียนกลางคืน แต่พรุ่งนี้วางแผนจะเรียนเร็วขึ้น" },
      { en: "Speaking is harder than reading, so I should practice it more.", th: "การพูดยากกว่าการอ่าน ฉันจึงควรฝึกมากขึ้น" },
    ],
    vocabulary: [
      { word: "reflect", meaning: "ทบทวน/สะท้อนคิด", example: "Take time to reflect on your progress." },
      { word: "strength", meaning: "จุดแข็ง", example: "Reading is one of my strengths." },
      { word: "weakness", meaning: "จุดอ่อน", example: "Pronunciation is still a weakness." },
      { word: "strategy", meaning: "กลยุทธ์", example: "I need a better strategy." },
      { word: "continue", meaning: "ทำต่อ", example: "I will continue practicing." },
    ],
    reviewQuestions: [
      "เลือก 5 โครงสร้างที่ยังผิดบ่อยและสร้างตัวอย่างใหม่",
      "อธิบายความต่างของอดีต กิจวัตร สิ่งที่กำลังทำ และแผน",
      "ทบทวนคำศัพท์ทั้งหมดโดยเลือก 10 คำที่ใช้กับชีวิตจริงมากที่สุด",
    ],
    practiceTasks: [
      "วางโครงเรื่องด้วยคำสำคัญ 5 ช่วงโดยไม่เขียนประโยคเต็ม",
      "พูดรอบแรกเพื่อสื่อความหมาย แล้วพูดรอบสองเพื่อแก้ tense",
      "ตรวจงานเขียนด้วยรายการ: subject, verb, time marker, connector",
    ],
    speakingPrompt: "พูด My Progress and My Next Step 3 นาที โดยครอบคลุมอดีต ปัจจุบัน และอนาคต",
    writingPrompt: "เขียน reflection 130–160 คำ: สิ่งที่เรียนรู้ จุดที่ดีขึ้น ปัญหา และแผนรอบต่อไป",
    minutes: 40,
  },
] as const satisfies ReadonlyArray<DailyLesson>;

export const courseLength = curriculum.length;

export function getLessonForSequence(sequence: number) {
  const safeSequence = Math.max(1, Math.floor(sequence));
  const zeroBased = safeSequence - 1;
  const lessonIndex = zeroBased % courseLength;

  return {
    sequence: safeSequence,
    cycle: Math.floor(zeroBased / courseLength) + 1,
    dayInCycle: lessonIndex + 1,
    lesson: curriculum[lessonIndex],
  };
}
