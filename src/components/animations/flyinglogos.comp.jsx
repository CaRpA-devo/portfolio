import React from "react";
import { Button } from "../atoms/button.comp";

// Präsentationskomponente: erwartet Daten/Steuerung über Props
const FlyingLogos = ({ flyingLogos, animationStarted, onToggle }) => {
  return (
    <>
      {/* Fliegende Logos - absolut positioniert über der Hero */}
      <div className="absolute inset-0 pointer-events-none ">
        {flyingLogos.map((logo) => (
          <div
            key={logo.id}
            className={`absolute flex items-center rounded-4xl justify-center flying-logo`}
            style={{
              width: `${logo.size}px`,
              height: `${logo.size}px`,
              // CSS-Variablen für generischen Keyframe
              "--start-x": `${logo.startX}px`,
              "--start-y": `${logo.startY}px`,
              "--mid-x": `${(logo.startX + logo.endX) / 2}px`,
              "--mid-y": `${(logo.startY + logo.endY) / 2 + logo.curve}px`,
              "--end-x": `${logo.endX}px`,
              "--end-y": `${logo.endY}px`,
              "--start-rot": `${logo.rotation}deg`,
              "--mid-rot": `${logo.rotation + 180}deg`,
              "--end-rot": `${logo.rotation + 360}deg`,
              animationDuration: `${logo.duration}s`,
              animationDelay: `${logo.delay}s`,
              animationFillMode: "both",
              // initial unsichtbar am Startpunkt, 3D-Transform für GPU-Beschleunigung
              transform: `translate3d(${logo.startX}px, ${logo.startY}px, 0) rotate(${logo.rotation}deg)`,
              opacity: 0,
              // GPU-Beschleunigung für bessere Performance
              willChange: "transform, opacity",
            }}
          >
            {/* Logo-Bild anzeigen, falls vorhanden */}
            {logo.src ? (
              <img
                loading="lazy"
                src={logo.src}
                alt={logo.alt || logo.name}
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback: zeige Gradient-Hintergrund wenn Bild nicht lädt
                  e.target.style.display = "none";
                  e.target.parentElement.className += ` bg-gradient-to-r ${
                    logo.color || "from-gray-500 to-gray-600"
                  } flex items-center justify-center font-bold text-xs text-white`;
                  e.target.parentElement.textContent = logo.name;
                }}
              />
            ) : (
              /* Fallback für Logos ohne Bild: Gradient-Hintergrund mit Text */
              <div
                className={`w-full h-full bg-gradient-to-r ${logo.color} flex items-center justify-center font-bold text-xs text-white`}
              >
                {logo.name}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Start/Stop Toggle Button - absolut positioniert */}
      <div className="w-full flex justify-start mt-auto absolute bottom-32 left-32">
        <Button
          onClick={() => {
            if (animationStarted) {
              // Seite neu laden, wenn Animation läuft / "Move back !"
              window.location.reload();
            } else {
              // sonst normal toggeln
              onToggle();
            }
          }}
          className="opacity-80"
        >
          {animationStarted ? "Move back !" : "Click Me !"}
        </Button>
      </div>
    </>
  );
};

export default FlyingLogos;
