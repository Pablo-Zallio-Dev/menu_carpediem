import ImageLogo from '../atoms/ImageLogo'
import BrandName from '../atoms/BrandName'

const Logo = () => {
  return (
    <div className=" flex items-center gap-2">
      <ImageLogo />
      <BrandName />
    </div>
  )
}

export default Logo