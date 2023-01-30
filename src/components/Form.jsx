import React from 'react'
import { useState } from 'react'

export default function Form({ addProduct }) {
    const [details, setDetails] = useState({
        name: '',
        calories: 0,
        serving: 0,
    }); 
    const handleChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value});
       };
    const handleCalculate = (e) => {
        e.preventDefault();
        addProduct(details);
        setDetails({ name: '', calories: 0, serving: 0});
    }
    return (
      <form onSubmit={handleCalculate}>
          <div className='grid grid-cols-2 text-white gap-2'>
              <label>Aliment name:</label> <input type='text' name='name' value={details.name} onChange={handleChange} className='text-black'></input>
              <label>Calories per 100g:</label> <input type='number' name='calories' value={details.calories}  onChange={handleChange} className='text-black'></input>
              <label>Serving size 	&#40; g	&#41;:</label> <input type='number'  name='serving' value={details.serving}  onChange={handleChange} className='text-black'></input>
          </div>
            <button type='submit' className="w-[50%] ml-[25%] mr-[25%] mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"> Add </button>
        </form>
  )
}
