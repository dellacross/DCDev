import { ProfessionalExperienceContext } from "../../pages/Career"
import { Building2, Clock, Computer } from "lucide-react"
import { useContext } from "react"
import TextContainer from "../TextContainer"

const Experience = () => {

  const { selectedExperience } = useContext(ProfessionalExperienceContext)

  return (
    <main className='flex-1 h-full flex w-full flex-col bg-[#262626] rounded-lg p-4 text-white max-lg:overflow-y-auto'>
      <p className='font-semibold text-lg'>{ selectedExperience?.title || ``}</p>
      <div className='px-4 py-2 gap-4 flex max-md:flex-col'>
        <p className='flex items-center rounded-md text-white bg-[#262626]'>
          <span className='bg-[#086099] flex items-center justify-center h-[30px] w-[30px] rounded-l-md'><Building2 size={16} /></span>
          <span className='px-2 bg-[#191919] h-[30px] rounded-r-md flex items-center text-sm'>{selectedExperience?.company}</span>
        </p>
        <p className='flex items-center rounded-md text-white bg-[#262626]'>
          <span className='bg-[#086099] flex items-center justify-center h-[30px] w-[30px] rounded-l-md'><Clock size={16} /></span>
          <span className='px-2 bg-[#191919] h-[30px] rounded-r-md flex items-center text-sm'>{selectedExperience?.duration}</span>
        </p>
        <p className='flex items-center rounded-md text-white bg-[#262626]'>
          <span className='bg-[#086099] flex items-center justify-center h-[30px] w-[30px] rounded-l-md'><Computer size={16} /></span>
          <span className='px-2 bg-[#191919] h-[30px] rounded-r-md flex items-center text-sm'>{selectedExperience?.location}</span>
        </p>
      </div>
      <div className={`flex text-lg px-4 py-2 bg-[#08609930] text-[#086099] min-h-[50px] items-center`}>
        Minha experiência
      </div>
      <TextContainer content={selectedExperience?.description} />
    </main>
  )
}

export default Experience