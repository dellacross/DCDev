import { AtSign, Github, Instagram, Linkedin } from 'lucide-react'
import { calculateAge } from '../utils/calculateAge'
import { useMemo } from 'react'
import about from '../data/about.json'
import Photo from '../assets/images/photo.png'
import Container from '../layout/Container'
import Curiosity from '../components/About/Curiosity'
import TextContainer from '../components/TextContainer'
import HighlightedLabel from '../components/HighlightedLabel'

const About = () => {

    const age = useMemo(() => {
        const [dia, mes, ano] = about.birth.split('/').map(Number);
        const birthDate = new Date(ano, mes - 1, dia)
        return calculateAge(birthDate)
    }, [])

    return (
        <Container>
            <div className='h-full flex xl:gap-x-[50px] lg:gap-x-[30px] md:gap-x-[15px] lg:flex-row flex-col gap-y-2 max-lg:overflow-y-auto'>
                <aside className='h-min w-[300px] flex flex-col max-lg:mx-auto max-lg:w-[50%] max-md:w-full max-md:px-4'>
                    <div className='flex justify-between gap-x-4 bg-[#775390] px-4 py-2 rounded-t-lg'>
                        <img 
                            src={Photo}
                            alt='about-photo' 
                            className='size-32 rounded-lg border-[#8D4BB9]'
                        />
                        <div className='flex flex-col text-white py-2 gap-y-1 flex-1 font-semibold'>
                            {about.profession}
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-1 bg-[#775390] rounded-b-lg px-4 py-2 w-full max-lg:items-center'>
                        <p className='text-white'>{about.fullname}</p>
                        <p className='flex gap-x-2 px-1'>
                            <span className='bg-[#ffffff] text-[#8D4BB9] px-2 py-1 rounded-md text-sm'>{`${age} anos`}</span>
                            <span className='bg-[#ffffff] text-[#8D4BB9] px-2 py-1 rounded-md text-sm'>{about.nationality}</span>
                        </p>
                    </div>
                    <div 
                        className='text-[#8D4BB9] p-2 justify-center flex bg-[#FFFFFF] gap-x-2 my-2 rounded-md cursor-pointer underline-offset-4 decoration-2 hover:underline'
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
                <main className='flex flex-1 h-full w-[calc(100% - 300px)] gap-y-4 max-md:flex-col '>
                    <div className='flex flex-col gap-y-2 px-2'>
                        <HighlightedLabel label={`Olá, meu nome é ${about.name}!`} color='#8D4BB9' />
                        <TextContainer content={about.about} />
                    </div>
                    <div className='flex flex-col min-w-[300px]'>
                        <HighlightedLabel label='Curiosidades' color='#8D4BB9' />
                        <div className='flex flex-col gap-y-4 py-2 px-1 lg:overflow-y-auto'>
                            {
                                about.curiosities.map(curiosity => (
                                    <Curiosity key={curiosity.id} {...curiosity} />
                                ))
                            }
                        </div>
                    </div>
                </main>
            </div>
        </Container>
    )
}

export default About