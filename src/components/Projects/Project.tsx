import About from './About'
import Members from './Members'
import Technologies from './Technologies'

const Project = () => {

  return (
    <div className='flex h-full lg:p-2 px-2 flex-col gap-y-2 text-white'>
      <About />
      <Technologies />
      <Members />
    </div>
  )
}

export default Project