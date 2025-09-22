import type { Order } from "./types";

const KEY = "ga:order";

export function getStoredOrder(): Order | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Order;
  } catch {
    return null;
  }
}

export function setStoredOrder(order: Order) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(KEY, JSON.stringify(order));
  } catch {}
}

export function clearStoredOrder() {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(KEY);
  } catch {}
}


