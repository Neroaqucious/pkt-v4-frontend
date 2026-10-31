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
