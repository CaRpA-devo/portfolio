// Komponenten Imports
import { SkillCards } from "../molecules/skillcards.comp.jsx";
import { GridWrapper } from "../atoms/gridwrapper.comp.jsx";
import { SkillsHeader } from "../atoms/skillsheader.comp.jsx";

// Skills-Konfigurationen für verschiedene Kategorien
import {
  Skills_Frontend_Config,
  Skills_Backend_Config,
  Tools_Config,
  SoftSkills_Config,
  Deployment_Tools_Config,
} from "../../config/skills.config.js";

/**
 * Skills-Sektion - Zeigt alle Fähigkeiten in kategorisierten Bereichen
 * Struktur: Frontend, Backend, Tools, Deployment, Soft Skills
 */
export function Skills() {
  return (
    <>
      <section className="flex gap-4 flex-col p-16  justify-center text-center text-lime-100 text-xl bg-[#01061a]">
        <h2 id="skills" className="text-6xl text-cyan-600 font-bold">
          Meine Fähigkeiten und Erfahrungen
        </h2>
        <h3>
          "Code kreativ, Web innovativ - Gemeinsam gestalten wir die digitale
          Zukunft."
        </h3>

        <SkillsHeader className="mt-16" title="Frontend" emoji="💻" />
        <GridWrapper>
          {Skills_Frontend_Config.map((skill, idx) => (
            <SkillCards
              key={idx}
              title={skill.title}
              imageSrc={skill.imageSrc}
              description={skill.description || ""}
              hoverHeight={skill.hoverHeight}
            />
          ))}
        </GridWrapper>

        <SkillsHeader title="Backend" emoji="⚙️" />
        <GridWrapper>
          {Skills_Backend_Config.map((skill, idx) => (
            <SkillCards
              key={idx}
              title={skill.title}
              imageSrc={skill.imageSrc}
              description={skill.description || ""}
              hoverHeight={skill.hoverHeight}
            />
          ))}
        </GridWrapper>

        <SkillsHeader title="Tools" emoji="🛠️" />
        <GridWrapper>
          {Tools_Config.map((skill, idx) => (
            <SkillCards
              key={idx}
              title={skill.title}
              imageSrc={skill.imageSrc}
              description={skill.description || ""}
              hoverHeight={skill.hoverHeight}
            />
          ))}
        </GridWrapper>

        <SkillsHeader title="Deployment" emoji="🧰" />
        <GridWrapper>
          {Deployment_Tools_Config.map((skill, idx) => (
            <SkillCards
              key={idx}
              title={skill.title}
              imageSrc={skill.imageSrc}
              description={skill.description || ""}
              hoverHeight={skill.hoverHeight}
            />
          ))}
        </GridWrapper>

        <SkillsHeader title="Soft Skills" emoji="💪" />
        <GridWrapper>
          {SoftSkills_Config.map((skill, idx) => (
            <SkillCards
              key={idx}
              title={skill.title}
              imageSrc={skill.imageSrc}
              description={skill.description || ""}
              hoverHeight={skill.hoverHeight}
            />
          ))}
        </GridWrapper>
      </section>
    </>
  );
}
