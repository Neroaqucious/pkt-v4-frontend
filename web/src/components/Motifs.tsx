export function Fuji({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 120"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 120 L70 45 L95 66 L120 25 L145 66 L170 45 L240 120 Z"
        fill="currentColor"
      />
      <path
        d="M120 25 L120 52 L129 60 L120 68 L111 60 L120 52 Z"
        fill="#fff"
        opacity="0.85"
      />
    </svg>
  );
}

export function WaveDivider({ className = "" }: { className?: string }) {
  return <div className={`seigaiha w-full ${className}`} aria-hidden="true" />;
}
