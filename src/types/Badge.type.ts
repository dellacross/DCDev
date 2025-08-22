export type BadgeTypeProps = {
    label: string;
    color: string;
    icon: React.ReactNode;
    extraclass?: string;
    url?: string
    conditional: boolean;
}