// components/HighlightsStrip.tsx
import { highlights } from "@/lib/content";

export default function HighlightsStrip() {
  return (
    <section className="bg-gradient-to-r from-sbw-sunrise/15 via-sbw-sand to-sbw-sky/10 border-y border-sbw-aqua/10 mt-6">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex flex-wrap gap-3 items-center justify-center text-xs md:text-sm text-sbw-deep/80">
          {highlights.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-sbw-aqua" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
