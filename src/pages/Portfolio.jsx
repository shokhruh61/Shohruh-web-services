import React from "react";
import { portfolio } from "../data/content";
import SectionHeader from "./SectionHeader";

function Portfolio() {
  return (
    <section
      id="loyihalar"
      data-section
      className="bg-slate-50 py-20 scroll-mt-28"
    >
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="flex flex-col gap-10">
          <SectionHeader title="Loyihalar" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                data-reveal
              >
                <div className="relative overflow-hidden rounded-2xl from-indigo-100 via-white to-indigo-50 p-6">
                  <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-indigo-200/40 blur-2xl" />
                  <div className="space-y-2">
                    <div className="h-3 w-24 rounded-full bg-indigo-300/70" />
                    <div className="h-2 w-32 rounded-full bg-slate-200" />
                    <div className="h-2 w-20 rounded-full bg-slate-200" />
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="h-10 rounded-xl bg-white/80 shadow-sm" />
                    <div className="h-10 rounded-xl bg-white/80 shadow-sm" />
                    <div className="h-10 rounded-xl bg-white/80 shadow-sm" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {item.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-slate-500">
                  <span className="rounded-full bg-slate-100 px-3 py-1">
                    React
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">
                    Tailwind
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">
                    Responsive
                  </span>
                </div>
                <div className="mt-auto flex gap-3">
                  <button
                    type="button"
                    disabled
                    className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-400"
                  >
                    Demo
                  </button>
                  <button
                    type="button"
                    disabled
                    className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-400"
                  >
                    Kod
                  </button>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-500">
            Demo va kod havolalari hostingga tayyorlab beriladi.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
