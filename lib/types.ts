export type ChiliKey = "jalapeno" | "serrano" | "habanero" | "poblano" | "manzano";
export type IngredientKey = "onion" | "tomato" | "garlic" | "cilantro" | "spices";
export type PreparationKey = "marinated" | "charred" | "cooked" | "fresh";
export type PackagingKey =
  | "250g_plastic"
  | "250g_glass"
  | "450g_glass"
  | "1_5kg_bag"
  | "3kg_bag"
  | "17kg_bucket"
  | "200kg_drum";

export type Order = {
  chili: ChiliKey;
  heat: number;
  ingredients?: IngredientKey[];
  preparation: PreparationKey;
  packaging: PackagingKey;
  quantity: number;
  name: string;
};


