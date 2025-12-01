// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="mt-12 border-t border-sbw-sky/15 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-6 text-xs text-sbw-deep/70 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} San Blas Wave. Todos los derechos
          reservados.
        </p>
        <p>
          Turismo responsable en Guna Yala ·{" "}
          <span className="font-semibold">Create • Connect • Inspire</span>
        </p>
      </div>
    </footer>
  );
}
