import { useMemo, useState, createContext } from 'react'
import type { ProjectType } from '../types/Project.type'
import { TabType } from '../types/Tab.type'
import { Code } from 'lucide-react'
import Container from '../layout/Container'
import projectsData from '../data/projects.json'
import Project from '../components/Projects/Project'
import { ABOUTTAB, MEMBERSTAB, TECHNOLOGIESTAB, UPDATESTAB } from '../constants/Tab.constant'

type ProjectContextType = {
    selectedProject: any; // Replace 'any' with the actual type if known
    setSelectedProject: (project: any) => void; // Replace 'any' with the actual type if known
    tab: any; // Replace 'any' with the actual type if known
    setTab: (tab: any) => void; // Replace 'any' with the actual type if known
}

export const ProjectContext = createContext<ProjectContextType>({
    selectedProject: null,
    tab: ABOUTTAB,
    setSelectedProject: () => {},
    setTab: () => {}
})

const Projects = () => {

    const projects: ProjectType[] = useMemo(() => projectsData, [])

    const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null)
    const [tab, setTab] = useState<TabType>(ABOUTTAB)

    return (
        <Container>
            <ProjectContext.Provider 
                value={{
                    selectedProject,
                    setSelectedProject,
                    tab,
                    setTab
                }}
            >
                <div className='h-full flex gap-x-[50px]'>
                    <aside className='h-full w-[300px] flex gap-y-4 flex-col border-l-[2px] border-white border-solid'>
                        <p className='text-white mx-[10px] flex bg-[#262626] w-max px-4 py-[2px] border-b border-[#DEA522] border-solid text-[#DEA522]'>Projetos</p>
                        <div className='flex flex-col overflow-y-auto h-full overflow-x-hidden gap-y-1'>
                            {
                                projects?.map((project, index) => (
                                    <p 
                                        key={index} 
                                        className={`h-7 text-white m-0 flex text-sm w-max mx-4 py-[2px] gap-x-2 items-center cursor-pointer hover:border-b border-[#DEA522] border-solid ${selectedProject?.name === project.name ? 'border-b' : ''}`}
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        <Code size={16} />
                                        {project.name}
                                    </p>
                                ))
                            }
                        </div>
                    </aside>
                    <main className='flex-1 h-full flex w-full flex-col'>
                        <header className='text-white border-b border-[#222222] flex items-center'>
                            <button 
                                className={`h-7 text-white px-4 py-2 flex items-center align-center hover:bg-[#262626] hover:border-b border-[#DEA522] ${tab === ABOUTTAB ? 'border-b' : ''}`}
                                onClick={() => setTab(ABOUTTAB)}
                            >
                                Sobre o projeto
                            </button>
                            <button 
                                className={`h-7 text-white px-4 py-2 flex items-center align-center hover:bg-[#262626] hover:border-b border-[#DEA522] ${tab === TECHNOLOGIESTAB ? 'border-b' : ''}`}
                                onClick={() => setTab(TECHNOLOGIESTAB)}
                            >
                                Tecnologias
                            </button>
                            <button 
                                className={`h-7 text-white px-4 py-2 flex items-center align-center hover:bg-[#262626] hover:border-b border-[#DEA522] ${tab === UPDATESTAB ? 'border-b' : ''}`}
                                onClick={() => setTab(UPDATESTAB)}
                            >
                                Atualizações
                            </button>
                            <button 
                                className={`h-7 text-white px-4 py-2 flex items-center align-center hover:bg-[#262626] hover:border-b border-[#DEA522] ${tab === MEMBERSTAB ? 'border-b' : ''}`}
                                onClick={() => setTab(MEMBERSTAB)}
                            >
                                Members
                            </button>
                        </header>
                        <Project />
                    </main>
                </div>
            </ProjectContext.Provider>
        </Container>
    )
}

export default Projects