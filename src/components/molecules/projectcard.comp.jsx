import { Icon } from "@iconify/react";
import { PROJECTS_CONFIG } from "../../config/projects.config";

/**
 * ProjectCard - Projekt-Karte für Portfolio-Swiper
 * Features: Hover-Effekte, Live Demo/GitHub Links, Technologie-Tags, Featured Badge
 */
export function ProjectCard({ project }) {
  const { card } = PROJECTS_CONFIG;

  return (
    <div
      className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-105"
      style={{
        height: card.height,
        boxShadow: `0 4px 15px 2px ${
          project.featured ? "rgba(128,0,255,0.5)" : "rgba(128,0,255,0.3)"
        }`,
      }}
    >
      {/* Projekt-Bild */}
      <ProjectImage project={project} />

      {/* Projekt-Info */}
      <ProjectInfo project={project} />
    </div>
  );
}

/**
 * ProjectImage - Projekt-Bild mit Fallback und Featured Badge
 */
function ProjectImage({ project }) {
  return (
    <div className="relative h-48 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
        onError={(e) => {
          // Fallback-Bild wenn Projekt-Bild nicht lädt
          e.target.src =
            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23374151'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%236b7280' font-family='Arial' font-size='16'%3EProjekt Bild%3C/text%3E%3C/svg%3E";
        }}
      />

      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Featured
        </div>
      )}

      {/* Overlay mit Links */}
      <ProjectOverlay project={project} />
    </div>
  );
}

/**
 * ProjectOverlay - Hover-Overlay mit Live Demo und GitHub Links
 */
function ProjectOverlay({ project }) {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition-colors flex items-center gap-2"
        >
          <Icon icon="mdi:open-in-new" width="16" height="16" />
          Live Demo
        </a>
      )}
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors flex items-center gap-2"
        >
          <Icon icon="mdi:github" width="16" height="16" />
          GitHub
        </a>
      )}
    </div>
  );
}

/**
 * ProjectInfo - Projekt-Informationen mit Titel, Beschreibung und Technologie-Tags
 */
function ProjectInfo({ project }) {
  return (
    <div className="p-6 h-52 flex flex-col">
      <h3 className="text-xl font-bold text-cyan-400 mb-2">{project.title}</h3>
      <p className="text-gray-300 text-sm mb-4 flex-grow">
        {project.description}
      </p>

      {/* Technologien */}
      <ProjectTechnologies technologies={project.technologies} />
    </div>
  );
}

/**
 * ProjectTechnologies - Technologie-Tags für Projekte
 */
function ProjectTechnologies({ technologies }) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-medium"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}
