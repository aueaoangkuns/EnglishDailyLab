export function AppHeader() {
  return (
    <header className="sticky top-0 z-20 flex h-[72px] items-center justify-between border-b border-[#e2e9e5] bg-[#f4f7f5]/90 px-5 backdrop-blur-xl sm:px-8 lg:px-10">
      <div>
        <p className="text-sm font-semibold text-[#32443b]">My learning space</p>
        <p className="text-xs text-[#87928c]">Public lessons · progress stays in this browser</p>
      </div>
      <div className="flex items-center gap-3">
        <span className="hidden rounded-full border border-[#d8e4dd] bg-white px-3 py-1.5 text-xs font-semibold text-[#4f6158] sm:inline-flex">
          TH / EN ready
        </span>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d8f2e4] text-sm font-bold text-[#226a48]" aria-label="English Daily Lab">
          EL
        </div>
      </div>
    </header>
  );
}
