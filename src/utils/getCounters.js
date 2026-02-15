import { COUNTERS, GENERIC } from "../data";

export function getCounters(eid, rid) {
  return COUNTERS[eid]?.[rid] ?? GENERIC[rid] ?? [];
}
