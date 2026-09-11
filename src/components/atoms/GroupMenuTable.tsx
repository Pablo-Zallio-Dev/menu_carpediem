import { Check } from 'lucide-react'
import React from 'react'

const GroupMenuTable = ( {info}: {info:string} ) => {
      return (
            <div className="  flex gap-2 items-center ">
                  <Check size={8} color='#CF1E3A ' />
                  <p className=" text-sectionDivider text-[11px] font-DMsans "> {info} </p>
            </div>
      )
}

export default GroupMenuTable