import QuoteBuilder from "@/components/QuoteBuilder";
import { getDict } from "@/lib/i18n";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grupo Arrabiato — Get a quote",
  description:
    "We help you produce your private‑label salsas with top ingredients at the best price.",
  openGraph: {
    title: "Grupo Arrabiato — Get a quote",
    description:
      "We help you produce your private‑label salsas with top ingredients at the best price.",
    images: ["/og.png"],
    locale: "en_US",
    url: "https://grupoarrabiato.com/en"
  },
  alternates: { languages: { es: "/" } }
};

export default function Page() {
  const dict = getDict("en");
  return (
    <div className="space-y-6">
      <h1 className="font-display text-3xl md:text-4xl">{dict.home.title}</h1>
      <p className="text-gray-800">{dict.home.tagline}</p>
      <p className="text-sm text-gray-600">{dict.home.subnote}</p>
      <QuoteBuilder locale="en" />
    </div>
  );
}


