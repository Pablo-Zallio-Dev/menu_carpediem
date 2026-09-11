import BtnNavMenu from '../atoms/BtnNavMenu'

const NavFilterMenu = ( { textBtn, changeTextBtn }: {textBtn: string, changeTextBtn: React.Dispatch<React.SetStateAction<string>>} ) => {
      const TEXT_BUTTON = [
            'toda la carta', 'entrantes', 'ensaladas', 'principales', 'postres', 'bebidas'
      ]


  return (
    <section className=" flex justify-center py-2 border-b border-border ">
      <div className="flex gap-3 flex-nowrap sm:flex-wrap sm:justify-center overflow-scroll sm:w-3/4 ">

      {
            TEXT_BUTTON.map((btn) => (
            
                  <BtnNavMenu key={btn} text={btn} select={textBtn} changeTextBtn={changeTextBtn}/>
            ))
      }
      </div>
    </section>
  )
}

export default NavFilterMenu