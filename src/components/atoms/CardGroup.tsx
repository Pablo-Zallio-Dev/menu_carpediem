
import GroupMenuTitle from './GroupMenuTitle';
import GroupMenuTable from './GroupMenuTable';

export interface GroupMenu {
      id: string;
      titulo: string;
      icono: string;
      precio: number;
      moneda: string;
      unidad_precio: string;
      minimo_personas: number;
      incluye: string[];
      condiciones: string[];
      disponible: boolean;
}

const GROUP: GroupMenu[] = [
      {
            "id": "group_menu_01",
            "titulo": "MENÚ GRUPO BÁSICO",
            "icono": "👥",
            "precio": 22.00,
            "moneda": "€",
            "unidad_precio": "p.p.",
            "minimo_personas": 8,
            "incluye": [
                  "2 entrantes para compartir",
                  "Principal a elegir",
                  "Postre del día",
                  "Bebida incluida"
            ],
            "condiciones": [
                  "Reserva previa obligatoria",
                  "Mínimo 48 h de antelación"
            ],
            "disponible": true
      },
      {
            "id": "group_menu_02",
            "titulo": "MENÚ GRUPO PREMIUM",
            "icono": "🥂",
            "precio": 35.00,
            "moneda": "€",
            "unidad_precio": "p.p.",
            "minimo_personas": 8,
            "incluye": [
                  "3 entrantes para compartir",
                  "Principal a elegir",
                  "Postre a elegir",
                  "Vino + agua + café"
            ],
            "condiciones": [
                  "Reserva previa obligatoria",
                  "Mínimo 48 h de antelación"
            ],
            "disponible": true
      }
]


const CardGroup: React.FC = () => {

      const activeMenuGroup = GROUP.filter((group) => group.disponible)
      return (
            <div className=' flex flex-col gap-6 ' >
                  {
                        activeMenuGroup.map((menu) => (
                              <div className=" bg-bgCard border border-border rounded-2xl p-4 ">
                                    <div className=" flex flex-col gap-1 " >
                                          <div className=" flex items-center justify-between ">
                                                <div className=" flex gap-1 items-center ">
                                                      {menu.icono}
                                                      <GroupMenuTitle title={menu.titulo} />
                                                </div>
                                                <span className=" font-black text-brand ">{menu.precio.toFixed(2)}{menu.moneda} / {menu.unidad_precio}</span>
                                          </div>
                                          <p className=" text-xs text-sectionDivider font-DMsans "> min {menu.minimo_personas} personas. </p>
                                    </div>
                                    <hr className=' border border-border my-3 ' />
                                    <div className=" flex flex-col text-2xl ">
                                          {
                                                menu.incluye.map((include) => (
                                                      <GroupMenuTable info={include} />
                                                ))
                                          }
                                          <div className=" flex flex-col gap-1 mt-2 ">
                                                <p className=" text-DM text-sectionDivider text-xs font-bold">
                                                      {menu.condiciones.join(' - ')}
                                                </p>
                                          </div>
                                    </div>
                              </div>
                        ))
                  }
            </div>
      )
}

export default CardGroup