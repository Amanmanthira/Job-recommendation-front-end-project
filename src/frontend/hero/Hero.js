import React, { useEffect, useState } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [username, setUsername] = useState(''); // State to store username

  useEffect(() => {
    Aos.init({ duration: 1000 });
    
    // Check if user is already logged in
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  // Function to handle logout
  const handleLogout = () => {
    // Clear user details from local storage
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <div className='relative'>
      {/* Navigation Bar */}
      <nav className='bg-blue-500 bg-opacity-60 p-4 text-white fixed w-full z-10 '>
        <div className='container mx-auto flex justify-between items-center'>
          <img src="./images/logonew.png" alt="Logo" className="w-10 h-10" />
          {/* Add other navigation links or elements  */}
          <div className='hidden md:flex space-x-4'>
            <a href='/' className='hover:underline py-2'>Home</a>
            <a href='Bestjobs' className='hover:underline py-2'>Best jobs</a>
            <a href='contact' className='hover:underline py-2'>Contact</a>
            {/* Conditional rendering based on login status */}
            {isLoggedIn ? (
              <div className='flex items-center'>
                <span className='mr-2'>{`Welcome, ${username}!`}</span>
                <button className='hover:underline font-bold text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-cyan-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2' onClick={handleLogout}>Logout</button>
              </div>
            ) : (
              <a href='Login' className='hover:underline font-bold text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-cyan-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2'>Login</a>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div data-aos='fade-right' data-aos-duration='2000' className='flex h-screen bg-gradient-to-r from-blue-400 to-blue-400 lg:pb-4'>
        <div className='w-1/2  bg-cover rounded-top-right shadow-lg shadow-gray-500 ' style={{backgroundImage:'url(https://elearningindustry.com/wp-content/uploads/2019/03/employee-or-employer-who-is-responsible-for-improving-employee-performance-and-how.jpeg)'}}></div>
        
        {/* Text side */}
        <div className='w-1/2 flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-200 text-blue-900'>
          <div data-aos='fade-up' data-aos-duration='2000'>
            <div className='text-center'>
              <h1 className='text-6xl font-bold mb-4'>Find work that's <br/><span className='italic text-blue-700 '>worth it.</span></h1>
              <p className='text-lg font-semibold text-blue-900'>Using advanced machine learning, psychometrics, and career satisfaction data, we’ve reimagined what a career test can be.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
