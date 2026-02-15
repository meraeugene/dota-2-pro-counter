import { HEROES } from "../data";

export function filterHeroes(roleId, q) {
  const ENEMY_ROLES = {
    carry: ["offlane"],
    mid: ["mid"],
    offlane: ["carry"],
    soft_support: ["carry"],
    hard_support: ["offlane"],
  };
  const allowed = ENEMY_ROLES[roleId] ?? [];

  let list = HEROES.filter((h) => h.roles.some((r) => allowed.includes(r)));

  if (q && q.trim()) {
    const l = q.toLowerCase().trim();

    // Helper to get initials like "PA" → "Phantom Assassin"
    const getInitials = (name) =>
      name
        .split(/[\s-]/)
        .map((w) => w[0])
        .join("")
        .toLowerCase();

    list = list.filter((h) => {
      const nameMatch = h.name
        .toLowerCase()
        .replace(/[\s-]/g, "")
        .includes(l.replace(/\s/g, ""));
      const initialsMatch = getInitials(h.name).includes(l);
      return nameMatch || initialsMatch;
    });
  }

  return list;
}
