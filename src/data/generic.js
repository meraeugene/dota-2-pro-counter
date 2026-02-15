import { G } from "../utils/guide";

export const GENERIC = {
  carry: [
    {
      hero: "terrorblade",
      summary:
        "Split-push threat forces enemy responses without direct confrontation.",
      tags: ["split-push", "scaling"],
      skills: [
        {
          name: "Metamorphosis",
          tip: "650 attack range dominates most safelane matchups — activate before every trade.",
        },
        {
          name: "Conjure Image",
          tip: "Spawn illusions before fights to confuse targeting and multiply farm speed.",
        },
        {
          name: "Sunder",
          tip: "Reverse any burst damage attempt — most effective when enemy commits their kill combo.",
        },
      ],
      tips: [
        "Level 6 Metamorphosis at 12 min dominates most safelane matchups with 650 attack range.",
        "Keep illusions spread wide — never clump for AoE punishment.",
        "Only trade in Metamorphosis — ranged form beats most melee carries cleanly.",
      ],
      guide: G(
        "Level 6 Metamorphosis at 12 min dominates most safelane matchups.",
        "Mirror Image on initiation, Sunder to reverse burst.",
        "Keep illusions spread. Never clump for AoE.",
        "Only trade in Metamorphosis. Ranged form beats melee carries.",
        "Forgetting to spread illusions before fights.",
      ),
    },
  ],
  mid: [
    {
      hero: "invoker",
      summary:
        "Flexible spell arsenal adapts to any enemy playstyle in the mid lane.",
      tags: ["versatile", "combo"],
      skills: [
        {
          name: "Cold Snap",
          tip: "Proc on enemy attacks for rapid mini-stuns — devastating during their own burst combos.",
        },
        {
          name: "EMP",
          tip: "Cast from fog before fights to drain mana — depletes 350 mana invisibly.",
        },
        {
          name: "Sunstrike",
          tip: "Execute fleeing enemies globally — requires vision but bypasses all escape mechanics.",
        },
      ],
      tips: [
        "Level 7 Cold Snap + EMP combo established dominates most mid matchups.",
        "Control runes aggressively — mid rune advantage compounds into early game kills.",
        "Quas regen spam out-sustains lane trades — force enemy to burn more resources than you.",
      ],
      guide: G(
        "Level 7 Cold Snap + EMP dominates most mid matchups.",
        "EMP from fog, Tornado interrupt, Meteor + Cold Snap for DPS.",
        "Control runes aggressively.",
        "Quas regen spam out-sustains all trades.",
        "Staying on one orb config — adapt to the matchup.",
      ),
    },
  ],
  offlane: [
    {
      hero: "axe",
      summary:
        "Berserker's Call disrupts any core's farming pattern through forced combat.",
      tags: ["disable", "initiate"],
      skills: [
        {
          name: "Berserker's Call",
          tip: "Force enemy to attack you every 16s — use on grouped enemies for Counter Helix procs.",
        },
        {
          name: "Counter Helix",
          tip: "Procs every 4th attack — high enemy attack speed makes this devastating in trades.",
        },
        {
          name: "Culling Blade",
          tip: "Execute below HP threshold — instant kill that resets Call cooldown on successful kill.",
        },
      ],
      tips: [
        "Level 2 Call + level 3 Counter Helix wins every melee trade from minute 2 onward.",
        "Position in pull camp path to disrupt support pulls and isolate the carry.",
        "Force the trade then disengage with Blink — repeat every 30s for attrition pressure.",
      ],
      guide: G(
        "Level 2 Call + Counter Helix wins every melee trade from minute 2.",
        "Blink + Call on core every 30s. Counter Helix procs on clusters.",
        "Position in pull camp path to disrupt supports.",
        "Force trade then disengage. Repeat every 30s for attrition.",
        "Using Call on full-HP enemies — wait for them to trade first.",
      ),
    },
  ],
  soft_support: [
    {
      hero: "disruptor",
      summary:
        "Glimpse and Kinetic Field together punish every aggressive positioning attempt.",
      tags: ["displacement", "zone"],
      skills: [
        {
          name: "Glimpse",
          tip: "Send aggressive Blinkers back to their starting position — react to Blink animation.",
        },
        {
          name: "Kinetic Field",
          tip: "Cage enemies in a 2.5-second AoE barrier — combine with Static Storm for complete lockdown.",
        },
        {
          name: "Static Storm",
          tip: "3.5-second AoE silence — use in every teamfight engagement on grouped enemies.",
        },
      ],
      tips: [
        "Level 6 Static Storm + Field = complete disable on any grouped enemies.",
        "Stay at 1800 Glimpse range — you never need to be near the enemy.",
        "Glimpse on aggressive Blinks proactively — don't react after damage is done.",
      ],
      guide: G(
        "Level 6 Static Storm + Field = complete disable on grouped enemies.",
        "Glimpse on aggressive Blinks. Field + Storm in teamfights.",
        "Stay at 1800 range for Glimpse. Never closer than necessary.",
        "Never trade directly. Glimpse and let team clean up.",
        "Using Glimpse reactively after damage instead of proactively.",
      ),
    },
  ],
  hard_support: [
    {
      hero: "dazzle",
      summary:
        "Shallow Grave prevents any single-target execution strategy in the early game.",
      tags: ["grave", "save"],
      skills: [
        {
          name: "Shallow Grave",
          tip: "Pre-cast on enemy burst animation — never cast reactively after the first hit lands.",
        },
        {
          name: "Weave",
          tip: "-2 armor per second on enemies, +2 on allies — start every fight with Weave active.",
        },
        {
          name: "Shadow Wave",
          tip: "Heal multiple nearby allies simultaneously — chain-bounce damage plus healing.",
        },
      ],
      tips: [
        "Level 2 Grave + Poison Touch makes carry unkillable — pre-cast is mandatory every time.",
        "Force enemies to trade into Weave armor stacks — every fight costs them armor per second.",
        "Offset 200 units from carry — hard to burst both of you simultaneously.",
      ],
      guide: G(
        "Level 2 Grave + Poison Touch = carry unkillable in every lane.",
        "Pre-cast Grave on mana check. Weave in fights. Shadow Wave for AoE.",
        "Stay 200 units offset from carry.",
        "Force enemies into Weave armor stacks. Every fight costs armor.",
        "Casting Grave reactively after first hit. Pre-cast mandatory.",
      ),
    },
  ],
};
