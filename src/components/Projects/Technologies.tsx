import { ProjectContext } from '../../pages/Projects'
import { useContext } from 'react'
import { SkillType } from '../../types/Skill.type'
import Tech from '../Tech'

const Technologies = () => {

    const { selectedProject } = useContext(ProjectContext)

    return (
        <div className='grid xl:grid-cols-5 lg:grid-cols-3 gap-4 text-sm text-white overflow-auto p-2 lg:p-0'>
            {
                selectedProject?.skills?.map((tech: SkillType, index: number) => (
                    <Tech 
                        key={index}
                        name={tech.name}
                        color={tech.color}
                        field={tech.field} 
                    />
                ))
            }
        </div>
    )
}

export default Technologies