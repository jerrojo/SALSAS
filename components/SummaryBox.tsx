"use client";

import { useEffect, useMemo } from "react";
import { getDict, Locale, labelFor } from "@/lib/i18n";
import type { Order } from "@/lib/types";

type Props = {
  order: Order;
  locale: Locale;
  onReset: () => void;
};

export default function SummaryBox({ order, locale, onReset }: Props) {
  const dict = getDict(locale);

  const ingredients = useMemo(() => {
    if (!order.ingredients || order.ingredients.length === 0) return dict.common.na;
    return order.ingredients.map((k) => labelFor(locale, "ingredients", k)).join(", ");
  }, [order.ingredients, dict, locale]);

  useEffect(() => {
    const el = document.getElementById("summary-live");
    if (el) {
      el.textContent =
        `${dict.summary.chili}: ` +
        labelFor(locale, "chili", order.chili) +
        `, ${dict.summary.heat}: ${order.heat}/10, ${dict.summary.packaging}: ` +
        labelFor(locale, "packaging", order.packaging);
    }
  }, [order, dict, locale]);

  return (
    <aside className="summary-sticky">
      <div className="mx-auto max-w-4xl rounded-t-xl md:rounded-xl bg-white/90 backdrop-blur shadow-soft p-4 md:p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-lg">{dict.summary.title}</h3>
          <button className="text-red underline" onClick={onReset}>
            {dict.actions.reset}
          </button>
        </div>
        <ul className="mt-2 grid grid-cols-1 gap-1 text-sm text-gray-800 md:grid-cols-2">
          <li>
            <strong>{dict.summary.chili}:</strong> {labelFor(locale, "chili", order.chili)}
          </li>
          <li>
            <strong>{dict.summary.heat}:</strong> {order.heat}/10
          </li>
          <li className="md:col-span-2">
            <strong>{dict.summary.ingredients}:</strong> {ingredients}
          </li>
          <li>
            <strong>{dict.summary.preparation}:</strong> {labelFor(locale, "preparation", order.preparation)}
          </li>
          
          <li className="md:col-span-2">
            <strong>{dict.summary.packaging}:</strong> {labelFor(locale, "packaging", order.packaging)}
          </li>
          <li>
            <strong>{dict.summary.quantity}:</strong> {order.quantity}
          </li>
        </ul>
        <div id="summary-live" className="sr-only" aria-live="polite" />
      </div>
    </aside>
  );
}


