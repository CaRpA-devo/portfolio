import React, { useState, useEffect } from "react";

const HeroSection = () => {
  // Platzhalter-Logos - du ersetzt diese mit deinen echten Logos
  const logoData = [
    { name: "TechCorp", color: "from-blue-500 to-purple-600" },
    { name: "StartupX", color: "from-green-500 to-teal-600" },
    { name: "DesignHub", color: "from-pink-500 to-rose-600" },
    { name: "CodeLab", color: "from-yellow-500 to-orange-600" },
    { name: "InnovateNow", color: "from-indigo-500 to-blue-600" },
    { name: "CreativeFlow", color: "from-purple-500 to-pink-600" },
    { name: "NextGen", color: "from-cyan-500 to-blue-600" },
    { name: "FutureCorp", color: "from-emerald-500 to-green-600" },
    { name: "PixelPro", color: "from-red-500 to-pink-600" },
    { name: "DataDrive", color: "from-slate-500 to-gray-600" },
    { name: "CloudFirst", color: "from-sky-500 to-cyan-600" },
    { name: "AppForge", color: "from-violet-500 to-purple-600" },
  ];

  const [flyingLogos, setFlyingLogos] = useState([]);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  // Generiere zufällige Logo-Positionen und Animationen
  const generateRandomLogo = () => {
    const randomLogo = logoData[Math.floor(Math.random() * logoData.length)];

    return {
      id: Math.random(),
      ...randomLogo,
      // Zufällige Startposition (links außerhalb des Bildschirms, aber nicht oben links)
      startX: -150,
      startY: Math.random() * (window.innerHeight - 200) + 100, // Mindestens 100px vom Rand
      // Zufällige Endposition (rechts außerhalb des Bildschirms)
      endX: window.innerWidth + 150,
      endY: Math.random() * (window.innerHeight - 200) + 100, // Mindestens 100px vom Rand
      // Zufällige Animation-Dauer
      duration: Math.random() * 8 + 12, // 12-20 Sekunden
      // Zufällige Verzögerung
      delay: Math.random() * 5,
      // Zufällige Größe
      size: Math.random() * 40 + 60, // 60-100px
      // Zufällige Rotation
      rotation: Math.random() * 360,
      // Zufällige Bewegungskurve
      curve: Math.random() * 200 - 100, // -100 bis 100px Abweichung
      createdAt: Date.now(),
    };
  };

  // Toggle Animation (Start/Stop)
  const toggleLogoAnimation = () => {
    if (animationStarted) {
      // Stop Animation
      setAnimationStarted(false);
      setFlyingLogos([]);
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
    } else {
      // Start Animation
      setAnimationStarted(true);

      // Erstelle initial logos
      const initialLogos = Array.from({ length: 15 }, generateRandomLogo);
      setFlyingLogos(initialLogos);

      // Kontinuierlich neue Logos hinzufügen
      const interval = setInterval(() => {
        setFlyingLogos((current) => {
          // Entferne alte Logos (die bereits durchgeflogen sind)
          const filtered = current.filter(
            (logo) =>
              Date.now() - logo.createdAt < (logo.duration + logo.delay) * 1000
          );

          // Füge neue Logos hinzu
          const newLogos = Array.from({ length: 2 }, generateRandomLogo);

          return [...filtered, ...newLogos].slice(-20); // Maximal 20 Logos gleichzeitig
        });
      }, 3000); // Alle 3 Sekunden neue Logos

      setIntervalId(interval);
    }
  };

  // Cleanup
  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return (
    <>
      {/* Fliegende Logos - absolut positioniert über der Hero */}
      <div className="absolute inset-0 pointer-events-none ">
        {flyingLogos.map((logo) => (
          <div
            key={logo.id}
            className={`absolute bg-gradient-to-r ${logo.color} rounded-lg shadow-lg backdrop-blur-sm border border-white/20 flex items-center justify-center text-white font-bold text-sm transform transition-transform hover:scale-110`}
            style={{
              width: `${logo.size}px`,
              height: `${logo.size * 0.6}px`,
              animation: `flyRandom${logo.id.toString().slice(-3)} ${
                logo.duration
              }s ease-in-out ${logo.delay}s infinite`,
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
          onClick={toggleLogoAnimation}
          className={`px-8 py-4 backdrop-blur-md cursor-pointer z-10 btn-primary rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
            animationStarted
              ? "bg-blue-200/20 border-blue-400/30 text-white hover:bg-blue-500/30"
              : "bg-blue-500/20 border-blue-400/30 text-white hover:bg-blue-500/30"
          }`}
        >
          {animationStarted ? "Move Back" : "Dont´t Push !"}
        </button>
      </div>

      {/* Dynamic CSS für Animationen */}
      <style jsx>{`
        ${flyingLogos
          .map(
            (logo) => `
          @keyframes flyRandom${logo.id.toString().slice(-3)} {
            0% {
              transform: translate(${logo.startX}px, ${logo.startY}px) rotate(${
              logo.rotation
            }deg);
              opacity: 0;
            }
            10% {
              opacity: 0.8;
            }
            50% {
              transform: translate(${(logo.startX + logo.endX) / 2}px, ${
              (logo.startY + logo.endY) / 2 + logo.curve
            }px) rotate(${logo.rotation + 180}deg);
              opacity: 1;
            }
            90% {
              opacity: 0.8;
            }
            100% {
              transform: translate(${logo.endX}px, ${logo.endY}px) rotate(${
              logo.rotation + 360
            }deg);
              opacity: 0;
            }
          }
        `
          )
          .join("\n")}
      `}</style>
    </>
  );
};

export default HeroSection;
