export type EducationalExperienceType = {
    id: string;
    name: string;
    description: string;
    institution: string;
    institutionUrl: string;
    acronym: string;
    duration: string;
    link: string;
    certificate: string | null;
    completed: boolean;
    unfinished: boolean;
}