'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import CartIcon from './CartIcon';

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 4, title: "Contact", url: "/" },
];


const Menu = () => {
    const [open, setOpen] = useState(false)

    const user = false;
  return (
      <div>
          {!open ? (
          <Image src="/bullet-list.png" alt="" width={20} height={20} onClick={() =>setOpen(true)}/>
          ) : (
          <Image src="" alt="" width={20} height={20} onClick={() =>setOpen(false)}/>
          )}
       <div className="bg-blue-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
            ))}
            {!user ? ( 
            <Link href="/login">Login</Link> 
            ) : ( 
              <Link href="/orders">Orders</Link>
            )}
           <Link href="/cart">
            <CartIcon />
           </Link>
        </div>
      </div>
  )
}

export default Menu
