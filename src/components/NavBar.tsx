// import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CartIcon from './CartIcon'

const NavBar = () => {
  
  return (
  
    <nav className="flex justify-between items-center p-2">
      <div className="flex items-center">
        <Link href="/"><Image src="/logo.png" alt="" width={150} height={150} priority/></Link>
        <Link href="/" className="text-black font-bold mx-2 cursor-pointer">Home</Link>
        <Link href="/menu" className="text-black font-bold mx-2 cursor-pointer">Menu</Link>
        {/* not working */}
        <Link href="/contact" className="text-black font-bold mx-2 cursor-pointer">Contact Us</Link>
      
      </div>
   

      <div className="flex items-center">
        <Link href="/orders" className="text-black font-bold mx-2 cursor-pointer">Order Now
        </Link>
        <Link href="/cart" className="text-black font-bold mx-2 cursor-pointer"><CartIcon />
        </Link>
      </div>
      
    </nav>
    
  )
}

export default NavBar
