import { SkillType } from "../../types/Skill.type"

const Tech = ({ name, color }: SkillType) => {
  return (
    <div className='flex flex-col gap-y-1 px-2 py-1 rounded-md bg-[#262626] min-w-[150px]'>
        <p className='text-sm'>Field</p>
        <p className='px-2 py-1 rounded-md' style={{ backgroundColor: color }}>{name}</p>
    </div>
  )
}

export default Tech