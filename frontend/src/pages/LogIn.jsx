import React, { useState } from 'react';

const LogIn = () => {
  const [currentState, setCurrentState] = useState('login');  // Correct placement of useState
const onSubmitHandler = async (event) => {
  event.preventDefault();
  //login logicd
 }
  return (
    <form onSubmit = {onSubmitHandler}className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800 ' />
      </div>
      {currentState === 'login' ? '' : <input type='text' className='w-full px-3 py-2 border border-gray-800' placeholder =" Name"  required/>}
      <input type='text' className='w-full px-3 py-2 border border-gray-800 mt-4' placeholder =" Email" required/>
        <input type='password' className='w-full px-3 py-2 border border-gray-800 mt-4' placeholder =" Password" required/>
    <div className='w-full flex justify-between text-sm mt-[-8px]'>
      <p className='cursor-pointer'>Forgot password? </p>
      {
        currentState ==='login'
        ?
         <p onClick={()=> setCurrentState('Signup')} className='cursor-pointer'>Create Account</p>
        :<p onClick={()=> setCurrentState('login')}className='cursor-pointer'>Login Here!</p>
      }

    </div>
    <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'login' ? 'Sign In' : 'Sign-up'}</button>
    </form>
  );
};

export default LogIn;
