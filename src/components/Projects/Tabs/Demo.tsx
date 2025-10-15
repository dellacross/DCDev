import { ProjectContext } from '../../../pages/Projects'
import { useContext } from 'react'
import { DEMOTAB } from '../../../constants/ProjectTab.constant'
import { AspectRatio } from '@chakra-ui/layout'

const Demo = () => {

    const { 
        selectedProject,
        tab
    } = useContext(ProjectContext)

    return (
        <div className={`${tab === DEMOTAB ? 'flex' : 'hidden'} flex-col gap-4 text-sm text-white px-2 pt-2 pb-4 items-center box-border`}>
            <div className='w-full'>                        
                <header className={`flex text-lg px-4 py-2 bg-[#DEA52230] text-[#DEA522] min-h-[50px] items-center $lg:hidden sm:mx-2 w-max mb-2`}>
                    Demo
                </header>
                <article className='flex gap-2'>
                    <div className='flex-1'>
                        <AspectRatio maxH={370} ratio={16/9} width='100%'>
                            <iframe
                                title='naruto'
                                src={selectedProject?.demo?.link}
                                allowFullScreen
                            />
                        </AspectRatio>
                    </div>
                    <section className='flex flex-1 px-2 overflow-y-auto max-h-[370px] hyphens-auto'>
                        {selectedProject?.demo?.description}
                    </section>
                </article>
            </div>
        </div>
    )
}

export default Demo