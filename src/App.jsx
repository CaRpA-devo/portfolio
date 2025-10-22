// CSS Imports
import "./index.css";
import "./App.css";

// React Imports
import { lazy } from "react";

// Statische Imports für kritische Komponenten (sofort geladen)
import { Navbar } from "./components/organisms/navbar.org";
import { Footer } from "./components/organisms/footer.org";
import { Skills } from "./components/organisms/skills.org";
import { Kontakt } from "./components/organisms/kontakt.org";

// Lazy Imports für bessere Performance (werden erst geladen wenn benötigt)
const Hero = lazy(() => import("./components/organisms/hero.org"));
const About = lazy(() => import("./components/organisms/about.org"));
const Projects = lazy(() => import("./components/organisms/projects.org"));

// TODO: Lazy Loading für alle Komponenten und Router implementieren

/**
 * Hauptkomponente der Portfolio-Website
 * Definiert die Struktur der gesamten Website
 */
function App() {
  return (
    <>
      {/* Navigation - Immer sichtbar, sticky positioned */}
      <Navbar />

      {/* Hauptsektion mit animierten FlyingLogos */}
      <Hero />

      {/* Über mich Sektion mit 3D-TiltedCard */}
      <About />

      {/* Skills-Sektion mit interaktiven Technologie-Karten */}
      <Skills />

      {/* Projekte-Swiper mit Portfolio-Beispielen */}
      <Projects />

      {/* Kontaktformular */}
      <Kontakt />

      {/* Footer mit zusätzlichen Informationen */}
      <Footer />
    </>
  );
}

export default App;
