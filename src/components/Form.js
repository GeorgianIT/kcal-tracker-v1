import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [details, setDetails] = useState({
        name: '',
        calories: '' ,
        serving: ''
       }) 
    const [readName, setName] = useState('')
    const [readCalories, setCalories] = useState(0)
    const [readServingSize, setServingSize] = useState(0)
    const [calculateCalories, setCalculateCalories] = useState(0)
    
        const handleChange = (e) => {
            const { name, value } = e.target;
            setDetails((prev) => {
                return { ...prev, [name]: value };
            });
        };
        // const { reset } = useForm();
        const handleCalculate = (e) => {
            e.preventDefault();
            let readName;
            let readCalories;
            let readServingSize;
            let calculateCalories;
            readName = details.name;
            setName(readName);
            readCalories = details.calories;
            setCalories(readCalories);
            readServingSize = details.serving;
            setServingSize(readServingSize);
            calculateCalories = ((readServingSize / 100) * readCalories);
            setCalculateCalories(calculateCalories);
            console.log(details);
            console.log(readName, readCalories, readServingSize, calculateCalories);
    };

    return (
      <>
      <form onSubmit={handleCalculate}>
          <div className='grid grid-cols-2 text-white gap-2'>
              <label>Aliment name:</label> <input type='text' name='name' onChange={handleChange} className='text-black'></input>
              <label>Calories per 100g:</label> <input type='number' name='calories' onChange={handleChange} className='text-black'></input>
              <label>Serving size 	&#40; g	&#41;:</label> <input type='number'  name='serving' onChange={handleChange} className='text-black'></input>
              
          </div>
            <button type='submit' className="w-[50%] ml-[25%] mr-[25%] mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"> Add </button>
            
            </form>
            <div className='text-white flex flex-col text-center mt-10'>
                <p>Aliments</p>
                <div className='text-white flex justify-between mt-10 gap-4 text-center'>
                    <div className='flex flex-col'>
                        <p>Aliment Name</p>
                        <p>{readName}</p>
                    </div> 
                    <div className='flex flex-col'>
                        <p>Calories/100g</p>
                        <p>{readCalories}</p>
                    </div>
                    <div className='flex flex-col'>
                        <p>Serving size&#40; g	&#41;</p>
                        <p>{readServingSize}</p>
                    </div>
                    <div className='flex flex-col'>
                        <p>Calories Eat</p>
                        <p>{calculateCalories}</p>
                    </div>
                </div>
            </div>
    </>    
  )
}

export default Form