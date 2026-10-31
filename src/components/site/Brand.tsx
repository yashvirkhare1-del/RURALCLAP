import logo from "@/assets/ruralclap-logo.png";

/** The original uploaded RuralClap horse-and-farmer logo, unchanged. */
export function Brand({ className = "h-11" }: { className?: string }) {
  return (
    <span className="inline-flex items-center">
      <img src={logo} alt="RuralClap" width={500} height={548} className={`block w-auto max-w-full ${className}`} />
    </span>
  );
}
