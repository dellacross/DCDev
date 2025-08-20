import { CodeXml } from 'lucide-react'

const Banner = () => {
  return (
    <div className='w-full flex flex-col md:justify-end justify-center md:gap-y-6 md:py-5 md:h-[200px] h-[150px] box-border'>
      <span className='lg:px-8 px-2'><CodeXml size={72} color='#ffffff'/></span>
      <p className='text-white font-mono flex xl:text-3xl lg:text-2xl md:text-xl text-sm'>Olá! Seja bem-vindo ao DCDev, meu portfólio profissional!</p>
    </div>
  )
}

export default Banner