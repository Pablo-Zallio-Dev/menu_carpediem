import { Dot } from "lucide-react"
import IconAlert from "../atoms/IconAlert"

const Error = ({ error }: { error: string }) => {
      return (
            <section className=" flex flex-col items-center justify-center my-12 py-4 ">
                  <IconAlert />
                  <div className=" flex flex-col items-center mt-8 ">
                        <h3 className=" pb-1 uppercase font-DMsans text-brand text-xs tracking-widest font-black ">carpe diem</h3>
                        <p className=" pb-3 font-black">Algo salio mal</p>
                        <p className=" max-w-64 text-center font-DMsans text-xs text-sectionDivider ">No hemos podido cargar la carta en este momento. Comprueba tu conexión e inténtalo de nuevo.</p>
                        <div className=" flex items-center justify-between mt-3 border border-border bg-bgCard py-.5 px-2.5 rounded-full text-[10px] uppercase tracking-wider ">
                              <Dot color="#CF1E3A" className="p-0" />
                              <p className="">{error}</p>
                        </div>
                        <button className="flex justify-center py-4 mt-8  w-full  bg-brand text-cream text-sm uppercase font-extrabold rounded-[14px]" onClick={() => window.location.reload()}>Reintentar</button>
                  </div>
            </section>
      )
}

export default Error