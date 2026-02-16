import { useState } from "react";
import { HEROES } from "../data";
import { Icon } from "./Icons";

// ── INLINE GUIDE (expands under each counter row) ────────────────────────────
const GUIDE_KEYS = [
  { key: "powerSpike", label: "Power Spike", GIcon: Icon.Zap, col: "#fbbf24" }, // yellow
  { key: "skillUsage", label: "Skill Usage", GIcon: Icon.Star, col: "#60a5fa" }, // blue
  { key: "positioning", label: "Positioning", GIcon: Icon.Map, col: "#34d399" }, // green
  {
    key: "trading",
    label: "Trading",
    GIcon: Icon.CrossedSwords,
    col: "#a78bfa",
  }, // purple
  { key: "fightRole", label: "Fight Role", GIcon: Icon.Sword, col: "#f97316" }, // orange
  { key: "timing", label: "Timing", GIcon: Icon.Clock, col: "#8b5cf6" }, // violet
  { key: "mistakes", label: "Avoid", GIcon: Icon.Alert, col: "#ef4444" }, // red
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
                { id: "build", label: "Item Build", Ic: Icon.Build },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  onMouseEnter={(e) => {
                    if (tab !== t.id) {
                      e.currentTarget.style.background = `${col}22`;
                      e.currentTarget.style.color = col;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (tab !== t.id) {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = D.sub;
                    }
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "6px 14px",
                    borderRadius: 6,
                    cursor: "pointer",
                    border: "none",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: 0.5,
                    background: tab === t.id ? col : "transparent",
                    color: tab === t.id ? "#000" : D.sub,
                    transition: "all .14s ease",
                  }}
                >
                  <t.Ic />
                  {t.label}
                </button>
              ))}
            </div>
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
                {sk.img ? (
                  <img
                    src={sk.img}
                    alt={sk.name}
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 6,
                      objectFit: "cover",
                      flexShrink: 0,
                      border: `1px solid ${D.bdr2}`,
                      background: "#000",
                      boxShadow: `0 0 8px ${col}66`,
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 2,
                      background: col,
                      flexShrink: 0,
                      marginTop: 6,
                    }}
                  />
                )}
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

          {/* Note */}
          <div
            style={{
              marginTop: 8,
              fontSize: 10,
              color: D.sub,
              fontStyle: "italic",
              textAlign: "center",
            }}
          >
            Items are based on <strong>Dota 2 Pro Tracker</strong> data
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
                  color: "#f5f5f5",
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
