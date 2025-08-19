import { ProjectContext } from '../../pages/Projects'
import { useContext } from 'react'
import { MemberType } from '../../types/Member.type'
import Member from './Member'

const Members = () => {

    const { selectedProject } = useContext(ProjectContext)

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 overflow-y-auto h-full'>
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