import { createContext, useEffect, useMemo, useState } from 'react'
import { ProfessionalExperienceType } from '../types/ProfessionalExperience.type'
import NavLabel from '../components/NavLabel'
import Container from '../layout/Container'
import Experience from '../components/Career/Experience'
import ListButton from '../components/ListButton'
import professionalExperiences from '../data/professionalExperiences.json'

type ProfessionalExperienceContextType = {
    selectedExperience: ProfessionalExperienceType | null
    setSelectedExperience: (experience: ProfessionalExperienceType | null) => void
}

export const ProfessionalExperienceContext = createContext<ProfessionalExperienceContextType>({
    selectedExperience: null,
    setSelectedExperience: () => {}
})

const Career = () => {

    const ProfessionalExperiencesList: ProfessionalExperienceType[] = useMemo(() => professionalExperiences, [])

    const [selectedExperience, setSelectedExperience] = useState<ProfessionalExperienceType | null>(null)
    const [openExperienceList, setOpenExperienceList] = useState<boolean>(false)

    useEffect(() => {
        setSelectedExperience(ProfessionalExperiencesList[0] || null)
    }, [ProfessionalExperiencesList])

    const toggleExperience = (experience: ProfessionalExperienceType) => {
        setOpenExperienceList(!openExperienceList)
        setSelectedExperience(experience)
    }

    return (
        <Container>
            <ProfessionalExperienceContext.Provider 
                value={{ 
                    selectedExperience, 
                    setSelectedExperience 
                }}
            >
                <div className='h-full flex xl:gap-x-[50px] lg:gap-x-[30px] md:gap-x-[15px] lg:flex-row flex-col  gap-y-2'>
                    <aside className='lg:h-full lg:w-[300px] w-full flex gap-y-4 flex-col border-l-[2px] border-white border-solid'>
                        <NavLabel label='Experiências Profissionais' color='#086099' />
                        <ListButton color='#086099' state={openExperienceList} setter={setOpenExperienceList} label='Experiências Profissionais' />
                        <div className='lg:flex hidden flex-col overflow-y-auto h-full overflow-x-hidden gap-y-1 px-2'>
                            {
                                ProfessionalExperiencesList?.map(experience => (
                                    <div 
                                        key={experience.id}
                                        className={`flex flex-col gap-y-1 px-4 py-2 border-box bg-[#262626] text-white cursor-pointer border-solid border-b hover:bg-[#333333] hover:border-[#086099] ${selectedExperience?.id === experience.id ? 'bg-[#333333] border-[#086099]' : 'border-transparent'}`} 
                                        onClick={() => setSelectedExperience(experience)}
                                    >
                                        <p className=''>{experience.title}</p>
                                        <p className='text-xs'>{experience.company}</p>
                                        <p className='text-xs'>{experience.duration}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={`${openExperienceList ? 'flex' : 'hidden'} lg:hidden flex flex-col overflow-y-auto h-full overflow-x-hidden gap-y-1 px-2`}>
                            {
                                ProfessionalExperiencesList?.map(experience => (
                                <div 
                                    key={experience.id}
                                    className={`flex flex-col gap-y-1 px-4 py-2 bg-[#262626] text-white cursor-pointer border-b  border-solid hover:bg-[#333333] border-b ${selectedExperience?.id === experience.id ? 'border-[#086099]' : 'border-transparent'}`}
                                    onClick={() => toggleExperience(experience)}
                                >
                                    <p className=''>{experience.title}</p>
                                    <p className='text-xs'>{experience.company}</p>
                                    <p className='text-xs'>{experience.duration}</p>
                                </div>
                                ))
                            }
                        </div>
                    </aside>
                    <Experience />
                </div>
            </ProfessionalExperienceContext.Provider>
        </Container>
    )
}

export default Career