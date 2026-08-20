"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/lib/navigation";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="border-b border-white/10 bg-[#142c23] px-4 py-5 text-white lg:sticky lg:top-0 lg:h-screen lg:border-r lg:border-b-0 lg:px-5 lg:py-7">
      <div className="flex items-center gap-3 px-2">
        <span className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#b8edcf] text-sm font-black tracking-[-0.05em] text-[#153c2c]">
          ED
        </span>
        <div>
          <p className="text-sm font-bold tracking-[-0.01em]">English Daily Lab</p>
          <p className="mt-0.5 text-xs text-white/45">Learn a little every day</p>
        </div>
      </div>

      <nav aria-label="Primary navigation" className="mt-5 overflow-x-auto pb-1 lg:mt-9 lg:overflow-visible">
        <ul className="flex min-w-max gap-1.5 lg:min-w-0 lg:flex-col">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors lg:w-full ${
                    isActive
                      ? "bg-white text-[#173a2c] shadow-sm"
                      : "text-white/63 hover:bg-white/7 hover:text-white"
                  }`}
                >
                  <span
                    className={`flex h-7 min-w-7 items-center justify-center rounded-lg px-1 text-[10px] font-bold ${
                      isActive ? "bg-[#dff5e8] text-[#21714a]" : "bg-white/8 text-white/65"
                    }`}
                    aria-hidden="true"
                  >
                    {item.mark}
                  </span>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-8 hidden rounded-2xl bg-white/6 p-4 ring-1 ring-white/8 lg:block">
        <p className="text-xs font-semibold text-[#8fe0b8]">Browser-first</p>
        <p className="mt-1.5 text-xs leading-5 text-white/48">บทเรียนเปิดได้ทุกที่ ประวัติเก็บในเบราว์เซอร์และย้ายได้ด้วย Export / Import</p>
      </div>
    </aside>
  );
}
