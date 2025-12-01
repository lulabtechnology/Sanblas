// components/WhyUsSection.tsx
import { whyUs } from "@/lib/content";

export default function WhyUsSection() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <header className="section-header">
        <h2 className="section-title">¿Por qué elegir San Blas Wave?</h2>
        <p className="section-subtitle">
          Más que un tour, una experiencia coherente que respeta la cultura
          Guna, cuida las islas y te acompaña de principio a fin.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {whyUs.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl bg-white shadow-sm border border-sbw-aqua/10 p-5"
          >
            <h3 className="font-semibold text-sbw-deep mb-2">{item.title}</h3>
            <p className="text-sm text-sbw-deep/80">{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
