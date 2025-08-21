import { Building2, Clock, Link } from 'lucide-react'
import { SkillsContext } from '../../pages/Skills'
import { useContext } from 'react'
import { DETAILSTAB } from '../../constants/SkillsTab.constant'

const Details = () => {

  const { 
    selectedCourse,
    tab
  } = useContext(SkillsContext)

  return (
    <div className={`${tab === DETAILSTAB ? 'flex' : 'lg:hidden'} flex-col gap-y-4 text-sm lg:h-full py-2 lg:overflow-y-auto`}>
      <div className='lg:hidden flex text-lg px-4 py-2 bg-[#29903B30] text-[#29903B] sm:mx-2 min-h-[40px]'>Detalhes</div>
      <p className='text-lg hyphens-auto'>{selectedCourse?.name}</p>
      <div className='flex gap-x-4 text-xs text-gray-400 px-2'>
        <p className='flex items-center rounded-md text-white bg-[#262626]'>
          <span className='bg-[#29903B] flex items-center justify-center h-[30px] w-[30px] rounded-l-md'><Building2 size={16} /></span>
          <span className='px-2'>{selectedCourse?.institution}</span>
        </p>
        <p className='flex items-center rounded-md text-white bg-[#262626]'>
          <span className='bg-[#29903B] flex items-center justify-center h-[30px] w-[30px] rounded-l-md'><Clock size={16} /></span>
          <span className='px-2'>{selectedCourse?.duration}</span>
        </p>
        <a 
          href={selectedCourse?.link || '#'} 
          className='flex items-center rounded-md text-white bg-[#262626]'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span className='bg-[#29903B] flex items-center justify-center h-[30px] w-[30px] rounded-l-md'><Link size={16} /></span>
          <span className='px-2'>Acessar curso</span>
        </a>
        <a 
          href={selectedCourse?.certificate || '#'} 
          className='flex items-center rounded-md text-white bg-[#262626]'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span className='bg-[#29903B] flex items-center justify-center h-[30px] w-[30px] rounded-l-md'><Link size={16} /></span>
          <span className='px-2'>Acessar certificado</span>
        </a>
      </div>
      <p className='hyphens-auto text-justify px-2 whitespace-pre-line'>
        { selectedCourse?.description }
      </p>
    </div>
  )
}

export default Details