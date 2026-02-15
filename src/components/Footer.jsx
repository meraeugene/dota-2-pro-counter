const Footer = ({ D }) => {
  return (
    <footer
      style={{
        borderTop: `1px solid ${D.bdr}`,
        textAlign: "center",
        padding: "16px 24px",
        fontSize: 12,
        color: D.dim,
        fontFamily: "'Mulish',sans-serif",
      }}
    >
      Dota 2 Pro Counter · Patch 7.37e · Not affiliated with Valve Corporation
    </footer>
  );
};

export default Footer;
