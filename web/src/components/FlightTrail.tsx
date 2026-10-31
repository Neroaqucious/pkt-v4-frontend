"use client";

import { useEffect, useRef } from "react";

const SVG_NS = "http://www.w3.org/2000/svg";

const PLANE_PATH =
  "M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z";

type PlaneCfg = {
  fill: string;
  stroke: string;
  strokeWidth: number;
  planeOpacity: number;
  dotColor: string;
  dotOpacity: number;
  durBase: number;
  durRange: number;
  start: { fx: number; fy: number };
};

// ၂ စီး ခဲရောင် + ၁ စီး အဖြူ (ရွှေဘောင်)
const PLANES: PlaneCfg[] = [
  {
    fill: "#6b7280",
    stroke: "none",
    strokeWidth: 0,
    planeOpacity: 0.5,
    dotColor: "#8b9099",
    dotOpacity: 0.5,
    durBase: 15,
    durRange: 5,
    start: { fx: 0.5, fy: 0.5 },
  },
  {
    fill: "#6b7280",
    stroke: "none",
    strokeWidth: 0,
    planeOpacity: 0.5,
    dotColor: "#8b9099",
    dotOpacity: 0.5,
    durBase: 17,
    durRange: 5,
    start: { fx: 0.25, fy: 0.7 },
  },
  {
    fill: "#ffffff",
    stroke: "#d4a843",
    strokeWidth: 1.6,
    planeOpacity: 0.95,
    dotColor: "#d4a843",
    dotOpacity: 0.45,
    durBase: 13,
    durRange: 4,
    start: { fx: 0.75, fy: 0.3 },
  },
];

type Pt = { x: number; y: number };

const cubic = (a: number, b: number, c: number, d: number, t: number) => {
  const mt = 1 - t;
  return mt * mt * mt * a + 3 * mt * mt * t * b + 3 * mt * t * t * c + t * t * t * d;
};
const cubicD = (a: number, b: number, c: number, d: number, t: number) => {
  const mt = 1 - t;
  return 3 * mt * mt * (b - a) + 6 * mt * t * (c - b) + 3 * t * t * (d - c);
};

export default function FlightTrail({
  className = "",
}: {
  className?: string;
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const trailRefs = useRef<Array<SVGGElement | null>>([]);
  const planeRefs = useRef<Array<SVGGElement | null>>([]);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    let w = svg.clientWidth || 800;
    let h = svg.clientHeight || 420;
    svg.setAttribute("viewBox", `0 0 ${w} ${h}`);

    const trails = trailRefs.current;
    const planes = planeRefs.current;

    const rand = (): Pt => ({
      x: 55 + Math.random() * Math.max(1, w - 110),
      y: 55 + Math.random() * Math.max(1, h - 110),
    });

    type State = {
      p0: Pt;
      p1: Pt;
      p2: Pt;
      p3: Pt;
      t0: number;
      dur: number;
      lastDot: number;
    };

    const states: State[] = PLANES.map((p) => ({
      p0: { x: w * p.start.fx, y: h * p.start.fy },
      p1: rand(),
      p2: rand(),
      p3: rand(),
      t0: performance.now(),
      dur: (p.durBase + Math.random() * p.durRange) * 1000,
      lastDot: 0,
    }));

    type Dot = { el: SVGCircleElement; born: number; base: number };
    const dots: Dot[] = [];
    const DOT_LIFE = 2800;

    const spawnDot = (i: number, x: number, y: number, now: number) => {
      const trail = trails[i];
      if (!trail) return;
      const cfg = PLANES[i];
      const el = document.createElementNS(SVG_NS, "circle");
      el.setAttribute("cx", String(x));
      el.setAttribute("cy", String(y));
      el.setAttribute("r", "2.1");
      el.setAttribute("fill", cfg.dotColor);
      el.setAttribute("opacity", String(cfg.dotOpacity));
      trail.appendChild(el);
      dots.push({ el, born: now, base: cfg.dotOpacity });
    };

    let raf = 0;
    const loop = (now: number) => {
      states.forEach((s, i) => {
        let t = (now - s.t0) / s.dur;
        if (t >= 1) {
          s.p0 = s.p3;
          s.p1 = rand();
          s.p2 = rand();
          s.p3 = rand();
          s.t0 = now;
          s.dur =
            (PLANES[i].durBase + Math.random() * PLANES[i].durRange) * 1000;
          t = 0;
        }
        const x = cubic(s.p0.x, s.p1.x, s.p2.x, s.p3.x, t);
        const y = cubic(s.p0.y, s.p1.y, s.p2.y, s.p3.y, t);
        const dx = cubicD(s.p0.x, s.p1.x, s.p2.x, s.p3.x, t);
        const dy = cubicD(s.p0.y, s.p1.y, s.p2.y, s.p3.y, t);
        const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
        planes[i]?.setAttribute(
          "transform",
          `translate(${x.toFixed(2)} ${y.toFixed(2)}) rotate(${angle.toFixed(2)})`,
        );
        if (now - s.lastDot > 60) {
          s.lastDot = now;
          spawnDot(i, x, y, now);
        }
      });

      // fade + remove dots by age (tied to rAF, so no leak when paused)
      for (let k = dots.length - 1; k >= 0; k--) {
        const d = dots[k];
        const age = now - d.born;
        if (age >= DOT_LIFE) {
          d.el.remove();
          dots.splice(k, 1);
        } else {
          d.el.setAttribute(
            "opacity",
            (Math.max(0, 1 - age / DOT_LIFE) * d.base).toFixed(3),
          );
        }
      }

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onResize = () => {
      w = svg.clientWidth || w;
      h = svg.clientHeight || h;
      svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      dots.forEach((d) => d.el.remove());
      dots.length = 0;
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {PLANES.map((_, i) => (
        <g
          key={`trail-${i}`}
          ref={(el) => {
            trailRefs.current[i] = el;
          }}
        />
      ))}
      {PLANES.map((p, i) => (
        <g
          key={`plane-${i}`}
          ref={(el) => {
            planeRefs.current[i] = el;
          }}
        >
          <g transform="rotate(90) scale(1.45) translate(-12,-12)">
            <path
              d={PLANE_PATH}
              fill={p.fill}
              stroke={p.stroke}
              strokeWidth={p.strokeWidth || undefined}
              strokeLinejoin="round"
              opacity={p.planeOpacity}
            />
          </g>
        </g>
      ))}
    </svg>
  );
}
