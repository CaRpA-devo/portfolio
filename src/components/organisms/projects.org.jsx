import React from "react";

// Komponenten Imports
import { ProjectsHeader } from "../atoms/projectsheader.comp";
import { ProjectsSwiper } from "../molecules/projectsswiper.comp";

// Custom Hook für Projekte-Daten
import { useProjects } from "../../hooks/useProjects";

/**
 * Projects-Sektion - Zeigt Portfolio-Projekte in einem Swiper
 * Features: Responsive Swiper, Projekt-Karten, Statistiken
 */
export default function Projects() {
  // Hook für Projekte-Daten und Statistiken
  const { stats } = useProjects();

  return (
    <section id="projekte" className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ProjectsHeader />

        {/* Swiper Container */}
        <ProjectsSwiper />

        {/* Optional: Statistiken */}
        <div className="mt-8 text-center text-lime-100 text-sm">
          {stats.total} Projekte • {stats.featured} Featured •{" "}
          {stats.technologies} Technologien
        </div>
      </div>
    </section>
  );
}
