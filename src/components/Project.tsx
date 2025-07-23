import type { ProjectType } from '../types/Project.type'

const Project = ({ name, skills }: ProjectType) => {
  return (
    <code className='w-full flex h-[25px] gap-x-2 items-center justify-between text-white text-sm'>
      <div className='flex-1'>{ name }</div>
      <div className='flex gap-x-2'>
        {
          skills.map((skill, index) => (
            <span
              key={index}
              className='inline-block px-2 py-1 rounded-full text-xs font-semibold text-white'
              style={{ backgroundColor: skill.color }}
            >
              { skill.name }
            </span>
          ))
        }
      </div>
    </code>
  )
}

export default Project