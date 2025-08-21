import { useMemo, useState, createContext, useEffect } from 'react'
import { ABOUTTAB, MEMBERSTAB, TECHNOLOGIESTAB } from '../constants/ProjectTab.constant'
import type { ProjectType } from '../types/Project.type'
import { ProjectTabType } from '../types/ProjectTab.type'
import { Code } from 'lucide-react'
import Project from '../components/Projects/Project'
import NavLabel from '../components/NavLabel'
import Container from '../layout/Container'
import SubnavItem from '../components/SubnavItem'
import ListButton from '../components/ListButton'
import projectsData from '../data/projects.json'

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
    const [tab, setTab] = useState<ProjectTabType>(ABOUTTAB)
    const [openProjectList, setOpenProjectList] = useState<boolean>(false)

    useEffect(() => {
        setSelectedProject(projects[0] || null)
    }, [projects])

    const toggleProject = (project: ProjectType) => {
        setOpenProjectList(!openProjectList)
        setSelectedProject(project)
    }

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
                <div className='h-full flex xl:gap-x-[50px] lg:gap-x-[30px] md:gap-x-[15px] lg:flex-row flex-col max-lg:overflow-y-auto'>
                    <aside className='lg:h-full xl:w-[300px] lg:w-[200px] w-full flex gap-y-4 flex-col border-l-[2px] border-white border-solid'>
                        <NavLabel label='Projetos' color='#DEA522' />
                        <ListButton color='#DEA522' label='Projetos' state={openProjectList} setter={setOpenProjectList} />
                        <div className='lg:flex hidden flex-col overflow-y-auto h-full overflow-x-hidden gap-y-1'>
                            {
                                projects?.map(project => (
                                    <p 
                                        key={project.id} 
                                        className={`h-7 text-white m-0 flex text-sm w-max mx-4 py-[2px] gap-x-2 items-center cursor-pointer hover:border-b border-[#DEA522] border-solid ${selectedProject?.name === project.name ? 'border-b' : ''}`}
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        <Code size={16} />
                                        {project.name}
                                    </p>
                                ))
                            }
                        </div>
                        <div className={`${openProjectList ? 'flex' : 'hidden'} lg:hidden flex-col overflow-y-auto h-full overflow-x-hidden gap-y-1`}>
                            {
                                projects?.map(project => (
                                    <p 
                                        key={project.id} 
                                        className={`h-7 text-white m-0 flex text-sm w-max mx-4 py-[2px] gap-x-2 items-center cursor-pointer hover:border-b border-[#DEA522] border-solid ${selectedProject?.name === project.name ? 'border-b' : ''}`}
                                        onClick={() => toggleProject(project)}
                                    >
                                        <Code size={16} />
                                        {project.name}
                                    </p>
                                ))
                            }
                        </div>
                    </aside>
                    <main className='flex-1 h-full flex w-full flex-col'>
                        <header className='h-[30px] text-white border-b border-[#222222] lg:flex hidden items-center'>
                            <SubnavItem 
                                currentState={tab}
                                state={ABOUTTAB}
                                setter={setTab}
                                color="#DEA522"
                                label="Sobre o projeto"
                            />
                            <SubnavItem 
                                currentState={tab}
                                state={TECHNOLOGIESTAB}
                                setter={setTab}
                                color="#DEA522"
                                label="Tecnologias"
                            />
                            <SubnavItem 
                                currentState={tab}
                                state={MEMBERSTAB}
                                setter={setTab}
                                color="#DEA522"
                                label="Membros"
                            />
                        </header>
                        <Project />
                    </main>
                </div>
            </ProjectContext.Provider>
        </Container>
    )
}

export default Projects