import { menu}  from "@/data"

import React from 'react'


const MenuPage = () => {
  return (
    <div className="text-black">
      {/* <h1>Menu</h1> */}
      {menu.map((item) => (
       <div key={item.id}>
        {item.title}
        {item.desc}
        {item.price}
       </div>
     ))}
    </div>

  )
}

export default MenuPage
