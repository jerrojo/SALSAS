import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://grupoarrabiato.com"),
  title: "Grupo Arrabiato — Salsas a tu medida",
  description:
    "Te ayudamos a producir tu línea de salsas con los mejores ingredientes al mejor precio.",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
  openGraph: {
    title: "Grupo Arrabiato",
    description:
      "Te ayudamos a producir tu línea de salsas con los mejores ingredientes al mejor precio.",
    url: "https://grupoarrabiato.com/",
    siteName: "Grupo Arrabiato",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "es_MX",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Grupo Arrabiato",
    description:
      "Te ayudamos a producir tu línea de salsas con los mejores ingredientes al mejor precio.",
    images: ["/og.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <header className="mx-auto w-full max-w-4xl px-4 py-6">
          <div className="flex items-center gap-3">
            <img src="/favicon.svg" alt="Grupo Arrabiato logo" className="h-8 w-8" />
            <span className="font-display text-2xl">Grupo Arrabiato</span>
          </div>
        </header>
        <main className="flex-1 mx-auto w-full max-w-4xl px-4 pb-28 md:pb-8">{children}</main>
        <footer className="border-t bg-white/70 backdrop-blur">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-start gap-2 px-4 py-6 text-sm md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/525538994836"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                aria-label="WhatsApp"
              >
                WhatsApp
              </a>
              <span className="text-gray-700">@salsasarrabiata</span>
            </div>
            <div className="text-gray-600">Hecho en México</div>
          </div>
        </footer>
      </body>
    </html>
  );
}


