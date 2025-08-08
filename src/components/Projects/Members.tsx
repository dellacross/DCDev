import { ProjectContext } from '../../pages/Projects'
import { useContext } from 'react'

const Members = () => {

    const { 
        selectedProject, 
        tab 
    } = useContext(ProjectContext)

    return (
        <div>Members</div>
    )
}

export default Members