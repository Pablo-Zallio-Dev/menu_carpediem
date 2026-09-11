import React from 'react'

const Container = ({ children }: { children: React.ReactNode }) => {
      return (
            <div className=' flex flex-col items-center w-full '>
                  <div className=" flex flex-col justify-between min-h-screen w-full max-w-xl ">
                        {children}

                  </div>
            </div>
      )
}

export default Container