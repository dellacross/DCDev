export type EducationalExperienceType = {
    id: string;
    name: string;
    description: string;
    institution: string;
    acronym: string;
    startDate: string | null;
    endDate: string | null;
    completed: boolean;
    unfinished: boolean;
    link?: string | null;
    certificate?: string | null;
}