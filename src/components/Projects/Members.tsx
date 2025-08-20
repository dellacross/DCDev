import { ProjectContext } from '../../pages/Projects'
import { useContext } from 'react'
import { MemberType } from '../../types/Member.type'
import { MEMBERSTAB } from '../../constants/ProjectTab.constant'
import Member from './Member'

const Members = () => {

    const { 
        selectedProject,
        tab
    } = useContext(ProjectContext)

    return (
        <div className={`${tab === MEMBERSTAB ? 'lg:grid' : 'lg:hidden'} flex flex-col grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 lg:h-full`}>
            <div className='lg:hidden flex text-lg px-4 py-2 bg-[#DEA52230] text-[#DEA522] mx-2 min-h-[40px]'>Equipe</div>
            {
                selectedProject?.members?.map((member: MemberType) => (
                    <Member 
                        key={member.id} 
                        id={member.id}
                        name={member.name} 
                        email={member.email} 
                        roles={member.roles} 
                        image={member.image}
                    />
                ))
            }
        </div>
    )
}

export default Members