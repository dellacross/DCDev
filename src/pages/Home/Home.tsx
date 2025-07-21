import { CodeXml, House } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div 
        id='home-wrapper'
        className='min-h-screen min-h-dvw h-dvw w-dvw overflow-x-hidden bg-[#191919] px-24'
    >
        <header className='flex items-center gap-x-5 px-5 h-8'>
            <CodeXml color='white' />
            <p className='text-center text-white'>DCDev</p>
        </header>
        <div className='w-full flex flex-col justify-end align-items-center gap-y-6 py-5 h-52'>
            <span className='px-8'><CodeXml size={72} color='#ffffff'/></span>
            <p className='text-white text-3xl font-mono'>Welcome to DCDev</p>
        </div>
        <nav className='flex items-center justify-center gap-x-5 h-16 border-y-2 border-[#222222] px-8'>
            <a href='#' className='flex text-white w-64 justify-center items-center gap-x-4 text-[#27A5F1] underline underline-offset-4 decoration-2'>
                <span><House /></span>
                <p>Home</p>
            </a>
            <a href='#' className='flex text-white w-64 justify-center items-center gap-x-4 text-[#27A5F1] underline underline-offset-4 decoration-2'>
                <span><House /></span>
                <p>Home</p>
            </a>
            <a href='#' className='flex text-white w-64 justify-center items-center gap-x-4 text-[#27A5F1] underline underline-offset-4 decoration-2'>
                <span><House /></span>
                <p>Home</p>
            </a>
            <a href='#' className='flex text-white w-64 justify-center items-center gap-x-4 text-[#27A5F1] underline underline-offset-4 decoration-2'>
                <span><House /></span>
                <p>Home</p>
            </a>
        </nav>
        <main></main>
        <footer></footer>
    </div>
  )
}

export default Home