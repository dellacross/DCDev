import { BadgeTypeProps } from '../../types/Badge.type'

const Badge = ({ label, color, icon, extraclass, url, conditional }: BadgeTypeProps) => {

    if(!conditional) return null

    return (
    url ?
    <a 
        className='flex items-center rounded-md text-white bg-[#262626] col-span-3 min-h-[30px]'
        href={url || '#'}
        target='_blank'
        rel='noopener noreferrer'
    >
        <span className={`bg-[${color}] flex items-center justify-center h-full w-[30px] rounded-l-md`}>{ icon }</span>
        <span className='px-2 bg-[#191919] h-full rounded-r-md flex items-center text-sm flex-1'>{ label }</span>
    </a>
    :
        <p className={`flex items-center rounded-md text-white bg-[#262626] min-h-[30px] ${extraclass}`}>
            <span className={`bg-[${color}] flex items-center justify-center h-full w-[30px] rounded-l-md`}>{ icon }</span>
            <span className='px-2 bg-[#191919] h-full rounded-r-md flex items-center text-sm flex-1'>{ label }</span>
        </p>
    )
}

export default Badge