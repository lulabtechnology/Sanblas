// components/FAQSection.tsx
"use client";

import { faqs } from "@/lib/content";
import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-4xl mx-auto px-4">
      <header className="section-header">
        <h2 className="section-title">Preguntas frecuentes</h2>
        <p className="section-subtitle">
          Respuestas rápidas a lo que casi todos preguntan antes de reservar.
        </p>
      </header>

      <div className="mt-6 space-y-3">
        {faqs.map((item, idx) => {
          const open = idx === openIndex;
          return (
            <div
              key={item.question}
              className="rounded-2xl bg-white border border-sbw-sky/20"
            >
              <button
                className="w-full px-4 py-3 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(open ? null : idx)}
              >
                <span className="text-sm font-medium text-sbw-deep">
                  {item.question}
                </span>
                <span className="text-sbw-aqua text-xl">
                  {open ? "−" : "+"}
                </span>
              </button>
              {open && (
                <div className="px-4 pb-4 text-sm text-sbw-deep/80">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
