import { ProjectContext } from '../../../pages/Projects'
import { useContext } from 'react'
import { ABOUTTAB } from '../../../constants/ProjectTab.constant'
import { Link } from 'lucide-react'
import TextContainer from '../../TextContainer'

const About = () => {

    const { 
        selectedProject,
        tab
    } = useContext(ProjectContext)

    return (
        <div className={`${tab === ABOUTTAB ? 'flex' : 'lg:hidden'} flex-col gap-4 text-sm text-white px-2 pt-2 pb-4 lg:overflow-y-auto`}>
            <div className={`flex text-lg px-4 py-2 bg-[#DEA52230] text-[#DEA522] min-h-[50px] items-center $lg:hidden sm:mx-2 w-max`}>
                Sobre o projeto
            </div>
            <div className='flex gap-x-1'>
                {
                    selectedProject?.repositoryLink &&
                    <a 
                        className='flex items-center rounded-md text-white size-max px-4 my-2'
                        href={selectedProject?.repositoryLink}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <span className='bg-[#DEA522] flex items-center justify-center h-[30px] w-[30px] rounded-l-md'><Link size={16} /></span>
                        <span className='px-2 text-white bg-[#262626] h-[30px] flex items-center rounded-r-md'>Acessar repositório</span>
                    </a>
                }
                {
                    selectedProject?.url &&
                    <a 
                        className='flex items-center rounded-md text-white size-max px-4 my-2'
                        href={selectedProject?.url}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <span className='bg-[#DEA522] flex items-center justify-center h-[30px] w-[30px] rounded-l-md'><Link size={16} /></span>
                        <span className='px-2 text-white bg-[#262626] h-[30px] flex items-center rounded-r-md'>Acessar projeto</span>
                    </a>
                }
            </div>
            <TextContainer content={selectedProject?.description} />
        </div>
    )
}

export default About