import { EducationalExperienceType } from '../types/EducationalExperience.type'
import { useEffect, useMemo, useState } from 'react'
import Container from '../layout/Container'
import Experience from '../components/Educational/Experience'
import educationalData from '../data/educational.json'
import { Building2, Clock, GraduationCap, Link, Lock } from 'lucide-react'

const Educational = () => {

  const EducationalExperiences: EducationalExperienceType[] = useMemo(() => educationalData, [])

  const [selectedExperience, setSelectedExperience] = useState<EducationalExperienceType | null>(null)

  useEffect(() => {
    setSelectedExperience(EducationalExperiences[0] || null)
  }, [EducationalExperiences])

  return (
    <Container>
      <div className='h-full flex gap-x-[50px]'>
        <aside className='h-full w-[300px] flex gap-y-4 flex-col border-l-[2px] border-white border-solid'>
          <p className='text-white mx-[10px] flex bg-[#262626] w-max px-4 py-[2px] border-b border-[#C91634] border-solid text-[#C91634]'>Experiências Acadêmicas</p>
          <div className='flex flex-col overflow-y-auto h-full overflow-x-hidden gap-y-1 px-2'>
            {
              EducationalExperiences?.map(experience => (
                <div 
                  className={`flex flex-col gap-y-1 px-4 py-2 bg-[#262626] text-white cursor-pointer border-b  border-solid hover:bg-[#333333] border-b ${selectedExperience?.id === experience.id ? 'border-[#C91634]' : 'border-transparent'}`}
                  onClick={() => setSelectedExperience(experience)}
                >
                  <p className=''>{experience.name}</p>
                  <p className='text-xs'>{experience.institution}</p>
                  { experience.duration && <p className='text-xs'>{experience.duration}</p> }
                </div>
              ))
            }
          </div>
        </aside>
        <main className='flex-1 h-full flex w-full flex-col bg-[#262626] rounded-lg p-4'>
            <p className='text-white text-lg font-semibold'>{selectedExperience?.name}</p>
            <div className='px-4 py-2 gap-4 flex'>
              <p className='flex items-center rounded-md text-white bg-[#262626]'>
                <span className='bg-[#C91634] flex items-center justify-center h-[30px] w-[30px] rounded-l-md'><Building2 size={16} /></span>
                <span className='px-2 bg-[#191919] h-[30px] rounded-r-md flex items-center text-sm'>{selectedExperience?.institution}</span>
              </p>
              {
                selectedExperience?.unfinished &&
                <p className='flex items-center rounded-md text-white bg-[#262626]'>
                  <span className='bg-[#C91634] flex items-center justify-center h-[30px] w-[30px] rounded-l-md'><Lock size={16} /></span>
                  <span className='px-2 bg-[#191919] h-[30px] rounded-r-md flex items-center text-sm'>Trancado</span>
                </p>
              }
              {
                selectedExperience?.completed &&
                <p className='flex items-center rounded-md text-white bg-[#262626]'>
                  <span className='bg-[#C91634] flex items-center justify-center h-[30px] w-[30px] rounded-l-md'><GraduationCap size={16} /></span>
                  <span className='px-2 bg-[#191919] h-[30px] rounded-r-md flex items-center text-sm'>Concluído</span>
                </p>
              }
              <p className='flex items-center rounded-md text-white bg-[#262626]'>
                <span className='bg-[#C91634] flex items-center justify-center h-[30px] w-[30px] rounded-l-md'><Clock size={16} /></span>
                <span className='px-2 bg-[#191919] h-[30px] rounded-r-md flex items-center text-sm'>{selectedExperience?.duration}</span>
              </p>
              <a
                className='flex items-center rounded-md text-white bg-[#262626]'
                href={selectedExperience?.link || '#'}
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='bg-[#C91634] flex items-center justify-center h-[30px] w-[30px] rounded-l-md'><Link size={16} /></span>
                <span className='px-2 bg-[#191919] h-[30px] rounded-r-md flex items-center text-sm'>Sobre o curso</span>
              </a>
            </div>
            <div className='flex min-h-[40px] items-center text-lg mb-2'>
              <span className='bg-[#C9163430] text-[#C91634] px-5 py-1'>Minha trajetória no curso</span>
            </div>
            <div className='text-white text-sm overflow-auto px-2 whitespace-pre-line hyphens-auto py-2'>{selectedExperience?.description}</div>
        </main>
      </div>
    </Container>
  )
}

export default Educational