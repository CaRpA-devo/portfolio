import { useMemo } from "react";
import { PROJECTS_DATA, PROJECTS_CONFIG } from "../config/projects.config";

/**
 * useProjects Hook - Verwaltung der Projekte-Daten
 *
 * Dieser Custom Hook verwaltet alle Projekte-Daten und bietet Filter- und
 * Suchfunktionen für die Projekte-Sektion. Optimiert durch Memoization.
 *
 * @returns {Object} Projekte-Daten, Konfiguration und Hilfsfunktionen
 */
export function useProjects() {
  // Projekte-Daten memoisieren für bessere Performance
  const projects = useMemo(() => PROJECTS_DATA, []);

  // Konfiguration memoisieren
  const config = useMemo(() => PROJECTS_CONFIG, []);

  // Gefilterte Projekte (z.B. nur Featured)
  const featuredProjects = useMemo(
    () => projects.filter((project) => project.featured),
    [projects]
  );

  // Projekte nach Technologie filtern
  const getProjectsByTechnology = useMemo(
    () => (technology) =>
      projects.filter((project) =>
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(technology.toLowerCase())
        )
      ),
    [projects]
  );

  // Statistiken für Dashboard/Übersicht
  const stats = useMemo(
    () => ({
      total: projects.length,
      featured: featuredProjects.length,
      technologies: [...new Set(projects.flatMap((p) => p.technologies))]
        .length,
    }),
    [projects, featuredProjects]
  );

  return {
    projects,
    featuredProjects,
    config,
    getProjectsByTechnology,
    stats,
  };
}
