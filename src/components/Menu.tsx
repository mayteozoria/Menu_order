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
          
      </div>
  )
}

export default Menu
