/*
  Hand-drawn flat vector marks for each product, in brand navy / orange / cream.
  Pass `kind` = "suite" | "hub" | "channel".
*/
const NAVY = "var(--color-brand-navy)";
const ORANGE = "var(--color-brand-orange)";
const CREAM = "var(--color-brand-cream)";

function SuiteVector() {
  return (
    <>
      {/* invoice sheet */}
      <rect x="22" y="12" width="62" height="86" rx="8" fill={CREAM} stroke={NAVY} strokeWidth="3" />
      <rect x="32" y="24" width="22" height="6" rx="3" fill={NAVY} />
      <rect x="62" y="24" width="12" height="6" rx="3" fill={ORANGE} />
      <rect x="32" y="40" width="42" height="3.5" rx="1.75" fill={NAVY} opacity=".35" />
      <rect x="32" y="49" width="34" height="3.5" rx="1.75" fill={NAVY} opacity=".35" />
      <rect x="32" y="58" width="40" height="3.5" rx="1.75" fill={NAVY} opacity=".35" />
      <line x1="32" y1="70" x2="74" y2="70" stroke={NAVY} strokeWidth="2" strokeDasharray="3 3" opacity=".5" />
      <rect x="32" y="77" width="18" height="6" rx="3" fill={NAVY} />
      <rect x="56" y="77" width="18" height="6" rx="3" fill={ORANGE} />
      {/* paid seal */}
      <circle cx="88" cy="88" r="20" fill={ORANGE} stroke={NAVY} strokeWidth="3" />
      <path d="M79 88.5l6 6 12-13" fill="none" stroke={CREAM} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}

function HubVector() {
  return (
    <>
      {/* campaign board */}
      <rect x="10" y="18" width="88" height="66" rx="9" fill={CREAM} stroke={NAVY} strokeWidth="3" />
      <rect x="18" y="28" width="20" height="4" rx="2" fill={NAVY} opacity=".5" />
      <rect x="44" y="28" width="20" height="4" rx="2" fill={NAVY} opacity=".5" />
      <rect x="70" y="28" width="20" height="4" rx="2" fill={NAVY} opacity=".5" />
      <rect x="18" y="38" width="20" height="14" rx="3" fill={NAVY} />
      <rect x="18" y="56" width="20" height="14" rx="3" fill={NAVY} opacity=".25" />
      <rect x="44" y="38" width="20" height="14" rx="3" fill={ORANGE} />
      <rect x="70" y="38" width="20" height="14" rx="3" fill={NAVY} opacity=".25" />
      <rect x="70" y="56" width="20" height="14" rx="3" fill={NAVY} />
      {/* megaphone badge */}
      <circle cx="90" cy="88" r="20" fill={ORANGE} stroke={NAVY} strokeWidth="3" />
      <path d="M80 85v7h4l10 6V79l-10 6z" fill={CREAM} stroke={NAVY} strokeWidth="2" strokeLinejoin="round" />
      <path d="M98 84c2 2 2 6 0 8" fill="none" stroke={NAVY} strokeWidth="2.5" strokeLinecap="round" />
    </>
  );
}

function ChannelVector() {
  return (
    <>
      {/* main chat bubble */}
      <path d="M14 22a10 10 0 0 1 10-10h52a10 10 0 0 1 10 10v32a10 10 0 0 1-10 10H40l-14 12V64h-2a10 10 0 0 1-10-10z" fill={NAVY} />
      <circle cx="36" cy="38" r="4.5" fill={CREAM} />
      <circle cx="50" cy="38" r="4.5" fill={CREAM} />
      <circle cx="64" cy="38" r="4.5" fill={ORANGE} />
      {/* reply bubble */}
      <path d="M48 66a8 8 0 0 1 8-8h42a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8h-4v10l-12-10H56a8 8 0 0 1-8-8z" fill={CREAM} stroke={NAVY} strokeWidth="3" />
      <rect x="57" y="69" width="30" height="4" rx="2" fill={NAVY} opacity=".5" />
      <rect x="57" y="78" width="20" height="4" rx="2" fill={NAVY} opacity=".3" />
      <path d="M86 80l3 3 6-7M91 80l3 3 6-7" fill="none" stroke={ORANGE} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* team avatars */}
      <circle cx="18" cy="96" r="9" fill={ORANGE} stroke={NAVY} strokeWidth="3" />
      <circle cx="33" cy="96" r="9" fill={CREAM} stroke={NAVY} strokeWidth="3" />
    </>
  );
}

const MAP = { suite: SuiteVector, hub: HubVector, channel: ChannelVector };

export default function ProductVector({ kind, className = "", title }) {
  const Art = MAP[kind] || SuiteVector;
  return (
    <svg viewBox="0 0 120 120" className={className} role={title ? "img" : undefined} aria-hidden={title ? undefined : true}>
      {title ? <title>{title}</title> : null}
      <Art />
    </svg>
  );
}
