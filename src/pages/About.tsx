import { calculateAge } from '../utils/calculateAge'
import { useMemo } from 'react'
import Photo from '../assets/images/photo.png'
import Container from '../layout/Container'

const About = () => {

    const age = useMemo(() => {
        const birthDate = new Date(2001, 2, 2)
        return calculateAge(birthDate)
    }, [])

    return (
        <Container>
            <div className='h-full flex gap-x-[50px]'>
                <aside className='h-min w-[300px] flex flex-col p-4 bg-[#775390] rounded-lg'>
                    <div className='flex justify-between mb-4 gap-x-4'>
                        <img 
                            src={Photo}
                            alt='photo' 
                            className='w-[110px] rounded-lg border-[#8D4BB9]'
                        />
                        <div className='flex flex-col text-white py-2 gap-y-1'>
                            <p className='font-semibold'>Desenvolvedor Full Stack</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-1'>
                        <p className='text-white'>Victor Della Croce Maltez</p>
                        <p className='flex gap-x-2 px-1'>
                            <span className='bg-[#ffffff] text-[#8D4BB9] px-2 py-1 rounded-md text-sm'>{`${age} anos`}</span>
                            <span className='bg-[#ffffff] text-[#8D4BB9] px-2 py-1 rounded-md text-sm'>Brasileiro</span>
                        </p>
                    </div>
                </aside>
                <main className='flex-1 h-full flex w-full flex-col'>
                    <div className='flex flex-col w-full h-[60%] gap-y-2 px-2'>
                        <p className='text-white text-sm'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor magna, ullamcorper eu elementum id, aliquam a lectus. Cras sollicitudin tortor non erat consequat, et pharetra lorem aliquam. Phasellus imperdiet malesuada mi, non ornare urna viverra in. Sed ut iaculis est. Praesent non luctus est, et sodales risus. Suspendisse id facilisis mauris. Mauris gravida elit vel sapien eleifend, tincidunt euismod leo sagittis. Aliquam sollicitudin sapien nunc, non sodales dui suscipit ut. Cras suscipit nulla sed justo blandit, vitae tempor leo mollis. Proin ac lectus sed leo rhoncus imperdiet non non orci. Vivamus eu nulla ac lectus aliquam hendrerit ac sed lacus. Suspendisse pellentesque gravida turpis molestie mattis. Nullam id porttitor magna. Sed eget quam massa. Ut lectus metus, facilisis id volutpat at, consequat interdum tellus.
                        </p>
                        <p className='text-white text-sm'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor magna, ullamcorper eu elementum id, aliquam a lectus. Cras sollicitudin tortor non erat consequat, et pharetra lorem aliquam. Phasellus imperdiet malesuada mi, non ornare urna viverra in. Sed ut iaculis est. Praesent non luctus est, et sodales risus. Suspendisse id facilisis mauris. Mauris gravida elit vel sapien eleifend, tincidunt euismod leo sagittis. Aliquam sollicitudin sapien nunc, non sodales dui suscipit ut. Cras suscipit nulla sed justo blandit, vitae tempor leo mollis. Proin ac lectus sed leo rhoncus imperdiet non non orci. Vivamus eu nulla ac lectus aliquam hendrerit ac sed lacus. Suspendisse pellentesque gravida turpis molestie mattis. Nullam id porttitor magna. Sed eget quam massa. Ut lectus metus, facilisis id volutpat at, consequat interdum tellus.
                        </p>
                    </div>
                    <div className='flex flex-col w-full h-[40%]'>
                        <header className='flex w-full h-[50px] bg-[#8D4BB930] text-[#8D4BB9] px-5 items-center text-lg'>
                            Curiosidades
                        </header>
                        <div className='flex flex-col gap-y-2 p-2'>
                            <p className='text-white text-sm'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor magna, ullamcorper eu elementum id, aliquam a lectus. Cras sollicitudin tortor non erat consequat, et pharetra lorem aliquam. Phasellus imperdiet malesuada mi, non ornare urna viverra in. Sed ut iaculis est. Praesent non luctus est, et sodales risus. Suspendisse id facilisis mauris. Mauris gravida elit vel sapien eleifend, tincidunt euismod leo sagittis. Aliquam sollicitudin sapien nunc, non sodales dui suscipit ut. Cras suscipit nulla sed justo blandit, vitae tempor leo mollis. Proin ac lectus sed leo rhoncus imperdiet non non orci. Vivamus eu nulla ac lectus aliquam hendrerit ac sed lacus. Suspendisse pellentesque gravida turpis molestie mattis. Nullam id porttitor magna. Sed eget quam massa. Ut lectus metus, facilisis id volutpat at, consequat interdum tellus.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </Container>
    )
}

export default About