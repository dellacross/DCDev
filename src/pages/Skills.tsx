import { DETAILSTAB, TECHNOLOGIESTAB } from '../constants/SkillsTab.constant';
import { useMemo, useState, createContext, useEffect } from 'react';
import { SkillsTabType } from '../types/SkillsTab.type';
import { CourseType } from '../types/Course.type';
import Course from '../components/Skills/Course';
import courses from '../data/courses.json';
import Container from '../layout/Container';

type SkillsContextType = {
    selectedCourse: CourseType | null;
    setSelectedCourse: (course: CourseType | null) => void;
    tab: SkillsTabType;
}

export const SkillsContext = createContext<SkillsContextType>({
    selectedCourse: null,
    setSelectedCourse: () => {},
    tab: DETAILSTAB,
})

const Skills = () => {

    const CoursesList: CourseType[] = useMemo(() => courses.filter(e => e?.completed), []);

    const [selectedCourse, setSelectedCourse] = useState<CourseType | null>(null);
    const [tab, setTab] = useState<SkillsTabType>(DETAILSTAB)

    useEffect(() => { setSelectedCourse(CoursesList[0] || null) }, [CoursesList])

    return (
        <Container>
            <SkillsContext.Provider 
                value={{ 
                    selectedCourse, 
                    setSelectedCourse,
                    tab
                }}
            >
                <div className='h-full flex gap-x-[50px]'>
                    <main className='flex-1 h-full flex w-full flex-col'>
                        <header className='text-white border-b border-[#222222] flex items-center'>
                            <button 
                                className={`h-7 text-white px-4 py-2 flex items-center align-center hover:bg-[#262626] hover:border-b border-[#29903B] ${tab === DETAILSTAB ? 'border-b' : ''}`}
                                onClick={() => setTab(DETAILSTAB)}
                            >
                                Detalhes
                            </button>
                            <button 
                                className={`h-7 text-white px-4 py-2 flex items-center align-center hover:bg-[#262626] hover:border-b border-[#29903B] ${tab === TECHNOLOGIESTAB ? 'border-b' : ''}`}
                                onClick={() => setTab(TECHNOLOGIESTAB)}
                            >
                                Tecnologias
                            </button>
                        </header>
                        <Course />
                    </main>
                    <aside className='h-full w-[300px] flex gap-y-4 flex-col border-l-[2px] border-white border-solid'>
                        <p className='text-white mx-[10px] flex bg-[#262626] w-max px-4 py-[2px] border-b border-[#29903B] border-solid'>Cursos</p>
                        <div className='flex flex-col overflow-y-auto h-full overflow-x-hidden gap-y-1 px-2'>
                            {
                                CoursesList.map(course => (
                                    <div 
                                        key={course.id}
                                        className={`flex flex-col gap-y-1 px-4 py-2 bg-[#262626] text-white cursor-pointer border-b  border-solid hover:bg-[#333333] hover:border-[#29903B] ${selectedCourse?.id === course.id ? 'border-[#29903B] bg-[#333333]' : 'border-transparent'}`}
                                        onClick={() => setSelectedCourse(course)}
                                    >
                                        <p className=''>{course.name}</p>
                                        <p className='text-xs'>{course.institution}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </aside>
                </div>
            </SkillsContext.Provider>
        </Container>
    )
}

export default Skills