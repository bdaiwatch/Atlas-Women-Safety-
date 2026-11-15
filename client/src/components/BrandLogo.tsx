export function BrandLogo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className={`brand-lockup ${inverted ? "is-inverted" : ""}`}>
      <svg
        className="brand-emblem"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <rect
          width="48"
          height="48"
          rx="13"
          fill={inverted ? "#182967" : "#0F1B4C"}
        />
        <path
          d="M24 7.5L37 13.2V23.6C37 31.8 31.4 38.2 24 41C16.6 38.2 11 31.8 11 23.6V13.2L24 7.5Z"
          fill="#6D1D6B"
          stroke="#D9A441"
          strokeWidth="1.8"
        />
        <circle cx="24" cy="22.5" r="6.5" stroke="#FDFCFE" strokeWidth="1.6" />
        <path
          d="M24 16V29M17.5 22.5H30.5"
          stroke="#D9A441"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <circle cx="24" cy="22.5" r="2.1" fill="#FDFCFE" />
      </svg>
      <span className="brand-text">
        <strong className="brand-title">Women Safety in AI Era</strong>
        <span className="brand-institute">Atlas AI Institute</span>
      </span>
    </span>
  );
}
