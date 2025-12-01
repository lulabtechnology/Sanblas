// components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Experiencias", href: "#experiencias" },
  { label: "¿Por qué nosotros?", href: "#por-que-nosotros" },
  { label: "Paquetes", href: "#paquetes" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all ${
        scrolled ? "bg-white/90 shadow-sm backdrop-blur" : "bg-gradient-to-r from-sbw-sunrise via-sbw-aqua/40 to-sbw-sky/60"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 lg:py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10">
            <Image
              src="/logo/san-blas-wave-logo.png"
              alt="San Blas Wave logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-sbw-deep tracking-wide">
              SAN BLAS WAVE
            </span>
            <span className="text-xs uppercase text-sbw-deep/70">
              Your adventure, your story
            </span>
          </div>
        </Link>

        <button
          className="lg:hidden text-sbw-deep"
          onClick={() => setOpen((o) => !o)}
          aria-label="Abrir menú"
        >
          ☰
        </button>

        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-sbw-deep/80 hover:text-sbw-deep transition"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="btn-primary text-sm"
          >
            Cotiza tu aventura
          </a>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-white/95 border-t border-sbw-aqua/20">
          <div className="max-w-6xl mx-auto px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-sm font-medium text-sbw-deep/80"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="btn-primary block text-center text-sm"
              onClick={() => setOpen(false)}
            >
              Cotiza tu aventura
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
