
const HeroImage = () => {
  return (
    <div className=' w-full h-72 mt-16 ' style={{ backgroundImage: "url('/images/hero_image.webp')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'  }}>
      <div className=" relative w-full h-full bg-font/20 ">
      <div className=" absolute bottom-6 left-5    ">
            <div className=" text-3xl font-black leading-6 ">
            <p className=" text-cream ">Come bien</p>
            <p className=" text-brand ">Vive mas</p>
            </div>
            <p className=" font-extralight text-cream ">Carta de temporada</p>
      </div>
      </div>
    </div>
  )
}

export default HeroImage