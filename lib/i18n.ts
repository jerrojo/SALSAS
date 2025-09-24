import type {
  ChiliKey,
  IngredientKey,
  PreparationKey,
  PackagingKey
} from "./types";

export type Locale = "es" | "en";

type Dict = {
  home: {
    title: string;
    tagline: string;
    subnote: string;
    noMinimum: string;
  };
  steps: {
    step: string;
    chili: string;
    heat: string;
    ingredients: string;
    preparation: string;
    packaging: string;
    quantityContact: string;
  };
  form: {
    quantity: string;
    name: string;
    errors: {
      quantity: string;
      name: string;
    };
  };
  actions: {
    submit: string;
    openWhatsapp: string;
    reset: string;
  };
  common: {
    na: string;
  };
  heatLabels: Record<0 | 10, string>;
  heatScale: string[];
  options: {
    chili: Record<ChiliKey, string>;
    ingredients: Record<IngredientKey, string>;
    preparation: Record<PreparationKey, string>;
    packaging: Record<PackagingKey, string>;
  };
  summary: {
    title: string;
    chili: string;
    heat: string;
    ingredients: string;
    preparation: string;
    packaging: string;
    quantity: string;
  };
  wa: {
    hello: string;
    bullets: {
      chili: string;
      heat: string;
      ingredients: string;
      preparation: string;
      packaging: string;
      quantity: string;
      name: string;
      instagram: string;
    };
  };
};

export const dictionaries: Record<Locale, Dict> = {
  es: {
    home: {
      title: "Arma tu cotización",
      tagline:
        "Te ayudamos a producir tu línea de salsas con los mejores ingredientes al mejor precio.",
      subnote: "Sin mínimo de pedido. Respuesta en 24 h.",
      noMinimum: "Sin mínimo de pedido / No minimum order"
    },
    steps: {
      step: "Paso",
      chili: "Selecciona el tipo de chile",
      heat: "Ajusta el picor",
      ingredients: "Selecciona los ingredientes",
      preparation: "Selecciona el preparado",
      packaging: "Selecciona el envase",
      quantityContact: "Cantidad y contacto"
    },
    form: {
      quantity: "Cantidad (unidades)",
      name: "Nombre (requerido)",
      errors: {
        quantity: "Ingresa una cantidad válida mayor a 0",
        name: "Ingresa tu nombre"
      }
    },
    actions: {
      submit: "Enviar por WhatsApp",
      openWhatsapp: "Abrir WhatsApp",
      reset: "Reiniciar"
    },
    common: { na: "N/A" },
    heatLabels: { 0: "Bajo", 10: "Extremo" },
    heatScale: ["Bajo", "Medio", "Fuerte", "Muy fuerte", "Extremo"],
    options: {
      chili: {
        jalapeno: "Jalapeño",
        serrano: "Serrano",
        habanero: "Habanero",
        poblano: "Poblano",
        manzano: "Manzano"
      },
      ingredients: {
        onion: "Cebolla",
        tomato: "Tomate",
        garlic: "Ajo",
        cilantro: "Cilantro",
        spices: "Especias"
      },
      preparation: {
        marinated: "Marinado",
        charred: "Tatemado",
        cooked: "Cocido",
        fresh: "Crudo"
      },
      packaging: {
        "250g_plastic": "250 g (botella plástico)",
        "250g_glass": "250 g (botella vidrio)",
        "450g_glass": "450 g (botella vidrio)",
        "1_5kg_bag": "1.5 kg (bolsa)",
        "3kg_bag": "3 kg (bolsa)",
        "17kg_bucket": "17 kg (cubeta)",
        "200kg_drum": "200 kg (tambo)"
      }
    },
    summary: {
      title: "Resumen",
      chili: "Chile",
      heat: "Picor",
      ingredients: "Ingredientes",
      preparation: "Preparación",
      packaging: "Envase",
      quantity: "Cantidad"
    },
    wa: {
      hello: "Hola Grupo Arrabiato, quiero una cotización:",
      bullets: {
        chili: "• Chile",
        heat: "• Picor",
        ingredients: "• Ingredientes",
        preparation: "• Preparación",
        packaging: "• Envase",
        quantity: "• Cantidad",
        name: "• Nombre",
        instagram: "• Instagram"
      }
    }
  },
  en: {
    home: {
      title: "Build your quote",
      tagline:
        "We help you produce your private‑label salsas with top ingredients at the best price.",
      subnote: "No minimum order. Reply within 24 h.",
      noMinimum: "No minimum order / Sin mínimo de pedido"
    },
    steps: {
      step: "Step",
      chili: "Choose chili type",
      heat: "Adjust heat",
      ingredients: "Choose ingredients",
      preparation: "Choose preparation",
      packaging: "Choose packaging",
      quantityContact: "Quantity and contact"
    },
    form: {
      quantity: "Quantity (units)",
      name: "Name (required)",
      errors: {
        quantity: "Enter a valid quantity greater than 0",
        name: "Enter your name"
      }
    },
    actions: {
      submit: "Send via WhatsApp",
      openWhatsapp: "Open WhatsApp",
      reset: "Reset"
    },
    common: { na: "N/A" },
    heatLabels: { 0: "Mild", 10: "Extra hot" },
    heatScale: ["Mild", "Medium", "Hot", "Super Hot", "Extremely Hot"],
    options: {
      chili: {
        jalapeno: "Jalapeño",
        serrano: "Serrano",
        habanero: "Habanero",
        poblano: "Poblano",
        manzano: "Manzano"
      },
      ingredients: {
        onion: "Onion",
        tomato: "Tomato",
        garlic: "Garlic",
        cilantro: "Cilantro",
        spices: "Spices"
      },
      preparation: {
        marinated: "Marinated",
        charred: "Charred",
        cooked: "Cooked",
        fresh: "Fresh"
      },
      packaging: {
        "250g_plastic": "250 g (plastic bottle)",
        "250g_glass": "250 g (glass bottle)",
        "450g_glass": "450 g (glass bottle)",
        "1_5kg_bag": "1.5 kg (bag)",
        "3kg_bag": "3 kg (bag)",
        "17kg_bucket": "17 kg (bucket)",
        "200kg_drum": "200 kg (drum)"
      }
    },
    summary: {
      title: "Summary",
      chili: "Chili",
      heat: "Heat",
      ingredients: "Ingredients",
      preparation: "Preparation",
      packaging: "Packaging",
      quantity: "Quantity"
    },
    wa: {
      hello: "Hi Grupo Arrabiato, I’d like a quote:",
      bullets: {
        chili: "• Chili",
        heat: "• Heat",
        ingredients: "• Ingredients",
        preparation: "• Preparation",
        packaging: "• Packaging",
        quantity: "• Quantity",
        name: "• Name",
        instagram: "• Instagram"
      }
    }
  }
};

export const OptionKeyGroups = {
  chili: ["jalapeno", "serrano", "habanero", "poblano", "manzano"] as ChiliKey[],
  ingredients: ["onion", "tomato", "garlic", "cilantro", "spices"] as IngredientKey[],
  preparation: ["marinated", "charred", "cooked", "fresh"] as PreparationKey[],
  packaging: [
    "250g_plastic",
    "250g_glass",
    "450g_glass",
    "1_5kg_bag",
    "3kg_bag",
    "17kg_bucket",
    "200kg_drum"
  ] as PackagingKey[]
};

export function getDict(locale: Locale) {
  return dictionaries[locale];
}

export function labelFor<T extends keyof Dict["options"]>(
  locale: Locale,
  group: T,
  key: keyof Dict["options"][T]
): string {
  const table = dictionaries[locale].options[group] as Record<string, string>;
  return table[key as string];
}


