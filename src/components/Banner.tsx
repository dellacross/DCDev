import { CodeXml } from 'lucide-react'

const Banner = () => {
  return (
    <div className='w-full flex flex-col justify-end align-items-center gap-y-6 py-5 h-52'>
        <span className='px-8'><CodeXml size={72} color='#ffffff'/></span>
        <p className='text-white text-3xl font-mono'>Welcome to DCDev</p>
    </div>
  )
}

export default Banner