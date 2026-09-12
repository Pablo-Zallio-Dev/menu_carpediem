import { ChevronLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const NavMenu = () => {
  return (
    <section className=" fixed z-50 bg-cream w-full max-w-xl   flex items-center gap-4 py-4 ">
      <Link to={'/'}>
            <button className=" flex items-center gap-1 ">
                  <ChevronLeft size={14} />
                  Inicio 
            </button>
      </Link>
      <p className=" text-lg "> Nuestra carta</p>
    </section>
  )
}

export default NavMenu