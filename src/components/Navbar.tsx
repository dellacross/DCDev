import { Braces, BrainCog, BriefcaseBusiness, GraduationCap, Lightbulb } from 'lucide-react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
    return (
        <nav className='md:flex hidden items-center justify-center gap-x-5 h-[60px] border-y-2 border-[#222222] lg:px-8 md:px-4 sm:px-2 box-border lg:text-base text-sm'>
            <NavbarItem icon={<Lightbulb />} name='Sobre mim' color='#8D4BB9' endpoint='/about' />
            <NavbarItem icon={<BriefcaseBusiness />} name='Carreira' color='#086099' endpoint='/career' />
            <NavbarItem icon={<GraduationCap />} name='Educação' color='#C91634' endpoint='/educational' />
            <NavbarItem icon={<BrainCog />} name='Skills' color='#29903B' endpoint='/skills' />
            <NavbarItem icon={<Braces />} name='Projetos' color='#DEA522' endpoint='/projects' />
        </nav>
    )
}

export default Navbar