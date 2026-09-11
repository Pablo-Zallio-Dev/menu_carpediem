import React from 'react'

const SectionDivider = ( {section}: {section: string} ) => {
  return (
    <div className=" grid grid-cols-3 justify-items-center items-center my-5 ">
      <div className=" w-full border-t border-sectionDivider/30 "></div>
      <h3 className=' w-full text-center uppercase text-[10px] tracking-widest text-sectionDivider '> {section} </h3>
      <div className=" w-full border-t border-sectionDivider/30 "></div>
    </div>
  )
}

export default SectionDivider