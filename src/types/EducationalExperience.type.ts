export type EducationalExperienceType = {
    id: string;
    name: string;
    description: string;
    institution: string;
    institutionUrl: string;
    acronym: string;
    duration: string | null;
    link?: string | null;
    certificate?: string | null;
    completed: boolean;
    unfinished: boolean;
}