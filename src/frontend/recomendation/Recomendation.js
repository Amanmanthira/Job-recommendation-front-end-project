import React, { useState, useEffect } from 'react';

const Recomendation = () => {
  const [shaking, setShaking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShaking((prevShaking) => !prevShaking);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className='h-1/2 bg-gradient-to-l from-white to-blue-200 p-20 max-sm:p-10 sm:p-10'>
      <h1 className='font-bold text-5xl text-center text-blue-600'>
        Find the <span className='text-blue-300 font-bold'>right</span> fit
      </h1>
      <br />
      <h1 className='font-medium text-xl text-center text-blue-900'>
        "Unlock personalized career recommendations with JOBPULSE tailored to your professional aspirations."
      </h1>
      <br />
      <br />
      <div className="flex justify-center items-center">
        <a href='/'>
        <button
          type="button"
          className={`text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 ${
            shaking ? 'shake' : ''}`
          }
        >
          FIND
        </button>
        </a>
      </div>
    </div>
  );
};

export default Recomendation;
