import SectionDivider from '../atoms/SectionDivider'

const Timetable = () => {
  return (
    <div>
      <SectionDivider section={'nuestros espacios'} />
       <div className=" flex flex-col gap-3 bg-bgCard border border-border rounded-2xl p-4 ">
            <h3 className=" uppercase font-black text-xs ">horarios</h3>
            <div className=" flex flex-col gap-1 text-sm font-semibold text-sectionDivider  ">
                  <p className=" ">Lu–Vi · 13:00–16:00 / 20:00–00:00</p>
                  <p className=" ">Sa–Do · 13:00–00:30</p>
            </div>
       </div>
    </div>
  )
}

export default Timetable