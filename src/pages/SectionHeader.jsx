import React from "react";

function SectionHeader({ title, subtitle, align = "left", eyebrow }) {
  const alignment =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-base text-slate-600 max-w-2xl">{subtitle}</p>
      ) : null}
    </div>
  );
}

export default SectionHeader;
