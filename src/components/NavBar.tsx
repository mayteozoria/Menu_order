import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CartIcon from './CartIcon'

const NavBar = () => {
  
  return (
    <nav className="flex justify-between items-center p-2">

      <div className="flex items-center">
            <Link href="/"  ><Image src="/logo.png" alt="" width={150} height={150} />
            </Link>

            {/* <Link href="/">
              <span className="text-black font-bold mx-2 cursor-pointer">Home</span>
            </Link> */}
    
    
          <Link href="/menu" className="text-black font-bold mx-2 cursor-pointer">
           Menu
          </Link>
    
 
        <Link href="/about" className="text-black font-bold mx-2 cursor-pointer">About
        </Link>
   
   
        <Link href="/contact" className="text-black font-bold mx-2 cursor-pointer">
          Contact
        </Link>
      </div>
   

      <div className="flex items-center">
        <Link href="/order" className="text-black font-bold mx-2 cursor-pointer">Order Now
        </Link>
        <Link href="/search" className="text-black font-bold mx-2 cursor-pointer">
          Search
        </Link>
        <Link href="/cart" className="text-black font-bold mx-2 cursor-pointer"><CartIcon />
        </Link>
      </div>
      
    </nav>
  )
}

export default NavBar
