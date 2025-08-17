import { ProfessionalExperienceType } from '../types/ProfessionalExperience.type'
import { useState } from 'react'
import Container from '../layout/Container'
import Experience from '../components/Career/Experience'
import ProfessionalExperiences from '../data/professionalExperiences.json'

const Career = () => {

    const [selectedExperience, setSelectedExperience] = useState<ProfessionalExperienceType | null>(null)

    return (
        <Container>
            <div className='h-full flex gap-x-[50px]'>
                <aside className='h-full w-[300px] flex gap-y-4 flex-col border-l-[2px] border-white border-solid'>
                    <p className='text-white mx-[10px] flex bg-[#262626] w-max px-4 py-[2px] border-b border-[#086099] border-solid text-[#086099]'>Experiências Profissionais</p>
                    <div className='flex flex-col overflow-y-auto h-full overflow-x-hidden gap-y-1 px-2'>
                        {
                            ProfessionalExperiences?.map(experience => (
                                <Experience 
                                    key={experience.id}
                                    id={experience.id}
                                    title={experience.title}
                                    company={experience.company}
                                    location={experience.location}
                                    duration={experience.duration}
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

export default Career