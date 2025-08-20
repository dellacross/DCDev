import { ProjectContext } from '../../pages/Projects'
import { useContext } from 'react'
import { Link } from 'lucide-react'

const About = () => {

    const { selectedProject } = useContext(ProjectContext)

    return (
        <div className='flex flex-col gap-y-4 text-sm overflow-y-auto h-full py-2'>
            <div className='flex gap-x-1'>
                {
                    selectedProject?.repositoryLink &&
                    <a 
                        className='flex items-center rounded-md text-white size-max px-4'
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
                        className='flex items-center rounded-md text-white size-max px-4'
                        href={selectedProject?.url}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <span className='bg-[#DEA522] flex items-center justify-center h-[30px] w-[30px] rounded-l-md'><Link size={16} /></span>
                        <span className='px-2 text-white bg-[#262626] h-[30px] flex items-center rounded-r-md'>Acessar projeto</span>
                    </a>
                }
            </div>
            <p className='text-sm hyphens-auto whitespace-pre-line'>
                {selectedProject?.description}
            </p>
        </div>
    )
}

export default About