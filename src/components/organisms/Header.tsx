import Logo from "../molecules/Logo"

const Header = () => {
  return (
    <div className=" fixed top-0 z-500 flex items-center justify-around px-2 md:p-0 w-full  bg-cream border-b border-border ">
      <Logo />
      {/* <BtnReserve /> */}
      
    </div>
  )
}

export default Header