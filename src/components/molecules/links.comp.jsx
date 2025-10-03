import { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";

const socialLinks = [
  // TODO Links einfügen
  { icon: "mdi:github", url: "#", name: "Github" },
  { icon: "mdi:linkedin", url: "#", name: "LinkedIn" },
  { icon: "mdi:xing", url: "#", name: "Xing" },
];

export function SocialLinks({ className = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref auf das Dropdown

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
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl transition-transform hover:scale-105 hover:shadow-[0_0_15px_rgba(128,0,255,0.8)] text-cyan-400"
          >
            <Icon icon={link.icon} width="40" height="40" />
          </a>
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-2xl text-cyan-400 transition-transform hover:scale-105 hover:shadow-[0_0_15px_rgba(128,0,255,0.8)]"
        >
          <Icon icon="mdi:hamburger-menu" width="40" height="40" />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-gray-900/80 backdrop-blur-md shadow-lg rounded-2xl flex flex-col gap-3 p-4 z-50">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-2xl h-12 justify-start gap-2 p-4 transition-transform hover:scale-105 hover:shadow-[0_0_15px_rgba(128,0,255,0.8)] text-cyan-400"
                onClick={() => setIsOpen(false)} // schließt Dropdown bei Klick auf Link
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
