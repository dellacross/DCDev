import { Building2, Calendar, GraduationCap, Link, Lock, ShieldCheck } from 'lucide-react'
import { EducationalContext } from '../../pages/Educational'
import { useContext } from 'react'
import TextContainer from '../TextContainer'
import Badge from './Badge'

const Experience = () => {

  const { selectedExperience } = useContext(EducationalContext)

  return (
    <main className='flex-1 lg:h-full flex w-full flex-col bg-[#262626] rounded-lg p-4 max-lg:overflow-y-auto'>
      <p className='text-white text-lg font-semibold'>{selectedExperience?.name}</p>
      <div className='px-4 py-2 gap-4 flex max-md:flex-col md:grid grid-cols-3 2xl:flex w-full'>
        <Badge 
          label={selectedExperience?.institution || ''}
          color='#C91634'
          icon={<Building2 size={16} />}
          extraclass='col-span-3'
          url={selectedExperience?.institutionUrl || ''}
          conditional={true}
        />
        <Badge 
          label={selectedExperience?.duration || ''}
          color='#C91634'
          icon={<Calendar size={16} />}
          extraclass='col-span-1'
          conditional={true}
        />
        <Badge 
          label='Trancado'
          color='#C91634'
          icon={<Lock size={16} />}
          extraclass='col-span-1'
          conditional={selectedExperience?.unfinished || false}
        />
        <Badge 
          label='Concluído'
          color='#C91634'
          icon={<GraduationCap size={16} />}
          extraclass='col-span-1'
          conditional={selectedExperience?.completed || false}
        />
        <Badge 
          label='Certificado'
          color='#C91634'
          icon={<ShieldCheck size={16} />}
          extraclass='col-span-1'
          url={selectedExperience?.certificate || '#'}
          conditional={!!selectedExperience?.certificate}
        />
        <Badge 
          label='Sobre o curso'
          color='#C91634'
          icon={<Link size={16} />}
          extraclass='col-span-1'
          url={selectedExperience?.link}
          conditional={true}
        />
      </div>
      <div className={`flex text-lg px-4 py-2 bg-[#C9163430] text-[#C91634] min-h-[50px] items-center`}>
        Minha trajetória no curso
      </div>
      <TextContainer content={selectedExperience?.description} />
    </main>
  )
}

export default Experience