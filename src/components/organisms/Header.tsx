import BtnReserve from "../atoms/BtnReserve"
import Logo from "../molecules/Logo"

const Header = () => {
  return (
    <div className=" fixed top-0 z-500 flex items-center justify-between px-2 md:p-0 w-full max-w-xl bg-cream border-b border-border ">
      <Logo />
      <BtnReserve />
      
    </div>
  )
}

export default Header