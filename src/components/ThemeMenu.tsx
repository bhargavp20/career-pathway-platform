"use client";

import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

export default function ThemeMenu() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 flex flex-col gap-2 rounded-2xl border border-white/20 bg-white/80 p-2 shadow-xl backdrop-blur-xl">
          <button
            onClick={() => {
              setTheme("light");
              setOpen(false);
            }}
            className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition ${
              theme === "light"
                ? "bg-blue-600 text-white"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            ☀️
            <span>Light</span>
          </button>

          <button
            onClick={() => {
              setTheme("midnight");
              setOpen(false);
            }}
            className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition ${
              theme === "midnight"
                ? "bg-slate-800 text-white"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            🌙
            <span>Midnight</span>
          </button>

          <button
            onClick={() => {
              setTheme("emerald");
              setOpen(false);
            }}
            className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition ${
              theme === "emerald"
                ? "bg-emerald-600 text-white"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            🌿
            <span>Emerald</span>
          </button>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/80 text-lg shadow-xl backdrop-blur-xl transition hover:scale-105"
        aria-label="Change theme"
      >
        {theme === "light" && "☀️"}
        {theme === "midnight" && "🌙"}
        {theme === "emerald" && "🌿"}
      </button>
    </div>
  );
}