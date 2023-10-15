type Menu = {
  id: number,
  title: string,
  desc?:string,
  price:string,
  }[];

export const menu: Menu = [
  {
    id: 1,
    title:"Pupusa de Queso",
    desc: "Cheese",
    price:"$2.75",
  },
  {
    id: 2,
    title:"Pupusa de Frijol",
    desc: "Beans and Cheese",
    price:"$2.75",
  },
  {
    id: 3,
    title:"Pupusa de Revuelta",
    desc: "Shredded pork,beans,and cheese",
    price:"$2.75",
  },
]