import BtnNavMenu from '../atoms/BtnNavMenu'
import NavMenu from './NavMenu'

const NavFilterMenu = ({ textBtn, changeTextBtn }: { textBtn: string, changeTextBtn: React.Dispatch<React.SetStateAction<string>> }) => {
      const TEXT_BUTTON = [
            'toda la carta', 'entrantes', 'ensaladas', 'principales', 'postres', 'bebidas'
      ]


      return (
            <section className=" fixed z-40 bg-cream w-full max-w-xl flex flex-col justify-center py-4 px-6 mt-24 border-b border-border shadow-xl/20  ">
                  <NavMenu />
                  <div className=" flex flex-col gap-2 items-center ">
                        <div className="flex gap-3 flex-nowrap sm:flex-wrap sm:justify-center overflow-x-auto scrollbar-hide w-full sm:w-3/4 py-6 ">

                              {
                                    TEXT_BUTTON.map((btn) => (

                                          <BtnNavMenu key={btn} text={btn} select={textBtn} changeTextBtn={changeTextBtn} />
                                    ))
                              }
                        </div>
                        <div className=" flex flex-col items-center w-8 ">
                              <img src="/icon/icon_swipe.svg" alt="" className="" />
                              <p className=" text-center uppercase tracking-widest text-xs font-semibold ">desliza</p>
                        </div>
                  </div>

            </section>
      )
}

export default NavFilterMenu