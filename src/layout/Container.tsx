import { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const Home = ({ children }: { children: ReactNode }) => {
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