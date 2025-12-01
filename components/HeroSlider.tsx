// components/HeroSlider.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/hero/amanecer-san-blas.jpg",
    alt: "Amanecer dorado en las islas de San Blas",
  },
  {
    src: "/images/hero/piscina-natural-san-blas.jpg",
    alt: "Piscina natural de agua cristalina en San Blas",
  },
  {
    src: "/images/hero/cultura-guna.jpg",
    alt: "Cultura Guna, artesanías y tradiciones",
  },
  {
    src: "/images/hero/snorkel-arrecife.jpg",
    alt: "Snorkel sobre arrecifes de coral en San Blas",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % slides.length),
      6000
    );
    return () => clearInterval(id);
  }, []);

  const current = slides[index];

  return (
    <section className="relative pt-20 lg:pt-24">
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="relative h-[70vh] min-h-[520px] overflow-hidden rounded-3xl shadow-xl bg-sbw-sky/20">
          {/* Imagen de fondo */}
          <Image
            src={current.src}
            alt={current.alt}
            fill
            priority
            className="object-cover transition-opacity duration-700"
          />

          {/* Degradado suave */}
          <div className="absolute inset-0 bg-gradient-to-tr from-sbw-deep/60 via-sbw-sunrise/40 to-sbw-sky/40 mix-blend-multiply" />

          {/* Contenido */}
          <div className="relative z-10 h-full flex flex-col lg:flex-row items-center lg:items-end justify-between px-6 lg:px-12 pb-10 pt-10 lg:pt-14 text-white">
            <div className="max-w-xl space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-sbw-sand/80">
                San Blas · Guna Yala · Panamá
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                En San Blas Wave{" "}
                <span className="text-sbw-sunrise-light">
                  cada ola es una historia.
                </span>
              </h1>
              <p className="text-sm md:text-base text-sbw-sand/90">
                Conectamos a los viajeros con la naturaleza y la cultura Guna
                mediante experiencias responsables, binacionales y llenas de
                momentos inolvidables.
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                <a href="#contacto" className="btn-primary">
                  Cotiza ahora
                </a>
                <a
                  href="https://wa.me/50765654768"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline"
                >
                  Hablar por WhatsApp
                </a>
              </div>
            </div>

            <div className="mt-8 lg:mt-0 lg:text-right space-y-2 text-xs md:text-sm">
              <p className="uppercase tracking-[0.25em] text-sbw-sand/70">
                Próximo recuerdo
              </p>
              <p className="font-medium">
                Vive San Blas: playas, cultura y aventura en un solo viaje.
              </p>
              <p className="text-sbw-sand/80">
                Explora San Blas: Naturaleza, Tradición y Paraíso.
              </p>

              {/* Indicadores del slider */}
              <div className="flex lg:justify-end gap-2 pt-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index
                        ? "w-8 bg-sbw-sunrise-light"
                        : "w-3 bg-sbw-sand/60"
                    }`}
                    aria-label={`Ver imagen ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tarjeta flotante */}
        <div className="relative -mt-10 md:-mt-12 lg:-mt-14">
          <div className="mx-auto max-w-3xl rounded-2xl bg-white/95 shadow-lg px-5 py-4 flex flex-wrap items-center justify-between gap-3 border border-sbw-sky/20">
            <p className="text-sm text-sbw-deep/80">
              Transparencia total, logística binacional y turismo responsable.
            </p>
            <a href="#paquetes" className="text-sm font-semibold text-sbw-aqua">
              Ver paquetes destacados →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
