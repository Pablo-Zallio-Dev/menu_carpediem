

export interface Promotion {
      id: string;
      titulo: string;
      subtitulo: string;
      badge_texto: string;
      badge_icono: string;
      ilustracion_url: string;
      categoria: string;
      activa: boolean;
}

const PROMOTION: Promotion[] = [
      {
            "id": "promo_01",
            "titulo": "HAPPY HOUR",
            "subtitulo": "Cervezas 2×1 · Lu–Vi de 18:00 a 20:00 h",
            "badge_texto": "2×1",
            "badge_icono": "🍺",
            "ilustracion_url": "/images/image-promo.webp",
            "categoria": "PROMOCIONES",
            "activa": true
      }

]
const CardPromotion: React.FC = () => {

      const activePromotions = PROMOTION.filter((promo) => promo.activa);

      return (
            <div className=" flex flex-col gap-4">

                  {
                        activePromotions.map((promo) => (
                              <div key={promo.id} className=' grid grid-cols-4 bg-brand rounded-[14px] overflow-hidden  '>
                                    <div className=" flex flex-col gap-2 col-span-3 p-4  ">
                                          <div className="">
                                                <h3 className=" uppercase text-cream tracking-wider font-black "> {promo.titulo} </h3>
                                                <p className=" text-cream/90 text-sm "> {promo.subtitulo} </p>
                                          </div>
                                          <div className=" flex gap-1 ">
                                                <p className=" uppercase text-xl text-brand-light font-black "> {promo.badge_texto} </p>
                                                <span className=""> {promo.badge_icono} </span>
                                          </div>
                                    </div>
                                    <div className=" flex justify-center items-center w-full h-full bg-brand-dark ">
                                          <img src={promo.ilustracion_url} alt="" className=' w-1/2 ' />
                                    </div>
                              </div>
                        ))
                  }
            </div>
      )
}

export default CardPromotion