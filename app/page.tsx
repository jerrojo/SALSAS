import QuoteBuilder from "@/components/QuoteBuilder";
import { getDict } from "@/lib/i18n";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grupo Arrabiato — Cotiza tu salsa",
  description:
    "Te ayudamos a producir tu línea de salsas con los mejores ingredientes al mejor precio.",
  openGraph: {
    title: "Grupo Arrabiato — Cotiza tu salsa",
    description:
      "Te ayudamos a producir tu línea de salsas con los mejores ingredientes al mejor precio.",
    images: ["/og.png"],
    locale: "es_MX",
    url: "https://grupoarrabiato.com/"
  },
  alternates: { languages: { en: "/en" } }
};

export default function Page() {
  const dict = getDict("es");
  return (
    <div className="space-y-6">
      <h1 className="font-display text-3xl md:text-4xl">{dict.home.title}</h1>
      <p className="text-gray-800">{dict.home.tagline}</p>
      <p className="text-sm text-gray-600">{dict.home.subnote}</p>
      <QuoteBuilder locale="es" />
    </div>
  );
}


