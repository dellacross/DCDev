const Member = () => {
  return (
    <div className='flex flex-col bg-[#1e1e1e] border border-[#333333] rounded-lg p-4 h-[200px] gap-y-2'>
        <div className='flex bg-[#bebebe] rounded-[50%] h-[75px] w-[75px]'></div>
        <p className='text-white m-0 px-4'>Nome do Membro</p>
        <p className='text-gray-400 text-sm m-0 px-4'>Função do Membro</p>
        <p className='text-gray-400 text-sm m-0 px-4'>Email do Membro</p>
    </div>
  )
}

export default Member