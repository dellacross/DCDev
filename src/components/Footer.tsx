import { useNavigate } from "react-router-dom"
import { SetTabTitle } from "../utils/SetTabTitle"
import { Braces, BrainCog, BriefcaseBusiness, GraduationCap, Lightbulb } from "lucide-react"

const Footer = () => {

  const navigate = useNavigate()

  const handleClick = ({ endpoint, color, name }: { endpoint: string, color: string, name: string }) => {
    localStorage.setItem('__pg_nm', JSON.stringify({ endpoint, color, name }))
    navigate(endpoint)
    SetTabTitle(name)
  }

  return (
    <footer className='text-white text-center lg:h-[40px] md:h-[20px] h-[60px] flex items-center justify-center box-border lg:text-lg text-md'>
      <p className='hidden md:flex'>&copy; {new Date().getFullYear()} DCDev. All rights reserved.</p>
      <nav className='flex md:hidden items-center justify-around gap-x-5 h-full w-full border-t-2 border-[#222222] box-border sm:text-sm text-xs'>
        <div 
          className='flex justify-center items-center lg:gap-x-4 gap-x-1 gap-y-1 text-[#8D4BB9] underline-offset-4 cursor-pointer flex-col'
          onClick={() => handleClick({ endpoint: '/about', color: '#8D4BB9', name: 'Sobre mim' })}
        >
          <span><Lightbulb /></span>
          <p className='sm:text-sm text-xs text-center'>Sobre mim</p>
        </div>
        <div 
          className='flex justify-center items-center lg:gap-x-4 gap-x-1 gap-y-1 text-[#27A5F1] underline-offset-4 cursor-pointer flex-col'
          onClick={() => handleClick({ endpoint: '/career', color: '#086099', name: 'Carreira' })}
        >
          <span><BriefcaseBusiness /></span>
          <p className='sm:text-sm text-xs text-center'>Carreira</p>
        </div>
        <div 
          className='flex justify-center items-center lg:gap-x-4 gap-x-1 gap-y-1 text-[#F56565] underline-offset-4 cursor-pointer flex-col'
          onClick={() => handleClick({ endpoint: '/educational', color: '#C91634', name: 'Educação' })}
        >
          <span><GraduationCap /></span>
          <p className='sm:text-sm text-xs text-center'>Educação</p>
        </div>
        <div 
          className='flex justify-center items-center lg:gap-x-4 gap-x-1 gap-y-1 text-[#29903B] underline-offset-4 cursor-pointer flex-col'
          onClick={() => handleClick({ endpoint: '/skills', color: '#29903B', name: 'Skills' })}
        >
          <span><BrainCog  /></span>
          <p className='sm:text-sm text-xs text-center'>Skills</p>
        </div>
        <div 
          className='flex justify-center items-center gap-x-1 gap-y-1 text-[#FFDF5E] underline-offset-4 cursor-pointer flex-col'
          onClick={() => handleClick({ endpoint: '/projects', color: '#DEA522', name: 'Projetos' })}
        >
          <span><Braces /></span>
          <p className='sm:text-sm text-xs text-center'>Projetos</p>
        </div>
      </nav>
    </footer>
  )
}

export default Footer