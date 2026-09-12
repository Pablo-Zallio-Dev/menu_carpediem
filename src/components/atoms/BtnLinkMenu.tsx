import { Link } from "react-router-dom"

const BtnLinkMenu = () => {
      return (

                  <Link to="/menu" className={` flex justify-center py-4  w-full  bg-brand text-cream text-lg uppercase font-extrabold rounded-[14px] `}>
                        Ver carta completa / Menú
                  </Link>



      )
}

export default BtnLinkMenu