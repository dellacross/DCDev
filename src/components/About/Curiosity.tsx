import { CuriosityType } from "../../types/Curiosity.type"

const Curiosity = ({ field, description, icon }: CuriosityType) => {
  return (
    <div className='flex flex-col items-center h-full text-white rounded-md bg-[#262626] px-4 py-2'>
        <div className='flex gap-x-2 font-semibold w-full p-2'>
          <span>{ icon }</span>
          <p>{ field }</p>
        </div>
        <div className='text-sm hyphens-auto'>{ description }</div>
    </div>
  )
}

export default Curiosity