// components/ExperiencesSection.tsx
import { experiences } from "@/lib/content";

export default function ExperiencesSection() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <header className="section-header">
        <h2 className="section-title">Experiencias en San Blas y el Caribe</h2>
        <p className="section-subtitle">
          Tours de un día, estadías en cabañas y expediciones binacionales
          diseñadas para que vivas San Blas como un local.
        </p>
      </header>

      {/* SOLO texto, cero imágenes */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {experiences.map((exp) => (
          <article
            key={exp.title}
            className="rounded-2xl bg-white shadow-sm border border-sbw-sky/15 p-5 flex flex-col"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-sbw-deep">{exp.title}</h3>
              <span className="text-xs px-2 py-1 rounded-full bg-sbw-sky/10 text-sbw-deep/80">
                {exp.tag}
              </span>
            </div>
            <p className="text-sm text-sbw-deep/80 flex-1">{exp.description}</p>
            <div className="mt-3 text-xs text-sbw-deep/70">
              Ideal para viajeros que buscan seguridad, autenticidad y logística
              clara.
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
