export function DividerFlourish({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 text-saddle/70 ${className}`}
      aria-hidden
    >
      <span className="h-px w-16 bg-current opacity-50" />
      <svg
        viewBox="0 0 60 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-14 text-current"
      >
        <path
          d="M2 12 C 12 4, 22 20, 30 12 C 38 4, 48 20, 58 12"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="30" cy="12" r="1.5" fill="currentColor" />
      </svg>
      <span className="h-px w-16 bg-current opacity-50" />
    </div>
  );
}
