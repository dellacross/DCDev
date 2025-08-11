import { CodeXml } from 'lucide-react'
import { useMemo } from 'react'

const Header = () => {

  const page = useMemo(() => {
    const storedPage = localStorage.getItem('__pg_nm')
    return storedPage ? JSON.parse(storedPage) : { name: 'About', endpoint: '/about', color: '#46AD62' }
  }, [])

  return (
    <header className='flex items-center gap-x-5 h-[40px] bg-[#191919] box-border'>
      <CodeXml color='white' />
      <p className='text-center text-white'>DCDev |</p>
      <p className='text-center' style={{ color: page.color }}>{page.name}</p>
    </header>
  )
}

export default Header