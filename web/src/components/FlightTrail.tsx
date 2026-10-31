"use client";

import { useEffect, useRef } from "react";

const SVG_NS = "http://www.w3.org/2000/svg";

/**
 * GSAP MotionPath + fading dotted airplane trail (background decoration).
 * Adapted from the user's snippet to work as a contained, subtle hero background.
 */
export default function FlightTrail({
  className = "",
}: {
  className?: string;
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const trailRef = useRef<SVGGElement>(null);
  const planeRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const trailContainer = trailRef.current;
    const airplane = planeRef.current;
    if (!svg || !trailContainer || !airplane) return;

    let cancelled = false;
    let cleanup: (() => void) | undefined;

    (async () => {
      // dynamic import keeps GSAP out of SSR
      const gsapModule = (await import("gsap")) as {
        gsap?: unknown;
        default?: unknown;
      };
      const gsap = (gsapModule.gsap ?? gsapModule.default) as typeof import("gsap").gsap;
      const mpModule = (await import("gsap/MotionPathPlugin")) as {
        MotionPathPlugin?: unknown;
        default?: unknown;
      };
      const MotionPathPlugin = (mpModule.MotionPathPlugin ??
        mpModule.default) as Parameters<typeof gsap.registerPlugin>[0];

      gsap.registerPlugin(MotionPathPlugin);
      if (cancelled) return;

      let w = svg.clientWidth || 800;
      let h = svg.clientHeight || 420;
      svg.setAttribute("viewBox", `0 0 ${w} ${h}`);

      let currentPos = { x: w / 2, y: h / 2 };

      const getRandomPoint = (padding = 55) => ({
        x: padding + Math.random() * Math.max(1, w - padding * 2),
        y: padding + Math.random() * Math.max(1, h - padding * 2),
      });

      const generatePath = () => {
        const p1 = currentPos;
        const p2 = getRandomPoint();
        const p3 = getRandomPoint();
        const p4 = getRandomPoint();
        const d = `M ${p1.x},${p1.y} C ${p1.x + (p2.x - p1.x) * 0.5},${
          p1.y + (p2.y - p1.y) * 0.5
        } ${p2.x - (p3.x - p2.x) * 0.5},${p2.y - (p3.y - p2.y) * 0.5} ${
          p3.x
        },${p3.y} S ${p4.x - (p4.x - p3.x) * 0.5},${
          p4.y - (p4.y - p3.y) * 0.5
        } ${p4.x},${p4.y}`;
        currentPos = p4;
        return d;
      };

      let spawnTimer = 0;
      const createFadingDot = () => {
        const x = Number(gsap.getProperty(airplane, "x")) || 0;
        const y = Number(gsap.getProperty(airplane, "y")) || 0;
        const dot = document.createElementNS(SVG_NS, "circle");
        dot.setAttribute("cx", String(x));
        dot.setAttribute("cy", String(y));
        dot.setAttribute("r", "2.4");
        dot.setAttribute("fill", "#c41e24");
        dot.setAttribute("opacity", "0.5");
        trailContainer.appendChild(dot);
        gsap.to(dot, {
          opacity: 0,
          scale: 0.3,
          duration: 1.8,
          ease: "power2.out",
          onComplete: () => dot.remove(),
        });
      };

      let active = true;
      const startFlight = () => {
        if (!active) return;
        const pathD = generatePath();
        const duration = 6 + Math.random() * 2;
        spawnTimer = window.setInterval(createFadingDot, 60);
        gsap.to(airplane, {
          duration,
          ease: "power1.inOut",
          motionPath: {
            path: pathD,
            autoRotate: true,
            alignOrigin: [0.5, 0.5],
          },
          onComplete: () => {
            window.clearInterval(spawnTimer);
            startFlight();
          },
        });
      };
      startFlight();

      const onResize = () => {
        w = svg.clientWidth || w;
        h = svg.clientHeight || h;
        svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
        currentPos = { x: w / 2, y: h / 2 };
      };
      window.addEventListener("resize", onResize);

      cleanup = () => {
        active = false;
        window.clearInterval(spawnTimer);
        window.removeEventListener("resize", onResize);
        gsap.killTweensOf(airplane);
        trailContainer.innerHTML = "";
      };
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g ref={trailRef} />
      <g ref={planeRef}>
        <path d="M -12,-10 L 16,0 L -12,10 L -5,0 Z" fill="#c41e24" opacity="0.75" />
      </g>
    </svg>
  );
}
