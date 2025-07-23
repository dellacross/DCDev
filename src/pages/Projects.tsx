import { FolderOpen, Terminal } from 'lucide-react'
import Container from '../layout/Container'

const Projects = () => {
  return (
    <Container>
        <div className='h-full flex gap-x-[50px]'>
            <div className='w-[calc(100%-450px)] flex flex-col'>
                <p className='text-white text-2xl font-mono gap-x-2 flex items-center font-bold'>
                    <FolderOpen size={32} />projects
                </p>
                <div className='flex flex-col h-full gap-y-2 bg-red-500'></div>
            </div>
            <div className='w-[400px] h-full flex flex-col'>
                <p className='text-white text-2xl font-mono gap-x-2 flex items-center font-bold'>
                    <Terminal size={32} />skills
                </p>
                <div className='flex flex-col h-full gap-y-2 bg-red-500'></div>
            </div>
        </div>
    </Container>
  )
}

export default Projects