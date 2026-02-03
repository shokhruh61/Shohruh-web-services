import { useState } from "react";
import { faqs } from "../data/content";
import SectionHeader from "./SectionHeader";

function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="savollar"
      data-section
      className="bg-white py-20 scroll-mt-28"
    >
      <div className="mx-auto w-full max-w-4xl px-4">
        <div className="flex flex-col gap-10">
          <SectionHeader title="Ko'p so'raladigan savollar" />
          <div className="space-y-4">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.question}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 shadow-sm"
                  data-reveal
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex((prev) => (prev === index ? -1 : index))
                    }
                    className="flex w-full cursor-pointer items-center justify-between text-left text-sm font-semibold text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <span
                      className={`text-lg text-indigo-500 transition ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      ⌄
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden text-sm text-slate-600 transition-all ${
                      isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="mt-3">{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
