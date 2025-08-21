import Details from './Details'
import Technologies from './Technologies'

const Course = () => {

  return (
    <div className='flex h-full lg:p-2 px-2 flex-col gap-y-2 text-white'>
      <Details />
      <Technologies />
    </div>
  )
}

export default Course