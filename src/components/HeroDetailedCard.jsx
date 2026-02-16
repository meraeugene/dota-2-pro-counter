import { useState } from "react";
import { Icon } from "./Icons";

export function HeroDetailCard({ h, role, D, onBack, port: PORT }) {
  const [ok, setOk] = useState(false);
  const [er, setEr] = useState(false);
  return (
    <div
      style={{
        borderRadius: 16,

        overflow: "hidden",
        border: `1.5px solid ${h.color}40`,
        background: D.panel,
        boxShadow: `0 0 48px ${h.color}18, 0 8px 32px rgba(0,0,0,.5)`,
      }}
    >
      {/* Full portrait — tall */}
      <div
        style={{
          position: "relative",
          height: "100%",
          overflow: "hidden",
          background: `linear-gradient(160deg,${h.color}35 0%,#080808} 70%)`,
        }}
      >
        {!er && (
          <img
            className="port"
            src={PORT(h.dota)}
            alt={h.name}
            onLoad={() => setOk(true)}
            onError={() => setEr(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 10%",
              opacity: ok ? 1 : 0,
              transition: "opacity .4s",
              filter: "saturate(1.2) contrast(1.05)",
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
              fontSize: 72,
              color: `${h.color}40`,
              letterSpacing: 6,
            }}
          >
            {h.name
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 3)}
          </div>
        )}
        {/* bottom fade */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 140,
            background: `linear-gradient(to top,${D.panel} 0%,transparent 100%)`,
          }}
        />
        {/* glow dot */}
        <div
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            width: 9,
            height: 9,
            borderRadius: "50%",
            background: h.color,
            boxShadow: `0 0 14px ${h.color}`,
          }}
        />
        {/* back button */}
        <button
          className="iconbtn"
          onClick={onBack}
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            padding: "6px 11px",
            borderRadius: 8,
            background: "rgba(0,0,0,.65)",
            border: `1px solid ${D.bdr}`,
            backdropFilter: "blur(12px)",
            color: D.sub,
            fontSize: 12,
            fontWeight: 600,
          }}
        >
          <Icon.Back />
          <span
            style={{
              fontFamily: "'Chakra Petch',sans-serif",
              fontSize: 11,
              letterSpacing: 0.5,
            }}
          >
            Change
          </span>
        </button>
      </div>

      {/* Info block */}
      <div style={{ padding: "12px 20px 22px" }}>
        {/* Enemy role badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 5,
            marginBottom: 10,
            padding: "4px 10px",
            borderRadius: 6,
            background: `${role.color}14`,
            border: `1px solid ${role.color}30`,
          }}
        >
          <span
            className="cp"
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              color: role.color,
            }}
          >
            Enemy {role.enemyRole}
          </span>
        </div>

        {/* Hero name */}
        <h2
          className="cp"
          style={{
            fontSize: "clamp(22px,2.5vw,32px)",
            fontWeight: 700,
            color: h.color,
            letterSpacing: 0.5,
            lineHeight: 1.1,
            marginBottom: 6,
          }}
        >
          {h.name}
        </h2>

        <div style={{ height: 1, background: D.bdr, margin: "12px 0" }} />

        {/* Why this matters */}
        <p
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 2.5,
            textTransform: "uppercase",
            color: D.dim,
            marginBottom: 8,
          }}
        >
          You are playing
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 12px",
            borderRadius: 10,
            background: "rgba(255,255,255,.04)",
            border: `1px solid ${D.bdr}`,
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              flexShrink: 0,
              background: `${role.color}18`,
              border: `1px solid ${role.color}30`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: role.color,
            }}
          >
            <Icon.Shield />
          </div>
          <div>
            <p
              className="cp"
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: role.color,
                letterSpacing: 0.5,
                marginBottom: 1,
              }}
            >
              {role.label}
            </p>
            <p
              style={{
                fontSize: 11,
                color: D.dim,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              {role.sub} · {role.pos}
            </p>
          </div>
        </div>

        <div style={{ height: 1, background: D.bdr, margin: "14px 0" }} />

        <p style={{ fontSize: 14, color: D.sub, lineHeight: 1.7 }}>
          Select a counter pick on the right to view skills and lane strategy.
        </p>
      </div>
    </div>
  );
}
