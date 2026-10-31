"use client";

import { useEffect, useRef } from "react";

// ၃ ကြောင်း — လေယာဉ် ၃ စီး သွားမည့် လမ်းကြောင်းများ
const PATHS = [
  "M6 96 Q 70 58 128 42 T 250 18",
  "M-6 58 Q 62 82 132 98 T 256 74",
  "M18 128 Q 92 138 164 104 T 264 116",
];
const SPEEDS = [0.00011, 0.00008, 0.00013]; // progress per ms
const OFFSETS = [0, 0.45, 0.72];

export default function FlightScene({ className = "" }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const paths = Array.from(
      svg.querySelectorAll<SVGPathElement>("path.flight-dash"),
    );
    const planes = Array.from(
      svg.querySelectorAll<SVGGElement>("g.plane"),
    );
    if (!paths.length || !planes.length) return;

    const lengths = paths.map((p) => p.getTotalLength());

    const place = (elapsed: number) => {
      planes.forEach((g, i) => {
        const p = paths[i];
        if (!p) return;
        const len = lengths[i] || 1;
        const progress = (OFFSETS[i] + elapsed * SPEEDS[i]) % 1;
        const pt = p.getPointAtLength(progress * len);
        g.setAttribute("transform", `translate(${pt.x} ${pt.y})`);
      });
    };

    // initial position (sync) so planes sit on the path immediately
    place(0);

    let raf = 0;
    let start = 0;
    const tick = (t: number) => {
      if (!start) start = t;
      place(t - start);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 270 140"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {PATHS.map((d, i) => (
        <path
          key={i}
          d={d}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="5 8"
          strokeLinecap="round"
          opacity="0.55"
          className="flight-dash"
        />
      ))}
      {PATHS.map((_, i) => (
        <g key={i} className="plane">
          <text
            x="0"
            y="0"
            fontSize="16"
            textAnchor="middle"
            dominantBaseline="central"
          >
            ✈️
          </text>
        </g>
      ))}
    </svg>
  );
}
