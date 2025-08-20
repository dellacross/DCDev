import { CodeXml } from 'lucide-react'

const Banner = () => {
  return (
    <div className='w-full flex flex-col justify-end align-items-center gap-y-6 py-5 h-[200px] box-border'>
      <span className='px-8'><CodeXml size={72} color='#ffffff'/></span>
      <p className='text-white text-3xl font-mono'>Olá! Seja bem-vindo ao DCDev, meu portfólio profissional!</p>
    </div>
  )
}

export default Banner