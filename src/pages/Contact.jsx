import React, { useState } from "react";
import { brand } from "../data/content";
import SectionHeader from "./SectionHeader";

function Contact() {
  const [form, setForm] = useState({ ism: "", xabar: "" });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.ism.trim()) {
      nextErrors.ism = "Ism kiritish shart.";
    }
    if (!form.xabar.trim()) {
      nextErrors.xabar = "Xabar kiritish shart.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    setIsSending(true);

    try {
      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.ism, message: form.xabar }),
      });

      if (!response.ok) {
        throw new Error("Telegram error");
      }

      setToast({
        type: "success",
        message: "Xabaringiz Telegramga yuborildi.",
      });
      setForm({ ism: "", xabar: "" });
      setErrors({});
    } catch (error) {
      setToast({
        type: "error",
        message: "Xabar yuborilmadi. Iltimos, qayta urinib ko‘ring.",
      });
    } finally {
      setIsSending(false);
      window.setTimeout(() => setToast(null), 3000);
    }
  };

  return (
    <section
      id="aloqa"
      data-section
      className="bg-slate-50 py-20 scroll-mt-28"
    >
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="flex flex-col gap-10">
          <SectionHeader title="Bog‘lanish" />
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-5" data-reveal>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm text-slate-500">Telegram</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">
                  @{brand.telegram}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm text-slate-500">Email</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">
                  {brand.email}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm text-slate-500">Joylashuv</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">
                  {brand.location}
                </p>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              data-reveal
            >
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Ism
                  </label>
                  <input
                    type="text"
                    name="ism"
                    value={form.ism}
                    onChange={handleChange}
                    required
                    aria-invalid={Boolean(errors.ism)}
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                  />
                  {errors.ism ? (
                    <p className="mt-2 text-xs text-red-500">{errors.ism}</p>
                  ) : null}
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Xabar
                  </label>
                  <textarea
                    name="xabar"
                    value={form.xabar}
                    onChange={handleChange}
                    required
                    rows={4}
                    aria-invalid={Boolean(errors.xabar)}
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                  />
                  {errors.xabar ? (
                    <p className="mt-2 text-xs text-red-500">{errors.xabar}</p>
                  ) : null}
                </div>
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="mt-6 w-full cursor-pointer rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:cursor-not-allowed disabled:bg-indigo-400"
              >
                {isSending ? "Yuborilmoqda..." : "Telegramga yuborish"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {toast ? (
        <div
          className={`fixed bottom-6 right-6 z-50 rounded-2xl px-5 py-4 text-sm text-white shadow-lg ${
            toast.type === "success" ? "bg-slate-900" : "bg-red-500"
          }`}
        >
          <p aria-live="polite">{toast.message}</p>
        </div>
      ) : null}
    </section>
  );
}

export default Contact;
