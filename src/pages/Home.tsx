import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div 
        id='home-wrapper'
        className='min-h-screen min-h-dvw h-dvw w-dvw overflow-x-hidden bg-[#191919] px-24'
    >
        <Header />
        <Banner />
        <Navbar />
        <main>

        </main>
        <Footer />
    </div>
  )
}

export default Home