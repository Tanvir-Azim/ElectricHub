import React from 'react'

function Trusted() {
  return (
    <>
    <div className='h-52 w-full bg-[#EFEFEF] small:h-[550px]'>
        <h1 className=' text-center  font-bold  text-gray-500 pt-5'>Trusted By 1000+ Compaines</h1>
        <div className=' flex justify-around place-items-center h-40 w-[70%] mx-auto small:flex-col '>
            <div>
              <img src='./images/logo1.jpg' className=' h-32 w-32  rounded-full'/>
            </div>

            <div>
              <img src='./images/logo2.jpg' className=' h-32 w-32 rounded-full'/>
            </div>

            <div>
              <img src='./images/logo3.jpg' className=' h-32 w-32 rounded-full'/>
            </div>

            <div className='xs:hidden sm:hidden'>
              <img src='./images/logo4.png' className=' h-32 w-32 rounded-full'/>
            </div>
            
        </div>

    </div>
    </>
  )
}

export default Trusted