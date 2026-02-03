import React from "react";
import { brand, hero } from "../data/content";

function Hero() {
  return (
    <section
      id="bosh-sahifa"
      data-section
      className="relative overflow-hidden from-white via-indigo-50 to-slate-50 py-20 scroll-mt-28"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
        <div className="flex flex-col gap-6" data-reveal>
          <div className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            <span>{brand.slogan}</span>
          </div>
          <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="text-base text-slate-600 sm:text-lg">{hero.subtitle}</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#aloqa"
              className="cursor-pointer rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-500  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              {hero.primaryCta}
            </a>
            <a
              href={`https://t.me/makhmudov618`}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer rounded-full border border-indigo-200 px-6 py-3 text-sm font-semibold text-indigo-600 transition hover:border-indigo-300 hover:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="relative" data-reveal>
          <div className="absolute -top-10 right-6 h-40 w-40 rounded-full bg-indigo-200/50 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-indigo-100/70 blur-2xl" />
          <div className="relative rounded-3xl bg-white/80 p-6 shadow-xl shadow-indigo-100 backdrop-blur">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <div className="h-2 w-24 rounded-full bg-indigo-200" />
                <div className="h-2 w-32 rounded-full bg-slate-200" />
              </div>
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-indigo-400" />
                <span className="h-3 w-3 rounded-full bg-indigo-300" />
                <span className="h-3 w-3 rounded-full bg-indigo-200" />
              </div>
            </div>
            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl from-indigo-500/10 to-indigo-500/30 p-4">
                <div className="h-3 w-24 rounded-full bg-indigo-400/60" />
                <div className="mt-3 h-2 w-40 rounded-full bg-indigo-200/80" />
                <div className="mt-2 h-2 w-32 rounded-full bg-indigo-200/60" />
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="h-3 w-20 rounded-full bg-slate-200" />
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="h-12 rounded-xl bg-slate-100" />
                  <div className="h-12 rounded-xl bg-slate-100" />
                </div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="h-3 w-28 rounded-full bg-slate-200" />
                <div className="mt-3 h-2 w-40 rounded-full bg-slate-200" />
                <div className="mt-2 h-2 w-24 rounded-full bg-slate-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
