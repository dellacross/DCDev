import { useMemo, useState, createContext, useEffect } from 'react';
import { DETAILSTAB, TECHNOLOGIESTAB } from '../constants/SkillsTab.constant';
import { SkillsTabType } from '../types/SkillsTab.type';
import { CourseType } from '../types/Course.type';
import Course from '../components/Skills/Course';
import courses from '../data/courses.json';
import NavLabel from '../components/NavLabel';
import Container from '../layout/Container';
import ListButton from '../components/ListButton';

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

    const toggleCourse = (course: CourseType) => {
        setOpenSkillList(!openSkillList)
        setSelectedCourse(course)
    }

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
                        <NavLabel label='Cursos' color='#29903B' />
                        <ListButton color='#29903B' label='Cursos' state={openSkillList} setter={setOpenSkillList} />
                        <div className='lg:flex hidden flex-col overflow-y-auto h-full overflow-x-hidden gap-y-1 px-2'>
                            {
                                CoursesList.map(course => (
                                    <div 
                                        key={course.id}
                                        className={`flex flex-col gap-y-1 px-4 py-2 bg-[#262626] text-white cursor-pointer border-solid hover:bg-[#333333] border-b ${selectedCourse?.id === course.id ? 'border-[#29903B]' : 'border-transparent'}`}
                                        onClick={() => setSelectedCourse(course)}
                                    >
                                        <p className=''>{course.name}</p>
                                        <p className='text-xs'>{course.institution}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={`${openSkillList ? 'flex' : 'hidden'} lg:hidden flex-col overflow-y-auto h-full overflow-x-hidden gap-y-1 px-2`}>
                            {
                                CoursesList.map(course => (
                                    <div 
                                        key={course.id}
                                        className={`flex flex-col gap-y-1 px-4 py-2 bg-[#262626] text-white cursor-pointer border-b  border-solid hover:bg-[#333333] border-b ${selectedCourse?.id === course.id ? 'border-[#29903B]' : 'border-transparent'}`}
                                        onClick={() => toggleCourse(course)}
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
                                className={`h-[30px] text-white px-4 py-2 flex items-center align-center hover:bg-[#262626] hover:border-b border-b ${tab === DETAILSTAB ? 'border-[#29903B]' : 'border-transparent'}`}
                                onClick={() => setTab(DETAILSTAB)}
                            >
                                Detalhes
                            </button>
                            <button 
                                className={`h-[30px] text-white px-4 py-2 flex items-center align-center hover:bg-[#262626] hover:border-b border-b ${tab === TECHNOLOGIESTAB ? 'border-[#29903B]' : 'border-transparent'}`}
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