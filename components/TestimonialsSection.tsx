// components/TestimonialsSection.tsx
import { testimonials } from "@/lib/content";

export default function TestimonialsSection() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <header className="section-header">
        <h2 className="section-title">Lo que dicen quienes ya vivieron la ola</h2>
        <p className="section-subtitle">
          Experiencias reales de viajeros de Canadá, Europa, Estados Unidos y
          Latinoamérica que eligieron San Blas Wave.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {testimonials.map((t) => (
          <article
            key={t.name}
            className="rounded-2xl bg-white border border-sbw-aqua/15 p-5 shadow-sm"
          >
            <p className="text-sm text-sbw-deep/80 mb-3">“{t.text}”</p>
            <p className="text-xs font-semibold text-sbw-deep">{t.name}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
