import { EducationalExperienceType } from "../../types/EducationalExperience.type"

const Experience = ({ name, institution, duration }: EducationalExperienceType) => {
  return (
    <div className='flex flex-col gap-y-1 px-4 py-2 bg-[#262626] text-white cursor-pointer border-b border-transparent border-solid hover:bg-[#333333] hover:border-[#C91634]'>
      <p className=''>{name}</p>
      <p className='text-xs'>{institution}</p>
      { duration && <p className='text-xs'>{duration}</p> }
    </div>
  )
}

export default Experience