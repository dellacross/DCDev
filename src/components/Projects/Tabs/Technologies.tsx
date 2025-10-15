import { TECHNOLOGIESTAB } from '../../../constants/ProjectTab.constant'
import { ProjectContext } from '../../../pages/Projects'
import { useContext } from 'react'
import { SkillType } from '../../../types/Skill.type'
import Tech from '../../Tech'

const Technologies = () => {

    const { 
        selectedProject,
        tab
    } = useContext(ProjectContext)

    return (
        <div className={`${tab === TECHNOLOGIESTAB ? 'flex' : 'hidden'} flex-col gap-4 text-sm text-white px-2 pt-2 pb-4 lg:overflow-y-auto`}>
            <div className={`flex text-lg px-4 py-2 bg-[#DEA52230] text-[#DEA522] min-h-[50px] items-center $lg:hidden sm:mx-2 w-max`}>
                Tecnologias
            </div>
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