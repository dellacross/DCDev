import Demo from './Tabs/Demo'
import About from './Tabs/About'
import Members from './Tabs/Members'
import Technologies from './Tabs/Technologies'

const Project = () => {

  return (
    <div className='flex h-full lg:p-2 px-2 flex-col gap-y-2 text-white'>
      <About />
      <Technologies />
      <Members />
      <Demo />
    </div>
  )
}

export default Project