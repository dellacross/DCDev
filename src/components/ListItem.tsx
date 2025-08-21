import { ListItemProps } from '../types/ListItem.type'

const ListItem = ({ setter, state, currentState, color, title, subtitles }: ListItemProps) => {
    return (
        <div 
            className={`flex flex-col gap-y-1 px-4 py-2 border-box bg-[#262626] text-white cursor-pointer border-solid border-b hover:bg-[#333333] hover:border-[${color}] ${currentState?.id === state.id ? `bg-[#333333] border-[${color}]` : 'border-transparent'}`} 
            onClick={() => setter(state)}
        >
            <p className=''>{title}</p>
            {
                subtitles?.map((subtitle, index) => (
                    <p key={index} className='text-xs'>{subtitle}</p>
                ))
            }
        </div>
    )
}

export default ListItem