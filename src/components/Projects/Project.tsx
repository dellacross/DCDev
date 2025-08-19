import { ABOUTTAB, MEMBERSTAB, TECHNOLOGIESTAB, UPDATESTAB } from '../../constants/ProjectTab.constant'
import { ProjectContext } from '../../pages/Projects'
import { useContext } from 'react'
import About from './About'
import Members from './Members'
import Updates from './Updates'
import Technologies from './Technologies'

const Project = () => {

  const { tab } = useContext(ProjectContext)

  return (
    <div className='flex h-full p-2 flex-col gap-y-2 overflow-y-hidden text-white'>
      { tab === ABOUTTAB && <About /> }
      { tab === TECHNOLOGIESTAB && <Technologies /> }
      { tab === MEMBERSTAB && <Members /> }
    </div>
  )
}

export default Project