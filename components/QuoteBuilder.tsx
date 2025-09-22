"use client";

import { useEffect, useMemo, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import StepPill from "./StepPill";
import Slider from "./Slider";
import SummaryBox from "./SummaryBox";
import WhatsAppButton from "./WhatsAppButton";
import { getDict, Locale, labelFor, OptionKeyGroups } from "@/lib/i18n";
import { buildWhatsAppUrl, buildMessage } from "@/lib/whatsapp";
import { getStoredOrder, setStoredOrder, clearStoredOrder } from "@/lib/storage";
import type { Order, IngredientKey } from "@/lib/types";
import { useRouter } from "next/navigation";

const orderSchema = z.object({
  chili: z.enum(["jalapeno", "serrano", "habanero", "poblano", "manzano"]),
  heat: z.number().min(0).max(10),
  ingredients: z.array(z.enum(["onion", "tomato", "garlic", "cilantro", "spices"])).optional(),
  preparation: z.enum(["marinated", "charred", "cooked", "fresh"]),
  sweetener: z.enum(["none", "sugar", "agave", "piloncillo"]),
  packaging: z.enum(["250g_glass", "330g_glass", "1l_glass", "1_5kg_bucket", "5kg_bucket", "20kg_drum"]),
  quantity: z.number().int().positive(),
  name: z.string().min(1),
  phone: z.string().optional()
});

type FormValues = z.infer<typeof orderSchema>;

export default function QuoteBuilder({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const router = useRouter();
  const [waUrl, setWaUrl] = useState<string | null>(null);

  const defaultValues: FormValues = useMemo(() => {
    const saved = getStoredOrder();
    if (saved) {
      return saved as unknown as FormValues;
    }
    return {
      chili: "jalapeno",
      heat: 5,
      ingredients: [],
      preparation: "marinated",
      sweetener: "none",
      packaging: "250g_glass",
      quantity: 1,
      name: "",
      phone: ""
    };
  }, []);

  const {
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: zodResolver(orderSchema),
    defaultValues
  });

  const watched = watch();
  useEffect(() => {
    const data: Order = { ...watched };
    setStoredOrder(data);
  }, [watched]);

  const onReset = () => {
    reset(defaultValues);
    clearStoredOrder();
  };

  const onSubmit = (values: FormValues) => {
    const order: Order = { ...values };
    const url = buildWhatsAppUrl(order, locale);
    setWaUrl(url);
    const text = buildMessage(order, locale);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    try {
      window.open(url, "_blank");
    } catch {}
    router.push(locale === "en" ? `/en/success?url=${encodeURIComponent(url)}` : `/success?url=${encodeURIComponent(url)}`);
  };

  const section = (title: string, children: React.ReactNode) => (
    <section className="rounded-xl bg-white/70 p-4 shadow-soft">
      <h3 className="font-display text-lg mb-3">{title}</h3>
      <div className="space-y-3">{children}</div>
    </section>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4">
          {section(`${dict.steps.step} 1 — ${dict.steps.chili}`, (
            <Controller
              control={control}
              name="chili"
              render={({ field }) => (
                <div className="flex flex-wrap gap-2">
                  {OptionKeyGroups.chili.map((key) => (
                    <StepPill
                      key={key}
                      label={labelFor(locale, "chili", key)}
                      selected={field.value === key}
                      onClick={() => field.onChange(key)}
                      aria-label={labelFor(locale, "chili", key)}
                    />
                  ))}
                </div>
              )}
            />
          ))}

          {section(`${dict.steps.step} 2 — ${dict.steps.heat}`, (
            <Controller
              control={control}
              name="heat"
              render={({ field }) => (
                <Slider
                  value={field.value}
                  onChange={(v) => field.onChange(v)}
                  min={0}
                  max={10}
                  labels={{ 0: dict.heatLabels[0], 10: dict.heatLabels[10] }}
                  ariaLabel={dict.steps.heat}
                />
              )}
            />
          ))}

          {section(`${dict.steps.step} 3 — ${dict.steps.ingredients}`, (
            <Controller
              control={control}
              name="ingredients"
              render={({ field }) => {
                const current = new Set<IngredientKey>(field.value || []);
                const toggle = (key: IngredientKey) => {
                  const next = new Set(current);
                  if (next.has(key)) next.delete(key);
                  else next.add(key);
                  field.onChange(Array.from(next));
                };
                return (
                  <div className="flex flex-wrap gap-2">
                    {OptionKeyGroups.ingredients.map((key) => (
                      <StepPill
                        key={key}
                        label={labelFor(locale, "ingredients", key)}
                        selected={current.has(key)}
                        onClick={() => toggle(key)}
                        aria-label={labelFor(locale, "ingredients", key)}
                      />
                    ))}
                  </div>
                );
              }}
            />
          ))}

          {section(`${dict.steps.step} 4 — ${dict.steps.preparation}`, (
            <Controller
              control={control}
              name="preparation"
              render={({ field }) => (
                <div className="flex flex-wrap gap-2">
                  {OptionKeyGroups.preparation.map((key) => (
                    <StepPill
                      key={key}
                      label={labelFor(locale, "preparation", key)}
                      selected={field.value === key}
                      onClick={() => field.onChange(key)}
                      aria-label={labelFor(locale, "preparation", key)}
                    />
                  ))}
                </div>
              )}
            />
          ))}

          {section(`${dict.steps.step} 5 — ${dict.steps.sweetener}`, (
            <Controller
              control={control}
              name="sweetener"
              render={({ field }) => (
                <div className="flex flex-wrap gap-2">
                  {OptionKeyGroups.sweetener.map((key) => (
                    <StepPill
                      key={key}
                      label={labelFor(locale, "sweetener", key)}
                      selected={field.value === key}
                      onClick={() => field.onChange(key)}
                      aria-label={labelFor(locale, "sweetener", key)}
                    />
                  ))}
                </div>
              )}
            />
          ))}

          {section(`${dict.steps.step} 6 — ${dict.steps.packaging}`, (
            <Controller
              control={control}
              name="packaging"
              render={({ field }) => (
                <div className="flex flex-wrap gap-2">
                  {OptionKeyGroups.packaging.map((key) => (
                    <StepPill
                      key={key}
                      label={labelFor(locale, "packaging", key)}
                      selected={field.value === key}
                      onClick={() => field.onChange(key)}
                      aria-label={labelFor(locale, "packaging", key)}
                    />
                  ))}
                </div>
              )}
            />
          ))}

          {section(`${dict.steps.step} 7 — ${dict.steps.quantityContact}`, (
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <Controller
                control={control}
                name="quantity"
                render={({ field }) => (
                  <div>
                    <label className="block text-sm font-medium">{dict.form.quantity}</label>
                    <input
                      type="number"
                      min={1}
                      className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2"
                      value={field.value}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                    {errors.quantity && (
                      <p className="mt-1 text-sm text-red-dark">{dict.form.errors.quantity}</p>
                    )}
                  </div>
                )}
              />
              <Controller
                control={control}
                name="name"
                render={({ field }) => (
                  <div>
                    <label className="block text-sm font-medium">{dict.form.name}</label>
                    <input
                      type="text"
                      className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2"
                      {...field}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-dark">{dict.form.errors.name}</p>
                    )}
                  </div>
                )}
              />
              <Controller
                control={control}
                name="phone"
                render={({ field }) => (
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium">{dict.form.phone}</label>
                    <input
                      type="tel"
                      className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2"
                      {...field}
                    />
                  </div>
                )}
              />
              <div className="md:col-span-2">
                <p className="text-sm text-gray-600">{dict.home.noMinimum}</p>
              </div>
            </div>
          ))}

          <div className="flex items-center gap-3">
            <button type="submit" className="btn-primary">
              {dict.actions.submit}
            </button>
            {waUrl && (
              <WhatsAppButton href={waUrl}>{dict.actions.openWhatsapp}</WhatsAppButton>
            )}
          </div>
        </div>

        <div className="md:col-span-1">
          <SummaryBox
            order={watched as unknown as Order}
            locale={locale}
            onReset={onReset}
          />
        </div>
      </div>
    </form>
  );
}


