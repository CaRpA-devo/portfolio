import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper CSS Imports
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../organisms/projects.style.css";

// Projekte-Daten und Konfiguration
import { PROJECTS_DATA, PROJECTS_CONFIG } from "../../config/projects.config";
import { ProjectCard } from "./projectcard.comp";

/**
 * ProjectsSwiper - Swiper-Container für Portfolio-Projekte
 * Features: Responsive Design, Navigation, Pagination, Autoplay, Touch-Support
 */
export function ProjectsSwiper() {
  const { swiper } = PROJECTS_CONFIG;

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        {...swiper}
        className="projects-swiper"
      >
        {PROJECTS_DATA.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
