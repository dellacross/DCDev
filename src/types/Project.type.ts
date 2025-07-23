import { SkillType } from "./Skill.type";

export type ProjectType = {
    id: string;
    name: string;
    description: string;
    skills: SkillType[];
}