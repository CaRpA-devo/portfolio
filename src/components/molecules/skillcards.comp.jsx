import { useState } from "react";

/**
 * SkillCards - Interaktive Skill-Karten mit Hover-Effekten
 * Features: Hover-Overlay, Touch-optimiert, responsive Design, Prozentzahlen auf Mobile
 */
export function SkillCards({
  title,
  description,
  imageSrc,
  hoverHeight = "100%",
}) {
  // State für Hover-Effekt (Desktop) und Touch-Effekt (Mobile)
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative md:h-50 h-30 w-full md:w-auto flex flex-col justify-end rounded-xl shadow hover:scale-105 hover:shadow-[0_4px_15px_2px_rgba(128,0,255,0.6)] active:scale-105 active:shadow-[0_4px_15px_2px_rgba(128,0,255,0.6)] transition-transform overflow-hidden group"
      onPointerEnter={(event) => {
        if (event.pointerType !== "mouse" && event.pointerType !== "pen") {
          return;
        }
        setHover(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType !== "mouse" && event.pointerType !== "pen") {
          return;
        }
        setHover(false);
      }}
      onPointerDown={(event) => {
        if (event.pointerType !== "touch") {
          return;
        }
        setHover((prev) => !prev);
      }}
    >
      {/* Basis-Bild */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: imageSrc ? `url(${imageSrc})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Invert-Overlay */}
      <div
        className={`absolute inset-0 transition-all duration-700 pointer-events-none`}
        style={{
          backgroundImage: imageSrc ? `url(${imageSrc})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "invert(1)",
          opacity: hover ? 1 : 0,
          transform: hover
            ? `translateY(calc(100% - ${hoverHeight}))`
            : "translateY(100%)",
        }}
      />

      {/* Text-Overlay */}
      <div className="relative bg-black/40 p-2 rounded-b-xl text-center z-20 min-h-[60px] flex flex-col justify-center">
        <h1 className="text-sm md:text-xl font-bold text-cyan-200 break-words">
          {title}
          {/* Prozentzahl auf Mobile immer anzeigen, auf Desktop nur beim Hovern */}
          <span
            className={`ml-1 md:text-cyan-400  text-bold md:text-xl text-sm ${
              hover ? "md:inline" : "md:hidden"
            }`}
          >
            {hoverHeight}
          </span>
        </h1>
        {description && <p className="text-gray-200 text-xs">{description}</p>}
      </div>
    </div>
  );
}
