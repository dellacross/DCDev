import { useContext } from "react"
import { ProfessionalExperienceType } from "../../types/ProfessionalExperience.type"
import { ProfessionalExperienceContext } from "../../pages/Career"

const Experience = ({ id, title, company, duration, description, location }: ProfessionalExperienceType) => {

  const { 
    selectedExperience, 
    setSelectedExperience 
  } = useContext(ProfessionalExperienceContext)

  return (
    <div 
      className={`flex flex-col gap-y-1 px-4 py-2 border-box bg-[#262626] text-white cursor-pointer border-solid border-b hover:bg-[#333333] hover:border-[#086099] ${selectedExperience?.id === id ? 'bg-[#333333] border-[#086099]' : 'border-transparent'}`} 
      onClick={() => setSelectedExperience({ title, company, duration, description, location, id })}
    >
      <p className=''>{title}</p>
      <p className='text-xs'>{company}</p>
      <p className='text-xs'>{duration}</p>
    </div>
  )
}

export default Experience