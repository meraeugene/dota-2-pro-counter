import { CounterRow } from "./CounterRow";
import { HeroDetailCard } from "./HeroDetailedCard";
import { InlineGuide } from "./InlineGuide";

const CounterPicks = ({
  hero,
  role,
  D,
  counters,
  guideC,
  setGuideC,
  backToHeroPicker,
  PORT,
  guidePanelRef,
}) => {
  return (
    <div
      className="au"
      style={{
        display: "grid",
        gridTemplateColumns: "320px 1fr",
        gap: 16,
        alignItems: "start",
        position: "sticky",
        top: 90,
      }}
    >
      {/* ══ LEFT: ENEMY HERO DETAIL (sticky) ══ */}
      <div style={{ position: "sticky", top: 76 }}>
        <HeroDetailCard
          h={hero}
          role={role}
          D={D}
          onBack={backToHeroPicker}
          port={PORT}
        />
      </div>

      {/* ══ RIGHT: COUNTER PICKS LIST ══ */}
      <div>
        {/* Section heading */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 14,
          }}
        >
          <div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: D.dim,
                marginBottom: 3,
              }}
            >
              Best {role.label} picks
            </p>
            <h3
              className="cp"
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: D.txt,
                letterSpacing: 0.5,
                lineHeight: 1,
              }}
            >
              COUNTER PICKS
            </h3>
          </div>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 1.5,
              padding: "5px 11px",
              borderRadius: 6,
              background: D.panel2,
              color: "#fff",
              border: `1px solid ${D.bdr}`,
            }}
          >
            {counters.length} PICKS
          </span>
        </div>

        {counters.length === 0 ? (
          <div
            style={{
              background: D.panel,
              border: `1px solid ${D.bdr}`,
              borderRadius: 14,
              padding: 48,
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: 14, color: D.sub }}>
              No counter data for this matchup yet.
            </p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {counters.map((c, i) => (
              <div key={c.hero + i}>
                <CounterRow
                  c={c}
                  rank={i + 1}
                  D={D}
                  onToggle={() => {
                    setGuideC(guideC === i ? null : i);
                  }}
                  port={PORT}
                />
                {/* Inline guide expands directly under clicked row */}
                {/* {guideC === i && ( */}
                <div
                  ref={guidePanelRef}
                  className="sd"
                  style={{ marginTop: 4 }}
                >
                  <InlineGuide
                    c={c}
                    role={role}
                    enemy={hero}
                    D={D}
                    onClose={() => setGuideC(null)}
                  />
                </div>
                {/* )} */}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CounterPicks;
