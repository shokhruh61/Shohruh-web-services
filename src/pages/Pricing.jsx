import React from "react";
import { pricing } from "../data/content";
import SectionHeader from "./SectionHeader";

function Pricing() {
  return (
    <section id="narxlar" data-section className="bg-white py-20 scroll-mt-28">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="flex flex-col gap-10">
          <SectionHeader title="Narxlar" />
          <div className="grid gap-6 lg:grid-cols-3">
            {pricing.map((plan) => (
              <div
                key={plan.id}
                className={`flex h-full flex-col rounded-2xl border p-6 shadow-sm ${
                  plan.featured
                    ? "border-indigo-200 bg-indigo-50/70"
                    : "border-slate-200 bg-slate-50"
                }`}
                data-reveal
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {plan.name}
                  </h3>
                  {plan.featured ? (
                    <span className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                      Tavsiya
                    </span>
                  ) : null}
                </div>
                <p className="mt-4 text-2xl font-semibold text-slate-900">
                  {plan.price}
                </p>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="text-emerald-500">✔</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#aloqa"
                  className="mt-6 cursor-pointer rounded-full bg-indigo-600 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Buyurtma berish
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
