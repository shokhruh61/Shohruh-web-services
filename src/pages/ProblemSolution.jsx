import React from "react";
import { problems, solutions } from "../data/content";
import SectionHeader from "./SectionHeader";

function ProblemSolution() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 lg:grid-cols-2">
        <div className="space-y-6" data-reveal>
          <SectionHeader title="Nega ko‘p saytlar mijoz olib kelmaydi?" />
          <ul className="space-y-4">
            {problems.map((problem) => (
              <li
                key={problem}
                className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 text-slate-700 shadow-sm"
              >
                <span className="text-red-400">✖</span>
                <span>{problem}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6" data-reveal>
          <SectionHeader title="Men yaratadigan saytlar:" />
          <ul className="space-y-4">
            {solutions.map((solution) => (
              <li
                key={solution}
                className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 text-slate-700 shadow-sm"
              >
                <span className="text-emerald-500">✔</span>
                <span>{solution}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProblemSolution;
