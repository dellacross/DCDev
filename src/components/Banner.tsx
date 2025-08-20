import { CodeXml } from 'lucide-react'

const Banner = () => {
  return (
    <div className='w-full flex md:justify-start items-center text-white md:gap-y-6 gap-x-5 px-5 md:py-5 md:h-[200px] sm:h-[150px] h-[100px] box-border'>
      <CodeXml size={72} color='#ffffff'/>
      <p className='flex flex-col leading-none'>
        <span className='text-4xl sm:text-3xl md:text-5xl'>DCDev</span>
        <span className='text-md md:text-lg px-3 hidden sm:block'>Meu portfólio profissional</span>
      </p>
    </div>
  )
}

export default Banner