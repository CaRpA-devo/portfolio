import React from "react";

// Präsentationskomponente: erwartet Daten/Steuerung über Props
const FlyingLogos = ({ flyingLogos, animationStarted, onToggle }) => {
  return (
    <>
      {/* Fliegende Logos - absolut positioniert über der Hero */}
      <div className="absolute inset-0 pointer-events-none ">
        {flyingLogos.map((logo) => (
          <div
            key={logo.id}
            className={`absolute bg-gradient-to-r ${logo.color} rounded-lg shadow-lg backdrop-blur-sm border border-white/20 flex items-center justify-center text-white font-bold text-sm transform transition-transform hover:scale-110 flying-logo`}
            style={{
              width: `${logo.size}px`,
              height: `${logo.size * 0.6}px`,
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
            }}
          >
            {/* Hier fügst du später deine Logos ein */}
            {logo.name}

            {/* Beispiel für ein echtes Logo:
            <img 
              src="/path/to/your/logo.png" 
              alt={logo.name}
              className="w-full h-full object-contain p-2"
            />
            */}
          </div>
        ))}
      </div>

      {/* Start/Stop Toggle Button - absolut positioniert */}
      <div className="w-full flex justify-start mt-auto absolute bottom-32 left-32">
        <button
          onClick={onToggle}
          className={`px-8 py-4 backdrop-blur-md cursor-pointer z-10 btn-primary rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
            animationStarted
              ? "bg-blue-200/20 border-blue-400/30 text-white hover:bg-blue-500/30"
              : "bg-blue-500/20 border-blue-400/30 text-white hover:bg-blue-500/30"
          }`}
        >
          {animationStarted ? "Move Back" : "Dont´t Push !"}
        </button>
      </div>

      {/* Keyframes ausgelagert nach src/styles/animations.css */}
    </>
  );
};

export default FlyingLogos;
