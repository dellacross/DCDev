import { CodeXml } from 'lucide-react'

const Banner = () => {
  return (
    <div className='w-full flex flex-col justify-end align-items-center gap-y-6 py-5 h-[200px] box-border'>
      <span className='lg:px-8 px-2'><CodeXml size={72} color='#ffffff'/></span>
      <p className='text-white font-mono flex xl:text-3xl lg:text-2xl text-md'>Olá! Seja bem-vindo ao DCDev, meu portfólio profissional!</p>
    </div>
  )
}

export default Banner