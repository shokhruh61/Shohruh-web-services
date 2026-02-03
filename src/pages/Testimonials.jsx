import React from 'react'
import { testimonials } from '../data/content'
import SectionHeader from './SectionHeader'

function Testimonials() {
  return (
    <section
      id="fikrlar"
      data-section
      className="bg-slate-50 py-20 scroll-mt-28"
    >
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="flex flex-col gap-10">
          <SectionHeader title="Mijozlar fikri" />
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <div
                key={`${item.text}-${index}`}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                data-reveal
              >
                <p className="text-sm text-slate-600">“{item.text}”</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-indigo-100" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Mijoz
                    </p>
                    <p className="text-xs text-slate-500">Real loyiha</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
