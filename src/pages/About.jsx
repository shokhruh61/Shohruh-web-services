import React from 'react'
import { about, stats } from '../data/content'
import SectionHeader from './SectionHeader'

function About() {
  return (
    <section
      id="men-haqimda"
      data-section
      className="bg-white py-20 scroll-mt-28"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6" data-reveal>
          <SectionHeader title={about.title} />
          <p className="text-base text-slate-600">{about.text}</p>
          <ul className="space-y-3">
            {about.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-slate-700">
                <span className="mt-1 text-indigo-500">-</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1" data-reveal>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-6 text-center shadow-sm"
            >
              <p className="text-2xl font-semibold text-slate-900">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
