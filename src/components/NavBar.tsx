import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import Menu from './Menu'
import CartIcon from './CartIcon'
// import Cart from '@/app/cart/page'

const NavBar = () => {
  
  return (
    <nav className="flex justify-between items-center p-2">

      <div className="flex items-center">
            <Link href="/"  ><Image src="/logo.png" alt="" width={150} height={150} />
            </Link>

            {/* <Link href="/">
              <span className="text-black font-bold mx-2 cursor-pointer">Home</span>
            </Link> */}
    
    
          <Link href="/menu">
            <span className="text-black font-bold mx-2 cursor-pointer">Menu</span>
          </Link>
    
 
        <Link href="/about">
          <span className="text-black font-bold mx-2 cursor-pointer">About</span>
        </Link>
   
   
        <Link href="/contact">
          <span className="text-black font-bold mx-2 cursor-pointer">Contact</span>
        </Link>
      </div>
   

      <div className="flex items-center">
        <Link href="/order">
          <span className="text-black mx-2 cursor-pointer">Order Now</span>
        </Link>
        <Link href="/search">
          <span className="text-black mx-2 cursor-pointer">Search</span>
        </Link>
        <Link href="/cart">
          <span className="text-black mx-2 cursor-pointer">
            <CartIcon />
          </span>
        </Link>
      </div>
      
    </nav>
  )
}

export default NavBar
