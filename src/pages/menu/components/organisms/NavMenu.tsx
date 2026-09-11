import { ChevronLeft } from 'lucide-react'

import { Link } from 'react-router-dom'

const NavMenu = () => {
  return (
    <section className=" flex items-center gap-4 py-4 ">
      <Link to={'/'}>
            <button className=" flex items-center gap-1 text-sm ">
                  <ChevronLeft size={14} />
                  Inicio 
            </button>
      </Link>
      <p className=""> Nuestra carta</p>
    </section>
  )
}

export default NavMenu