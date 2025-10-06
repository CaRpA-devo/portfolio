import { useState } from "react";

export function SkillCards({
  title,
  description,
  imageSrc,
  hoverHeight = "100%",
}) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative h-40 flex flex-col justify-end rounded-xl shadow hover:scale-105 transition-transform overflow-hidden group"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
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
      <div className="relative bg-black/40 p-2 rounded-b-xl text-center z-20">
        <h1 className="text-xl font-bold text-cyan-200">{title}</h1>
        {description && <p className="text-gray-200">{description}</p>}
      </div>
    </div>
  );
}
