import Image from 'next/image'
import React from 'react'

type CategoryCardProps = {
  name: string
  img: string
}

const CategoryCard = ({name,img}:CategoryCardProps) => {
  return (
    <div className='relative  h-[300px] rounded-2xl overflow-hidden'>
        <Image src={img} fill alt = 'category' />
        <div className='bg-black  w-full opacity-30  h-full absolute left-0 top-0'></div>
        <h2 className='absolute bottom-2 left-2 text-[16px] text-white font-bold'>{name}</h2>
    </div>
  )
}

export default CategoryCard