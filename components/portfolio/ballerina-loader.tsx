export function BallerinaLoader({ label }: { label: string }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-4 bg-background/85 backdrop-blur-sm"
    >
      <div className="ballerina-bob">
        <svg
          viewBox="0 0 100 140"
          className="ballerina-spin h-36 w-28 text-primary"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="50" cy="12" r="4" fill="currentColor" stroke="none" />
          <circle cx="50" cy="22" r="7" fill="currentColor" stroke="none" />
          <path d="M50 29 L50 58" />
          <g className="ballerina-arm-left">
            <path d="M50 36 Q 40 46 34 54" />
          </g>
          <g className="ballerina-arm-right">
            <path d="M50 36 Q 60 46 66 54" />
          </g>
          <path
            d="M28 66 Q 34 56 50 57 Q 66 56 72 66 L 66 64 L 61 68 L 55 64 L 50 68 L 45 64 L 39 68 L 34 64 Z"
            fill="currentColor"
            fillOpacity="0.35"
          />
          <path d="M50 66 L50 102 L50 128" />
          <g className="ballerina-leg">
            <path d="M50 66 L50 100 L50 124" />
          </g>
        </svg>
      </div>
      <p className="font-serif text-lg italic text-foreground">
        {'Dancing over to '}
        <span className="text-primary">{label}</span>
        {'...'}
      </p>
    </div>
  )
}
