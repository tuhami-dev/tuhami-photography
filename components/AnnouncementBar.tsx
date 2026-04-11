"use client";

import { useState, useEffect, createContext, useContext } from "react";

/** Shared banner height for header top-offset; keep in sync with bar min-height. */
export const ANNOUNCEMENT_BAR_HEIGHT_PX = 32;

type BarVisibilityContextType = {
  barVisible: boolean;
  barHeightPx: number;
};

const BarVisibilityContext = createContext<BarVisibilityContextType>({
  barVisible: false,
  barHeightPx: 0,
});

export function useBarVisibility() {
  return useContext(BarVisibilityContext);
}

export function AnnouncementBarWithProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [barVisible, setBarVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) setBarVisible(true);
  }, [mounted]);

  const handleDismiss = () => setBarVisible(false);

  return (
    <BarVisibilityContext.Provider
      value={{ barVisible, barHeightPx: barVisible ? ANNOUNCEMENT_BAR_HEIGHT_PX : 0 }}
    >
      {barVisible && (
        <div
          role="banner"
          className="sticky top-0 left-0 right-0 z-[60] flex w-full items-center justify-center gap-2 bg-brand px-3 py-1.5 text-white shadow-sm border-b border-white/10"
          style={{ minHeight: ANNOUNCEMENT_BAR_HEIGHT_PX, ["--announcement-h" as string]: `${ANNOUNCEMENT_BAR_HEIGHT_PX}px` }}
        >
          <div className="flex flex-1 flex-wrap items-center justify-center gap-x-2 gap-y-0.5 text-center text-xs sm:text-sm">
            <span>
              🎉 Launch Special: $50 off Full Sessions — First 5 bookings before
              April 30.
            </span>
            <a
              href="#contact"
              className="inline-flex shrink-0 font-semibold underline decoration-2 underline-offset-2 hover:no-underline focus:outline focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand rounded"
            >
              Reserve your date →
            </a>
          </div>
          <button
            type="button"
            onClick={handleDismiss}
            aria-label="Dismiss announcement"
            className="ml-1 shrink-0 p-1.5 rounded text-white/90 hover:text-white hover:bg-white/15 focus:outline focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand transition-colors"
          >
            <span aria-hidden>×</span>
          </button>
        </div>
      )}
      {children}
    </BarVisibilityContext.Provider>
  );
}
