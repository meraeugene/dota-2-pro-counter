const Header = ({ D }) => {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(18px)", // frosted glass blur
        WebkitBackdropFilter: "blur(18px)", // for Safari
        background: "rgba(13, 13, 13, 0.6)", // semi-transparent
        borderBottom: `1px solid ${D.bdr}`,
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)", // subtle shadow
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          height: 52,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left: logo + breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <a
            href="/"
            className="cp"
            style={{
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: 2,
              color: D.txt,
            }}
          >
            DOTA 2 PRO COUNTER
          </a>

          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: 2,
              padding: "2px 7px",
              borderRadius: 3,
              background: "rgba(255,255,255,0.06)", // faint glassy pill
              color: D.dim,
              border: `1px solid ${D.bdr}`,
            }}
          >
            7.37e
          </span>
        </div>
        {/* Right: patch + theme */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            className="cp"
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 2,
              color: D.txt,
              textTransform: "uppercase",
            }}
          >
            Developed by Andrew Villalon
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
