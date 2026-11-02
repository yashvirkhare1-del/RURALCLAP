import logo from "@/assets/ruralclap-logo.png.asset.json";

/** The uploaded RuralClap circular logo, unchanged apart from a transparent circular crop. */
export function Brand({ className = "h-11" }: { className?: string }) {
  return (
    <span className="inline-flex items-center">
      <img src={logo.url} alt="RuralClap" width={683} height={683} className={`block w-auto max-w-full ${className}`} />
    </span>
  );
}

