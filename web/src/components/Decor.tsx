export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 12"
      className={className}
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M2 7 Q 11 2, 20 7 T 38 7 T 56 7 T 74 7 T 92 7 T 110 7 T 128 7"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Blob({
  className = "",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <path
        fill={color}
        d="M47.8,-67.3C61.5,-59.1,72,-45.2,77.6,-29.8C83.2,-14.3,84,2.7,79.5,18.2C75,33.7,65.2,47.7,52.3,58.6C39.4,69.5,23.4,77.4,6.5,80.1C-10.4,82.8,-28.2,80.4,-42.3,72C-56.4,63.6,-66.9,49.2,-73.1,33.3C-79.2,17.4,-81,-0.1,-77.2,-16.3C-73.4,-32.5,-64,-47.4,-50.7,-55.9C-37.4,-64.4,-20.2,-66.5,-2.9,-63.3C14.4,-60.1,34.1,-75.5,47.8,-67.3Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

export function FlightPath({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 170 84" className={className} fill="none" aria-hidden="true">
      <path
        d="M8 68 Q 46 60 80 38 T 144 10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeDasharray="5 7"
        strokeLinecap="round"
        className="flight-dash"
        opacity="0.6"
      />
      <path
        d="M16 78 Q 52 70 86 50 T 150 26"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeDasharray="4 9"
        strokeLinecap="round"
        className="flight-dash-slow"
        opacity="0.35"
      />
      <text x="130" y="18" fontSize="22" transform="rotate(-20 138 14)">
        ✈️
      </text>
    </svg>
  );
}

export function SakuraBranch({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 820"
      preserveAspectRatio="xMinYMid meet"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <g id="sk-flower">
          <ellipse cx="0" cy="-13" rx="8" ry="15" fill="#f3b6c4" />
          <ellipse cx="0" cy="-13" rx="8" ry="15" fill="#f3b6c4" transform="rotate(72)" />
          <ellipse cx="0" cy="-13" rx="8" ry="15" fill="#f3b6c4" transform="rotate(144)" />
          <ellipse cx="0" cy="-13" rx="8" ry="15" fill="#f3b6c4" transform="rotate(216)" />
          <ellipse cx="0" cy="-13" rx="8" ry="15" fill="#f3b6c4" transform="rotate(288)" />
          <circle cx="0" cy="0" r="4" fill="#d9698a" />
        </g>
      </defs>

      {/* soft bokeh */}
      <g fill="#f3b6c4" opacity="0.28">
        <circle cx="60" cy="630" r="34" />
        <circle cx="120" cy="690" r="22" />
        <circle cx="210" cy="730" r="28" />
        <circle cx="40" cy="480" r="20" />
        <circle cx="280" cy="340" r="16" />
      </g>

      {/* branch + twigs */}
      <g stroke="#6b4a3a" strokeWidth="6" strokeLinecap="round" fill="none">
        <path d="M40 810 C60 690 80 580 130 480 C170 410 210 360 245 285" />
        <path d="M100 570 C70 530 52 495 42 445" />
        <path d="M135 475 C180 470 220 455 262 425" />
        <path d="M200 385 C210 345 232 315 268 292" />
        <path d="M172 430 C150 405 128 378 108 352" />
        <path d="M70 650 C50 620 38 590 30 560" />
      </g>

      {/* blossoms */}
      <use href="#sk-flower" transform="translate(245 285) rotate(15) scale(1.35)" />
      <use href="#sk-flower" transform="translate(130 480) rotate(-10) scale(1.2)" />
      <use href="#sk-flower" transform="translate(262 425) rotate(30) scale(1)" />
      <use href="#sk-flower" transform="translate(108 352) rotate(-20) scale(0.85)" />
      <use href="#sk-flower" transform="translate(42 445) rotate(10) scale(0.9)" />
      <use href="#sk-flower" transform="translate(200 505) rotate(5) scale(0.8)" />
      <use href="#sk-flower" transform="translate(72 600) rotate(-15) scale(0.75)" />

      {/* buds */}
      <g fill="#e88aa0">
        <ellipse cx="268" cy="292" rx="6" ry="9" />
        <ellipse cx="215" cy="382" rx="5" ry="8" />
        <ellipse cx="152" cy="560" rx="5" ry="8" />
        <ellipse cx="92" cy="442" rx="5" ry="8" />
      </g>

      {/* falling petals */}
      <g fill="#f3b6c4" opacity="0.85">
        <ellipse cx="200" cy="625" rx="5" ry="8" transform="rotate(30 200 625)" />
        <ellipse cx="262" cy="685" rx="5" ry="8" transform="rotate(-20 262 685)" />
        <ellipse cx="150" cy="725" rx="5" ry="8" transform="rotate(50 150 725)" />
        <ellipse cx="300" cy="565" rx="4" ry="7" transform="rotate(15 300 565)" />
        <ellipse cx="120" cy="300" rx="4" ry="7" transform="rotate(-30 120 300)" />
      </g>
    </svg>
  );
}
