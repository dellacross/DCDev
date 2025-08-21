import { Building2, Calendar, GraduationCap, Link, Lock, ShieldCheck } from "lucide-react"
import { EducationalContext } from "../../pages/Educational"
import { useContext } from "react"
import HighlightedLabel from "../HighlightedLabel"
import TextContainer from "../TextContainer"

const Experience = () => {

  const { selectedExperience } = useContext(EducationalContext)

  return (
    <main className='flex-1 lg:h-full flex w-full flex-col bg-[#262626] rounded-lg p-4 max-lg:overflow-y-auto'>
      <p className='text-white text-lg font-semibold'>{selectedExperience?.name}</p>
      <div className='px-4 py-2 gap-4 flex max-md:flex-col md:grid grid-cols-3 2xl:flex w-full'>
        <a 
          className='flex items-center rounded-md text-white bg-[#262626] col-span-3 min-h-[30px]'
          href={selectedExperience?.institutionUrl || '#'}
          target='_blank'
          rel='noopener noreferrer'
        >
          <span className='bg-[#C91634] flex items-center justify-center h-full w-[30px] rounded-l-md'><Building2 size={16} /></span>
          <span className='px-2 bg-[#191919] h-full rounded-r-md flex items-center text-sm flex-1'>{selectedExperience?.institution}</span>
        </a>
        {
          selectedExperience?.unfinished &&
          <p className='flex items-center rounded-md text-white bg-[#262626] col-span-1 min-h-[30px]'>
            <span className='bg-[#C91634] flex items-center justify-center h-full w-[30px] rounded-l-md'><Lock size={16} /></span>
            <span className='px-2 bg-[#191919] h-full rounded-r-md flex items-center text-sm flex-1'>Trancado</span>
          </p>
        }
        {
          selectedExperience?.completed &&
          <p className='flex items-center rounded-md text-white bg-[#262626] col-span-1 min-h-[30px]'>
            <span className='bg-[#C91634] flex items-center justify-center h-full w-[30px] rounded-l-md'><GraduationCap size={16} /></span>
            <span className='px-2 bg-[#191919] h-full rounded-r-md flex items-center text-sm flex-1'>Concluído</span>
          </p>
        }
        <p className='flex items-center rounded-md text-white bg-[#262626] col-span-1 min-h-[30px]'>
          <span className='bg-[#C91634] flex items-center justify-center h-full w-[30px] rounded-l-md'><Calendar size={16} /></span>
          <span className='px-2 bg-[#191919] h-full rounded-r-md flex items-center text-sm flex-1'>{selectedExperience?.duration}</span>
        </p>
        <a
          className='flex items-center rounded-md text-white bg-[#262626] col-span-1 min-h-[30px]'
          href={selectedExperience?.link || '#'}
          target='_blank'
          rel='noopener noreferrer'
        >
          <span className='bg-[#C91634] flex items-center justify-center h-full w-[30px] rounded-l-md'><Link size={16} /></span>
          <span className='px-2 bg-[#191919] h-full rounded-r-md flex items-center text-sm flex-1'>Sobre o curso</span>
        </a>
        <a
          className='flex items-center rounded-md text-white bg-[#262626] col-span-1 min-h-[30px]'
          href={selectedExperience?.certificate || '#'}
          target='_blank'
          rel='noopener noreferrer'
        >
          <span className='bg-[#C91634] flex items-center justify-center h-full w-[30px] rounded-l-md'><ShieldCheck size={16} /></span>
          <span className='px-2 bg-[#191919] h-full rounded-r-md flex items-center text-sm flex-1'>Certificado</span>
        </a>
      </div>
      <HighlightedLabel label='Minha trajetória no curso' color='#C91634' />
      <TextContainer content={selectedExperience?.description} />
    </main>
  )
}

export default Experience