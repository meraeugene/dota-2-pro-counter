import { G } from "../utils/guide";

export const COUNTERS = {
  axe: {
    carry: [
      {
        hero: "phantom_assassin",
        summary:
          "PA’s blur and dodge force Axe to mis‑spin; Coup de Grace crits punish Axe’s low armor.",
        tags: ["evasion", "burst", "anti‑spin"],
        skills: [
          {
            name: "Stifling Dagger",
            tip: "Harass Axe from range, proc dagger crits between spins.",
          },
          {
            name: "Blur",
            tip: "High evasion makes Counter Helix rarely trigger on you.",
          },
          {
            name: "Coup de Grace",
            tip: "Massive crits instantly chunk Axe when he’s alone.",
          },
        ],
        tips: [
          "Stay at max Stifling Dagger range vs Axe’s Counter Helix.",
          "Only fight when Blur + defensive items are online.",
          "Force Blade Mail activation then disengage.",
        ],
        guide: G(
          "Keep distance with Stifling Dagger — don’t feed Counter Helix.",
          "Activate Blur before Axe initiates.",
          "Burst with Coup de Grace when Blade Mail is down.",
          "Don’t chase blindly into spin range.",
          "Keep a Town Portal to escape Call rotations.",
        ),
        build: [
          {
            name: "Phase Boots",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/phase_boots_lg.png",
          },
          {
            name: "Desolator",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/desolator_lg.png",
          },
          {
            name: "Black King Bar",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/black_king_bar_lg.png",
          },
          {
            name: "Sange & Yasha",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/sange_and_yasha_lg.png",
          },
          {
            name: "Monkey King Bar",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/monkey_king_bar_lg.png",
          },
          {
            name: "Assault Cuirass",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/assault_lg.png",
          },
        ],
      },
      {
        hero: "life_stealer",
        summary:
          "Rage lets Lifestealer ignore Berserker’s Call; Feast + lifesteal outlasts Axe’s damage.",
        tags: ["sustain", "spell immunity", "anti‑control"],
        skills: [
          {
            name: "Rage",
            tip: "Negates Call + disables — run through Axe’s initiation.",
          },
          {
            name: "Feast",
            tip: "Pure damage scales with Axe’s low HP — sustain fights.",
          },
          {
            name: "Infest",
            tip: "Avoid bad engages or set up surprise aggression.",
          },
        ],
        tips: [
          "Pop Rage before Axe calls you.",
          "Stay near creeps or the carry until Rage is up.",
          "Find flank angles to avoid direct Call spells.",
        ],
        guide: G(
          "Use Rage defensively to absorb Call initiation.",
          "Feast scales into late game vs low armor Axe.",
          "Infest dodge risky initiation then counterattack.",
          "Watch Blade Mail timings.",
          "Avoid clustering when Blade Mail is ready.",
        ),
        build: [
          {
            name: "Phase Boots",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/phase_boots_lg.png",
          },
          {
            name: "Radiance",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/radiance_lg.png",
          },
          {
            name: "Assault Cuirass",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/assault_lg.png",
          },

          {
            name: "Abyssal Blade",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/abyssal_blade_lg.png",
          },
          {
            name: "Sange & Yasha",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/sange_and_yasha_lg.png",
          },
          {
            name: "Heart of Tarrasque",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/heart_lg.png",
          },
        ],
      },
      {
        hero: "anti_mage",
        summary:
          "Blink escapes Call; Mana Break burns Axe’s strength/damage, making him weak in long trades.",
        tags: ["escape", "mana burn", "late game"],
        skills: [
          {
            name: "Blink",
            tip: "Outplay Berserker’s Call distance and re‑position instantly.",
          },
          {
            name: "Mana Break",
            tip: "Burns Axe’s mana which lowers his fight sustain.",
          },
          {
            name: "Spell Shield",
            tip: "Reduces magic control damage and counters Blade Mail burst.",
          },
        ],
        tips: [
          "Save Blink to dodge Call or Blade Mail punish.",
          "Always burn Axe’s mana before engaging.",
          "Split‑push constantly until core items are ready.",
        ],
        guide: G(
          "Use Blink defensively first against Call.",
          "Always trade mana before HP to weaken Axe.",
          "Outscale in late game — Axe has limited late damage.",
          "Avoid grouped fights when Blade Mail is up.",
          "Position for flank initiation.",
        ),
        build: [
          {
            name: "Power Treads",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/power_treads_lg.png",
          },
          {
            name: "Battle Fury",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/bfury_lg.png",
          },
          {
            name: "Manta Style",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/manta_lg.png",
          },
          {
            name: "Abyssal Blade",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/abyssal_blade_lg.png",
          },
          {
            name: "Butterfly",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/butterfly_lg.png",
          },
          {
            name: "Black King Bar",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/black_king_bar_lg.png",
          },
        ],
      },
      {
        hero: "slark",
        summary:
          "Shadow Dance lets Slark survive Call/Blade Mail combos and disengage; Essence Shift weakens Axe’s stats.",
        tags: ["survivability", "stat drain", "escape"],
        skills: [
          {
            name: "Shadow Dance",
            tip: "Stay hidden until Blade Mail/Call are committed, then return.",
          },
          {
            name: "Essence Shift",
            tip: "Steal stats from Axe and snowball past his tankiness.",
          },
          {
            name: "Pounce",
            tip: "Escape Call range or chase Axe when he retreats.",
          },
        ],
        tips: [
          "Don’t fight when Axe has Blade Mail ready.",
          "Pounce out of Call range early.",
          "Use Shadow Dance reactively to reset fights.",
        ],
        guide: G(
          "Save Shadow Dance until after Blade Mail hits.",
          "Pounce to break Call stuns and reposition.",
          "Essence Shift drains Axe’s effectiveness.",
          "Don’t chase Axe into his jungle without vision.",
          "Stay near creeps for defensive plays.",
        ),
        build: [
          {
            name: "Power Treads",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/power_treads_lg.png",
          },
          {
            name: "Diffusal Blade",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/diffusal_blade_lg.png",
          },
          {
            name: "Aghanim's Scepter",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/ultimate_scepter_lg.png",
          },
          {
            name: "Eye of Skadi",
            img: "https://static.wikia.nocookie.net/dota2_gamepedia/images/1/1e/Eye_of_Skadi_icon.png/revision/latest?cb=20160530170315",
          },
          {
            name: "Mage Slayer",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/mage_slayer_lg.png",
          },
          {
            name: "Silver Edge",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/silver_edge_lg.png",
          },
        ],
      },
      {
        hero: "juggernaut",
        summary:
          "Blade Fury ignores Counter Helix and most disables; Omnislash punishes isolated Axe.",
        tags: ["magic immune", "burst", "escape"],
        skills: [
          {
            name: "Blade Fury",
            tip: "Spell immunity avoids Counter Helix and Call disables.",
          },
          { name: "Healing Ward", tip: "Sustain through Axe’s slow pushes." },
          {
            name: "Omnislash",
            tip: "High burst when Axe is alone or disabled.",
          },
        ],
        tips: [
          "Use Blade Fury during Axe initiation to avoid spins.",
          "Position Healing Ward safely behind fights.",
          "Save Omnislash for isolated targets after Call ends.",
        ],
        guide: G(
          "Blade Fury punishes Axe’s initiation spells.",
          "Healing Ward sustains your team through slow pushes.",
          "Omnislash picks off Axe once Blade Mail is down.",
          "Don’t fight without BKB vs Blade Mail.",
          "Use mobility to avoid Call crowd control.",
        ),
        build: [
          {
            name: "Phase Boots",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/phase_boots_lg.png",
          },
          {
            name: "Battle Fury",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/bfury_lg.png",
          },
          {
            name: "Black King Bar",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/black_king_bar_lg.png",
          },
          {
            name: "Aghanim's Scepter",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/ultimate_scepter_lg.png",
          },
          {
            name: "Butterfly",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/butterfly_lg.png",
          },
          {
            name: "Satanic",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/satanic_lg.png",
          },
        ],
      },
    ],
    hard_support: [
      {
        hero: "winter_wyvern",
        summary:
          "Winter’s Curse turns Axe’s Call against his team; Arctic Burn zones fights and slows Axe down.",
        tags: ["counter‑initiation", "area control"],
        skills: [
          {
            name: "Cold Embrace",
            tip: "Negates physical damage during Call combos.",
          },
          {
            name: "Winter’s Curse",
            tip: "Forces Axe’s allies to attack each other while Call is active.",
          },
          {
            name: "Arctic Burn",
            tip: "Slow and harass Axe from range before fights start.",
          },
        ],
        tips: [
          "Cast Winter’s Curse on Call targets, not random heroes.",
          "Use Arctic Burn to kite Axe’s initiation.",
          "Save Cold Embrace for core heroes in the Call fight.",
        ],
        guide: G(
          "Use Arctic Burn to poke Axe before he commits.",
          "Save Winter’s Curse for big teamfights around Call.",
          "Cold Embrace negates Counter Helix trades.",
          "Force Axe to play reactive.",
          "Don’t cast Curse too early before team arrives.",
        ),
        build: [
          {
            name: "Tranquil Boots",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/tranquil_boots_lg.png",
          },
          {
            name: "Glimmer Cape",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/glimmer_cape_lg.png",
          },
          {
            name: "Force Staff",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/force_staff_lg.png",
          },
          {
            name: "Aether Lens",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/aether_lens_lg.png",
          },
          {
            name: "Ghost Scepter",
            img: "https://static.wikia.nocookie.net/dota2_gamepedia/images/9/9d/Ghost_Scepter_icon.png/revision/latest?cb=20160530170557",
          },
          {
            name: "Solar Crest",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/solar_crest_lg.png",
          },
        ],
      },
      {
        hero: "disruptor",
        summary:
          "Glimpse repositions Axe’s initiation badly; Kinetic Field + Static Storm lock him in spells.",
        tags: ["displacement", "zone control"],
        skills: [
          {
            name: "Glimpse",
            tip: "Pull Axe back after he Blinks into Call range.",
          },
          {
            name: "Kinetic Field",
            tip: "Trap Axe inside your spells pre‑fight.",
          },
          {
            name: "Static Storm",
            tip: "Silence Axe inside the chaotic engagement.",
          },
        ],
        tips: [
          "Glimpse Axe after Blink but before Call lands.",
          "Use Field to trap him with your team’s disables.",
          "Static Storm on top of Field for maximum lockdown.",
        ],
        guide: G(
          "Position to see Axe Blink → Glimpse back.",
          "Trap Axe with Field then combo with allies.",
          "Static Storm silence stops Call + spin damage.",
          "Predict Axe’s position early.",
          "Don’t cast Glimpse too late after Call lands.",
        ),
        build: [
          {
            name: "Tranquil Boots",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/tranquil_boots_lg.png",
          },
          {
            name: "Glimmer Cape",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/glimmer_cape_lg.png",
          },
          {
            name: "Force Staff",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/force_staff_lg.png",
          },
          {
            name: "Aether Lens",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/aether_lens_lg.png",
          },
          {
            name: "Ghost Scepter",
            img: "https://static.wikia.nocookie.net/dota2_gamepedia/images/9/9d/Ghost_Scepter_icon.png/revision/latest?cb=20160530170557",
          },
        ],
      },
      {
        hero: "oracle",
        summary:
          "False Promise makes allies unkillable during Call combos and counters Blade Mail damage reflections.",
        tags: ["purge", "save", "counter‑initiation"],
        skills: [
          {
            name: "Purifying Flames",
            tip: "Heals significantly under False Promise if cast early.",
          },
          {
            name: "Fortune’s End",
            tip: "Purge Blade Mail from teammates before fights.",
          },
          {
            name: "False Promise",
            tip: "Makes allies invulnerable through Call + Counter Helix bursts.",
          },
        ],
        tips: [
          "Cast Fortune’s End before Blade Mail reflects damage.",
          "False Promise on cores being focused by Call.",
          "Use Purifying Flames early for big heals under False Promise.",
        ],
        guide: G(
          "Purge Blade Mail before teamfight starts.",
          "Use False Promise on your core on Call engage.",
          "Fortune’s End to slow Axe’s follow‑ups.",
          "Don’t commit Promise too early.",
          "Watch mana for multiple escapes.",
        ),
        build: [
          {
            name: "Tranquil Boots",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/tranquil_boots_lg.png",
          },
          {
            name: "Glimmer Cape",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/glimmer_cape_lg.png",
          },
          {
            name: "Wind Lace",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/wind_lace_lg.png",
          },
          {
            name: "Aether Lens",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/aether_lens_lg.png",
          },
          {
            name: "Force Staff",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/force_staff_lg.png",
          },
          {
            name: "Ghost Scepter",
            img: "https://static.wikia.nocookie.net/dota2_gamepedia/images/9/9d/Ghost_Scepter_icon.png/revision/latest?cb=20160530170557",
          },
        ],
      },
      {
        hero: "shadow_shaman",
        summary:
          "Mass disables (Hex + Shackles) lock Axe before Call engages; Ward damage controls pushes.",
        tags: ["hard disable", "push", "control"],
        skills: [
          {
            name: "Hex",
            tip: "Disable Axe early to prevent Counter Helix trades.",
          },
          {
            name: "Shackles",
            tip: "Long duration lockdown while team focuses Axe.",
          },
          {
            name: "Mass Serpent Ward",
            tip: "Control teamfights and take objectives after Axe initiation.",
          },
        ],
        tips: [
          "Save Hex for Axe’s Blink initiation.",
          "Shackle priority targets in teamfights.",
          "Use wards to secure objectives once Axe is disabled.",
        ],
        guide: G(
          "Lock Axe with Hex before fights begin.",
          "Shackle when Axe tries to escape Call range.",
          "Serpent Wards help push towers safely.",
          "Don’t overextend without vision.",
          "Position wards to control rotations.",
        ),
        build: [
          {
            name: "Tranquil Boots",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/tranquil_boots_lg.png",
          },
          {
            name: "Glimmer Cape",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/glimmer_cape_lg.png",
          },
          {
            name: "Aether Lens",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/aether_lens_lg.png",
          },
          {
            name: "Ghost Scepter",
            img: "https://static.wikia.nocookie.net/dota2_gamepedia/images/9/9d/Ghost_Scepter_icon.png/revision/latest?cb=20160530170557",
          },
          {
            name: "Force Staff",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/force_staff_lg.png",
          },
        ],
      },
      {
        hero: "crystal_maiden",
        summary:
          "Frostbite disables Axe long enough for your team to punish Call; Aura boosts team mana for spells.",
        tags: ["disable", "mana support", "teamfight"],
        skills: [
          {
            name: "Frostbite",
            tip: "Root Axe before he can use Berserker’s Call.",
          },
          {
            name: "Crystal Nova",
            tip: "Slow and damage around initiation points.",
          },
          {
            name: "Freezing Field",
            tip: "High teamfight burst when Axe is locked.",
          },
        ],
        tips: [
          "Cast Frostbite before Axe blinks in.",
          "Nova slows Axe prior to team engagement.",
          "Freezing Field is best chained with team disables.",
        ],
        guide: G(
          "Frostbite interrupts Axe’s setup.",
          "Nova slows to reduce chase potential.",
          "Freezing Field punishes poor positioning.",
          "Dont overcommit when mana is low.",
          "Coordinate Frostbite with teammates.",
        ),
        build: [
          {
            name: "Tranquil Boots",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/tranquil_boots_lg.png",
          },
          {
            name: "Glimmer Cape",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/glimmer_cape_lg.png",
          },
          {
            name: "Aether Lens",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/aether_lens_lg.png",
          },
          {
            name: "Wind Lace",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/wind_lace_lg.png",
          },
          {
            name: "Ghost Scepter",
            img: "https://static.wikia.nocookie.net/dota2_gamepedia/images/9/9d/Ghost_Scepter_icon.png/revision/latest?cb=20160530170557",
          },
        ],
      },
    ],
  },
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
  batrider: {
    carry: [
      {
        hero: "weaver",
        summary:
          "Time Lapse negates Flaming Lasso; mobility and evasion make Batrider unreliable in late game.",
        tags: ["escape", "dispell", "mobility"],
        skills: [
          {
            name: "Shukuchi",
            tip: "Avoid Firefly stacks and reposition instantly during engagements.",
          },
          {
            name: "Time Lapse",
            tip: "Undo Batrider’s initiation or save yourself when lassoed.",
          },
          {
            name: "Geminate Attack",
            tip: "Boost DPS while kiting Firefly stacks.",
          },
        ],
        tips: [
          "Use Time Lapse after Firefly has hit to remove damage & reposition.",
          "Stay mobile — avoid clumped positions that Batrider targets.",
          "Use Shukuchi to chase or escape after Lasso ends.",
        ],
        guide: G(
          "Time Lapse is your defensive core vs Flaming Lasso.",
          "Don’t stand in sticky Napalm stacks — you lose mobility.",
          "Weaver’s armor & evasion outscale magical burst late game.",
          "Use vision to avoid Bat’s deep initiations.",
          "Keep Distance before he commits Firefly.",
        ),
        build: [
          {
            name: "Power Treads",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/power_treads_lg.png",
          },
          {
            name: "Linken's Sphere",
            img: "https://static.wikia.nocookie.net/dota2_gamepedia/images/2/23/Linken%27s_Sphere_icon.png/revision/latest?cb=20160530171144",
          },
          {
            name: "Black King Bar",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/black_king_bar_lg.png",
          },
          {
            name: "Eye of Skadi",
            img: "https://static.wikia.nocookie.net/dota2_gamepedia/images/1/1e/Eye_of_Skadi_icon.png/revision/latest?cb=20160530170315",
          },
          {
            name: "Aghanim's Scepter",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/ultimate_scepter_lg.png",
          },
          {
            name: "Butterfly",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/butterfly_lg.png",
          },
        ],
      },
      {
        hero: "spectre",
        summary:
          "Global presence punishes Bat’s split focus; Haunt helps team reposition and avoid lasso chains.",
        tags: ["global impact", "sustain"],
        skills: [
          {
            name: "Haunt",
            tip: "Join fights instantly to avoid getting isolated by Flaming Lasso.",
          },
          {
            name: "Dispersion",
            tip: "Reflects damage back during chaotic teamfights.",
          },
          { name: "Desolate", tip: "Bonus damage to isolated Bat targets." },
        ],
        tips: [
          "Use Haunt early to avoid being dragged into disadvantage fights.",
          "Focus Bat when his Firefly cooldown is down.",
          "Spectre’s natural tankiness helps you survive intense teamfights.",
        ],
        guide: G(
          "Haunt wards off Bat’s pickoff potential.",
          "Spectre thrives if Bat is forced to chase global heroes.",
          "Dispersion punishes magic heavy engagements.",
          "Position safely and let team initiate.",
          "Don’t be first into sticky Napalm stacks.",
        ),
        build: [
          {
            name: "Phase Boots",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/phase_boots_lg.png",
          },
          {
            name: "Blade Mail",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/blade_mail_lg.png",
          },
          {
            name: "Heart of Tarrasque",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/heart_lg.png",
          },
          {
            name: "Black King Bar",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/black_king_bar_lg.png",
          },
          {
            name: "Abyssal Blade",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/abyssal_blade_lg.png",
          },
          {
            name: "Manta Style",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/manta_lg.png",
          },
        ],
      },
      {
        hero: "juggernaut",
        summary:
          "Omnislash provides massive single-target burst; Blade Fury and healing wards sustain through fights.",
        tags: ["carry", "teamfight"],
        skills: [
          {
            name: "Blade Fury",
            tip: "Use to dodge disables or deal magic damage during engagements.",
          },
          {
            name: "Omnislash",
            tip: "High single-target burst for picking off key enemies in fights.",
          },
          {
            name: "Healing Ward",
            tip: "Sustain your team during prolonged teamfights or sieges.",
          },
        ],
        tips: [
          "Position safely before Omnislash to ensure maximum targets hit.",
          "Use Blade Fury to survive heavy magic damage or disable chains.",
          "Healing Ward placement can turn teamfights in your favor.",
        ],
        guide: G(
          "Omnislash executes priority targets in late-game fights.",
          "Blade Fury avoids disables and magic bursts.",
          "Healing Ward sustains your team during sieges and skirmishes.",
          "Maintain vision to safely engage with Omnislash.",
          "Don't commit Omnislash recklessly on low-value targets.",
        ),
        build: [
          {
            name: "Phase Boots",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/phase_boots_lg.png",
          },
          {
            name: "Battle Fury",
            img: "https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c1/Battle_Fury_icon.png/revision/latest?cb=20160530163833",
          },
          {
            name: "Manta Style",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/manta_lg.png",
          },
          {
            name: "Butterfly",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/butterfly_lg.png",
          },
          {
            name: "Satanic",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/satanic_lg.png",
          },
          {
            name: "Abyssal Blade",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/abyssal_blade_lg.png",
          },
        ],
      },
      {
        hero: "phantom_assassin",
        summary:
          "Evasion and burst damage make Batrider an easy kill once caught; Phantom Strike closes distance quickly.",
        tags: ["carry counter", "burst", "mobility"],
        skills: [
          {
            name: "Stifling Dagger",
            tip: "Harasses Batrider from range and slows him to prevent escape.",
          },
          {
            name: "Phantom Strike",
            tip: "Instantly jumps to Batrider or allies to deliver critical damage.",
          },
          {
            name: "Coup de Grace",
            tip: "High chance to instantly kill Bat in late game teamfights.",
          },
        ],
        tips: [
          "Wait for Bat to commit with Firefly before engaging.",
          "Use Phantom Strike to dodge sticky Napalm stacks.",
          "Focus Bat first in teamfights — he dies fast under burst.",
        ],
        guide: G(
          "Use mobility to dodge Lasso.",
          "Focus Bat in fights; Coup de Grace helps secure kills.",
          "Stay aware of Napalm stacks before diving.",
          "Stifling Dagger for harassment and slow.",
          "Avoid being caught alone; stick with teammates.",
        ),
        build: [
          {
            name: "Power Treads",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/power_treads_lg.png",
          },
          {
            name: "Battle Fury",
            img: "https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c1/Battle_Fury_icon.png/revision/latest?cb=20160530163833",
          },
          {
            name: "Black King Bar",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/black_king_bar_lg.png",
          },
          {
            name: "Satanic",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/satanic_lg.png",
          },
          {
            name: "Monkey King Bar",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/monkey_king_bar_lg.png",
          },
          {
            name: "Butterfly",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/butterfly_lg.png",
          },
        ],
      },
      {
        hero: "slark",
        summary:
          "Dark Pact dispels sticky Napalm; Pounce and Shadow Dance evade Firefly and reposition while sustaining in fights.",
        tags: ["dispell", "survive"],
        skills: [
          {
            name: "Dark Pact",
            tip: "Removes Napalm stacks and negates follow‑up damage.",
          },
          { name: "Pounce", tip: "Escape Firefly and target repositioning." },
          {
            name: "Shadow Dance",
            tip: "Heal and become untargetable during fights.",
          },
        ],
        tips: [
          "Use Dark Pact proactively as Bat stacks Napalm.",
          "Pounce to break Bat’s engagement chain.",
          "Shadow Dance helps survive high burst attempts.",
        ],
        guide: G(
          "Cleanse Napalm and avoid long Firefly stacks.",
          "Keep repositioning with Pounce to avoid focused picks.",
          "Late game Slark counters Bat in sustained fights.",
          "Don’t fight alone when Batrider initiates.",
          "Use Shadow Dance after initial burst.",
        ),
        build: [
          {
            name: "Power Treads",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/power_treads_lg.png",
          },
          {
            name: "Eye of Skadi",
            img: "https://static.wikia.nocookie.net/dota2_gamepedia/images/1/1e/Eye_of_Skadi_icon.png/revision/latest?cb=20160530170315",
          },
          {
            name: "Satanic",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/satanic_lg.png",
          },
          {
            name: "Butterfly",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/butterfly_lg.png",
          },
          {
            name: "Black King Bar",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/black_king_bar_lg.png",
          },
          {
            name: "Abyssal Blade",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/abyssal_blade_lg.png",
          },
        ],
      },
    ],
    hard_support: [
      {
        hero: "oracle",
        summary:
          "False Promise saves allied heroes from Bat’s initiation; Fortune’s End can purge Flaming Lasso and Sticky Napalm.",
        tags: ["save", "purge"],
        skills: [
          {
            name: "False Promise",
            tip: "Makes allies immune during Batrider’s combo.",
          },
          {
            name: "Fortune’s End",
            tip: "Purge Napalm and Flaming Lasso to save teammates.",
          },
          {
            name: "Purifying Flames",
            tip: "Heal smartly under False Promise to keep cores alive.",
          },
        ],
        tips: [
          "Use Fortune’s End to break Napalm stacks before Batrider commits.",
          "False Promise at the right time avoids big pickoffs.",
          "Coordinate heals to maximize False Promise value.",
        ],
        guide: G(
          "Purge lasso or Napalm early with Fortune's End.",
          "False Promise negates big burst from Firefly stacks.",
          "Position safely but within range to save allies.",
          "Don’t blow saves too early.",
          "Always communicate timing with cores.",
        ),
        build: [
          {
            name: "Tranquil Boots",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/tranquil_boots_lg.png",
          },
          {
            name: "Glimmer Cape",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/glimmer_cape_lg.png",
          },
          {
            name: "Force Staff",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/force_staff_lg.png",
          },
          {
            name: "Aether Lens",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/aether_lens_lg.png",
          },
          {
            name: "Guardian Greaves",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/guardian_greaves_lg.png",
          },
        ],
      },
      {
        hero: "vengefulspirit",
        summary:
          "Nether Swap breaks Bat’s lasso or isolates him; Wave of Terror provides vision and armor reduction to punish Bat’s positioning.",
        tags: ["displacement", "vision"],
        skills: [
          {
            name: "Nether Swap",
            tip: "Instantly break Flaming Lasso or swap Bat into danger.",
          },
          {
            name: "Wave of Terror",
            tip: "Gain vision and reduce armor before teamfights.",
          },
          {
            name: "Magic Missile",
            tip: "Reliable disable on Bat to counter his swarm.",
          },
        ],
        tips: [
          "Use Nether Swap to save dragged allies or flip Bat into your team.",
          "Wave of Terror helps set pace of fights before Bat engages.",
          "Coordinate stuns with stun timing from Bat’s Firefly commit.",
        ],
        guide: G(
          "Swap allies out of lasso or Bat into danger.",
          "Use Wave of Terror before fights start.",
          "Magic Missile stops Firefly combos.",
          "Stay with cores to save them early.",
          "Don’t overextend alone vs Bat.",
        ),
        build: [
          {
            name: "Tranquil Boots",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/tranquil_boots_lg.png",
          },
          {
            name: "Glimmer Cape",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/glimmer_cape_lg.png",
          },
          {
            name: "Force Staff",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/force_staff_lg.png",
          },
          {
            name: "Aether Lens",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/aether_lens_lg.png",
          },
          {
            name: "Ghost Scepter",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/ghost_lg.png",
          },
        ],
      },

      {
        hero: "abaddon",
        summary:
          "Aphotic Shield and Borrowed Time can dispel Napalm and Bulldoze through dives, saving allies from Bat’s aggression.",
        tags: ["save", "survive"],
        skills: [
          {
            name: "Aphotic Shield",
            tip: "Cleanse Napalm and provide burst regen for saved cores.",
          },
          {
            name: "Borrowed Time",
            tip: "Negates damage during Bat’s teamfight combos.",
          },
          {
            name: "Curse of Avernus",
            tip: "Slow Batrider and his team to reduce kiting power.",
          },
        ],
        tips: [
          "Cast Aphotic Shield early to prevent build‑up of Napalm stacks.",
          "Use Borrowed Time during heavy Firefly engagements.",
          "Position between cores and Bat’s initiation path.",
        ],
        guide: G(
          "Aphotic Shield removes Napalm and saves allies.",
          "Borrowed Time negates big burst during engagements.",
          "Slow enemies to reduce Bat’s chase power.",
          "Watch cooldowns — borrow at correct timing.",
          "Save allies before Bat commits combos.",
        ),
        build: [
          {
            name: "Tranquil Boots",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/tranquil_boots_lg.png",
          },
          {
            name: "Glimmer Cape",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/glimmer_cape_lg.png",
          },
          {
            name: "Lotus Orb",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/lotus_orb_lg.png",
          },
          {
            name: "Aether Lens",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/aether_lens_lg.png",
          },
          {
            name: "Guardian Greaves",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/guardian_greaves_lg.png",
          },
        ],
      },
      {
        hero: "shadow_demon",
        summary:
          "Disruption saves allies from Flaming Lasso and Firefly; also enables strong counter‑initiations and illusions to absorb sticky Napalm stacks.",
        tags: ["save", "disruption", "illusion pressure"],
        skills: [
          {
            name: "Disruption",
            tip: "Use on lassoed allies to remove them temporarily from damage and break sticky Napalm stacks.",
          },
          {
            name: "Soul Catcher",
            tip: "Amplifies damage against Batrider and his team during bursts.",
          },
          {
            name: "Shadow Poison",
            tip: "Apply stacks to slow and punish Batrider and his team in early fights.",
          },
        ],
        tips: [
          "Disrupt allied cores when Batrider commits Flaming Lasso.",
          "Use illusions from Disruption to soak Firefly damage.",
          "Layer Soul Catcher before major engagements for max damage.",
        ],
        guide: G(
          "Disruption helps save teammates being dragged by Lasso.",
          "Soul Catcher amplifies your team’s damage during fights.",
          "Illusions can absorb heavy Napalm/Firefly stacks.",
          "Don’t use Disruption too early — time it on lasso commits.",
          "Stay behind your cores to maximize save potential.",
        ),
        build: [
          {
            name: "Tranquil Boots",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/tranquil_boots_lg.png",
          },
          {
            name: "Glimmer Cape",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/glimmer_cape_lg.png",
          },
          {
            name: "Aether Lens",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/aether_lens_lg.png",
          },
          {
            name: "Ghost Scepter",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/ghost_lg.png",
          },
          {
            name: "Force Staff",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/force_staff_lg.png",
          },
        ],
      },
      {
        hero: "dazzle",
        summary:
          "Shallow Grave prevents death after Bat’s combo; Poison Touch + Shadow Wave provide sustain and slow during Firefly engagements.",
        tags: ["save", "sustain", "slow"],
        skills: [
          {
            name: "Shallow Grave",
            tip: "Cast on lassoed or focused heroes to keep them alive through the duration.",
          },
          {
            name: "Poison Touch",
            tip: "Slow Batrider’s movement and attack speed in fights.",
          },
          {
            name: "Shadow Wave",
            tip: "Heal allies while damaging nearby enemies during chaotic skirmishes.",
          },
        ],
        tips: [
          "Cast Shallow Grave at the last possible moment to ensure survival.",
          "Use Poison Touch to slow Batrider and his team during engagements.",
          "Use Shadow Wave to sustain your cores while Batrider is committed.",
        ],
        guide: G(
          "Shallow Grave saves teammates from losing HP during Firefly.",
          "Slow Batrider early to reduce his chase potential.",
          "Shadow Wave sustains through heavy Napalm stacks.",
          "Coordinate Grave timing with your team’s frontlines.",
          "Avoid casting Grave too early before Bat commits.",
        ),
        build: [
          {
            name: "Tranquil Boots",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/tranquil_boots_lg.png",
          },
          {
            name: "Glimmer Cape",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/glimmer_cape_lg.png",
          },
          {
            name: "Force Staff",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/force_staff_lg.png",
          },
          {
            name: "Aether Lens",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/aether_lens_lg.png",
          },
          {
            name: "Guardian Greaves",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/guardian_greaves_lg.png",
          },
        ],
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
