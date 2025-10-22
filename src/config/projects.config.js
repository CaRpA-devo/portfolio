// Konfiguration für die Projekte-Sektion
export const PROJECTS_CONFIG = {
  // Swiper-Einstellungen
  swiper: {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    pagination: {
      clickable: true,
    },
    navigation: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  },

  // Styling
  card: {
    height: "400px",
    borderRadius: "1rem",
    shadow: "0_4px_15px_2px_rgba(128,0,255,0.3)",
  },
};

// Projekte-Daten
export const PROJECTS_DATA = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "Moderne Portfolio-Website mit React, Tailwind CSS und Framer Motion. Responsive Design mit interaktiven Animationen.",
    image: "/src/assets/img/portfolio-preview.jpg",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    liveUrl: "https://carpa-portfolio.netlify.app",
    githubUrl: "https://github.com/CaRpA-devo/portfolio",
    featured: true,
  },
  {
    id: 2,
    title: "E-Commerce App",
    description:
      "Vollständige E-Commerce-Anwendung mit Warenkorb, Benutzerauthentifizierung und Zahlungsintegration.",
    image: "/src/assets/img/ecommerce-preview.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://carpa-ecommerce.netlify.app",
    githubUrl: "https://github.com/CaRpA-devo/ecommerce",
    featured: true,
  },
  {
    id: 3,
    title: "Task Management Tool",
    description:
      "Produktive Task-Management-Anwendung mit Drag & Drop, Team-Kollaboration und Zeitverfolgung.",
    image: "/src/assets/img/taskmanager-preview.jpg",
    technologies: ["React", "TypeScript", "Redux", "Firebase"],
    liveUrl: "https://carpa-tasks.netlify.app",
    githubUrl: "https://github.com/CaRpA-devo/taskmanager",
    featured: false,
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description:
      "Wetter-Dashboard mit Echtzeitdaten, 7-Tage-Vorhersage und Standort-basierter Wetterinformationen.",
    image: "/src/assets/img/weather-preview.jpg",
    technologies: ["JavaScript", "API", "Chart.js", "CSS3"],
    liveUrl: "https://carpa-weather.netlify.app",
    githubUrl: "https://github.com/CaRpA-devo/weather",
    featured: false,
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    description:
      "Dashboard für Social Media Management mit Analytics, Post-Scheduling und Engagement-Tracking.",
    image: "/src/assets/img/social-dashboard-preview.jpg",
    technologies: ["React", "Express", "PostgreSQL", "Chart.js"],
    liveUrl: "https://carpa-social.netlify.app",
    githubUrl: "https://github.com/CaRpA-devo/social-dashboard",
    featured: true,
  },
  {
    id: 6,
    title: "Recipe Finder App",
    description:
      "Rezept-Finder mit Suchfunktion, Favoriten-System und Nährwert-Informationen für gesunde Ernährung.",
    image: "/src/assets/img/recipe-preview.jpg",
    technologies: ["React", "Spoonacular API", "Local Storage", "CSS3"],
    liveUrl: "https://carpa-recipes.netlify.app",
    githubUrl: "https://github.com/CaRpA-devo/recipe-finder",
    featured: false,
  },
];
