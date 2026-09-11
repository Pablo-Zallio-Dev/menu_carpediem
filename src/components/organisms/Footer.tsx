import { MapPin } from 'lucide-react'


const Footer = () => {
  return (
    <section className=" flex flex-col gap-3 items-center py-6 bg-font text-cream ">
            <div className=" flex items-center gap-2 ">
                  <MapPin size={16} color='#CF1E3A' />
                  <p className=" text-sm ">Av. Barcelona 92, 114, 46900 Torrent</p>
            </div>
            <p className=" text-xs text-cream/50 "> Bar&Gastro - Tapas </p>
            <a href='' className=" text-[10px] text-brand-light uppercase "> instagram </a>
                  
    </section>
  )
}

export default Footer