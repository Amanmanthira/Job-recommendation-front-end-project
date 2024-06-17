import React, { useEffect, useState } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";


const Contact = () => {
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
    <div>
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


      <div className='relative'>
        <img src='https://www.terminix.com/-/media/Foundation/Terminix/Hero/Sample/SupportCenterhero-924.jpg?h=3840&w=5760&rev=4a7dac9f1b644cff92c17833ecd488be&hash=CCE071210A86D36DFDBB182813D8EC7A' className='w-full max-sm:w-full max-h-96 custom-rounded'/>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-medium seeker max-sm:text-2xl max-sm:text-center'>
            <p>We Are Here For You</p>
        </div>
      </div>

      <div>
        <p className='text-5xl uppercase text-blue-800 text-center mt-7'>contact us</p>
        <p className='text-center mt-4 text-blue-800 uppercase font-bold'>We can help. Our team of experts is on hand to answer your questions.</p>
      </div>

      <div class='flex flex-wrap justify-center gap-8 p-10'>
    <a href="#" class="w-full sm:w-auto max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Text</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">Text 1.866.980.8669 to message an agent over mobile text.</p>
    </a>

    <a href="#" class="w-full sm:w-auto max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mt-4 sm:mt-0">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Call</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">Call us at 1.855.485.6300 to speak to one of our available agents.</p>
    </a>

    <a href="#" class="w-full sm:w-auto max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mt-4 sm:mt-0">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Chat</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">Click here to begin an online chat with one of our representatives.</p>
    </a>
</div>


      <form class="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-10 pb-8 mb-4 mt-9">
    <div class="mb-6">
        <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
    </div>
    <div class="mb-6">
        <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your Email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
    </div>
    <div class="mb-6">
        <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Message:</label>
        <textarea id="message" name="message" placeholder="Your Message" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"></textarea>
    </div>
    <div class="flex items-center justify-center">
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
    </div>
</form>



    </div>
  )
}

export default Contact