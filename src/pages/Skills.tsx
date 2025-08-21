import { DETAILSTAB, TECHNOLOGIESTAB } from '../constants/SkillsTab.constant';
import { useMemo, useState, createContext, useEffect } from 'react';
import { SkillsTabType } from '../types/SkillsTab.type';
import { CourseType } from '../types/Course.type';
import Course from '../components/Skills/Course';
import courses from '../data/courses.json';
import Container from '../layout/Container';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
    const [openSkillList, setOpenSkillList] = useState<boolean>(false)

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
                <div className='h-full flex xl:gap-x-[50px] lg:gap-x-[30px] md:gap-x-[15px] lg:flex-row flex-col max-lg:overflow-y-auto'>
                    <aside className='lg:h-full xl:w-[300px] lg:w-[200px] w-full flex gap-y-4 flex-col border-l-[2px] border-white border-solid'>
                        <p className='text-white mx-[10px] lg:flex hidden bg-[#262626] w-max px-4 py-[2px] border-b border-[#29903B] border-solid text-[#DEA522]'>Cursos</p>
                        <button
                            onClick={() => setOpenSkillList(!openSkillList)}
                            className='lg:hidden flex text-white mx-[10px] flex bg-[#262626] w-max px-2 py-[2px] border-b border-[#29903B] border-solid text-[#DEA522] gap-2'
                        >
                            { openSkillList ? <ChevronUp /> : <ChevronDown /> }
                            Cursos
                        </button>
                        <div className='lg:flex hidden flex-col overflow-y-auto h-full overflow-x-hidden gap-y-1'>
                            {
                                CoursesList.map(course => (
                                    <div 
                                        key={course.id}
                                        className={`h-7 text-white m-0 flex text-sm w-max mx-4 py-[2px] gap-x-2 items-center cursor-pointer hover:border-b border-[#29903B] border-solid ${selectedCourse?.id === course.id ? 'border-b' : ''}`}
                                        onClick={() => setSelectedCourse(course)}
                                    >
                                        <p className=''>{course.name}</p>
                                        <p className='text-xs'>{course.institution}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={`${openSkillList ? 'flex' : 'hidden'} lg:hidden flex-col overflow-y-auto h-full overflow-x-hidden gap-y-1`}>
                            {
                                CoursesList.map(course => (
                                    <div 
                                        key={course.id}
                                        className={`h-7 text-white m-0 flex text-sm w-max mx-4 py-[2px] gap-x-2 items-center cursor-pointer hover:border-b border-[#29903B] border-solid ${selectedCourse?.id === course.id ? 'border-b' : ''}`}
                                        onClick={() => setSelectedCourse(course)}
                                    >
                                        <p className=''>{course.name}</p>
                                        <p className='text-xs'>{course.institution}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </aside>
                    <main className='flex-1 h-full flex w-full flex-col'>
                        <header className='h-[30px] text-white border-b border-[#222222] lg:flex hidden items-center'>
                            <button 
                                className={`h-[30px] text-white px-4 py-2 flex items-center align-center hover:bg-[#262626] hover:border-b border-[#29903B] ${tab === DETAILSTAB ? 'border-b' : ''}`}
                                onClick={() => setTab(DETAILSTAB)}
                            >
                                Detalhes
                            </button>
                            <button 
                                className={`h-[30px] text-white px-4 py-2 flex items-center align-center hover:bg-[#262626] hover:border-b border-[#29903B] ${tab === TECHNOLOGIESTAB ? 'border-b' : ''}`}
                                onClick={() => setTab(TECHNOLOGIESTAB)}
                            >
                                Tecnologias
                            </button>
                        </header>
                        <Course />
                    </main>
                </div>
            </SkillsContext.Provider>
        </Container>
    )
}

export default Skills