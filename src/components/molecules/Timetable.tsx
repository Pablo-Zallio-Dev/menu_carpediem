import React from 'react'
import SectionDivider from '../atoms/SectionDivider'

const Timetable = () => {
  return (
    <div>
      <SectionDivider section={'nuestros espacios'} />
       <div className=" flex flex-col gap-3 bg-bgCard border border-border rounded-2xl p-4 ">
            <h3 className=" uppercase font-black text-xs ">horarios</h3>
            <div className=" flex flex-col gap-1 ">
                  <p className=" text-[10px] text-sectionDivider ">Lu–Vi · 13:00–16:00 / 20:00–00:00</p>
                  <p className=" text-[10px] text-sectionDivider ">Sa–Do · 13:00–00:30</p>
            </div>
       </div>
    </div>
  )
}

export default Timetable