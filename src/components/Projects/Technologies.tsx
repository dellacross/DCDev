import { TECHNOLOGIESTAB } from '../../constants/SkillsTab.constant'
import { ProjectContext } from '../../pages/Projects'
import { useContext } from 'react'
import { SkillType } from '../../types/Skill.type'
import Tech from '../Tech'

const Technologies = () => {

    const { 
        selectedProject,
        tab
    } = useContext(ProjectContext)

    return (
        <div className={`${tab === TECHNOLOGIESTAB ? 'lg:grid' : 'lg:hidden'} flex flex-col xl:grid-cols-5 lg:grid-cols-3 gap-4 text-sm text-white md:p-2 lg:p-0 lg:overflow-y-auto`}>
            <div className='lg:hidden flex text-lg px-4 py-2 bg-[#DEA52230] text-[#DEA522] sm:mx-2 min-h-[40px]'>Tecnologias</div>
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