import type { Order } from "./types";
import { dictionaries, type Locale, labelFor } from "./i18n";

const NUMBER = "525538994836";

export function buildMessage(order: Order, locale: Locale): string {
  const dict = dictionaries[locale];
  const ing =
    order.ingredients && order.ingredients.length
      ? order.ingredients.map((k) => labelFor(locale, "ingredients", k)).join(", ")
      : dict.common.na;
  const lines = [
    dict.wa.hello,
    `${dict.wa.bullets.chili}: ${labelFor(locale, "chili", order.chili)}`,
    `${dict.wa.bullets.heat}: ${order.heat}/10`,
    `${dict.wa.bullets.ingredients}: ${ing}`,
    `${dict.wa.bullets.preparation}: ${labelFor(locale, "preparation", order.preparation)}`,
    `${dict.wa.bullets.packaging}: ${labelFor(locale, "packaging", order.packaging)}`,
    `${dict.wa.bullets.quantity}: ${order.quantity} ${locale === "es" ? "unidades" : "units"}`,
    `${dict.wa.bullets.name}: ${order.name}`,
    `${dict.wa.bullets.instagram}: @grupoarrabiato`
  ];
  return lines.join("\n");
}

export function buildWhatsAppUrl(order: Order, locale: Locale): string {
  const text = buildMessage(order, locale);
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${NUMBER}?text=${encoded}`;
}


