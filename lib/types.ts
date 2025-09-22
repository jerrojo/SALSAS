export type ChiliKey = "jalapeno" | "serrano" | "habanero" | "poblano" | "manzano";
export type IngredientKey = "onion" | "tomato" | "garlic" | "cilantro" | "spices";
export type PreparationKey = "marinated" | "charred" | "cooked" | "fresh";
export type SweetenerKey = "none" | "sugar" | "agave" | "piloncillo";
export type PackagingKey =
  | "250g_glass"
  | "330g_glass"
  | "1l_glass"
  | "1_5kg_bucket"
  | "5kg_bucket"
  | "20kg_drum";

export type Order = {
  chili: ChiliKey;
  heat: number;
  ingredients?: IngredientKey[];
  preparation: PreparationKey;
  sweetener: SweetenerKey;
  packaging: PackagingKey;
  quantity: number;
  name: string;
  phone?: string;
};


