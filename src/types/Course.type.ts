import { SkillType } from './Skill.type';

export type CourseType = {
    id: string;
    name: string;
    title: string;
    institution: string;
    duration: string | null;
    completed: boolean;
    link: string | null;
    certificate: string | null;
    skills: SkillType[];
    description: string | null;
}