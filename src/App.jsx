import "./index.css";
import { useState, useRef, useMemo } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { filterHeroes } from "./utils/filterHeroes";
import { getCounters } from "./utils/getCounters";
import RoleSelector from "./components/RoleSelector";
import HeroPicker from "./components/HeroPicker";
import CounterPicks from "./components/CounterPicks";

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

  const D = {
    bg: "#0d0d0d",
    panel: "#141414",
    panel2: "#1a1a1a",
    bdr: "rgba(255,255,255,0.08)",
    bdr2: "rgba(255,255,255,0.05)",
    txt: "#ededed",
    sub: "#999",
    dim: "#777",
    inp: "#0d0d0d",
  };

  return (
    <>
      <div style={{ minHeight: "100vh", background: D.bg, color: D.txt }}>
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
          {/* ══════════ STEP 0: ROLE SELECT ══════════ */}
          {step === 0 && <RoleSelector pickRole={pickRole} D={D} />}

          {/* ══════════ STEP 1: HERO PICKER ══════════ */}
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

          {/* ══════════ STEP 2: COUNTER PICKS ══════════ */}
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
    </>
  );
}
