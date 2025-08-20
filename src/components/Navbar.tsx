import { Braces, BrainCog, BriefcaseBusiness, GraduationCap, Lightbulb } from 'lucide-react'
import { SetTabTitle } from '../utils/SetTabTitle'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

    const handleClick = ({ endpoint, color, name }: { endpoint: string, color: string, name: string }) => {
        localStorage.setItem('__pg_nm', JSON.stringify({ endpoint, color, name }))
        navigate(endpoint)
        SetTabTitle(name)
    }

    return (
        <nav className='md:flex hidden items-center justify-center gap-x-5 h-[60px] border-y-2 border-[#222222] lg:px-8 md:px-4 sm:px-2 box-border lg:text-base text-sm'>
            <div 
                className='flex lg:w-64 justify-center items-center lg:gap-x-4 gap-x-1 gap-y-1 md:gap-y-0 text-[#8D4BB9] lg:underline underline-offset-4 lg:decoration-2 cursor-pointer flex-col md:flex-row'
                onClick={() => handleClick({ endpoint: '/about', color: '#8D4BB9', name: 'Sobre mim' })}
            >
                <span><Lightbulb /></span>
                <p className='md:text-base text-sm text-center'>Sobre mim</p>
            </div>
            <div 
                className='flex lg:w-64 justify-center items-center lg:gap-x-4 gap-x-1 gap-y-1 md:gap-y-0 text-[#27A5F1] lg:underline underline-offset-4 lg:decoration-2 cursor-pointer flex-col md:flex-row'
                onClick={() => handleClick({ endpoint: '/career', color: '#086099', name: 'Carreira' })}
            >
                <span><BriefcaseBusiness /></span>
                <p className='md:text-base text-sm text-center'>Carreira</p>
            </div>
            <div 
                className='flex lg:w-64 justify-center items-center lg:gap-x-4 gap-x-1 gap-y-1 md:gap-y-0 text-[#F56565] lg:underline underline-offset-4 lg:decoration-2 cursor-pointer flex-col md:flex-row'
                onClick={() => handleClick({ endpoint: '/educational', color: '#C91634', name: 'Educação' })}
            >
                <span><GraduationCap /></span>
                <p className='md:text-base text-sm text-center'>Educação</p>
            </div>
            <div 
                className='flex lg:w-64 justify-center items-center lg:gap-x-4 gap-x-1 gap-y-1 md:gap-y-0 text-[#29903B] lg:underline underline-offset-4 lg:decoration-2 cursor-pointer flex-col md:flex-row'
                onClick={() => handleClick({ endpoint: '/skills', color: '#29903B', name: 'Skills' })}
            >
                <span><BrainCog /></span>
                <p className='md:text-base text-sm text-center'>Skills</p>
            </div>
            <div 
                className='flex lg:w-64 justify-center items-center lg:gap-x-4 gap-x-1 gap-y-1 md:gap-y-0 text-[#FFDF5E] lg:underline underline-offset-4 lg:decoration-2 cursor-pointer flex-col md:flex-row'
                onClick={() => handleClick({ endpoint: '/projects', color: '#DEA522', name: 'Projetos' })}
            >
                <span><Braces /></span>
                <p className='md:text-base text-sm text-center'>Projetos</p>
            </div>
        </nav>
    )
}

export default Navbar