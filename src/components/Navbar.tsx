import { Braces, BriefcaseBusiness, GraduationCap, Lightbulb } from 'lucide-react'
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
            <nav className='flex items-center justify-center gap-x-5 h-[60px] border-y-2 border-[#222222] px-8 box-border'>
                <div 
                    className='flex text-[#46AD62] w-64 justify-center items-center gap-x-4 text-[#8D4BB9] underline underline-offset-4 decoration-2 cursor-pointer'
                    onClick={() => handleClick({ endpoint: '/about', color: '#8D4BB9', name: 'Sobre mim' })}
                >
                    <span><Lightbulb /></span>
                    <p>Sobre mim</p>
                </div>
                <div 
                    className='flex text-[#086099] w-64 justify-center items-center gap-x-4 text-[#27A5F1] underline underline-offset-4 decoration-2 cursor-pointer'
                    onClick={() => handleClick({ endpoint: '/career', color: '#086099', name: 'Carreira' })}
                >
                    <span><BriefcaseBusiness /></span>
                    <p>Carreira</p>
                </div>
                <div 
                    className='flex text-[#C91634] w-64 justify-center items-center gap-x-4 text-[#F56565] underline underline-offset-4 decoration-2 cursor-pointer'
                    onClick={() => handleClick({ endpoint: '/educational', color: '#C91634', name: 'Educação' })}
                >
                    <span><GraduationCap /></span>
                    <p>Educação</p>
                </div>
                <div 
                    className='flex text-[#DEA522] w-64 justify-center items-center gap-x-4 text-[#FFDF5E] underline underline-offset-4 decoration-2 cursor-pointer'
                    onClick={() => handleClick({ endpoint: '/projects', color: '#DEA522', name: 'Projetos' })}
                >
                    <span><Braces /></span>
                    <p>Projetos</p>
                </div>
            </nav>
    )
}

export default Navbar