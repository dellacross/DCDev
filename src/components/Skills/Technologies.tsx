import { SkillsContext } from '../../pages/Skills'
import { useContext } from 'react'
import { SkillType } from '../../types/Skill.type'
import Tech from '../Tech'

const Technologies = () => {

  const { selectedCourse } = useContext(SkillsContext)

  return (
    <div className='grid grid-cols-5 gap-4 text-sm text-white'>
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