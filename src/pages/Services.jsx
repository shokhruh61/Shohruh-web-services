import React, { useState } from 'react'
import { services } from '../data/content'
import SectionHeader from './SectionHeader'

const icons = [
  (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-indigo-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="14" rx="3" />
      <path d="M7 20h10" />
      <path d="M7 8h10" />
    </svg>
  ),
  (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-indigo-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
      <path d="M7 7v10" />
    </svg>
  ),
  (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-indigo-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M4 6h10l6 6v6H4z" />
      <path d="M14 6v6h6" />
      <path d="M8 16h8" />
    </svg>
  ),
  (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-indigo-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  ),
]

function Services() {
  const [openId, setOpenId] = useState(services[0]?.id ?? null)

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section
      id="xizmatlar"
      data-section
      className="bg-white py-20 scroll-mt-28"
    >
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="flex flex-col gap-10">
          <SectionHeader title="Xizmatlar" />
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, index) => {
              const isOpen = openId === service.id
              return (
                <div
                  key={service.id}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
                  data-reveal
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                      {icons[index]}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {service.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => toggle(service.id)}
                    className="mt-4 flex w-full cursor-pointer items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-indigo-200 hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    aria-expanded={isOpen}
                  >
                    <span>Batafsil</span>
                    <span
                      className={`text-lg transition ${
                        isOpen ? 'rotate-180 text-indigo-500' : ''
                      }`}
                    >
                      ⌄
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden text-sm text-slate-600 transition-all ${
                      isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="mt-3">{service.details}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
