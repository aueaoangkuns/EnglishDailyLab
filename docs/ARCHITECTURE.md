# English Daily Lab architecture

## ภาพรวม

English Daily Lab เป็น Next.js static export สำหรับ GitHub Pages ไม่มี API, Server Action, authentication หรือฐานข้อมูลภายนอก หลัง `npm run build` ไฟล์เว็บทั้งหมดจะอยู่ใน `out/` และ workflow ใน `.github/workflows/deploy-pages.yml` จะนำโฟลเดอร์นี้ขึ้น GitHub Pages

เว็บถูกตั้ง `basePath` เป็น `/EnglishDailyLab` ให้ตรงกับชื่อ repository และใช้ URL `https://aueaoangkuns.github.io/EnglishDailyLab/`

## การเลือกบทเรียนรายวัน

หลักสูตรอยู่ใน `src/lib/curriculum.ts` และเป็นส่วนหนึ่งของ source code ทุกเครื่องจึงได้เนื้อหาเหมือนกัน

`src/lib/progression.ts` คำนวณลำดับบทจากจำนวนวันที่ผ่านไปนับจากวันเริ่มหลักสูตร ส่วน `src/lib/learning-plan.ts` ใช้เขตเวลา `Asia/Bangkok` สร้างแผนของวันนี้ บทก่อนหน้า บทถัดไป streak และสถิติ 7 วัน

การเลือกบทไม่ขึ้นกับประวัติที่บันทึกไว้ ดังนั้นเครื่องที่บ้านและที่ทำงานจะเห็นบทเดียวกันในวันเดียวกัน แม้จะยังไม่ได้ Import ประวัติข้ามเครื่อง

## การเก็บประวัติในเบราว์เซอร์

`src/hooks/use-learning-progress.ts` อ่านและเขียน `localStorage` ที่ key `english-daily-lab.progress.v1` ข้อมูลผ่าน Zod schema ใน `src/lib/learning-progress.ts` ก่อนนำมาใช้

ประวัติ completion เป็นแบบ append-only:

- completion ของวันและบทเดิมจะไม่ถูกเพิ่มซ้ำ
- Import รวมรายการด้วย `id` และเพิ่มเฉพาะรายการใหม่
- Import ไม่ลบหรือแก้ไขรายการที่มีอยู่แล้ว
- ไม่มีปุ่ม Reset เพื่อป้องกันการลบประวัติโดยไม่ตั้งใจ

ข้อมูลของแต่ละเบราว์เซอร์แยกกัน ผู้ใช้จึงควร Export จากเครื่องหนึ่งแล้ว Import ที่อีกเครื่อง และเก็บไฟล์ JSON สำรองไว้เป็นระยะ

## โครงสร้างสำคัญ

- `src/app/`: หน้า Dashboard, Daily Practice, Settings และหน้าส่วนอื่น
- `src/components/`: ส่วนประกอบ UI
- `src/hooks/`: การเชื่อม React กับ browser storage
- `src/lib/curriculum.ts`: เนื้อหาหลักสูตรรายวัน
- `src/lib/learning-plan.ts`: แผนรายวันและสถิติ
- `src/lib/learning-progress.ts`: schema, completion และ merge import
- `.github/workflows/deploy-pages.yml`: ตรวจสอบและ deploy GitHub Pages
- `data/`: ไฟล์ SQLite รุ่นเดิมที่ถูก ignore และเก็บไว้โดยไม่ถูกนำไปเผยแพร่

## ข้อจำกัดที่ตั้งใจไว้

GitHub Pages เป็น static hosting จึงไม่มีระบบ sync ประวัติอัตโนมัติระหว่างเครื่อง การ sync อัตโนมัติจะต้องใช้ backend หรือบริการฐานข้อมูล ซึ่งอยู่นอกขอบเขตเวอร์ชันฟรีแบบ GitHub ล้วนนี้
