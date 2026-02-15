import { HEROES } from "../data";

export function searchHeroes(q) {
  if (!q || q.trim().length < 1) return HEROES;
  const l = q.toLowerCase().trim();
  return HEROES.filter((h) => h.name.toLowerCase().includes(l));
}
