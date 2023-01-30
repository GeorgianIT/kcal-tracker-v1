import React from 'react'
import { uuid } from 'uuidv4';

export default function ProductList({ row }) {
  return (
    <div className='text-white flex flex-col text-center mt-10'>
      <p className='text-[30px]'>Aliments</p>
      <div className='text-white flex flex-col mt-10 gap-4 text-center'>
          <div className='flex justify-between w-[100%]'>
            <p>Aliment Name</p>
            <p>Calories/100g</p>
            <p>Serving size&#40; g	&#41;</p>
            <p>Calories Eaten</p>
          </div>
          <div className='flex flex-col'>
            {row.map((product) => (
            <div className='flex justify-between w-[100%] text-center' key={uuid}>
              <p className=''>{product.name}</p>
                <p>{product.calories}</p>
                <p>{product.serving}</p>
                <p>{`${(product.serving / 100)* product.calories}`}</p>
              </div>
              ))}
          </div>
      </div>
    </div>
  )
}
