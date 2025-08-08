import { Braces, BriefcaseBusiness, Globe, GraduationCap, Lightbulb } from 'lucide-react'

const Navbar = () => {
  return (
        <nav className='flex items-center justify-center gap-x-5 h-[60px] border-y-2 border-[#222222] px-8 box-border'>
            <a href='#' className='flex text-[#46AD62] w-64 justify-center items-center gap-x-4 text-[#8D4BB9] underline underline-offset-4 decoration-2'>
                <span><Lightbulb /></span>
                <p>Sobre mim</p>
            </a>
            <a href='#' className='flex text-[#086099] w-64 justify-center items-center gap-x-4 text-[#27A5F1] underline underline-offset-4 decoration-2'>
                <span><BriefcaseBusiness /></span>
                <p>Carreira</p>
            </a>
            <a href='#' className='flex text-[#C91634] w-64 justify-center items-center gap-x-4 text-[#F56565] underline underline-offset-4 decoration-2'>
                <span><GraduationCap /></span>
                <p>Educação</p>
            </a>
            <a href='#' className='flex text-[#60368F] w-64 justify-center items-center gap-x-4 text-[#70BD72] underline underline-offset-4 decoration-2'>
                <span><Globe /></span>
                <p>Skills</p>
            </a>
            <a href='/projects' className='flex text-[#DEA522] w-64 justify-center items-center gap-x-4 text-[#FFDF5E] underline underline-offset-4 decoration-2'>
                <span><Braces /></span>
                <p>Projetos</p>
            </a>
        </nav>
  )
}

export default Navbar