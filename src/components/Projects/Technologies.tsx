import { ProjectContext } from '../../pages/Projects'
import { useContext } from 'react'
import { SkillType } from '../../types/Skill.type'
import Tech from './Tech'

const Technologies = () => {

    const { 
        selectedProject, 
        tab 
    } = useContext(ProjectContext)

    return (
        <div className='grid grid-cols-5 gap-4 text-sm text-white'>
            {
                selectedProject?.skills?.map((tech: SkillType, index: number) => (
                    <Tech 
                        key={index}
                        name={tech.name}
                        color={tech.color}
                    />
                ))
            }
        </div>
    )
}

export default Technologies