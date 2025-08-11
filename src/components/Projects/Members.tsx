import { ProjectContext } from '../../pages/Projects'
import { useContext } from 'react'
import Member from './Member'

const Members = () => {

    const { 
        selectedProject, 
        tab 
    } = useContext(ProjectContext)

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 overflow-y-auto h-full'>
            <Member />
            <Member />
            <Member />
            <Member />
        </div>
    )
}

export default Members