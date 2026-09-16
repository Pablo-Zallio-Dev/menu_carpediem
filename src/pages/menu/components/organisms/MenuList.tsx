import { ALERGENOS } from "../../../../data/alergenos"
import type { Plato } from "../../../../hooks/useMenuData"

const MenuList = ({ itemMenu }: { itemMenu: Plato }) => {
      console.log(itemMenu)
      const codigosAlergenos = itemMenu.alergenos
            .split(',')
            .map(a => a.trim().toLowerCase())
            .map(a => ALERGENOS[a])
            .filter(Boolean) // por si algún alérgeno no está en el diccionario, lo descarta en vez de mostrar "undefined"

      return (


            <div className={` rounded-2xl overflow-hidden w-full max-w-md border border-border/80 shadow-lg/20 `}>
                  <div className=" relative ">
                        <img src={` ${itemMenu.imagen === 'ok' ?`/images/image_menu/${itemMenu.id}.webp` :'/images/logo.webp'} `} alt="" className={`  w-full h-70 ${ itemMenu.categoria === 'bebidas' ?'object-contain bg-white' :'object-cover' } `} />
                        {
                              itemMenu.badge &&
                              <div className=" absolute top-3 left-3 py-1 px-1.5 rounded-full bg-brand tracking-wider ">
                                    <p className=" text-[10px] text-cream font-semibold uppercase "> {itemMenu.badge} </p>
                              </div>
                        }
                  </div>
                  <div className=" pt-6 pb-4.5 px-4.5 bg-bgCard ">
                        <div className=" grid grid-cols-3   ">
                              <h2 className={`  col-span-2 font-semibold ${itemMenu.categoria === 'bebidas' ?'text-xl' :' text-2xl '} leading-6  `}> {itemMenu.nombre} </h2>
                              <span className=" text-brand font-bold justify-self-end  "> {itemMenu.precio} </span>
                              <h3 className=" text-[10px] font-bold uppercase py-1.5 "> {itemMenu.categoria} </h3>
                        </div>
                        <p className=" pt-2 pb-3 border-b border-border text-sectionDivider "> {itemMenu.descripcion} </p>
                              {
                                    itemMenu.alergenos &&
                        <div className=" flex items-center gap-3 w-full pt-2 ">
                              <p className=" text-[10px] uppercase text-sectionDivider font-bold ">alérgenos:</p>
                              <div className=" flex flex-wrap gap-2 ">
                                    {codigosAlergenos.map((alergeno) => (
                                          <span key={alergeno} className=" text-xs text-sectionDivider px-1 bg-bgCard border border-border/80 rounded-sm ">{alergeno}</span>
                                    ))}
                              </div>
                        </div>
                              }
                  </div>
            </div>
      )
}

export default MenuList