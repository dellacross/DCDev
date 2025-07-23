import { FolderOpen } from 'lucide-react'
import { useMemo } from 'react'
import type { ProjectType } from '../types/Project.type'
import Container from '../layout/Container'
import Project from '../components/Project'
import projectsData from '../data/projects.json'

const Projects = () => {

    const projects: ProjectType[] = useMemo(() => projectsData, [])

    return (
        <Container>
            <div className='h-full flex gap-x-[50px] flex-col'>
                <p className='text-white text-2xl font-mono gap-x-2 flex items-center font-bold'>
                    <FolderOpen size={32} />projects
                </p>
                <div className='flex flex-col h-full gap-y-1 py-2'>
                    {
                        projects.map(item => (
                            <Project 
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                skills={item.skills}
                                description={item.description}
                            />
                        ))
                    }
                </div>
            </div>
        </Container>
    )
}

export default Projects