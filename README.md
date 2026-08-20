# English Daily Lab

เว็บวางแผนเรียนภาษาอังกฤษรายวันสำหรับผู้ใช้คนเดียว เนื้อหาบทเรียนเผยแพร่ผ่าน GitHub Pages และระบบจะเลือกบทของวันนี้จากวันที่ประเทศไทยโดยอัตโนมัติ จึงเปิดจากที่บ้านหรือที่ทำงานแล้วเห็นเนื้อหาวันเดียวกัน

ไม่ต้องมี Login, Server หรือฐานข้อมูลออนไลน์ ความคืบหน้าจะเก็บใน `localStorage` ของแต่ละเบราว์เซอร์ และย้ายระหว่างเครื่องได้จากหน้า Settings ด้วย Export / Import ไฟล์ JSON

## เปิดบนเครื่องที่ port 3031

ต้องติดตั้ง Node.js 20.9 ขึ้นไป แล้วรัน:

```powershell
npm install
npm run dev
```

เปิด [http://localhost:3031/EnglishDailyLab](http://localhost:3031/EnglishDailyLab)

คำสั่ง `npm run dev` ถูกตั้งให้ใช้ port 3031 ไว้แล้ว หากต้องการกำหนดเองชั่วคราวให้ใช้:

```powershell
npx next dev -p 3031
```

## คำสั่งที่ใช้ในโปรเจกต์

```powershell
npm run dev       # เปิดเว็บสำหรับพัฒนาที่ port 3031
npm run lint      # ตรวจรูปแบบและข้อผิดพลาดในโค้ด
npm test          # รันชุดทดสอบทั้งหมดหนึ่งครั้ง
npm run test:watch # รันทดสอบใหม่อัตโนมัติเมื่อแก้ไฟล์
npm run build     # สร้างเว็บแบบ static ไว้ในโฟลเดอร์ out/
```

ไม่มีคำสั่ง Database แล้ว เพราะ GitHub Pages รันฐานข้อมูลหรือโค้ดฝั่ง Server ไม่ได้

## การเก็บและย้ายประวัติ

- บทเรียนของวันนี้คำนวณจากวันที่ `Asia/Bangkok` ไม่ได้คำนวณจากจำนวนบทที่เรียนจบ
- การกด “เรียนวันนี้เสร็จแล้ว” จะบันทึกเฉพาะในเบราว์เซอร์ปัจจุบัน
- หน้า Settings สามารถ Export ประวัติเป็น JSON และ Import ที่อีกเครื่องได้
- การ Import จะเพิ่มเฉพาะรายการที่ยังไม่มี และไม่ลบหรือเขียนทับประวัติเดิม
- ควร Export สำรองก่อนล้างข้อมูลเว็บไซต์ เปลี่ยนเบราว์เซอร์ หรือเปลี่ยนเครื่อง

## เผยแพร่ด้วย GitHub Pages

Repository: [aueaoangkuns/EnglishDailyLab](https://github.com/aueaoangkuns/EnglishDailyLab)

หลังจาก push โค้ดขึ้น branch `main` หรือ `master`:

1. เปิด repository บน GitHub
2. ไปที่ **Settings → Pages**
3. ที่ **Build and deployment → Source** เลือก **GitHub Actions**
4. ไปที่แท็บ **Actions** และรอ workflow ชื่อ **Deploy GitHub Pages** ทำงานเสร็จ
5. เปิดเว็บที่ [https://aueaoangkuns.github.io/EnglishDailyLab/](https://aueaoangkuns.github.io/EnglishDailyLab/)

ทุกครั้งที่ push ไปยัง `main` หรือ `master` ระบบจะตรวจ lint, test, build และเผยแพร่เวอร์ชันใหม่ให้อัตโนมัติ

ดูรายละเอียดโครงสร้างที่ [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
