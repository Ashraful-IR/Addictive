import { Flame } from "lucide-react";

const SpiceLevel = ({ level, max = 5 }) => (
  <div className="flex items-center gap-0.5 spice-indicator">
    {Array.from({ length: max }).map((_, i) => (
      <Flame
        key={i}
        className={`w-4 h-4 transition-all duration-300 ${
          i < level ? "text-primary spice-flame-active" : "text-muted-foreground/30"
        }`}
        style={i < level ? { animationDelay: `${i * 120}ms` } : undefined}
      />
    ))}
  </div>
);

export default SpiceLevel;
