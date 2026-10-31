import logo from "@/assets/ruralclap-logo.png";

/** Small, simple green brand symbol (house + check) — not the full horse artwork. */
export function BrandMark({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={className}>
      <rect width="32" height="32" rx="9" className="fill-primary" />
      <path d="M16 8.5 7.5 15h2.4v8.2a1 1 0 0 0 1 1h10.2a1 1 0 0 0 1-1V15h2.4L16 8.5Z" className="fill-primary-foreground" />
      <path d="m12.9 18.6 2.2 2.2 4-4.4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="stroke-primary" />
    </svg>
  );
}

/** Clean text wordmark for the navbar. */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <BrandMark className="size-8" />
      <span className="font-display text-xl font-black uppercase tracking-tight">
        Rural<span className="text-primary">Clap</span>
      </span>
    </span>
  );
}

/** Full original logo artwork — used in the footer only. */
export function Brand({ className = "h-11" }: { className?: string }) {
  return (
    <span className="inline-flex items-center">
      <img src={logo} alt="RuralClap" width={500} height={548} className={`w-auto ${className}`} />
    </span>
  );
}
