const Loading = () => {
  return (
    <section className=" flex flex-col items-center gap-6 w-full py-40">
      <img src="/public/images/logo.webp" alt="" className=" w-40 " />
      <div className=" flex flex-col items-center w-full gap-2  ">
            <h3 className=" uppercase font-black tracking-[.25rem]">cargando carta</h3>
            <p className=" font-DMsans text-xs text-sectionDivider ">Un momento por favor...</p>
      </div>
    </section>
  )
}

export default Loading