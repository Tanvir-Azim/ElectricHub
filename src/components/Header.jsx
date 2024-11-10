import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav'


function Header() {
  return (
    <>
        <div className='flex justify-between px-5 w-full h-10 bg-gray-200 items-center'>
            <div className='w-28 p-2 place-items-start lg:ml-28 xl:ml-28 2xl:ml-28 '>
                <NavLink to='/'>
                    <div className='ring ring-ofset-2 ring-black w-[100px]'><span className='bg-blue-500 px-0.5 pb-0.5 text-white font-bolt'>Tanvir </span>Store</div>
                </NavLink>
            </div>

            <div>
                <Nav/>

            </div>
        </div>
    </>
  )
}

export default Header