import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CartIcon = () => {
  return (
    
    <Link href='/cart' className='flex items-center gap-4'>
      <div className='relative w-8 h-8 md:w-5 md:h-5'>
        <Image 
        fill
        src={"/cart.png"}
        alt="" 
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </Link>
    
  )
}

export default CartIcon
