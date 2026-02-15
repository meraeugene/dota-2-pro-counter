import { ROLES } from "../data";
import { Icon } from "./Icons";

const RoleSelector = ({ pickRole, D }) => {
  return (
    <div className="au">
      <div style={{ textAlign: "center", marginBottom: 44 }}>
        <p
          className="cp"
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: D.dim,
            marginBottom: 10,
          }}
        >
          Lane Counter Intelligence · 7.37e
        </p>
        <h1
          className="cp"
          style={{
            fontSize: "clamp(28px,5vw,56px)",
            fontWeight: 700,
            lineHeight: 1.06,
            marginBottom: 12,
            color: D.txt,
          }}
        >
          SELECT YOUR ROLE
        </h1>
        <p
          className="cp"
          style={{
            fontSize: 15,
            color: D.sub,
            maxWidth: 360,
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          Choose your position to get targeted counter picks with detailed lane
          guides{" "}
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
          gap: 16,
          margin: "0 auto",
        }}
      >
        {ROLES.map((r, i) => (
          <button
            key={r.id}
            className="rbtn au"
            onClick={() => pickRole(r)}
            style={{
              "--accent": r.color,
              textAlign: "center",
              padding: "22px 18px",
              borderRadius: 14,
              cursor: "pointer",
              background: D.panel,
              border: `1px solid ${D.bdr}`,
              animationDelay: `${i * 50}ms`,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                marginBottom: 16,
                background: `${r.color}18`,
                border: `1px solid ${r.color}30`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
                color: r.color,
              }}
            >
              {i === 0 ? (
                <Icon.Sword />
              ) : i === 1 ? (
                <Icon.Target />
              ) : i === 2 ? (
                <Icon.Shield />
              ) : i === 3 ? (
                <Icon.Zap />
              ) : (
                <Icon.Book />
              )}
            </div>

            <div
              className="cp"
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: D.txt,
                marginBottom: 3,
                letterSpacing: 0.5,
                lineHeight: 1.1,
              }}
            >
              {r.label}
            </div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: D.dim,
                marginBottom: 16,
              }}
            >
              {r.sub}
            </div>
            <div
              className="cp"
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                display: "inline-block",
                padding: "2px 6px",
                borderRadius: 3,
                marginBottom: 10,
                background: `${r.color}14`,
                color: r.color,
                border: `1px solid ${r.color}28`,
              }}
            >
              {r.pos}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RoleSelector;
