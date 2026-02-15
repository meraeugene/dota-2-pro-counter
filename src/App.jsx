import "./index.css";
import { useState, useRef, useMemo } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { filterHeroes } from "./utils/filterHeroes";
import { getCounters } from "./utils/getCounters";
import RoleSelector from "./components/RoleSelector";
import HeroPicker from "./components/HeroPicker";
import CounterPicks from "./components/CounterPicks";
import DotaBackground from "./components/DotaBackground";

// ── CDN ──────────────────────────────────────────────────────────────────────
const PORT = (id) =>
  `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${id}.png`;

// ── APP ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [step, setStep] = useState(0);
  const [role, setRole] = useState(null);
  const [query, setQuery] = useState("");
  const [hero, setHero] = useState(null);
  const [guideC, setGuideC] = useState(null);
  const inputRef = useRef(null);
  const guidePanelRef = useRef(null);

  const filtered = useMemo(
    () => (role ? filterHeroes(role.id, query) : []),
    [role, query],
  );

  const counters = useMemo(
    () => (!role || !hero ? [] : getCounters(hero.id, role.id)),
    [role, hero],
  );

  function pickRole(r) {
    setRole(r);
    setQuery("");
    setHero(null);
    setGuideC(null);
    setStep(1);
  }
  function confirmHero(h) {
    setHero(h);
    setQuery("");
    setGuideC(null);
    setStep(2);
  }
  function backToHeroPicker() {
    setStep(1);
    setGuideC(null);
    setQuery("");
    setHero(null);
  }
  function reset() {
    setStep(0);
    setRole(null);
    setQuery("");
    setHero(null);
    setGuideC(null);
  }

  // ── Updated design tokens — deep teal/forest theme ──────────────────────
  const D = {
    bg: "transparent", // let DotaBackground show through
    panel: "rgba(12,22,18,0.75)", // glass-forest panels
    panel2: "rgba(10,18,15,0.65)",
    bdr: "rgba(0,200,150,0.12)", // teal borders
    bdr2: "rgba(0,200,150,0.07)",
    txt: "#e8f0ec", // slightly warm white
    sub: "#8ab09a", // muted sage
    dim: "#5a7a68",
    inp: "rgba(8,16,12,0.80)",
    accent: "#00c896", // arcane teal
    gold: "#c8a020", // Dota gold
  };

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          background: "#060c0e" /* solid fallback */,
          color: D.txt,
          position: "relative",
        }}
      >
        {/* Atmospheric Dota background */}
        <DotaBackground />

        {/* All content sits above the background */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <Header
            D={D}
            step={step}
            reset={reset}
            role={role}
            hero={hero}
            backToHeroPicker={backToHeroPicker}
          />

          <main
            style={{
              maxWidth: 1100,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minHeight: "100vh",
              margin: "0 auto",
              padding: "32px 24px 80px",
            }}
          >
            {step === 0 && <RoleSelector pickRole={pickRole} D={D} />}

            {step === 1 && role && (
              <HeroPicker
                filtered={filtered}
                role={role}
                query={query}
                setQuery={setQuery}
                inputRef={inputRef}
                D={D}
                step={step}
                reset={reset}
                backToHeroPicker={backToHeroPicker}
                confirmHero={confirmHero}
                hero={hero}
                PORT={PORT}
                setHero={setHero}
              />
            )}

            {step === 2 && role && hero && (
              <CounterPicks
                hero={hero}
                role={role}
                D={D}
                counters={counters}
                guideC={guideC}
                setGuideC={setGuideC}
                backToHeroPicker={backToHeroPicker}
                PORT={PORT}
                guidePanelRef={guidePanelRef}
              />
            )}
          </main>

          <Footer D={D} />
        </div>
      </div>
    </>
  );
}
