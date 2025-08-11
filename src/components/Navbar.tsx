import { Braces, BriefcaseBusiness, GraduationCap, Lightbulb } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

    return (
            <nav className='flex items-center justify-center gap-x-5 h-[60px] border-y-2 border-[#222222] px-8 box-border'>
                <div 
                    className='flex text-[#46AD62] w-64 justify-center items-center gap-x-4 text-[#8D4BB9] underline underline-offset-4 decoration-2 cursor-pointer'
                    onClick={() => navigate('/about')}
                >
                    <span><Lightbulb /></span>
                    <p>Sobre mim</p>
                </div>
                <div 
                    className='flex text-[#086099] w-64 justify-center items-center gap-x-4 text-[#27A5F1] underline underline-offset-4 decoration-2 cursor-pointer'
                    onClick={() => navigate('/career')}
                >
                    <span><BriefcaseBusiness /></span>
                    <p>Carreira</p>
                </div>
                <div 
                    className='flex text-[#C91634] w-64 justify-center items-center gap-x-4 text-[#F56565] underline underline-offset-4 decoration-2 cursor-pointer'
                    onClick={() => navigate('/educational')}
                >
                    <span><GraduationCap /></span>
                    <p>Educação</p>
                </div>
                <div 
                    className='flex text-[#DEA522] w-64 justify-center items-center gap-x-4 text-[#FFDF5E] underline underline-offset-4 decoration-2 cursor-pointer'
                    onClick={() => navigate('/projects')}
                >
                    <span><Braces /></span>
                    <p>Projetos</p>
                </div>
            </nav>
    )
}

export default Navbar