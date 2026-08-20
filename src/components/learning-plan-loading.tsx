export function LearningPlanLoading() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl items-center justify-center">
      <div className="w-full rounded-[24px] border border-[#e1e8e4] bg-white p-8 text-center shadow-[0_12px_32px_rgba(38,58,48,0.05)]">
        <span className="mx-auto block h-3 w-3 animate-pulse rounded-full bg-[#42a875]" />
        <p className="mt-4 font-semibold text-[#2a3a32]">กำลังเตรียมบทเรียนวันนี้...</p>
        <p className="mt-2 text-sm text-[#7a8580]">ระบบกำลังอ่านวันที่ไทยและความคืบหน้าใน Browser นี้</p>
      </div>
    </div>
  );
}
