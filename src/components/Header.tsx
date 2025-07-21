import { CodeXml } from 'lucide-react'

const Header = () => {
  return (
    <header className='flex items-center gap-x-5 px-5 h-8'>
        <CodeXml color='white' />
        <p className='text-center text-white'>DCDev</p>
    </header>
  )
}

export default Header