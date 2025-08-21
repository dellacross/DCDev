import { TECHNOLOGIESTAB } from '../../constants/SkillsTab.constant'
import { SkillsContext } from '../../pages/Skills'
import { useContext } from 'react'
import { SkillType } from '../../types/Skill.type'
import Tech from '../Tech'
import HighlightedLabel from '../HighlightedLabel'

const Technologies = () => {

  const { 
    selectedCourse,
    tab
  } = useContext(SkillsContext)

  return (
    <div className={`${tab === TECHNOLOGIESTAB ? 'lg:grid' : 'lg:hidden'} flex flex-col xl:grid-cols-5 lg:grid-cols-3 gap-4 text-sm text-white md:p-2 lg:p-0 lg:overflow-y-auto`}>
      <HighlightedLabel label='Tecnologias' color='#29903B' extraclass='lg:hidden sm:mx-2' />
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