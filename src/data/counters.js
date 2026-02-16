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
  arc_warden: {
    mid: [
      {
        hero: "storm_spirit",
        summary:
          "Storm Spirit ignores Flux pressure, outpaces Arc’s farm, and kills clones instantly.",
        tags: ["tempo counter", "gap close", "clone punish"],
        skills: [
          {
            name: "Ball Lightning",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/storm_spirit_ball_lightning_lg.png",
            tip: "Instant gap close deletes Arc or Tempest Double before Flux value.",
          },
          {
            name: "Static Remnant",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/storm_spirit_static_remnant_lg.png",
            tip: "One remnant clears clone safely and forces Arc back.",
          },
          {
            name: "Overload",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/storm_spirit_overload_lg.png",
            tip: "Punishes Arc every time he steps up to last hit.",
          },
        ],
        tips: [
          "Abuse level 6 timing — Arc cannot survive zip + remnant.",
          "Kill clone first to remove Spark Wraith spam.",
          "Control runes to starve Arc’s farm.",
        ],
        guide: {
          powerSpike:
            "Storm Spirit hits level 6 → can kill Arc or clone instantly.",
          skillUsage:
            "Use Ball Lightning + Static Remnant combo to delete Tempest Double safely.",
          positioning:
            "Stay out of Flux range; engage from river/jungle angles for surprise.",
          trading:
            "Trade aggressively post-6; avoid extended trades before Spike.",
          mistakes:
            "Overextending without balling out — Arc can counter with Spark Wraith + Flux.",
          fightRole:
            "Initiator and primary kill threat in mid-fights; can solo pick Arc or clone.",
          timing:
            "Bottle + boots timing → rotate to side lanes early; Orchid timing → force kills on Arc before he farms core items; BKB timing → join mid-game fights safely.",
        },
        build: [
          {
            name: "Power Treads",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/power_treads_lg.png",
            tip: "Flexible stat swapping and attack speed — great all‑around boots.",
          },
          {
            name: "Aghanim's Scepter",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/ultimate_scepter_lg.png",
            tip: "Upgrades ultimate for increased mobility and burst damage.",
          },
          {
            name: "Black King Bar",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/black_king_bar_lg.png",
            tip: "Spell immunity for reliable presence in teamfights.",
          },
          {
            name: "Linken's Sphere",
            img: "https://static.wikia.nocookie.net/dota2_gamepedia/images/2/23/Linken%27s_Sphere_icon.png/revision/latest?cb=20160530171144",
            tip: "Blocks single‑target disables and interrupts.",
          },
          {
            name: "Kaya & Sange",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/kaya_and_sange_lg.png",
            tip: "Increases spell damage and durability — great for long fights.",
          },
          {
            name: "Parasma",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/devastator_lg.png",
            tip: "Adds huge intelligence, attack speed, slows enemies, and reduces their magic resistance — strong for hybrid damage builds.",
          },
        ],
      },

      {
        hero: "templar_assassin",
        summary:
          "Refraction blocks Arc’s poke and Psi Blades dominate lane equilibrium.",
        tags: ["lane dominator", "burst"],
        skills: [
          {
            name: "Refraction",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/templar_assassin_refraction_lg.png",
            tip: "Completely blocks Flux + Wraith harassment.",
          },
          {
            name: "Psi Blades",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/templar_assassin_psi_blades_lg.png",
            tip: "Forces Arc off the wave without exposing yourself.",
          },
        ],
        tips: [
          "Hold Refraction charges before committing.",
          "Deny ranged creeps aggressively.",
        ],
        guide: {
          powerSpike:
            "Refraction + Psi Blades level 2–3 overwhelms Arc’s harassment.",
          skillUsage:
            "Use Psi Blades to harass and zone; Refraction to block Flux or Spark Wraith damage.",
          positioning:
            "Stand slightly back to maximize Psi Blade splash but avoid overextension.",
          trading: "Trade aggressively when Arc steps up for last hits.",
          mistakes:
            "Wasting Refraction early leaves you vulnerable to Arc’s poke.",
          fightRole: "Lane dominator; sets tempo and prevents Arc’s safe farm.",
          timing:
            "Early Desolator timing → pressure Arc under tower; Blink Dagger timing → kill clone or rotate to other lanes immediately after securing mid wave.",
        },
        build: [
          {
            name: "Black King Bar",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/black_king_bar_lg.png",
            tip: "Essential spell immunity to survive disables in teamfights.",
          },
          {
            name: "Monkey King Bar",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/monkey_king_bar_lg.png",
            tip: "Ensures hits land against evasion and agile targets.",
          },
          {
            name: "Daedalus",
            img: "https://static.wikia.nocookie.net/dota2_gamepedia/images/2/24/Daedalus_icon.png/revision/latest?cb=20160530165249",
            tip: "Massive critical strike damage for killing cores quickly.",
          },
          {
            name: "Desolator",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/desolator_lg.png",
            tip: "Reduces armor, increasing TA’s physical damage output.",
          },
          {
            name: "Hurricane Pike",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/hurricane_pike_lg.png",
            tip: "Gap closer and defensive repositioning in fights.",
          },
          {
            name: "Swift Blink",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/blink_lg.png",
            tip: "Essential for initiating Refraction combos or escaping danger.",
          },
        ],
      },

      {
        hero: "ember_spirit",
        summary: "Ember Spirit dodges Spark Wraiths and pressures Arc nonstop.",
        tags: ["mobility", "wave clear"],
        skills: [
          {
            name: "Sleight of Fist",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/ember_spirit_sleight_of_fist_lg.png",
            tip: "Dodges Wraiths and harasses safely.",
          },
          {
            name: "Flame Guard",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/ember_spirit_flame_guard_lg.png",
            tip: "Soaks Arc’s magical poke and clears waves fast.",
          },
        ],
        tips: [
          "Push waves and rotate — Arc hates tempo.",
          "Punish clone with chains + sleight.",
        ],
        guide: {
          powerSpike:
            "Level 6–7 Flame Guard + Sleight enables aggressive rotations.",
          skillUsage:
            "Chain Sleight of Fist into Flame Guard for safe trades and wave clear.",
          positioning:
            "Maintain angles to dodge Spark Wraiths and Flux while harassing.",
          trading:
            "Trade only when Flame Guard can absorb poke; avoid full Arc poke before this.",
          mistakes: "Sitting mid passively lets Arc farm uncontested.",
          fightRole: "Secondary initiator; pressures lane and forces Arc out.",
          timing:
            "Maelstrom/BKB timing → rotate to side lanes; force fights immediately post-level 6; join mid rotations to prevent Arc’s Midas timing.",
        },
        build: [
          {
            name: "Phase Boots",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/phase_boots_lg.png",
          },
          {
            name: "Aghanim's Scepter",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/ultimate_scepter_lg.png",
          },
          {
            name: "Black King Bar",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/black_king_bar_lg.png",
          },
          {
            name: "Shiva's Guard",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/shivas_guard_lg.png",
          },
          {
            name: "Spirit Vessel",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/spirit_vessel_lg.png",
          },
          {
            name: "Kaya and Sange",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/kaya_and_sange_lg.png",
          },
        ],
      },

      {
        hero: "queen_of_pain",
        summary: "Constant pressure and kill threat deny Arc safe farm.",
        tags: ["harass", "kill lane"],
        skills: [
          {
            name: "Shadow Strike",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/queenofpain_shadow_strike_lg.png",
            tip: "Sustained damage forces Arc out of lane.",
          },
          {
            name: "Blink",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/queenofpain_blink_lg.png",
            tip: "Dodges Spark Wraiths and Flux.",
          },
        ],
        guide: {
          powerSpike:
            "Levels 3–6 Shadow Strike + Scream allows strong kill pressure.",
          skillUsage:
            "Use Blink to dodge Spark Wraiths or Flux; Shadow Strike to poke Arc or clone.",
          positioning:
            "Stand in safe angles to harass without taking tower damage.",
          trading:
            "Trade when Shadow Strike stacks are up; avoid extended trades without blink safety.",
          mistakes:
            "Ignoring Arc’s clone can backfire if he setups Spark Wraiths.",
          fightRole:
            "Main lane harasser; forces Arc to use regen and play defensively.",
          timing:
            "Shadow Strike + Bottle + Blink → pressure Arc immediately post-wave; rotate to side lanes after level 6 to punish clone or poor positioning.",
        },
        build: [
          {
            name: "Aghanim's Scepter",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/ultimate_scepter_lg.png",
          },
          {
            name: "Black King Bar",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/black_king_bar_lg.png",
          },
          {
            name: "Shiva's Guard",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/shivas_guard_lg.png",
          },
          {
            name: "Linken's Sphere",
            img: "https://static.wikia.nocookie.net/dota2_gamepedia/images/2/23/Linken%27s_Sphere_icon.png/revision/latest?cb=20160530171144",
          },
          {
            name: "Octarine Core",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/octarine_core_lg.png",
          },
          {
            name: "Kaya and Sange",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/kaya_and_sange_lg.png",
          },
        ],
      },

      {
        hero: "puck",
        summary: "Puck clears waves safely and punishes Arc’s immobility.",
        tags: ["control", "wave clear"],
        skills: [
          {
            name: "Illusory Orb",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/puck_illusory_orb_lg.png",
            tip: "Safely clears waves and dodges Spark Wraiths.",
          },
          {
            name: "Dream Coil",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/puck_dream_coil_lg.png",
            tip: "Locks Arc and clone in place — guaranteed kill with follow-up.",
          },
        ],
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
            name: "Mjolnir",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/mjollnir_lg.png",
          },
          {
            name: "Aghanim's Scepter",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/ultimate_scepter_lg.png",
          },
          {
            name: "Overwhelming Blink",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/overwhelming_blink_lg.png",
          },
          {
            name: "Parasma",
            img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/devastator_lg.png",
          },
        ],

        guide: {
          powerSpike:
            "Level 6 Dream Coil opens kill potential on Arc or Tempest Double.",
          skillUsage:
            "Use Orb + Coil to control Arc; clear waves and rotate safely.",
          positioning:
            "Stay at orb distance to avoid Flux; Coil for zone control in fights.",
          trading:
            "Trade when Arc steps forward to last hit — Orb + auto-attacks poke safely. Avoid trading under Spark Wraiths or near tower.",
          mistakes:
            "Overextending mid without Orb escape can lead to counter-kills.",
          fightRole:
            "Utility and control in mid-fights; zone Arc and clone during engagements.",
          timing:
            "Orchid/Blink/Level 6 Coil → rotate to side lanes; join mid rotations and control jungle; punish Arc when clone is exposed.",
        },
      },
    ],
  },
};
