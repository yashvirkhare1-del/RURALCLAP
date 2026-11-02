
import logo from "@/assets/ruralclap-logo.png.asset.json";

export function Brand({ className = "h-11" }: { className?: string }) {
  return (
    <span className="inline-flex items-center">
      <img
        src={logo.url}
        alt="RuralClap"
        width={683}
        height={683}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className={`block w-auto max-w-full ${className}`}
      />
    </span>
  );
}
