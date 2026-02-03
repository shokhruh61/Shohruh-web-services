import React, { useState } from "react";
import { brand, navLinks } from "../data/content";

function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
        <a
          href="#bosh-sahifa"
          className="cursor-pointer text-lg font-semibold text-slate-900"
        >
          {brand.name}
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Asosiy">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={handleLinkClick}
              className={`cursor-pointer text-sm font-medium transition ${
                activeSection === link.id
                  ? "text-indigo-600"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#aloqa"
            className="cursor-pointer rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Bog'lanish
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Menyu"
          aria-expanded={isOpen}
          className="cursor-pointer rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-indigo-300 hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 lg:hidden"
        >
          <span className="block h-0.5 w-5 rounded-full bg-current" />
          <span className="mt-1 block h-0.5 w-5 rounded-full bg-current" />
          <span className="mt-1 block h-0.5 w-5 rounded-full bg-current" />
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={handleLinkClick}
              className={`cursor-pointer text-sm font-medium transition ${
                activeSection === link.id
                  ? "text-indigo-600"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#aloqa"
            onClick={handleLinkClick}
            className="cursor-pointer rounded-full bg-indigo-600 px-5 py-2 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Bog'lanish
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
