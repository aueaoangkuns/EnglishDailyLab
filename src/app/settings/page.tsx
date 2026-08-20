"use client";

import { useRef, useState } from "react";
import { LearningPlanLoading } from "@/components/learning-plan-loading";
import { useLearningProgress } from "@/hooks/use-learning-progress";

export default function SettingsPage() {
  const { state, progress, exportProgress, importProgress } = useLearningProgress();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  if (!state) {
    return <LearningPlanLoading />;
  }

  async function handleImport(file: File | undefined) {
    if (!file) {
      return;
    }

    try {
      const result = await importProgress(file);
      setIsError(false);
      setMessage(
        result.added > 0
          ? `นำเข้าสำเร็จ เพิ่มประวัติใหม่ ${result.added} รายการ`
          : "ไฟล์นี้ไม่มีประวัติใหม่ที่ต้องเพิ่ม",
      );
    } catch {
      setIsError(true);
      setMessage("นำเข้าไม่สำเร็จ กรุณาเลือกไฟล์ JSON ที่ Export จาก English Daily Lab");
    } finally {
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <header>
        <p className="text-sm font-semibold tracking-[0.14em] text-[#2b8a60] uppercase">
          Settings
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-[-0.04em] text-[#17211d]">
          ย้ายประวัติการเรียนระหว่างเครื่อง
        </h1>
        <p lang="th" className="mt-3 max-w-2xl text-base leading-7 text-[#68736e]">
          เนื้อหาบทเรียนเหมือนกันทุกเครื่องตามวันที่ประเทศไทย แต่ประวัติการเรียนจะเก็บอยู่ในเบราว์เซอร์ของแต่ละเครื่อง
        </p>
      </header>

      <section className="rounded-[26px] border border-[#dfe8e3] bg-white p-6 shadow-[0_14px_36px_rgba(38,58,48,0.06)] sm:p-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold text-[#2b8a60]">ประวัติในเบราว์เซอร์นี้</p>
            <p className="mt-2 text-3xl font-bold tracking-[-0.04em] text-[#17211d]">
              {progress.completions.length} บท
            </p>
            <p className="mt-2 text-sm text-[#738079]">ข้อมูลจะไม่ถูกส่งไปยังฐานข้อมูลภายนอก</p>
          </div>
          <button
            type="button"
            onClick={exportProgress}
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#173a2c] px-5 text-sm font-bold text-white transition-colors hover:bg-[#23523f]"
          >
            Export ประวัติเป็น JSON
          </button>
        </div>
      </section>

      <section className="rounded-[26px] border border-[#dfe8e3] bg-white p-6 shadow-[0_14px_36px_rgba(38,58,48,0.06)] sm:p-8">
        <p className="text-sm font-semibold text-[#2b8a60]">นำประวัติไปอีกเครื่อง</p>
        <ol lang="th" className="mt-4 space-y-2 text-sm leading-7 text-[#65736c]">
          <li>1. ที่เครื่องเดิม กด Export แล้วนำไฟล์ JSON ไปยังเครื่องใหม่</li>
          <li>2. ที่เครื่องใหม่ เปิดหน้านี้แล้วกด Import</li>
          <li>3. ระบบจะรวมเฉพาะรายการใหม่ และจะไม่ลบประวัติเดิม</li>
        </ol>
        <input
          ref={fileInputRef}
          type="file"
          accept="application/json,.json"
          className="sr-only"
          onChange={(event) => void handleImport(event.target.files?.[0])}
        />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl border border-[#b9cdc2] bg-[#eef8f2] px-5 text-sm font-bold text-[#205f41] transition-colors hover:bg-[#dff2e7]"
        >
          Import ประวัติจาก JSON
        </button>
        {message && (
          <p
            role="status"
            className={`mt-4 rounded-xl px-4 py-3 text-sm ${
              isError ? "bg-[#fff0ed] text-[#a64332]" : "bg-[#e7f6ed] text-[#226b47]"
            }`}
          >
            {message}
          </p>
        )}
      </section>

      <section className="rounded-[22px] bg-[#fff8e9] p-5 ring-1 ring-[#f1dfb8]">
        <p className="text-sm font-semibold text-[#8d5a13]">สิ่งที่ควรรู้</p>
        <p lang="th" className="mt-2 text-sm leading-7 text-[#7c6747]">
          หากล้างข้อมูลเว็บไซต์ เปลี่ยนเบราว์เซอร์ หรือเปลี่ยนเครื่อง ประวัติในเบราว์เซอร์นั้นจะหายได้ ควร Export สำรองเป็นระยะ
        </p>
      </section>
    </div>
  );
}
