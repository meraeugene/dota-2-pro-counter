import { useState } from "react";

const MiniPortrait = ({ h, size = 44, port: PORT }) => {
  const [ok, setOk] = useState(false);
  const [er, setEr] = useState(false);
  return (
    <div
      style={{
        width: size,
        height: Math.round(size * 0.75),
        borderRadius: 6,
        overflow: "hidden",
        flexShrink: 0,
        background: `${h.color}22`,
        border: `1px solid ${h.color}40`,
        position: "relative",
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
            fontSize: size * 0.14,
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
    </div>
  );
};

export default MiniPortrait;
