import { Icon } from "./Icons";
import MiniPortrait from "./MiniPortrait";
import PickerTile from "./PickerTile";

const HeroPicker = ({
  filtered,
  role,
  query,
  setQuery,
  inputRef,
  D,
  step,
  reset,
  backToHeroPicker,
  confirmHero,
  hero,
  PORT,
  setHero,
}) => {
  return (
    <div className="au">
      <div style={{ textAlign: "center", marginBottom: 28 }}>
        <div className="flex items-center gap-2 justify-center ">
          {step >= 1 && role && (
            <>
              <button
                className="iconbtn"
                onClick={reset}
                style={{
                  color: D.dim,
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: 0.5,
                  cursor: "pointer",
                  borderBottom: `1px solid ${D.dim}`, // <-- underline
                }}
              >
                Back to Roles
              </button>

              <span style={{ color: D.dim, fontSize: 14 }}>›</span>
              <span
                className="cp"
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: 0.5,
                  color: role.color,
                }}
              >
                Playing as {role.label}
              </span>
            </>
          )}
          {step === 2 && hero && (
            <>
              <span style={{ color: D.dim, fontSize: 12 }}>›</span>
              <button
                className="iconbtn"
                onClick={backToHeroPicker}
                style={{ color: D.dim, fontSize: 12, fontWeight: 600 }}
              >
                Heroes
              </button>
              <span style={{ color: D.dim, fontSize: 12 }}>›</span>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: hero.color,
                }}
              >
                {hero.name}
              </span>
            </>
          )}
        </div>
        <h2
          className="cp"
          style={{
            fontSize: "clamp(20px,3.5vw,38px)",
            fontWeight: 700,
            color: D.txt,
            letterSpacing: 1,
            marginBottom: 3,
            textTransform: "uppercase",
          }}
        >
          {role.prompt}
        </h2>
        <p className="cp" style={{ fontSize: 15, color: D.sub }}>
          Select a hero to see their best counters in this lane
        </p>
      </div>

      {/* Search */}
      <div style={{ maxWidth: 440, margin: "0 auto 24px" }}>
        <div
          className="search-box"
          style={{
            "--accent": role.color,
            "--bdr": D.bdr,
            background: D.inp,
            boxShadow: "0 2px 18px rgba(0,0,0,.4)",
          }}
        >
          <span style={{ color: D.dim, display: "flex", flexShrink: 0 }}>
            <Icon.Search />
          </span>

          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              const q = e.target.value;
              setQuery(q);

              if (q.trim() && filtered.length > 0) {
                setHero(filtered[0]);
              }
            }}
            placeholder={`Search ${role.enemyRole} heroes…`}
            className="search-input"
            style={{
              color: D.txt,
              fontFamily: "'Mulish',sans-serif",
            }}
          />

          {query && (
            <button
              className="iconbtn"
              onClick={() => {
                setQuery("");
                setHero(null);
                inputRef.current?.focus();
              }}
              style={{ color: D.dim, flexShrink: 0 }}
            >
              <Icon.Close />
            </button>
          )}
        </div>
      </div>

      {/* Hero portrait grid — big, full-width */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(110px,1fr))",
          gap: 12,
          marginBottom: 38,
        }}
      >
        {filtered.map((h) => (
          <PickerTile
            key={h.id}
            h={h}
            selected={hero?.id === h.id}
            D={D}
            onSelect={() => confirmHero(h)}
            port={PORT}
          />
        ))}
        {filtered.length === 0 && query.trim() && (
          <div
            style={{
              gridColumn: "1/-1",
              padding: "32px 0",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: 15, color: D.sub }}>
              No heroes match "{query}"
            </p>
          </div>
        )}
      </div>

      {/* Bottom: selected hero confirm bar */}
      {hero && (
        <div
          className="sd"
          style={{
            position: "sticky",
            bottom: 24,
            maxWidth: 560,
            margin: "0 auto",
            background: "rgba(20,20,20,.95)",
            border: `2px solid ${hero.color}50`,
            borderRadius: 14,
            padding: "12px 16px",
            backdropFilter: "blur(16px)",
            boxShadow: `0 8px 32px ${hero.color}25, 0 4px 16px rgba(0,0,0,.4)`,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          {/* Mini portrait */}
          <MiniPortrait h={hero} size={44} port={PORT} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <p
              className="cp"
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "#98fb98",
                marginBottom: 1,
              }}
            >
              Selected
            </p>
            <p
              className="cp"
              style={{
                fontSize: 17,
                fontWeight: 700,
                color: hero.color,
                letterSpacing: 0.5,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {hero.name}
            </p>
          </div>
          <button
            className="confirm-btn"
            onClick={() => confirmHero(hero)}
            style={{
              "--accent": hero.color,
              padding: "9px 18px",
              borderRadius: 9,
              cursor: "pointer",
              background: hero.color,
              color: "#000",
              border: "none",
              fontFamily: "'Chakra Petch',sans-serif",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 0.5,
              flexShrink: 0,
              boxShadow: `0 4px 14px ${hero.color}50`,
            }}
          >
            SEE COUNTERS →
          </button>
        </div>
      )}
    </div>
  );
};

export default HeroPicker;
