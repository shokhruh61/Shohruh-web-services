import React from "react";
import { brand } from "../data/content";

function FinalCta() {
  return (
    <section className="bg-indigo-600 py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Sizga ham shunday professional sayt kerakmi?
        </h2>
        <a
          href={`https://t.me/makhmudov618`}
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer rounded-full bg-white px-6 py-3 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Hoziroq yozish
        </a>
      </div>
    </section>
  );
}

export default FinalCta;
