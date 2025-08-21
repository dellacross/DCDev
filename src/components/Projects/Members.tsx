import { ProjectContext } from '../../pages/Projects'
import { useContext } from 'react'
import { MemberType } from '../../types/Member.type'
import { MEMBERSTAB } from '../../constants/ProjectTab.constant'
import Member from './Member'
import HighlightedLabel from '../HighlightedLabel'

const Members = () => {

    const { 
        selectedProject,
        tab
    } = useContext(ProjectContext)

    return (
        <div className={`${tab === MEMBERSTAB ? 'lg:grid' : 'lg:hidden'} flex flex-col grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:p-4 lg:h-full lg:overflow-y-auto`}>
            <HighlightedLabel label='Equipe' color='#DEA522' extraclass='lg:hidden sm:mx-2' />
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