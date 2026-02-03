import React from 'react'

function Footer() {
  return (
    <footer className="bg-slate-900 py-10 text-slate-200">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center">
        <p className="text-sm">Barcha huquqlar himoyalangan © 2026</p>
        <div className="flex gap-6 text-sm text-slate-400">
          <button type="button" className="cursor-pointer transition hover:text-white">
            Maxfiylik
          </button>
          <button type="button" className="cursor-pointer transition hover:text-white">
            Shartlar
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
