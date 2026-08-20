import { notFound } from "next/navigation";
import { navigationItems } from "@/lib/navigation";

type ComingSoonPageProps = {
  params: Promise<{ section: string }>;
};

export function generateStaticParams() {
  return navigationItems
    .filter(
      (item) =>
        item.href !== "/" &&
        item.href !== "/daily-practice" &&
        item.href !== "/settings",
    )
    .map((item) => ({ section: item.href.slice(1) }));
}

export default async function ComingSoonPage({ params }: ComingSoonPageProps) {
  const { section } = await params;
  const item = navigationItems.find((candidate) => candidate.href === `/${section}`);

  if (!item) {
    notFound();
  }

  return (
    <div className="mx-auto flex min-h-[68vh] max-w-2xl items-center justify-center py-12 text-center">
      <section className="w-full rounded-[28px] border border-[#e0e8e3] bg-white px-7 py-14 shadow-[0_18px_50px_rgba(38,58,48,0.07)] sm:px-12">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#dff5e8] text-lg font-bold text-[#24724c]">
          {item.mark}
        </span>
        <p className="mt-7 text-sm font-semibold tracking-[0.16em] text-[#2b8a60] uppercase">Coming soon</p>
        <h1 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-[#17211d]">{item.label}</h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-[#6d7973]">
          This section is intentionally reserved for a future milestone. The foundation is ready, but no learning business logic has been added yet.
        </p>
        <p lang="th" className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#87918c]">
          ส่วนนี้จะพัฒนาในขั้นถัดไป โดยรองรับคำอธิบายภาษาไทยอย่างเต็มรูปแบบ
        </p>
      </section>
    </div>
  );
}
