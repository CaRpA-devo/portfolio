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
    image: "/img/projects/porto.png",
    technologies: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
      "JavaScript",
      "Formspree",
    ],
    liveUrl: "https://carpa-portfolio.netlify.app",
    githubUrl: "https://github.com/CaRpA-devo/portfolio",
    featured: true,
  },
  {
    id: 2,
    title: "MemoMe – Terminplaner",
    description:
      "MemoMe ist eine kleine React/Vite-App zum Anlegen von Terminen mit Datum und Notiz. Die Einträge werden lokal gespeichert, gruppiert und können als erledigt markiert oder gelöscht werden.",
    image: "/img/projects/terminplaner.png",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Toastify"],

    githubUrl: "https://github.com/CaRpA-devo/terminplaner",
    featured: false,
  },
  {
    id: 3,
    title: "CodeConnect – Entwickler-Bibliothek",
    description:
      "CodeConnect ist eine statische Website, die Webentwickler:innen schnellen Zugang zu Lernmaterial, Tools und Dokus bietet.",
    image: "/img/projects/codeconnect.png",
    technologies: ["HTML", "CSS", "CSS3", "Swiper.JS", "Formspree"],

    githubUrl: "https://github.com/CaRpA-devo/Bibliothek",
    featured: true,
  },
  {
    id: 4,
    title: "To-Do List Web App",
    description:
      "Eine einfache To-Do-Liste zum Erstellen, Abhaken und Löschen von Aufgaben – gespeichert im localStorage.",
    image: "/img/projects/todo.png",
    technologies: ["JavaScript", "HTML", "CSS"],

    githubUrl: "https://github.com/CaRpA-devo/ToDoListe",
    featured: false,
  },
  {
    id: 5,
    title: "Second Brain – Chatbot",
    description:
      "Schlanker JS-Chatbot für Einsteiger — statisches Frontend, ausgeliefert per Express.",
    image: "/img/projects/secondbrain.png",
    technologies: ["Node.js", "Express", "JavaScript", "HTML", "CSS"],

    githubUrl: "https://github.com/CaRpA-devo/chatbot",
    featured: false,
  },
  {
    id: 6,
    title: "Team Task Manager",
    description:
      "Rezept-Finder mit Suchfunktion, Favoriten-System und Nährwert-Informationen für gesunde Ernährung.",
    image: "/img/projects/taskmanager.png",
    technologies: [
      "Clerk",
      "React 19",
      "JavaScript",
      "Node.js",
      "JSON Server",
      "API",
    ],

    githubUrl: "https://github.com/CaRpA-devo/react-task-manager",
    featured: true,
  },
  {
    id: 7,
    title: "Quiz-App",
    description:
      "Interaktives React/Vite-Quiz mit Lobby, Fragen vom JSON-Server und lokal gespeicherten Spielständen.",
    image: "/img/projects/quizzapp.png",
    technologies: [
      "React 19",
      "CSS",
      "JavaScript",
      "Node.js",
      "JSON Server",
      "API",
    ],

    githubUrl: "https://github.com/CaRpA-devo/Quiz-App",
    featured: false,
  },
  {
    id: 8,
    title: "Sundive",
    description:
      "Sundive ist eine statische Reise-Website mit Seiten für Strandurlaub, Städte & Specials, komplett in HTML/CSS umgesetzt.",
    image: "/img/projects/sundive.png",
    technologies: ["HTML", "CSS"],

    githubUrl: "https://github.com/OuzoPator/sundive",
    featured: false,
  },
  {
    id: 9,
    title: "ProPerc – Fullstack Health & Fitness Plattform ",
    description:
      "ProPerc ist eine modulare Web-App für Ernährungsplanung, Training und Fortschritts-Tracking zum schnellen Finden und Filtern von Nährstoffen und Supplements.",
    image: "/img/projects/ProPerc.png",
    technologies: [
      "Clerk",
      "React 19",
      "Express 5",
      "Tailwind CSS 4",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "API",
      "Mongoose 8",
      "Zod 4",
      "Nodemon 3",
      "DaisyUI 5",
    ],

    githubUrl: "https://github.com/CaRpA-devo/ProPerc",
    featured: true,
  },
];
