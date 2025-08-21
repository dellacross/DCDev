import { useMemo, useState, createContext, useEffect } from 'react';
import { DETAILSTAB, TECHNOLOGIESTAB } from '../constants/SkillsTab.constant';
import { SkillsTabType } from '../types/SkillsTab.type';
import { CourseType } from '../types/Course.type';
import Course from '../components/Skills/Course';
import courses from '../data/courses.json';
import ListItem from '../components/ListItem';
import NavLabel from '../components/NavLabel';
import Container from '../layout/Container';
import SubnavItem from '../components/SubnavItem';
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
                        <div className='lg:flex hidden flex-col overflow-y-auto h-full overflow-x-hidden gap-y-1'>
                            {
                                CoursesList.map(course => (
                                    <ListItem 
                                        key={course.id}
                                        currentState={selectedCourse}
                                        state={course}
                                        setter={setSelectedCourse}
                                        color='#29903B'
                                        title={course.name}
                                        subtitles={[course.institution]}
                                    />
                                ))
                            }
                        </div>
                        <div className={`${openSkillList ? 'flex' : 'hidden'} lg:hidden flex-col overflow-y-auto h-full overflow-x-hidden gap-y-1 px-2`}>{
                                CoursesList.map(course => (
                                    <ListItem 
                                        key={course.id}
                                        currentState={selectedCourse}
                                        state={course}
                                        setter={toggleCourse}
                                        color='#29903B'
                                        title={course.name}
                                        subtitles={[course.institution]}
                                    />
                                ))
                            }
                        </div>
                    </aside>
                    <main className='flex-1 h-full flex w-full flex-col'>
                        <header className='h-[30px] text-white border-b border-[#222222] lg:flex hidden items-center'>
                            <SubnavItem 
                                currentState={tab}
                                state={DETAILSTAB}
                                setter={setTab}
                                color="#29903B"
                                label="Detalhes"
                            />
                            <SubnavItem 
                                currentState={tab}
                                state={TECHNOLOGIESTAB}
                                setter={setTab}
                                color="#29903B"
                                label="Tecnologias"
                            />
                        </header>
                        <Course />
                    </main>
                </div>
            </SkillsContext.Provider>
        </Container>
    )
}

export default Skills