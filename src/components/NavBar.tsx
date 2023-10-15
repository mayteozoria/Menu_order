import React from 'react'
import Link from 'next/link'
import Menu from './Menu'
import CartIcon from './CartIcon'

const NavBar = () => {
  const user = false;
  
  return (
    <div className="font-bold h-6 text-blue-500 p-2 flex items-center justify-between uppercase md:h-28">
        <div className="hidden md:flex gap-4 flex-1">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/contact">Contact Us</Link>
        </div>

      <div className="md:hidden">
        <Menu />
      </div>

      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        {!user ? (
          <Link href="/login">Login</Link>
             ) : (
           <Link href="/orders">Orders</Link>
            )}
          <CartIcon />
        </div>
     </div>
  )
}

export default NavBar
