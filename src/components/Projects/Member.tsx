import { MemberType } from "../../types/Member.type"

const Member = ({ name, email, roles, image }: MemberType) => {
  return (
    <div className='flex flex-col bg-[#1e1e1e] border border-[#333333] rounded-lg p-4 h-[200px] gap-y-2'>
      <div className='flex bg-[#bebebe] rounded-[50%] h-[75px] w-[75px]'></div>
      <p className='text-white m-0 px-4'>{ name }</p>
      <p className='text-gray-400 text-sm m-0 px-4'>
        {
          roles?.map((role, index) => (
            <span 
              key={index} 
              className='inline-block bg-[#333333] text-white rounded px-2 py-1 mr-1'
            >
              { role }
            </span>
          ))
        }
      </p>
      <p className='text-gray-400 text-sm m-0 px-4'>{ email }</p>
    </div>
  )
}

export default Member