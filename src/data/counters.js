import { G } from "../utils/guide";

export const COUNTERS = {
  antimage: {
    carry: [
      {
        hero: "terrorblade",
        summary:
          "Metamorphosis outranges Blink entirely; Mirror Image dilutes Mana Void targeting.",
        tags: ["scaling", "illusions"],
        skills: [
          {
            name: "Metamorphosis",
            tip: "Activate before trading — 650 range stays outside AM's Blink and Call range permanently.",
          },
          {
            name: "Conjure Image",
            tip: "Spawn illusions before every fight to split Mana Void targeting.",
          },
          {
            name: "Sunder",
            tip: "Swap HP the instant AM commits his Blink for a kill attempt.",
          },
        ],
        tips: [
          "Keep illusions spread wide so Mana Void AoE splash hits clones, not you.",
          "Never let Metamorphosis expire while AM is nearby — the 3-second cooldown window is pure vulnerability.",
          "Push towers faster than AM can respond — your split-push forces him off the map.",
        ],
        guide: G(
          "Level 6 Metamorphosis gives 650 attack range. By 25 min you push towers faster than AM responds.",
          "Conjure Image before every trade. Mirror Image on initiation. Sunder when AM commits Blink.",
          "Illusions spread wide so Mana Void splashes clones. Never clump near rune fights.",
          "Trade at range in Metamorphosis only. Force AM to Blink in — Sunder the moment he does.",
          "Dropping Metamorphosis near AM. Maintain distance or Sunder during the cooldown window.",
        ),
      },
      {
        hero: "luna",
        summary:
          "Eclipse deals magic damage bypassing Mana Void; Glaives deny safe farming range.",
        tags: ["magic burst", "eclipse"],
        skills: [
          {
            name: "Eclipse",
            tip: "Cast when AM walks up — magic damage bypasses Mana Void and his magic resistance items.",
          },
          {
            name: "Lucent Beam",
            tip: "Interrupt AM's last-hit pattern on cooldown — undodgeable by Blink.",
          },
          {
            name: "Moon Glaives",
            tip: "Position at 600+ range so Glaives bounce chip AM while you're outside Blink range.",
          },
        ],
        tips: [
          "Stay at Glaive range (600+ units) at all times — AM's Blink is 1200 range but his lane harass is melee only.",
          "Use Lucent Beam to deny AM's last hits — it has 1200 cast range and he cannot dodge it.",
          "Eclipse at level 6 wins the lane outright — 8 undodgeable magic beams bypasses everything AM builds.",
        ],
        guide: G(
          "Level 6 Eclipse is a lane win button. Aghanim's at 22 min deletes AM in one full channel.",
          "Lucent Beam to interrupt AM's farm. Eclipse when AM walks up — magic bypasses all defenses.",
          "Stay at max Glaive bounce range. AM has no ranged harass — Beam him every cooldown.",
          "Beam when he reaches for a last hit. Attack speed and Glaives mean every trade favors you.",
          "Over-extending for Glaive bounces. Let them come to you — never chase AM into trees.",
        ),
      },
    ],
    mid: [
      {
        hero: "lina",
        summary:
          "Dragon Slave and LSA burst kills AM before Blink comes online at level 5.",
        tags: ["burst", "early kill"],
        skills: [
          {
            name: "Dragon Slave",
            tip: "Cast first — use the travel time to queue Light Strike Array immediately behind it.",
          },
          {
            name: "Light Strike Array",
            tip: "Cast during Dragon Slave travel for a simultaneous stun+damage combo.",
          },
          {
            name: "Laguna Blade",
            tip: "Execute AM once he's below 60% HP — combo kills him outright at level 7.",
          },
        ],
        tips: [
          "AM has zero escape before Blink Dagger — level 3 is your kill window every time.",
          "Hug the side of lane near the rune bottle so you can chain harass every wave.",
          "Slave → LSA (cast during travel) → Laguna is the exact combo order — many players reverse it.",
        ],
        guide: G(
          "Level 3 with Slave and Strike ready is the kill window. AM has no escape before Blink Dagger.",
          "Slave → Strike cast during travel time → Laguna. At level 7 this kills AM from high health.",
          "Hug the side of lane near rune. AM must walk up to last hit — punish every approach.",
          "Your range means no retaliation. Harass every wave until AM is below 50% then commit.",
          "Missing Light Strike Array ruins the combo. Cast Slave first, then LSA during travel.",
        ),
      },
    ],
    offlane: [
      {
        hero: "axe",
        summary:
          "Berserker's Call hard-counters Blink — AM is forced into melee while Counter Helix procs.",
        tags: ["disable", "taunt"],
        skills: [
          {
            name: "Berserker's Call",
            tip: "Cast the moment AM Blinks in for a last hit — he cannot escape during the taunt.",
          },
          {
            name: "Counter Helix",
            tip: "Procs on every attack during Call — AM's attack speed triggers it constantly.",
          },
          {
            name: "Culling Blade",
            tip: "Execute AM below the HP threshold after a trade — bypasses buyback effectively.",
          },
        ],
        tips: [
          "Stand slightly behind creeps so AM must Blink past you to farm — this naturally baits Call.",
          "Save Blademail for when AM jumps you — reflected damage during Call kills him faster than he kills you.",
          "Don't waste Call on creep waves when AM is nearby — save it for the moment he walks up.",
        ],
        guide: G(
          "Level 2 Call already neutralizes AM's mobility. Blink + Blademail at 15 min means free kills.",
          "Call the moment AM Blinks for a last hit — can't escape during taunt. Counter Helix procs freely.",
          "Stand slightly behind creeps so AM must Blink past you. This baits the Call proc.",
          "Let AM think he's safe to last hit, then Call. Counter Helix procs deal more than his attack.",
          "Wasting Call on creeps when AM is nearby. Most players do this and have nothing when AM walks up.",
        ),
      },
    ],
    soft_support: [
      {
        hero: "lion",
        summary:
          "Hex removes Blink for 4 seconds; Mana Drain accelerates AM's mana depletion.",
        tags: ["hex", "disable"],
        skills: [
          {
            name: "Hex",
            tip: "Cast the moment you see AM's Blink animation — prevents escape and disables magic immunity items.",
          },
          {
            name: "Mana Drain",
            tip: "Use on cooldown — drains 200 mana per second, keeping AM's Blink and Mana Void permanently empty.",
          },
          {
            name: "Finger of Death",
            tip: "Execute AM after Hex lands — one-shots his low HP pool with Hex setting up the easy hit.",
          },
        ],
        tips: [
          "Hold Hex for AM's Blink dives — never waste it on poke damage in lane.",
          "Mana Drain every 3 seconds keeps AM's Blink on permanent delay throughout the game.",
          "Stay near carry at all times — react to AM's dives reactively, never initiate toward him.",
        ],
        guide: G(
          "Level 6 Finger one-shots AM's low HP after Hex. Highest single-target kill potential.",
          "Hex → Earth Spike → Finger. Hex prevents escape, Spike locks, Finger executes.",
          "Stay in range of carry, not AM. React to dives — never walk toward AM.",
          "Don't trade with AM directly. Support carry trades with Hex timing when AM commits.",
          "Using Hex for damage instead of holding for AM's Blink dives.",
        ),
      },
    ],
    hard_support: [
      {
        hero: "dazzle",
        summary:
          "Shallow Grave makes AM's burst combo useless; Weave stacks armor before fights.",
        tags: ["grave", "save"],
        skills: [
          {
            name: "Shallow Grave",
            tip: "Pre-cast when AM positions for a Blink commit — never cast reactively after he lands.",
          },
          {
            name: "Weave",
            tip: "Cast behind the wave at the fight start — -12 armor after 6 seconds halves AM's damage output.",
          },
          {
            name: "Shadow Wave",
            tip: "Heal carry and yourself simultaneously — bonus damage per nearby friendly unit.",
          },
        ],
        tips: [
          "AM cannot kill a Graved target — pre-cast Grave on Blink animation, not after the first hit.",
          "Weave stacked at -12 armor halves AM's physical damage; start it before every engagement.",
          "Offset your position 200 units from carry — Blink Mana Void won't clip both of you at once.",
        ],
        guide: G(
          "Level 2 Grave + Poison Touch makes carry unkillable. AM abandons dives against Dazzle.",
          "Pre-cast Grave when AM positions for Blink commit — not after he lands. Poison Touch on approach.",
          "Stay behind carry on vision side. AM looks for Grave holder — don't stand adjacent to carry.",
          "Force AM to trade into Weave stacks. Every fight while Weave is active costs him 2 armor/s.",
          "Casting Grave after AM's first hit. You have 250ms — pre-cast is mandatory every time.",
        ),
      },
    ],
  },

  monkey_king: {
    offlane: [
      {
        hero: "timbersaw",
        summary:
          "Reactive Armor invalidates Monkey King's harassment; Timber Chain escapes Tree Dance pressure.",
        tags: ["hard lane counter", "pure damage", "escape"],
        skills: [
          {
            name: "Reactive Armor",
            tip: "Every Jingu hit gives armor and regen — MK loses extended trades completely.",
          },
          {
            name: "Timber Chain",
            tip: "Instantly escapes Tree Dance and Primal Spring angles.",
          },
          {
            name: "Chakram",
            tip: "Pure damage punishes MK through armor and ignores lifesteal value.",
          },
        ],
        tips: [
          "Stand your ground early — you want MK to hit you.",
          "Chain after Tree Dance landing, not before.",
          "Drag trades long — Reactive Armor always wins.",
        ],
        guide: G(
          "Walk at MK early to stack Reactive Armor — regen overtakes damage by minute 6.",
          "Chain instantly when MK drops from trees to deny Jingu buildup.",
          "Chakram zones MK out of Wukong’s Command area.",
          "Timber wins lane by refusing to retreat.",
          "Backing off too early before armor stacks build.",
        ),
        build: [
          {
            name: "Arcane Boots",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/arcane_boots_lg.png",
          },
          {
            name: "Kaya & Sange",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/kaya_and_sange_lg.png",
          },
          {
            name: "Aghanim's Scepter",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/ultimate_scepter_lg.png",
          },
          {
            name: "Gleipnir",
            img: "https://static.wikia.nocookie.net/dota2_gamepedia/images/5/5d/Gleipnir_icon.png/revision/latest?cb=20201222194556",
          },

          {
            name: "Black King Bar",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/black_king_bar_lg.png",
          },
          {
            name: "Octarine Core",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/octarine_core_lg.png",
          },
          {
            name: "Scythe of Vyse",
            img: "https://static.wikia.nocookie.net/dota2_gamepedia/images/5/54/Scythe_of_Vyse_icon.png/revision/latest?cb=20160530173214",
          },
          {
            name: "Eternal Shroud",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/eternal_shroud_lg.png",
          },
        ],
      },
    ],
    soft_support: [
      {
        hero: "disruptor",
        summary:
          "Glimpse punishes Tree Dance positioning; Field traps Monkey King after landing.",
        tags: ["hard counter", "displacement"],
        skills: [
          {
            name: "Glimpse",
            tip: "Pulls MK back after Tree Dance — denies escape.",
          },
          {
            name: "Kinetic Field",
            tip: "Traps MK on landing — no re-entry to trees.",
          },
          { name: "Static Storm", tip: "Silences MK inside Wukong’s Command." },
        ],
        tips: [
          "Glimpse after jump, not before.",
          "Field predicted landing spot.",
          "Play at max cast range.",
        ],
        guide: G(
          "MK jumps → Glimpse → forced ground fight.",
          "Second jump attempt always Fielded.",
          "Static Storm removes MK’s entire kit.",
          "Never chase trees — pull MK out instead.",
          "Glimpsing too early.",
        ),
        items: {
          starting: [
            {
              name: "Clarity",
              image:
                "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/clarity_lg.png",
            },
            {
              name: "Tango",
              image:
                "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/tango_lg.png",
            },
            {
              name: "Observer Ward",
              image:
                "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/ward_observer_lg.png",
            },
          ],
          core: [
            {
              name: "Glimmer Cape",
              image:
                "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/glimmer_cape_lg.png",
            },
            {
              name: "Force Staff",
              image:
                "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/force_staff_lg.png",
            },
          ],
          situational: [
            {
              name: "Aether Lens",
              image:
                "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/aether_lens_lg.png",
            },
            {
              name: "Eul's Scepter",
              image:
                "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/eul_lg.png",
            },
          ],
        },
      },
    ],
  },

  crystal_maiden: {
    carry: [
      {
        hero: "juggernaut",
        summary:
          "Blade Fury magic immunity negates CM's entire kit for 5 seconds every 30.",
        tags: ["magic immunity", "fury"],
        skills: [
          {
            name: "Blade Fury",
            tip: "Activate immediately when CM casts Frostbite — magic immunity cancels the root mid-cast.",
          },
          {
            name: "Omnislash",
            tip: "Use after Blade Fury ends — CM is low HP from harassment and has no escape.",
          },
          {
            name: "Healing Ward",
            tip: "Place ward after engaging — CM will target it first, buying you time to finish the kill.",
          },
        ],
        tips: [
          "Bait CM's Frostbite by walking up, then activate Fury immediately on her cast animation.",
          "Approach from the jungle side so CM has no creep-block — she must Frostbite early or let you hit freely.",
          "Check CM's mana before committing — no mana means no Frostbite, just right-click her without Fury.",
        ],
        guide: G(
          "Level 3 Blade Fury with magic immunity. CM cannot stop you. Guaranteed kill every 30s.",
          "Bait CM's Frostbite by walking up, then Fury immediately when she casts. Omnislash after.",
          "Approach from jungle side so CM has no creep-block. She must Frostbite early or let you hit.",
          "Walk up → Frostbite cast → Fury immediately — cancelled during Fury startup. Win every trade.",
          "Forgetting to check CM's mana. If no Frostbite mana, just right-click — save Fury.",
        ),
      },
    ],
    mid: [
      {
        hero: "puck",
        summary:
          "Phase Shift blocks every CM ability; Waning Rift purges Frostbite and silences her.",
        tags: ["dodge", "purge"],
        skills: [
          {
            name: "Phase Shift",
            tip: "Blocks Frostbite, Freezing Field, and Frost Nova — use on every CM spell cast animation.",
          },
          {
            name: "Waning Rift",
            tip: "Purges Frostbite slow and silences CM simultaneously — frees you and locks her out.",
          },
          {
            name: "Illusory Orb",
            tip: "Poke safely from maximum range every wave — CM cannot respond to it effectively.",
          },
        ],
        tips: [
          "You have zero losing trades against CM with Phase Shift — every engagement is free damage on your side.",
          "Phase Shift on auto-attacks is wasted — only block spells (Frostbite costs 170 mana per cast).",
          "Orb poke every wave: Phase Shift Frostbite, Rift purge slow, Orb back out — net Puck gains, CM loses.",
        ],
        guide: G(
          "Level 3 Phase Shift makes you immune to 100% of CM's damage. She literally cannot kill you.",
          "Phase Shift every Frostbite. Waning Rift purges Slow and silences CM. Orb for safe range farm.",
          "Orb poke every wave. Phase Shift Frostbite, Rift purge, Orb back. Net: Puck +200, CM +0.",
          "Zero losing trades against CM with Phase Shift. Every engagement is free damage for you.",
          "Wasting Phase Shift on CM's auto-attacks. Only dodge spells — physical hits are ignorable.",
        ),
      },
    ],
    offlane: [
      {
        hero: "mars",
        summary:
          "Arena of Blood traps CM and blocks every Freezing Field escape route.",
        tags: ["trap", "arena"],
        skills: [
          {
            name: "Arena of Blood",
            tip: "Cast when CM attempts Freezing Field — she cannot run out or reposition to channel safely.",
          },
          {
            name: "God's Rebuke",
            tip: "Bounce CM into Arena walls for a 1.5-second stun — trees nearby make this consistent.",
          },
          {
            name: "Spear of Mars",
            tip: "Pierce CM into a tree for an additional stun — trees near the offlane make this easy.",
          },
        ],
        tips: [
          "Fight CM near trees — trees give Arena walls for Rebuke bounce stun. Open ground negates this.",
          "Arena cast while CM starts Freezing Field means she cannot channel 2.5 seconds inside a 3-second Arena.",
          "Blink from fog onto CM's support position — she stands behind creeps, Blink past the wave and Call.",
        ],
        guide: G(
          "Level 6 Arena + Rebuke trapping CM during Freezing Field = can't escape or channel. Arena wins.",
          "Rebuke → bounce off Arena wall → 1.5s stun. Then Spear. Then Arena if she tries to run.",
          "Force CM near trees. Trees act as Arena walls for Rebuke bounce stun. Open field reduces stun.",
          "At level 3, Spear + Rebuke + Arena = CM dead every time within 700 units.",
          "Arena in open ground without walls = no Rebuke bounce stun. Always fight CM near trees.",
        ),
      },
    ],
    soft_support: [
      {
        hero: "lion",
        summary:
          "Hex prevents Freezing Field channel; Finger executes CM's low HP instantly.",
        tags: ["hex", "execute"],
        skills: [
          {
            name: "Hex",
            tip: "Cast the moment CM begins Freezing Field animation — the channel is cancelled before it deals damage.",
          },
          {
            name: "Earth Spike",
            tip: "Follow Hex immediately — pins CM in place while she's helpless during the hex duration.",
          },
          {
            name: "Finger of Death",
            tip: "Execute CM cleanly after Hex — her low HP pool means no followup is needed.",
          },
        ],
        tips: [
          "Hex on Freezing Field animation not on approach — don't waste it on general lane harassment.",
          "Mana Drain on CM every trade keeps her below Freezing Field cost (200+ mana per cast).",
          "Hex + Spike + Finger total 3 abilities in 1.5 seconds — CM has no response in that window.",
        ],
        guide: G(
          "Level 6 Hex + Finger = CM dies every Freezing Field attempt. Combo faster than her channel.",
          "Hex on CM's Freezing Field animation. Earth Spike for lockdown. Finger to execute.",
          "Stay at Hex range (800 units) near carry. CM at 600 units — unexpected fog angles.",
          "Mana Drain every trade. She has 500 mana at level 5 — 3 Drains = no Freezing Field.",
          "Hexing CM before Freezing Field cast. Hold for the ult animation — not harassment.",
        ),
      },
    ],
    hard_support: [
      {
        hero: "oracle",
        summary:
          "Fate's Edict blocks CM's magic damage entirely; Purifying Flames out-heals her harassment.",
        tags: ["magic block", "sustain"],
        skills: [
          {
            name: "Fate's Edict",
            tip: "Completely blocks CM's magic damage for 4 seconds — entire harassment pattern nullified.",
          },
          {
            name: "Purifying Flames",
            tip: "Heal carry constantly through Frostbite and Slow harassment — out-sustains her mana output.",
          },
          {
            name: "Fortune's End",
            tip: "Full channel purges Frostbite slow — free carry after CM wastes cooldowns.",
          },
        ],
        tips: [
          "Edict on the first Frostbite animation you see — never hesitate, it blocks 4 seconds of all magic.",
          "With Edict active your carry takes 0 damage from CM for 4 seconds every 17 seconds — near 100% uptime.",
          "Stay near carry for Edict line of sight — CM stands at 600-1000 units, cover that entire zone.",
        ],
        guide: G(
          "Fate's Edict blocks CM's magic damage for 4 seconds. Entire harassment pattern blocked.",
          "Edict during Frostbite + Slow chains. Fortune's End purges slow. Flames for healing.",
          "Stay near carry for Edict LoS. CM stands back — cover her typical cast ranges.",
          "With Edict carry takes 0 damage from CM for 4s every 17s. Near 100% uptime.",
          "Saving Edict instead of preemptive use. Use on first Frostbite animation — never hesitate.",
        ),
      },
    ],
  },
};
