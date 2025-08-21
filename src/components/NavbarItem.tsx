import { NavbarItemProps } from '../types/NavbarItem.type'
import { useNavigate } from 'react-router-dom'
import { SetTabTitle } from '../utils/SetTabTitle'

const NavbarItem = ({ icon, name, color, endpoint }: NavbarItemProps) => {

    const navigate = useNavigate()

    const handleClick = () => {
        localStorage.setItem('__pg_nm', JSON.stringify({ endpoint, color, name }))
        navigate(endpoint)
        SetTabTitle(name)
    }

    return (
        <div 
            className={`flex lg:w-64 justify-center items-center lg:gap-x-4 gap-x-1 gap-y-1 md:gap-y-0 text-[${color}] lg:underline underline-offset-4 lg:decoration-2 cursor-pointer flex-col md:flex-row`}
            onClick={() => handleClick()}
        >
            <span>{icon}</span>
            <p className='md:text-base text-sm text-center'>{name}</p>
        </div>
    )
}

export default NavbarItem