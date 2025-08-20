const Footer = () => {
  return (
    <footer className='text-white text-center lg:h-[40px] h-[20px] flex items-center justify-center box-border lg:text-lg md:text-md text-sm'>
      <p>&copy; {new Date().getFullYear()} DCDev. All rights reserved.</p>
    </footer>
  )
}

export default Footer