import { menu }  from "@/data"
import Image from "next/image"
import React from 'react'


const MenuPage = () => {
  return (
    <div className="text-black">
      <h1 className="center">Rica Pupusas</h1>
      {menu.map((item) => (
       <div key={item.id}>
        <div className="flex items-center justify-between font-bold">{item.title}
      </div> 
        {item.desc}
        {item.price}
        {item.img && (
          <div className="relative h-[80%]" >
        <Image src={item.img}
        alt=""
        width={500}
      height={500}
      className="object-contain"
        />
        </div>
        )}
     
       
      </div>
      ))}
    </div>

  )
}

export default MenuPage
