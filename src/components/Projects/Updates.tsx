import { ProjectContext } from '../../pages/Projects'
import { useContext } from 'react'

const Updates = () => {

    const { 
        selectedProject, 
        tab 
    } = useContext(ProjectContext)

    return (
        <div>Updates</div>
    )
}

export default Updates