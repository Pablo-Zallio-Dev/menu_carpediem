import { MapPin } from 'lucide-react'


const Footer = () => {
      return (
            <section className=" flex flex-col gap-3 items-center py-6 bg-font text-cream ">
                  <a href="https://www.google.com/maps/search/?api=1&query=Calle+del+Carmen+14+Madrid" target="_blank" rel="noopener noreferrer" className=" flex items-center gap-2 ">

                        <MapPin size={16} color='#CF1E3A' />
                        <p className=" text-sm ">Av. Barcelona 92, 114, 46900 Torrent</p>
                  </a>
                  <p className=" text-xs text-cream/50 "> Bar&Gastro - Tapas </p>
                  <a href='https://www.instagram.com/carpediemtorrent/' className=" text-[10px] text-brand-light uppercase "> instagram </a>

            </section>
      )
}

export default Footer