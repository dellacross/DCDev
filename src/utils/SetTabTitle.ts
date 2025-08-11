export const SetTabTitle = (title: string) => {
    document.title = `DCDev ${title ? `| ${title}` : ''}`;
}