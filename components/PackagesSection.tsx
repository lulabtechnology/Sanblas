// components/PackagesSection.tsx
import { packages } from "@/lib/content";

export default function PackagesSection() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <header className="section-header">
        <h2 className="section-title">Paquetes destacados</h2>
        <p className="section-subtitle">
          Opciones claras según la duración de tu viaje. Sin letras pequeñas,
          con todo lo importante explicado antes de reservar.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {packages.map((pkg) => (
          <article
            key={pkg.name}
            className="rounded-2xl bg-white shadow-md border border-sbw-sky/20 p-5 flex flex-col"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-sbw-deep/60 mb-1">
              {pkg.duration}
            </p>
            <h3 className="font-semibold text-lg text-sbw-deep mb-1">
              {pkg.name}
            </h3>
            <p className="text-xs text-sbw-deep/70 mb-2">{pkg.from}</p>
            <p className="text-sm font-semibold text-sbw-sunrise mb-3">
              {pkg.price}
            </p>
            <ul className="text-sm text-sbw-deep/80 space-y-1.5 flex-1">
              {pkg.includes.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sbw-aqua" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="#contacto" className="btn-outline mt-4 text-sm text-center">
              Solicitar itinerario detallado
            </a>
          </article>
        ))}
      </div>

      <p className="mt-4 text-xs text-sbw-deep/60">
        *Precios referenciales por persona. Cotizamos según temporada, número
        de viajeros y personalización del tour.
      </p>
    </div>
  );
}
