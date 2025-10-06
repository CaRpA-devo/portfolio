import { SkillCards } from "../atoms/card.comp.jsx";
import { GridWrapper } from "../atoms/gridwrapper.jsx";
import { Skills_Config } from "../../config/skills.config.js";

export function Skills() {
  return (
    <>
      <section className="flex gap-4 flex-col p-16 justify-center text-center text-lime-100 text-xl bg-[#01061a]">
        <h2 className="md:text-5xl text-5xl text-cyan-600 font-bold">
          Meine Fähigkeiten und Erfahrungen im Web Development
        </h2>
        <h3>
          "Code kreativ, Web innovativ - Gemeinsam gestalten wir die digitale
          Zukunft."
        </h3>

        <GridWrapper>
          {Skills_Config.map((skill, idx) => (
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
