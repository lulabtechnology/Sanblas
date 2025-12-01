// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "San Blas Wave | Tu aventura, tu historia",
  description:
    "Experiencias auténticas en San Blas (Guna Yala): tours, expediciones binacionales Panamá ↔ Colombia y turismo cultural responsable.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-sbw-sand text-sbw-deep antialiased">
        {children}
      </body>
    </html>
  );
}
