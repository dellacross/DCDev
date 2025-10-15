import { createContext, useEffect, useMemo, useState } from 'react'
import { EducationalExperienceType } from '../types/EducationalExperience.type'
import NavLabel from '../components/NavLabel'
import Container from '../layout/Container'
import Experience from '../components/Educational/Experience'
import ListButton from '../components/ListButton'
import educationalData from '../data/educational.json'

type EducationalContextType = {
  selectedExperience: EducationalExperienceType | null;
  setSelectedExperience: (experience: EducationalExperienceType | null) => void;
}

export const EducationalContext = createContext<EducationalContextType>({
  selectedExperience: null,
  setSelectedExperience: () => {}
})

const Educational = () => {

  const EducationalExperiences: EducationalExperienceType[] = useMemo(() => educationalData, [])

  const [selectedExperience, setSelectedExperience] = useState<EducationalExperienceType | null>(null)
  const [openExperienceList, setOpenExperienceList] = useState<boolean>(false)

  useEffect(() => {
    setSelectedExperience(EducationalExperiences[0] || null)
  }, [EducationalExperiences])

  const toggleExperience = (experience: EducationalExperienceType) => {
    setOpenExperienceList(!openExperienceList)
    setSelectedExperience(experience)
  }

  return (
    <Container>
      <EducationalContext.Provider 
        value={{ 
          selectedExperience, 
          setSelectedExperience 
        }}
      >
        <div className='h-full flex xl:gap-x-[50px] lg:gap-x-[30px] md:gap-x-[15px] lg:flex-row flex-col gap-y-2'>
          <aside className='lg:h-full lg:w-[300px] w-full flex gap-y-4 flex-col border-l-[2px] border-white border-solid'>
            <NavLabel label='Experiências Acadêmicas' color='#C91634' />
            <ListButton color='#C91634' label='Experiências Acadêmicas' state={openExperienceList} setter={setOpenExperienceList} />
            <div className='lg:flex hidden flex-col overflow-y-auto h-full overflow-x-hidden gap-y-1 px-2'>
              {
                EducationalExperiences?.map(experience => (
                  <div 
                    key={experience.id}
                    className={`flex flex-col gap-y-1 px-4 py-2 bg-[#262626] text-white cursor-pointer border-b  border-solid hover:bg-[#333333] ${selectedExperience?.id === experience.id ? 'border-[#C91634]' : 'border-transparent'}`}
                    onClick={() => setSelectedExperience(experience)}
                  >
                    <p className=''>{experience.name}</p>
                    <p className='text-xs'>{experience.institution}</p>
                    { experience.duration && <p className='text-xs'>{experience.duration}</p> }
                  </div>
                ))
              }
            </div>
            <div className={`${openExperienceList ? 'flex' : 'hidden'} lg:hidden flex flex-col overflow-y-auto h-full overflow-x-hidden gap-y-1 px-2`}>
              {
                EducationalExperiences?.map(experience => (
                  <div 
                    key={experience.id}
                    className={`flex flex-col gap-y-1 px-4 py-2 bg-[#262626] text-white cursor-pointer border-b  border-solid hover:bg-[#333333] ${selectedExperience?.id === experience.id ? 'border-[#C91634]' : 'border-transparent'}`}
                    onClick={() => toggleExperience(experience)}
                  >
                    <p className=''>{experience.name}</p>
                    <p className='text-xs'>{experience.institution}</p>
                    { experience.duration && <p className='text-xs'>{experience.duration}</p> }
                  </div>
                ))
              }
            </div>
          </aside>
          <Experience />
        </div>
      </EducationalContext.Provider>
    </Container>
  )
}

export default Educational