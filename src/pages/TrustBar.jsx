import React from 'react'
import { trustBadges } from '../data/content'

function TrustBar() {
  return (
    <section className="bg-white py-6">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-center gap-4 px-4">
        {trustBadges.map((badge) => (
          <div
            key={badge}
            className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 shadow-sm"
          >
            <span className="text-indigo-500">✔</span>
            <span>{badge}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustBar
