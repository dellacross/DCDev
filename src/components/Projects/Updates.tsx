import { ProjectContext } from '../../pages/Projects'
import { useContext } from 'react'
import Update from './Update'

const Updates = () => {

    const { 
        selectedProject, 
        tab 
    } = useContext(ProjectContext)

    return (
        <div className='h-full w-full p-4'>
            <header className='flex h-[25px] overflow-hidden border-b border-[#222222] text-[#bebebe]'>
                <div className='flex w-[200px] h-full text-sm'>Log Level</div>
                <div className='flex w-[300px] h-full text-sm'>Timestamp</div>
                <div className='flex w-full h-full text-sm'>Log Message</div>
            </header>
            <main className='flex flex-col h-full w-full overflow-y-auto'>
                <Update />
                <Update />
                <Update />
                <Update />
                <Update />
                <Update />
                <Update />
                <Update />
                <Update />
                <Update />
                <Update />
                <Update />
                <Update />
                <Update />
                <Update />
                <Update />
                <Update />
                <Update />
                <Update />
                <Update />
                <Update />
                <Update />
                <Update />
                <Update />
            </main>
        </div>
    )
}

export default Updates