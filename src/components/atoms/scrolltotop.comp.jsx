import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

/**
 * ScrollToTop - Button zum Zurückscrollen nach oben
 * Features: Erscheint nach 300px scrollen, smooth scroll, Hover-Effekte
 */
export function ScrollToTop({ className = "" }) {
  // State für Button-Sichtbarkeit
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll-Event Listener - Zeige Button nach 300px scrollen
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setShowScrollTop(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll nach oben
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showScrollTop) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(128,0,255,0.8)] text-cyan-600 p-2 ${className}`}
      title="Nach oben"
    >
      <Icon icon="mdi:arrow-up" width="32" height="32" />
    </button>
  );
}
