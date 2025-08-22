import { TECHNOLOGIESTAB } from '../../constants/SkillsTab.constant'
import { SkillsContext } from '../../pages/Skills'
import { useContext } from 'react'
import { SkillType } from '../../types/Skill.type'
import Tech from '../Tech'

const Technologies = () => {

  const { 
    selectedCourse,
    tab
  } = useContext(SkillsContext)

  return (
    <div className={`${tab === TECHNOLOGIESTAB ? 'lg:grid' : 'lg:hidden'} flex flex-col xl:grid-cols-5 lg:grid-cols-3 gap-4 text-sm text-white md:p-2 lg:p-0 lg:overflow-y-auto`}>
      <div className={`flex text-lg px-4 py-2 bg-[#29903B30] text-[#29903B] min-h-[50px] items-center lg:hidden sm:mx-2`}>
        Tecnologias
      </div>
      {
        selectedCourse?.skills?.map((tech: SkillType, index: number) => (
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