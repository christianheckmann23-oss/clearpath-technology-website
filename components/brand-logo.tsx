/* Horizontal CirroFlow wordmark rendered inline so the text picks up the
   site's real Inter webfont (an SVG loaded via <img> can't load webfonts).
   idSuffix keeps gradient/filter ids unique when the logo appears more than
   once on a page (nav + footer). */
export function BrandLogo({ idSuffix = "" }: { idSuffix?: string }) {
  const blue = `cf-blue${idSuffix}`;
  const glow = `cf-glow${idSuffix}`;
  return (
    <svg viewBox="85 150 1210 255" width={266} height={56} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={blue} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4F8CFF" />
          <stop offset="0.55" stopColor="#2563EB" />
          <stop offset="1" stopColor="#1D4ED8" />
        </linearGradient>
        <filter id={glow} x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="0 0 0 0 0.08  0 0 0 0 0.32  0 0 0 0 1  0 0 0 .35 0"
            result="glowOut"
          />
          <feMerge>
            <feMergeNode in="glowOut" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g transform="translate(95 116) scale(.62)" filter={`url(#${glow})`}>
        <path
          d="M95 295 C63 292 38 267 38 234 C38 200 66 172 101 172 C109 120 153 80 207 80 C260 80 304 119 315 169 C346 171 373 185 392 207"
          fill="none"
          stroke={`url(#${blue})`}
          strokeWidth="46"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M86 430 L240 238 L333 238 L190 430 Z" fill={`url(#${blue})`} />
        <path d="M252 430 L364 238 L449 238 L344 430 Z" fill={`url(#${blue})`} opacity="0.95" />
        <path
          d="M311 236 C371 235 426 220 475 190 C454 222 427 247 389 263 C358 276 327 280 298 280 Z"
          fill={`url(#${blue})`}
        />
        <path d="M234 430 L364 238" stroke="#05070A" strokeWidth="24" strokeLinecap="round" opacity="0.92" />
      </g>
      <line x1="450" y1="165" x2="450" y2="435" stroke="#FFFFFF" strokeOpacity=".22" strokeWidth="2" />
      <text
        x="515"
        y="300"
        fill="#FFFFFF"
        fontFamily="Inter, Arial, Helvetica, sans-serif"
        fontSize="112"
        fontWeight="800"
        letterSpacing="-4"
      >
        CirroFlow
      </text>
      <text
        x="525"
        y="382"
        fill="#2F6DF6"
        fontFamily="Inter, Arial, Helvetica, sans-serif"
        fontSize="37"
        fontWeight="800"
        letterSpacing="16"
      >
        TECHNOLOGY PARTNERS
      </text>
    </svg>
  );
}
