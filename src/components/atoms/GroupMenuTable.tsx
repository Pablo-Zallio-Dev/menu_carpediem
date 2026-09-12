import { Check } from 'lucide-react'


const GroupMenuTable = ( {info}: {info:string} ) => {
      return (
            <div className="  flex gap-2 items-center ">
                  <Check size={8} color='#CF1E3A ' />
                  <p className=" text-[15px] tracking-wide font-semibold font-DMsans "> {info} </p>
            </div>
      )
}

export default GroupMenuTable