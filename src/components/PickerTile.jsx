import { useState } from "react";

const PickerTile = ({ h, selected, D, onSelect, port: PORT }) => {
  const [ok, setOk] = useState(false);
  const [er, setEr] = useState(false);
  return (
    <button
      className={`htile ${selected ? "sel" : ""}`}
      onClick={onSelect}
      style={{
        "--accent": h.color,
        borderRadius: 10,
        overflow: "hidden",
        padding: 0,
        background: D.panel2,
        display: "flex",
        flexDirection: "column",
        outline: "none",
      }}
    >
      <div
        className="htile-img"
        style={{
          height: 82,
          position: "relative",
          overflow: "hidden",
          background: `${h.color}18`,
          transition: "transform .15s ease",
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
              opacity: ok ? 1 : 0,
              transition: "opacity .18s",
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
              fontSize: 28,
              color: h.color,
            }}
          >
            {h.name
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 3)}
          </div>
        )}
        {selected && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `${h.color}28`,
            }}
          />
        )}
      </div>
      <div
        className="htile-name"
        style={{
          padding: "6px 6px 7px",
          textAlign: "center",
          fontSize: 12,
          fontWeight: 700,
          color: selected ? h.color : D.sub,
          fontFamily: "'Chakra Petch',sans-serif",
          letterSpacing: 0.3,
          lineHeight: 1.3,
          transition: "color .12s",
          background: selected ? `${h.color}12` : D.panel2,
          borderTop: `1px solid ${selected ? h.color + "40" : D.bdr2}`,
        }}
      >
        {h.name}
      </div>
    </button>
  );
};

export default PickerTile;
