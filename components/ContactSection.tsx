// components/ContactSection.tsx
import { contactInfo } from "@/lib/content";

export default function ContactSection() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <header className="section-header">
        <h2 className="section-title">Hablemos de tu próxima ola</h2>
        <p className="section-subtitle">
          Cuéntanos cuántos viajan, desde dónde vienes y qué tipo de experiencia
          buscas. Te respondemos con una propuesta clara y personalizada.
        </p>
      </header>

      <div className="grid lg:grid-cols-2 gap-8 mt-6">
        <div className="space-y-4 text-sm text-sbw-deep/80">
          <div>
            <h3 className="font-semibold text-sbw-deep mb-1">Contacto directo</h3>
            <p>Teléfono / WhatsApp Canadá (inglés): {contactInfo.whatsappEn}</p>
            <p>WhatsApp Panamá (español): {contactInfo.whatsappEs}</p>
            <p className="mt-2">
              Correo principal:{" "}
              <a
                href={`mailto:${contactInfo.emailMain}`}
                className="text-sbw-aqua underline"
              >
                {contactInfo.emailMain}
              </a>
            </p>
            <p className="mt-1">
              Otros correos: {contactInfo.emailsOther.join(" · ")}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sbw-deep mb-1">Redes & catálogo</h3>
            <p>
              Síguenos en Instagram, TikTok y YouTube como{" "}
              <span className="font-semibold">@sanblas_wave</span>.
            </p>
            <p className="mt-2">
              ¿Quieres más detalle de tarifas y políticas? Descarga nuestro
              catálogo en PDF:
            </p>
            <a
              href="/downloads/catalogo-san-blas-wave-2025.pdf"
              className="btn-outline inline-flex mt-2 text-sm"
              target="_blank"
              rel="noreferrer"
            >
              Descargar catálogo PDF
            </a>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md border border-sbw-sky/20 p-6">
          <h3 className="font-semibold text-sbw-deep mb-3 text-sm">
            Envíanos tu consulta
          </h3>
          <form
            className="space-y-3 text-sm"
            action="#"
            method="post"
          >
            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <label className="form-label">Nombre completo</label>
                <input
                  className="form-input"
                  name="nombre"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="form-label">Correo electrónico</label>
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  placeholder="tucorreo@email.com"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <label className="form-label">WhatsApp</label>
                <input
                  className="form-input"
                  name="whatsapp"
                  placeholder="+507 ..."
                />
              </div>
              <div>
                <label className="form-label">Fecha tentativa</label>
                <input className="form-input" type="date" name="fecha" />
              </div>
            </div>
            <div>
              <label className="form-label">¿Desde dónde viajas?</label>
              <input
                className="form-input"
                name="origen"
                placeholder="País / ciudad"
              />
            </div>
            <div>
              <label className="form-label">Mensaje</label>
              <textarea
                className="form-input min-h-[90px] resize-none"
                name="mensaje"
                placeholder="Cuéntanos cuántos viajan y qué tipo de experiencia buscan…"
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              Enviar mensaje
            </button>
            <p className="text-[11px] text-sbw-deep/60 mt-1">
              *Puedes escribirnos también directo por WhatsApp para una
              respuesta más rápida.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
