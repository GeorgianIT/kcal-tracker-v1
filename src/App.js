import Form from './components/Form'
function App() {
  return (
    <div className="w-[100vw] h-[100vh] bg-neutral-800">
      <p className='text-center text-white text-[30px] pt-10 font-bold'>Calories Tracker</p>
      <div className='w-[40%] m-auto mt-[10%]'>
      <Form />
      </div>
    </div>
  );
}

export default App;
