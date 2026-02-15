import { useState } from "react";
import { HEROES } from "../data";
import { Icon } from "./Icons";

// ── INLINE GUIDE (expands under each counter row) ────────────────────────────
const GUIDE_KEYS = [
  { key: "powerSpike", label: "Power Spike", GIcon: Icon.Zap, col: "#fbbf24" },
  { key: "skillUsage", label: "Skill Usage", GIcon: Icon.Star, col: "#60a5fa" },
  { key: "positioning", label: "Positioning", GIcon: Icon.Map, col: "#34d399" },
  { key: "trading", label: "Trading", GIcon: Icon.Sword, col: "#f87171" },
  { key: "mistakes", label: "Avoid", GIcon: Icon.Alert, col: "#a78bfa" },
];

export function InlineGuide({ c, D }) {
  const h = HEROES.find((x) => x.id === c.hero);
  const col = h?.color ?? "#888";
  const [tab, setTab] = useState("skills");

  return (
    <div
      style={{
        overflow: "hidden",
        border: `1.5px solid ${col}40`,
        borderRadius: 6,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        background: `linear-gradient(160deg,${col}08 0%,${D.panel} 40%)`,
        boxShadow: `0 4px 28px ${col}14, 0 2px 12px rgba(0,0,0,.3)`,
      }}
    >
      {/* Header: portrait + name + tabs */}
      <div style={{ display: "flex", alignItems: "stretch", gap: 0 }}>
        {/* Title + tabs */}
        <div
          style={{
            flex: 1,
            padding: "14px 16px 12px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 8,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: 8,
            }}
          >
            {/* Tab switcher */}
            <div
              style={{
                display: "flex",
                gap: 3,
                background: D.panel2,
                borderRadius: 8,
                padding: 3,
                border: `1px solid ${D.bdr}`,
                alignSelf: "flex-start",
              }}
            >
              {[
                { id: "skills", label: "Skill Tips", Ic: Icon.Star },
                { id: "guide", label: "Lane Guide", Ic: Icon.Book },
                { id: "build", label: "Best Build", Ic: Icon.Build },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    padding: "6px 14px",
                    borderRadius: 6,
                    cursor: "pointer",
                    border: "none",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: 0.5,
                    background: tab === t.id ? col : "transparent",
                    color: tab === t.id ? "#000" : D.sub,
                    transition: "all .14s",
                  }}
                >
                  <t.Ic />
                  {t.label}
                </button>
              ))}
            </div>

            {/* <button
              className="iconbtn"
              style={{
                color: D.dim,
                padding: "4px 8px",
                borderRadius: 6,
                flexShrink: 0,
                background: "rgba(255,255,255,.05)",
                border: `1px solid ${D.bdr}`,
              }}
            >
              <Icon.Close />
              <span
                style={{
                  fontSize: 11,
                  fontFamily: "'Chakra Petch',sans-serif",
                  letterSpacing: 0.5,
                }}
              >
                Close
              </span>
            </button> */}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: D.bdr }} />

      <div style={{ height: 1, background: D.bdr2 }} />

      {/* Skills tab */}
      {tab === "skills" ? (
        <div style={{ padding: "10px 12px 14px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {c.skills?.map((sk) => (
              <div
                key={sk.name}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  padding: "10px 12px",
                  borderRadius: 8,
                  background: D.panel2,
                  border: `1px solid ${D.bdr2}`,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 2,
                    background: col,
                    flexShrink: 0,
                    marginTop: 4,
                  }}
                />
                <div style={{ flex: 1 }}>
                  <span
                    className="cp"
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: D.txt,
                      letterSpacing: 0.3,
                      display: "block",
                      marginBottom: 4,
                    }}
                  >
                    {sk.name}
                  </span>
                  <p style={{ fontSize: 14, color: D.sub, lineHeight: 1.6 }}>
                    {sk.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Tips */}
          {c.tips?.length > 0 && (
            <div
              style={{
                marginTop: 10,
                padding: "12px 14px",
                borderRadius: 8,
                background: `${col}0b`,
                border: `1px solid ${col}1e`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  marginBottom: 8,
                  color: col,
                }}
              >
                <Icon.Zap />
                <span
                  className="cp"
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                  }}
                >
                  Key Tips
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {c.tips.map((tip, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8,
                    }}
                  >
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: col,
                        flexShrink: 0,
                        marginTop: 6,
                      }}
                    />
                    <p style={{ fontSize: 14, color: D.sub, lineHeight: 1.6 }}>
                      {tip}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : tab === "build" ? (
        <div style={{ padding: "10px 12px 14px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {c.build?.map((item) => (
              <div
                key={item.name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: 60,
                  background: D.panel2,
                  borderRadius: 8,
                  padding: 6,
                  border: `1px solid ${D.bdr2}`,
                }}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ width: 40, height: 40, borderRadius: 4 }}
                />
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: D.txt,
                    textAlign: "center",
                    marginTop: 4,
                  }}
                >
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Guide tab */
        <div
          style={{
            padding: "10px 12px 14px",
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          {GUIDE_KEYS.map((gk) => (
            <div
              key={gk.key}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "10px 12px",
                borderRadius: 8,
                background: D.panel2,
                border: `1px solid ${D.bdr2}`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  flexShrink: 0,
                  paddingTop: 1,
                  minWidth: 96,
                }}
              >
                <span style={{ color: gk.col, display: "flex" }}>
                  <gk.GIcon />
                </span>
                <span
                  className="cp"
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: 0.8,
                    textTransform: "uppercase",
                    color: gk.col,
                    lineHeight: 1.2,
                  }}
                >
                  {gk.label}
                </span>
              </div>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.65,
                  color: D.sub,
                  fontWeight: 400,
                  flex: 1,
                }}
              >
                {c.guide?.[gk.key] ?? "—"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
