import { SkillCards } from "../atoms/card.comp.jsx";
import { GridWrapper } from "../atoms/gridwrapper.jsx";
import { Skills_Config } from "../../config/skills.config.js";

export function Skills() {
  return (
    <GridWrapper>
      {Skills_Config.map((skill, idx) => (
        <SkillCards
          key={idx}
          title={skill.title}
          imageSrc={skill.imageSrc}
          description={skill.description || ""}
        />
      ))}
    </GridWrapper>
  );
}
