import { ReactNode, useEffect } from 'react'
import { SetTabTitle } from '../utils/SetTabTitle'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const Home = ({ children }: { children: ReactNode }) => {

  const navigate = useNavigate()

  useEffect(() => {
    const page = localStorage.getItem('__pg_nm')

    if(!page) {
      const pageData = {
        name: 'Sobre mim',
        endpoint: '/about',
        color: '#46AD62'
      }
      localStorage.setItem('__pg_nm', JSON.stringify(pageData))
      SetTabTitle('Sobre mim')
      navigate('/about')
      return
    }

    const pageData = JSON.parse(page)

    navigate(pageData.endpoint)
  }, [])

  return (
    <div className='min-h-screen min-h-dvw h-dvw w-dvw overflow-hidden bg-[#191919] px-24 box-border'>
      <Header />
      <Banner />
      <Navbar />
      <main className='flex flex-col justify-center h-[calc(100dvh-340px)] py-8 box-border'>
        { children }
      </main>
      <Footer />
    </div>
  )
}

export default Home