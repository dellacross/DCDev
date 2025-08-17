import { EducationalExperienceType } from '../types/EducationalExperience.type'
import { useEffect, useMemo, useState } from 'react'
import Container from '../layout/Container'
import Experience from '../components/Educational/Experience'
import educationalData from '../data/educational.json'

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
                <Experience 
                  key={experience.id}
                  id={experience.id}
                  name={experience.name}
                  institution={experience.institution}
                  duration={experience.duration}
                  acronym={experience.acronym}
                  description={experience.description}
                />
              ))
            }
          </div>
        </aside>
        <main className='flex-1 h-full flex w-full flex-col bg-[#262626] rounded-lg p-4'>

        </main>
      </div>
    </Container>
  )
}

export default Educational