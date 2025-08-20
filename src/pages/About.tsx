import { calculateAge } from '../utils/calculateAge'
import { useMemo } from 'react'
import Photo from '../assets/images/photo.png'
import Container from '../layout/Container'
import about from '../data/about.json'
import Curiosity from '../components/About/Curiosity'
import { AtSign, Github, Instagram, Linkedin } from 'lucide-react'

const About = () => {

    const age = useMemo(() => {
        const [dia, mes, ano] = about.birth.split('/').map(Number);
        const birthDate = new Date(ano, mes - 1, dia)
        return calculateAge(birthDate)
    }, [about])

    return (
        <Container>
            <div className='h-full flex gap-x-[50px]'>
                <aside className='h-min w-[300px] flex flex-col'>
                    <div className='flex justify-between gap-x-4 bg-[#775390] px-4 py-2 rounded-t-lg'>
                        <img 
                            src={Photo}
                            alt='photo' 
                            className='size-32 rounded-lg border-[#8D4BB9]'
                        />
                        <div className='flex flex-col text-white py-2 gap-y-1'>
                            <p className='font-semibold'>{about.profession}</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-1 bg-[#775390] rounded-b-lg px-4 py-2'>
                        <p className='text-white'>{about.fullname}</p>
                        <p className='flex gap-x-2 px-1'>
                            <span className='bg-[#ffffff] text-[#8D4BB9] px-2 py-1 rounded-md text-sm'>{`${age} anos`}</span>
                            <span className='bg-[#ffffff] text-[#8D4BB9] px-2 py-1 rounded-md text-sm'>{about.nationality}</span>
                        </p>
                    </div>
                    <div 
                        className='text-[#8D4BB9] px-2 justify-center py-2 flex bg-[#FFFFFF] gap-x-2 my-2 rounded-md cursor-pointer underline-offset-4 decoration-2 hover:underline'
                        onClick={() => {navigator.clipboard.writeText(about.email)}}
                    >
                        <AtSign />{about.email}
                    </div>
                    <div className='flex justify-center gap-6 cursor-pointer'>
                        <a 
                            className='p-2 rounded-md bg-[#000000]'
                            href={about.socials.github}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            {<Github color='#fff' />}
                        </a>
                        <a 
                            className='p-2 rounded-md bg-[#0A66C2]'
                            href={about.socials.linkedin}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            {<Linkedin color='#fff' />}
                        </a>
                        <a 
                            className='p-2 rounded-md bg-[#dd4ec5]'
                            href={about.socials.instagram}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            {<Instagram color='#fff' />}
                        </a>
                    </div>
                </aside>
                <main className='flex-1 h-full flex flex-col'>
                    <div className='flex flex-col h-[60%] gap-y-2 px-2'>
                        <p className='text-white text-sm whitespace-pre-line hyphens-auto'>
                            {about.about}
                        </p>
                    </div>
                    <div className='flex flex-col h-[40%]'>
                        <header className='flex min-h-[50px] bg-[#8D4BB930] text-[#8D4BB9] px-5 items-center text-lg'>
                            Curiosidades
                        </header>
                        <div className='grid grid-cols-5 gap-4 p-4'>
                            {about.curiosities.map(curiosity => (
                                <Curiosity 
                                    key={curiosity.id} 
                                    {...curiosity} 
                                />
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </Container>
    )
}

export default About