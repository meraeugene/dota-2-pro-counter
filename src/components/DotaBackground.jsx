// ── BACKGROUND COMPONENT ─────────────────────────────────────────────────────
function DotaBackground() {
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* ── Base deep-forest gradient ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse 120% 80% at 15% 110%, #0a1f12 0%, transparent 60%),
            radial-gradient(ellipse 90% 70% at 85% 0%,   #0c1a24 0%, transparent 55%),
            radial-gradient(ellipse 100% 100% at 50% 50%, #0b1118 0%, #060c0e 100%)
          `,
        }}
      />

      {/* ── Arcane teal/cyan atmospheric glow (top-right) ── */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "70vw",
          height: "70vh",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,200,180,0.09) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* ── Emerald jungle glow (bottom-left) ── */}
      <div
        style={{
          position: "absolute",
          bottom: "-15%",
          left: "-10%",
          width: "65vw",
          height: "65vh",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(20,160,80,0.10) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* ── Golden arcane orb (center-top) ── */}
      <div
        style={{
          position: "absolute",
          top: "-5%",
          left: "38%",
          width: "35vw",
          height: "40vh",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(200,150,30,0.06) 0%, transparent 65%)",
          filter: "blur(50px)",
        }}
      />

      {/* ── Subtle rune grid overlay ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0,200,160,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,200,160,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* ── Diagonal light streak (top-left to center) ── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, rgba(0,220,170,0.04) 0%, transparent 40%)",
        }}
      />

      {/* ── Bottom vignette ── */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "35vh",
          background:
            "linear-gradient(to top, rgba(4,8,10,0.85) 0%, transparent 100%)",
        }}
      />

      {/* ── Top vignette ── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "25vh",
          background:
            "linear-gradient(to bottom, rgba(4,8,10,0.60) 0%, transparent 100%)",
        }}
      />

      {/* ── Floating particle dots (arcane motes) ── */}
      {[
        {
          top: "12%",
          left: "8%",
          size: 2,
          opacity: 0.35,
          delay: "0s",
          dur: "8s",
        },
        {
          top: "28%",
          left: "22%",
          size: 1,
          opacity: 0.25,
          delay: "1.5s",
          dur: "11s",
        },
        {
          top: "45%",
          left: "5%",
          size: 2,
          opacity: 0.2,
          delay: "3s",
          dur: "9s",
        },
        {
          top: "68%",
          left: "15%",
          size: 1,
          opacity: 0.3,
          delay: "0.5s",
          dur: "13s",
        },
        {
          top: "80%",
          left: "35%",
          size: 2,
          opacity: 0.18,
          delay: "2s",
          dur: "10s",
        },
        {
          top: "18%",
          left: "75%",
          size: 1,
          opacity: 0.28,
          delay: "4s",
          dur: "12s",
        },
        {
          top: "55%",
          left: "88%",
          size: 2,
          opacity: 0.22,
          delay: "1s",
          dur: "7s",
        },
        {
          top: "72%",
          left: "70%",
          size: 1,
          opacity: 0.32,
          delay: "2.5s",
          dur: "14s",
        },
        {
          top: "35%",
          left: "95%",
          size: 2,
          opacity: 0.2,
          delay: "0s",
          dur: "10s",
        },
        {
          top: "90%",
          left: "60%",
          size: 1,
          opacity: 0.26,
          delay: "3.5s",
          dur: "9s",
        },
      ].map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background:
              i % 3 === 0 ? "#4de8c2" : i % 3 === 1 ? "#c8a020" : "#60d890",
            opacity: p.opacity,
            animation: `float ${p.dur} ${p.delay} ease-in-out infinite alternate`,
            boxShadow: `0 0 ${p.size * 3}px currentColor`,
          }}
        />
      ))}

      {/* ── CSS keyframes injected inline ── */}
      <style>{`
        @keyframes float {
          0%   { transform: translateY(0px) scale(1); }
          100% { transform: translateY(-18px) scale(1.4); }
        }
      `}</style>
    </div>
  );
}

export default DotaBackground;
