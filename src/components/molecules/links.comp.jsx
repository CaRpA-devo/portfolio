import { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";

const socialLinks = [
  // TODO Links einfügen
  {
    icon: "mdi:github",
    url: "https://github.com/CaRpA-devo",
    name: "Github",
    isExternal: true,
  },
  {
    icon: "mdi:linkedin",
    url: "https://www.linkedin.com/in/patrick-salgueiro-1b64a3353",
    name: "LinkedIn",
    isExternal: true,
  },
  { icon: "mdi:school", url: "#skills", name: "Skills", isExternal: false },
];

export function SocialLinks({ className = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref auf das Dropdown
  const timeoutRef = useRef(null); // Ref für den Timer

  // Scroll-Funktion für interne Links
  const handleLinkClick = (e, link) => {
    e.preventDefault(); // Immer preventDefault für bessere Kontrolle

    if (!link.isExternal) {
      // Interne Links: Scroll zur Sektion
      const element = document.getElementById(link.url.substring(1)); // Entferne # aus der URL
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      // Externe Links: Immer mit window.open öffnen
      window.open(link.url, "_blank", "noopener,noreferrer");
    }
    // Schließe das Dropdown nach dem Klick
    setIsOpen(false);
  };

  // Mouse Enter Handler - stelle Timer zurück
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  // Mouse Leave Handler - starte Timer
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300); // 300ms Verzögerung
  };

  // Click Outside Handler
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className={`flex items-center ${className}`}>
      {/* Desktop */}
      <div className="hidden md:flex gap-4 p-2">
        {socialLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target={link.isExternal ? "_blank" : "_self"}
            rel={link.isExternal ? "noopener noreferrer" : ""}
            onClick={(e) => handleLinkClick(e, link)}
            className="rounded-xl transition-transform hover:scale-105 hover:shadow-[0_0_15px_rgba(128,0,255,0.8)] active:scale-105 active:shadow-[0_0_15px_rgba(128,0,255,0.8)] text-cyan-600"
          >
            <Icon icon={link.icon} width="40" height="40" />
          </a>
        ))}
      </div>

      {/* Mobile */}
      <div
        className="md:hidden relative"
        ref={dropdownRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsOpen(true)}
          className="p-2 rounded-2xl text-cyan-600 transition-transform hover:scale-105 hover:shadow-[0_0_15px_rgba(128,0,255,0.8)] active:scale-105 active:shadow-[0_0_15px_rgba(128,0,255,0.8)]"
        >
          <Icon icon="mdi:hamburger-menu" width="40" height="40" />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-gray-900/80 backdrop-blur-md shadow-lg rounded-2xl flex flex-col gap-3 p-4 z-50">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target={link.isExternal ? "_blank" : "_self"}
                rel={link.isExternal ? "noopener noreferrer" : ""}
                onClick={(e) => handleLinkClick(e, link)}
                className="flex items-center rounded-2xl h-12 justify-start gap-2 p-4 transition-transform hover:scale-105 hover:shadow-[0_0_15px_rgba(128,0,255,0.8)] active:scale-105 active:shadow-[0_0_15px_rgba(128,0,255,0.8)] text-cyan-600"
              >
                <Icon icon={link.icon} width="48" height="48" />
                <span className="font-medium text-xl">{link.name}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
