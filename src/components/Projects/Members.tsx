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
        <div className={`${tab === MEMBERSTAB ? 'flex' : 'hidden'} flex-col gap-4 text-sm text-white px-2 pt-2 pb-4 lg:overflow-y-auto`}>
            <div className={`flex text-lg px-4 py-2 bg-[#DEA52230] text-[#DEA522] min-h-[50px] items-center $lg:hidden sm:mx-2 w-max`}>
                Equipe
            </div>
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