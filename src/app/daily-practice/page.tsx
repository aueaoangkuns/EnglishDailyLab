"use client";

import { CompleteLessonButton } from "@/components/complete-lesson-button";
import { LearningPlanLoading } from "@/components/learning-plan-loading";
import { useLearningProgress } from "@/hooks/use-learning-progress";

export default function DailyPracticePage() {
  const { state, completeToday } = useLearningProgress();

  if (!state) {
    return <LearningPlanLoading />;
  }

  const { lesson } = state.current;

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <header className="rounded-[26px] bg-[#173a2c] p-6 text-white shadow-[0_20px_50px_rgba(23,58,44,0.18)] sm:p-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
          <div>
            <p className="text-sm font-semibold text-[#8fe0b8]">Daily Practice · วันที่ {state.current.dayInCycle}/{state.courseLength}</p>
            <h1 className="mt-3 text-3xl font-bold tracking-[-0.04em] sm:text-4xl">{lesson.titleTh}</h1>
            <p className="mt-2 text-base text-white/55">{lesson.titleEn}</p>
          </div>
          <span className="w-fit rounded-full bg-white/8 px-4 py-2 text-sm font-semibold text-white/70">ประมาณ {lesson.minutes} นาที</span>
        </div>
        <p lang="th" className="mt-7 max-w-3xl text-base leading-8 text-white/78">เป้าหมายวันนี้: {lesson.goalTh}</p>
      </header>

      <section className="rounded-[24px] border border-[#e1e8e4] bg-white p-6 shadow-[0_12px_32px_rgba(38,58,48,0.05)] sm:p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff1d8] text-xs font-bold text-[#9a5d0b]">01</span>
          <div>
            <p className="text-xs font-semibold text-[#9a5d0b]">5 นาที</p>
            <h2 className="font-bold text-[#1b2922]">เรียกความรู้เดิมกลับมาก่อน</h2>
          </div>
        </div>
        {state.previous && <p className="mt-5 rounded-xl bg-[#f7f9f8] px-4 py-3 text-sm text-[#65736c]">เชื่อมจากบทก่อน: <strong>{state.previous.lesson.titleTh}</strong></p>}
        <ol className="mt-5 space-y-3">
          {lesson.reviewQuestions.map((question, index) => (
            <li key={question} lang="th" className="flex gap-3 text-sm leading-7 text-[#5f6d66]"><span className="font-bold text-[#bf7a1e]">{index + 1}.</span>{question}</li>
          ))}
        </ol>
      </section>

      <section className="rounded-[24px] border border-[#e1e8e4] bg-white p-6 shadow-[0_12px_32px_rgba(38,58,48,0.05)] sm:p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#dff5e8] text-xs font-bold text-[#21714a]">02</span>
          <div>
            <p className="text-xs font-semibold text-[#2b8a60]">10 นาที</p>
            <h2 className="font-bold text-[#1b2922]">เรียนเรื่องใหม่: {lesson.focus}</h2>
          </div>
        </div>
        <p lang="th" className="mt-5 text-base leading-8 text-[#56665e]">{lesson.explanationTh}</p>
        <div className="mt-5 rounded-2xl bg-[#173a2c] p-5 text-white">
          <p className="text-xs font-semibold tracking-[0.12em] text-[#8fe0b8] uppercase">Core pattern</p>
          <code className="mt-3 block whitespace-normal font-mono text-sm leading-7 text-white/90">{lesson.pattern}</code>
        </div>
        <div className="mt-5 grid gap-3">
          {lesson.examples.map((example) => (
            <div key={example.en} className="rounded-xl border border-[#e8eeea] p-4">
              <p className="font-semibold text-[#24352d]">{example.en}</p>
              <p lang="th" className="mt-1 text-sm text-[#7b8781]">{example.th}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[24px] border border-[#e1e8e4] bg-white p-6 shadow-[0_12px_32px_rgba(38,58,48,0.05)] sm:p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e3f3ff] text-xs font-bold text-[#176a9a]">03</span>
          <div>
            <p className="text-xs font-semibold text-[#24769f]">7 นาที</p>
            <h2 className="font-bold text-[#1b2922]">คำศัพท์ที่ต้องใช้วันนี้</h2>
          </div>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {lesson.vocabulary.map((item) => (
            <article key={item.word} className="rounded-2xl bg-[#f6f9f7] p-4 ring-1 ring-[#e5ece8]">
              <div className="flex items-baseline justify-between gap-3"><h3 className="font-bold text-[#1d382c]">{item.word}</h3><span lang="th" className="text-sm text-[#4f7b66]">{item.meaning}</span></div>
              <p className="mt-2 text-sm leading-6 text-[#718078]">{item.example}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[24px] border border-[#e1e8e4] bg-white p-6 shadow-[0_12px_32px_rgba(38,58,48,0.05)] sm:p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eee9ff] text-xs font-bold text-[#6850af]">04</span>
          <div>
            <p className="text-xs font-semibold text-[#6850af]">8–15 นาที</p>
            <h2 className="font-bold text-[#1b2922]">ลงมือใช้ ไม่ใช่แค่อ่าน</h2>
          </div>
        </div>
        <ol className="mt-5 space-y-3">
          {lesson.practiceTasks.map((task, index) => (
            <li key={task} lang="th" className="flex gap-3 rounded-xl bg-[#f8f9fb] p-4 text-sm leading-7 text-[#596860]"><span className="font-bold text-[#6850af]">{index + 1}.</span>{task}</li>
          ))}
        </ol>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-[#dfe8e3] p-5"><p className="text-xs font-bold tracking-[0.12em] text-[#2b8a60] uppercase">Speaking</p><p lang="th" className="mt-2 text-sm leading-7 text-[#596860]">{lesson.speakingPrompt}</p></div>
          <div className="rounded-2xl border border-[#dfe8e3] p-5"><p className="text-xs font-bold tracking-[0.12em] text-[#2b8a60] uppercase">Writing</p><p lang="th" className="mt-2 text-sm leading-7 text-[#596860]">{lesson.writingPrompt}</p></div>
        </div>
      </section>

      <footer className={`rounded-[24px] p-6 sm:p-8 ${state.completedToday ? "border border-[#b8dfc8] bg-[#e7f6ed]" : "bg-[#173a2c] text-white"}`}>
        {state.completedToday ? (
          <div>
            <p className="font-bold text-[#226b47]">บันทึกบทเรียนวันนี้แล้ว ✓</p>
            <p className="mt-2 text-sm leading-7 text-[#567363]">พรุ่งนี้ระบบจะเปิดบทถัดไป: <strong>{state.next.lesson.titleTh}</strong></p>
          </div>
        ) : (
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div><p className="font-bold">ทำครบทั้ง 4 ขั้นแล้วหรือยัง?</p><p className="mt-1 text-sm text-white/58">กดเมื่อเรียนเสร็จ ระบบจะบันทึกประวัติและเตรียมบทถัดไปสำหรับวันต่อไป</p></div>
            <CompleteLessonButton onComplete={completeToday} />
          </div>
        )}
      </footer>
    </div>
  );
}
