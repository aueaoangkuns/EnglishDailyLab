import type { Metadata } from "next";
import { AppHeader } from "@/components/app-header";
import { Sidebar } from "@/components/sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "English Daily Lab",
  description: "บทเรียนภาษาอังกฤษรายวันที่บอกชัดเจนว่าวันนี้ควรเรียนอะไร และต่อยอดจากเมื่อวานอย่างไร",
  metadataBase: new URL("https://aueaoangkuns.github.io"),
  openGraph: {
    title: "English Daily Lab",
    description: "เรียนอังกฤษวันละนิด ให้ต่อเนื่องทุกวัน",
    type: "website",
    url: "https://aueaoangkuns.github.io/EnglishDailyLab/",
    images: ["/EnglishDailyLab/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "English Daily Lab",
    description: "เรียนอังกฤษวันละนิด ให้ต่อเนื่องทุกวัน",
    images: ["/EnglishDailyLab/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className="h-full antialiased">
      <body className="min-h-full bg-[#f4f7f5] text-[#17211d]">
        <div className="min-h-screen lg:grid lg:grid-cols-[268px_minmax(0,1fr)]">
          <Sidebar />
          <div className="min-w-0">
            <AppHeader />
            <main className="mx-auto w-full max-w-[1500px] px-5 py-7 sm:px-8 lg:px-10 lg:py-9">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
