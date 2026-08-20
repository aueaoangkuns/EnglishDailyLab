"use client";

import Link from "next/link";
import { LearningPlanLoading } from "@/components/learning-plan-loading";
import { WeeklyRhythmChart } from "@/components/weekly-rhythm-chart";
import { useLearningProgress } from "@/hooks/use-learning-progress";

export default function DashboardPage() {
  const { state } = useLearningProgress();

  if (!state) {
    return <LearningPlanLoading />;
  }

  const { lesson } = state.current;
  const metrics = [
    {
      label: "เรียนต่อเนื่อง",
      value: `${state.currentStreak} วัน`,
      detail: state.currentStreak ? "รักษาจังหวะนี้ต่อไป" : "เริ่ม streak แรกได้วันนี้",
      mark: "ST",
      accent: "bg-[#fff1d8] text-[#a15c00]",
    },
    {
      label: "เวลาเรียนวันนี้",
      value: `${state.todayStudyMinutes} นาที`,
      detail: `เป้าหมายของบทวันนี้ ${lesson.minutes} นาที`,
      mark: "TM",
      accent: "bg-[#e3f3ff] text-[#176a9a]",
    },
    {
      label: "บทที่เรียนจบ",
      value: `${state.completedCount} บท`,
      detail: `หลักสูตรพื้นฐาน ${state.courseLength} บท`,
      mark: "OK",
      accent: "bg-[#eee9ff] text-[#6850af]",
    },
    {
      label: "คำศัพท์วันนี้",
      value: `${lesson.vocabulary.length} คำ`,
      detail: "ใช้ทุกคำในประโยคจริง",
      mark: "Aa",
      accent: "bg-[#dff5e8] text-[#21764b]",
    },
  ] as const;

  return (
    <div className="space-y-8">
      <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 text-sm font-semibold tracking-[0.16em] text-[#2b8a60] uppercase">Today&apos;s learning plan</p>
          <h1 className="text-3xl font-bold tracking-[-0.04em] text-[#17211d] sm:text-4xl">วันนี้เรียนอะไร?</h1>
          <p lang="th" className="mt-3 text-base text-[#68736e]">{state.todayLabel} · เส้นทาง A2 → B1</p>
        </div>
        <div className={`inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold shadow-sm ${state.completedToday ? "border-[#b8dfc8] bg-[#e5f6ec] text-[#246b48]" : "border-[#dbe5df] bg-white text-[#52615a]"}`}>
          <span className={`h-2 w-2 rounded-full ${state.completedToday ? "bg-[#38a873]" : "bg-[#e5a13a]"}`} aria-hidden="true" />
          {state.completedToday ? "เรียนวันนี้เสร็จแล้ว" : "บทเรียนพร้อมเริ่ม"}
        </div>
      </section>

      <section className="overflow-hidden rounded-[28px] bg-[#173a2c] text-white shadow-[0_22px_55px_rgba(23,58,44,0.2)]">
        <div className="grid lg:grid-cols-[minmax(0,1.25fr)_minmax(300px,0.75fr)]">
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
              <span className="rounded-full bg-[#b8edcf] px-3 py-1.5 text-[#173a2c]">วันที่ {state.current.dayInCycle} / {state.courseLength}</span>
              <span className="rounded-full bg-white/8 px-3 py-1.5 text-white/70">รอบการเรียน {state.current.cycle}</span>
              <span className="rounded-full bg-white/8 px-3 py-1.5 text-white/70">{lesson.minutes} นาที</span>
            </div>
            <p className="mt-7 text-sm font-semibold text-[#8fe0b8]">{lesson.focus}</p>
            <h2 className="mt-2 max-w-3xl text-3xl font-bold tracking-[-0.04em] sm:text-4xl">{lesson.titleTh}</h2>
            <p className="mt-2 text-base font-medium text-white/55">{lesson.titleEn}</p>
            <p lang="th" className="mt-6 max-w-3xl text-base leading-8 text-white/78">เป้าหมาย: {lesson.goalTh}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/daily-practice" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#b8edcf] px-5 text-sm font-bold text-[#153c2c] transition-colors hover:bg-[#9ee1bd]">
                {state.completedToday ? "เปิดดูบทเรียนวันนี้" : "เริ่มเรียนตามแผน"}
              </Link>
              <span className="inline-flex min-h-12 items-center text-sm text-white/55">เริ่มจากทบทวนก่อน แล้วค่อยเพิ่มเรื่องใหม่</span>
            </div>
          </div>

          <div className="border-t border-white/10 bg-white/5 p-6 sm:p-8 lg:border-t-0 lg:border-l">
            <p className="text-xs font-semibold tracking-[0.14em] text-[#8fe0b8] uppercase">Why this lesson?</p>
            {state.previous ? (
              <div className="mt-5">
                <p className="text-sm text-white/48">บทก่อนหน้า</p>
                <p className="mt-1 font-semibold">{state.previous.lesson.titleTh}</p>
                <div className="my-5 h-px bg-white/10" />
                <p lang="th" className="text-sm leading-7 text-white/68">วันนี้จะดึงโครงสร้างจากบทก่อนกลับมาใช้ก่อน แล้วเพิ่ม <strong className="text-white">{lesson.focus}</strong> เพื่อให้พูดได้ละเอียดและต่อเนื่องขึ้น</p>
              </div>
            ) : (
              <p lang="th" className="mt-5 text-sm leading-7 text-white/68">นี่คือบทตั้งต้น ระบบจะดูว่าคุณใช้ประโยคพื้นฐานได้แค่ไหน แล้ววันต่อไปจะนำประโยควันนี้ไปต่อยอดเป็นกิจวัตรประจำวัน</p>
            )}
            <div className="mt-7 rounded-2xl bg-black/10 p-4 ring-1 ring-white/8">
              <p className="text-xs text-white/45">พรุ่งนี้จะต่อด้วย</p>
              <p className="mt-1.5 text-sm font-semibold">{state.next.lesson.titleTh}</p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="steps-heading">
        <div className="mb-4 flex flex-col justify-between gap-1 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold text-[#2b8a60]">เริ่มจากตรงนี้</p>
            <h2 id="steps-heading" className="mt-1 text-xl font-bold tracking-[-0.03em] text-[#1c2923]">แผน 4 ขั้นของวันนี้</h2>
          </div>
          <p className="text-sm text-[#7a8580]">ทำตามลำดับ ไม่ต้องเลือกเอง</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            { number: "01", time: "5 นาที", title: "ทบทวนบทก่อน", detail: lesson.reviewQuestions[0] },
            { number: "02", time: "10 นาที", title: "เรียนโครงสร้างใหม่", detail: lesson.pattern },
            { number: "03", time: "7 นาที", title: "คำศัพท์ในบริบท", detail: lesson.vocabulary.map((item) => item.word).join(" · ") },
            { number: "04", time: `${Math.max(8, lesson.minutes - 22)} นาที`, title: "พูดและเขียนจริง", detail: lesson.speakingPrompt },
          ].map((step) => (
            <article key={step.number} className="rounded-[22px] border border-[#e1e8e4] bg-white p-5 shadow-[0_12px_32px_rgba(38,58,48,0.05)]">
              <div className="flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#dff5e8] text-xs font-bold text-[#21714a]">{step.number}</span>
                <span className="text-xs font-semibold text-[#87918c]">{step.time}</span>
              </div>
              <h3 className="mt-5 font-bold text-[#1b2922]">{step.title}</h3>
              <p lang="th" className="mt-2 line-clamp-3 text-sm leading-6 text-[#748079]">{step.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="progress-heading">
        <div className="mb-4 flex items-center justify-between">
          <h2 id="progress-heading" className="text-lg font-bold tracking-[-0.02em] text-[#1c2923]">ความคืบหน้าจริง</h2>
          <p className="text-sm text-[#7a8580]">บันทึกในเบราว์เซอร์นี้</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <article key={metric.label} className="rounded-[22px] border border-[#e1e8e4] bg-white p-5 shadow-[0_12px_32px_rgba(38,58,48,0.05)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-[#738079]">{metric.label}</p>
                  <p className="mt-3 text-2xl font-bold tracking-[-0.03em] text-[#1b2922]">{metric.value}</p>
                </div>
                <span className={`flex h-11 min-w-11 items-center justify-center rounded-[14px] px-2 text-xs font-bold ${metric.accent}`} aria-hidden="true">{metric.mark}</span>
              </div>
              <p className="mt-4 border-t border-[#eef2ef] pt-3 text-xs font-medium text-[#8a948f]">{metric.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[24px] border border-[#e1e8e4] bg-white p-6 shadow-[0_12px_32px_rgba(38,58,48,0.05)]">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
          <div>
            <p className="text-sm font-semibold text-[#2b8a60]">7 วันที่ผ่านมา</p>
            <h2 className="mt-1 text-xl font-bold tracking-[-0.03em] text-[#1c2923]">เวลาที่เรียนจริง</h2>
          </div>
          <p className="text-sm text-[#7a8580]">เป้าหมาย: อย่างน้อย 1 บทต่อวัน</p>
        </div>
        <div className="mt-6 h-64" aria-label="กราฟเวลาเรียนเจ็ดวันที่ผ่านมา">
          <WeeklyRhythmChart data={state.weeklyData} />
        </div>
      </section>
    </div>
  );
}
