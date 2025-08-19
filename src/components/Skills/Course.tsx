import { DETAILSTAB, TECHNOLOGIESTAB } from '../../constants/SkillsTab.constant'
import { SkillsContext } from '../../pages/Skills'
import { useContext } from 'react'
import Details from './Details'
import Technologies from './Technologies'

const Course = () => {

  const { tab } = useContext(SkillsContext)

  return (
    <div className='flex h-full p-2 flex-col gap-y-2 overflow-y-hidden text-white'>
      { tab === DETAILSTAB && <Details /> }
      { tab === TECHNOLOGIESTAB && <Technologies /> }
    </div>
  )
}

export default Course