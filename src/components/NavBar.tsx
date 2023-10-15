import React from 'react'
import Link from 'next/link'
import Menu from './Menu'

const NavBar = () => {
  
  return (
    <div className="h-12 text-blue-500 p-4 flex items-center justify-between border-b-2 border-b-blue-500 uppercase md:h-24 lg:px-20 xl:px-40">
     
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <Menu />

      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
   
  
        </div>
      </div>
      </div>
  )
}

export default NavBar
