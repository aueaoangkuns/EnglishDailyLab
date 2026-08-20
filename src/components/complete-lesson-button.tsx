"use client";

type CompleteLessonButtonProps = {
  onComplete: () => void;
};

export function CompleteLessonButton({ onComplete }: CompleteLessonButtonProps) {
  return (
    <button
      type="button"
      onClick={onComplete}
      className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#b8edcf] px-5 text-sm font-bold text-[#153c2c] transition-colors hover:bg-[#9ee1bd]"
    >
      เรียนวันนี้เสร็จแล้ว
    </button>
  );
}
