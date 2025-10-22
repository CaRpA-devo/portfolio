# 🚀 Portfolio Website

Eine moderne, responsive Portfolio-Website, die mit React und Vite entwickelt wurde. Diese Website präsentiert Fähigkeiten, Projekte und Kontaktinformationen in einem eleganten, interaktiven Design.

## ✨ Features

### 🎨 **Interaktive Skill-Karten**

- **Responsive Design**: Optimiert für Desktop und Mobile
- **Hover-Effekte**: Prozentzahlen werden auf Desktop beim Hovern angezeigt
- **Touch-optimiert**: Vollständige Touch-Unterstützung für mobile Geräte
- **Kategorisierte Skills**: Frontend, Backend, Tools, Deployment und Soft Skills

### 🎭 **Animationen & Effekte**

- **Flying Logos**: Animierte Logo-Animationen
- **Splash Cursor**: Interaktive Cursor-Effekte
- **Tilted Cards**: 3D-ähnliche Karten-Animationen
- **Smooth Transitions**: Flüssige Übergänge zwischen Sektionen

### 📱 **Responsive Design**

- **Mobile-First**: Optimiert für alle Bildschirmgrößen
- **Touch-Gesten**: Vollständige Touch-Unterstützung
- **Adaptive Layouts**: Intelligente Anpassung an verschiedene Geräte

### 🎯 **Sektionen**

- **Hero**: Einprägsame Startseite mit Animationen
- **About**: Persönliche Vorstellung und Hintergrund
- **Skills**: Interaktive Darstellung der Fähigkeiten
- **Projects**: Portfolio mit Projekt-Swiper
- **Kontakt**: Kontaktformular mit Formspree-Integration

## 🛠️ Technologie-Stack

### **Frontend**

- **React 19.1.1** - Moderne UI-Bibliothek
- **Vite 7.1.2** - Schneller Build-Tool und Dev-Server
- **Tailwind CSS 4.1.13** - Utility-First CSS Framework
- **DaisyUI 5.1.12** - Komponenten-Bibliothek

### **Animationen & Interaktionen**

- **Framer Motion 12.23.18** - Animations-Bibliothek
- **GSAP 3.13.0** - Professionelle Animationen
- **Swiper 12.0.3** - Touch-Slider für Projekte

### **Icons & UI**

- **Lucide React 0.544.0** - Moderne Icon-Bibliothek
- **Iconify 3.1.1** - Umfangreiche Icon-Sammlung

### **Formulare**

- **Formspree React 3.0.0** - Kontaktformular-Integration

## 🚀 Installation & Setup

### **Voraussetzungen**

- Node.js (Version 18 oder höher)
- npm oder yarn

### **Installation**

```bash
# Repository klonen
git clone <repository-url>
cd portfolio

# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# Build für Produktion
npm run build

# Preview des Builds
npm run preview
```

### **Verfügbare Scripts**

```bash
npm run dev      # Startet den Entwicklungsserver
npm run build    # Erstellt einen Produktions-Build
npm run preview  # Zeigt den Build-Vorschau
npm run lint     # Führt ESLint aus
```

## 📁 Projektstruktur

```
src/
├── components/
│   ├── atoms/           # Kleine, wiederverwendbare Komponenten
│   ├── molecules/       # Zusammengesetzte Komponenten
│   └── organisms/       # Große Sektions-Komponenten
├── config/              # Konfigurationsdateien
├── hooks/               # Custom React Hooks
├── assets/              # Statische Assets (Bilder, Fonts, etc.)
├── styles/              # Zusätzliche Styles
└── data/                # Daten-Konfigurationen
```

## 🎨 Design-System

### **Farbpalette**

- **Primär**: Cyan (#06b6d4) - Für Akzente und Hover-Effekte
- **Sekundär**: Lime (#84cc16) - Für Text und Highlights
- **Hintergrund**: Dunkelblau (#01061a) - Haupt-Hintergrund
- **Text**: Weiß/Grau - Für Lesbarkeit

### **Typography**

- **Hauptschrift**: Iceland (Custom Font)
- **Fallback**: System Fonts

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Konfiguration

### **Skills-Konfiguration**

Die Skills werden in `src/config/skills.config.js` verwaltet:

- Frontend Skills
- Backend Skills
- Tools
- Deployment Tools
- Soft Skills

### **Projekte-Konfiguration**

Projekte werden in `src/config/projects.config.js` definiert.

## 🚀 Deployment

Das Projekt kann auf verschiedenen Plattformen deployed werden:

### **Vercel (Empfohlen)**

```bash
npm run build
# Upload des dist/ Ordners zu Vercel
```

### **Netlify**

```bash
npm run build
# Upload des dist/ Ordners zu Netlify
```

### **GitHub Pages**

```bash
npm run build
# Push des dist/ Ordners zu gh-pages Branch
```

## 🤝 Beitragen

1. Fork das Repository
2. Erstelle einen Feature-Branch (`git checkout -b feature/AmazingFeature`)
3. Committe deine Änderungen (`git commit -m 'Add some AmazingFeature'`)
4. Push zum Branch (`git push origin feature/AmazingFeature`)
5. Öffne einen Pull Request

## 📄 Lizenz

Dieses Projekt steht unter der MIT-Lizenz. Siehe [LICENSE](LICENSE) für weitere Details.

## 📞 Kontakt

**Carpa** - [GitHub](https://github.com/CaRpA-devo) - [Email](mailto:carpa-devo@web.de)

---

⭐ **Star dieses Repository, wenn es dir gefällt!**
