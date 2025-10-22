import { useState, useEffect } from "react";

// Inspirierende Zitate für den Footer
const quotes = [
  "Code ist wie Magie, aber echt.",
  "Kaffee + Code = perfekte Kombination.",
  "Iss. Schlaf. Code. Wiederhole.",
  "Debugging ist mein Cardio.",
  "Code ist Poesie, geschrieben in Logik.",
  "Träume bauen, eine Zeile Code nach der anderen.",
  "Kreativität trifft auf Logik in jeder Funktion.",
  "Möge dein Code immer kompilieren.",
  "Zauberer wirken keine Magie, sie schreiben Code.",
  "Jeder Bug ist eine Lektion.",
  "Ctrl + S ist mein Schutzzauber.",
];

/**
 * FooterText - Rotierende Zitate im Footer
 * Features: Auto-Rotation alle 4 Sekunden, responsive Design, Glow-Effekt
 */
export function FooterText() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 4000); // alle 4 Sekunden wechseln

    return () => clearInterval(interval); // Cleanup beim Unmount
  }, []);

  return (
    <p className="text-center text-cyan-600 text-lg md:text-xl font-semibold mt-8 transition-all  drop-shadow-[0_0_15px_cyan]">
      {quotes[quoteIndex]}
    </p>
  );
}
