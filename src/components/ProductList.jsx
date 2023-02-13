import React from 'react'
import { uuid } from 'uuidv4';
import {useState} from 'react'

export default function ProductList({ row }) {
  return (
    <div className='text-white flex flex-col text-center mt-10'>
      <p className='text-[30px] font-bold'>Products</p>
      <div className='text-white flex flex-col mt-10 text-center py-2 border-solid border-t-2'>
          <div className='flex justify-between w-[100%] pb-2 border-b-2 font-bold lg:text-[20px] text-sm'>
            <p className='w-[25%]'>Food Name</p>
            <p className='w-[25%]'>Calories/100g</p>
            <p className='w-[25%]'>Serving size&#40; g	&#41;</p>
            <p className='w-[25%]'>Calories Eaten</p>
          </div>
          <div className='flex flex-col'>
          {row.map((product) => (
            <div className='flex justify-between w-[100%] pt-4 pb-4 text-center border-b-2' key={uuid}>
              <p className='w-[25%] break-words'>{product.name}</p>
                <p className='w-[25%] break-words'>{product.calories}</p>
                <p className='w-[25%] break-words'>{product.serving}</p>
              <p className='w-[25%] break-words'>{Math.round(product.serving / 100 * product.calories)}</p>
              </div>
          ))}
          </div>
      </div>
    </div>
  )
}
