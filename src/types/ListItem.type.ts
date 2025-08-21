export type ListItemProps = {
    currentState: any
    state: any
    setter: (state: any) => void
    color: string
    title: string
    subtitles?: string[]
}