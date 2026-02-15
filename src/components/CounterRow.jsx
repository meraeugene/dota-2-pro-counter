import { useState } from "react";
import { HEROES } from "../data";

// ── COUNTER ROW (step 2 right list) ──────────────────────────────────────────
export function CounterRow({ c, rank, D, active, onToggle, port: PORT }) {
  const h = HEROES.find((x) => x.id === c.hero);
  const col = h?.color ?? "#888";
  const [ok, setOk] = useState(false);
  const [er, setEr] = useState(false);
  return (
    <button
      className="ccard"
      onClick={onToggle}
      style={{
        display: "flex",
        alignItems: "stretch",
        width: "100%",
        textAlign: "left",
        background: active ? `${col}0e` : D.panel,
        border: `1.5px solid ${active ? col + "55" : D.bdr}`,
        borderLeft: `4px solid ${col}`,
        borderRadius: 6,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: active
          ? `0 0 22px ${col}20, 0 4px 16px rgba(0,0,0,.35)`
          : "0 2px 12px rgba(0,0,0,.38)",
      }}
    >
      {/* Portrait */}
      <div
        style={{
          width: 90,
          flexShrink: 0,
          position: "relative",
          overflow: "hidden",
          background: `linear-gradient(180deg,${col}28,${col}10)`,
        }}
      >
        {!er && (
          <img
            className="port"
            src={PORT(h?.dota ?? "")}
            alt={h?.name ?? ""}
            onLoad={() => setOk(true)}
            onError={() => setEr(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              opacity: ok ? 1 : 0,
              transition: "opacity .2s",
            }}
          />
        )}
        {(er || !ok) && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Chakra Petch',sans-serif",
              fontWeight: 700,
              fontSize: 12,
              color: col,
            }}
          >
            {h?.name
              ?.split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 3) ?? "?"}
          </div>
        )}
        {/* rank */}
        <div
          style={{
            position: "absolute",
            top: 7,
            left: 7,
            width: 22,
            height: 22,
            borderRadius: 6,
            background: "rgba(0,0,0,.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Chakra Petch',sans-serif",
            fontWeight: 700,
            fontSize: 11,
            color: col,
            backdropFilter: "blur(4px)",
          }}
        >
          {rank}
        </div>
        {active && (
          <div
            style={{ position: "absolute", inset: 0, background: `${col}1a` }}
          />
        )}
      </div>

      {/* Text */}
      <div style={{ flex: 1, minWidth: 0, padding: "13px 14px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 7,
            marginBottom: 5,
            flexWrap: "wrap",
          }}
        >
          <span
            className="cp"
            style={{
              fontSize: 17,
              fontWeight: 700,
              color: active ? col : D.txt,
              letterSpacing: 0.3,
              transition: "color .12s",
            }}
          >
            {h?.name ?? c.hero}
          </span>
          {c.tags?.slice(0, 2).map((t) => (
            <span
              key={t}
              style={{
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: 1,
                textTransform: "uppercase",
                padding: "2px 7px",
                borderRadius: 20,
                background: `${col}12`,
                color: col,
                border: `1px solid ${col}22`,
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <p
          style={{
            fontSize: 15,
            color: D.sub,
            lineHeight: 1.55,
            fontWeight: 400,
            marginBottom: 10,
          }}
        >
          {c.summary}
        </p>
      </div>
    </button>
  );
}
