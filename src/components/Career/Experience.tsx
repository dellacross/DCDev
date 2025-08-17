import { ProfessionalExperienceType } from "../../types/ProfessionalExperience.type"

const Experience = ({ title, company, duration }: ProfessionalExperienceType) => {
  return (
    <div className='flex flex-col gap-y-1 px-4 py-2 border-box bg-[#262626] text-white cursor-pointer border-solid border-transparent border-b hover:bg-[#333333] hover:border-[#086099]'>
      <p className=''>{title}</p>
      <p className='text-xs'>{company}</p>
      <p className='text-xs'>{duration}</p>
    </div>
  )
}

export default Experience