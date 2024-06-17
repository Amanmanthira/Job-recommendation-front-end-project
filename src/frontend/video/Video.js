import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
const Video = () => {

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className=' mx-auto p-10 sm:p-20 flex flex-col items-center bg-gradient-to-b from-gray-100 to-gray-300'>
      <div>
        <h1 className='text-4xl text-center text-blue-700 font-bold mb-8'>
          Discover How to Use Our System
        </h1>
      </div>
      <div className="relative overflow-hidden lg:p-10 lg:h-screen ">
      <video
        data-aos='fade-up' data-aos-duration='2000'
        className="w-full h-full object-cover rounded-3xl shadow-lg shadow-black"
        autoPlay
        muted
        loop
      >
        <source src={process.env.PUBLIC_URL + './videos/how.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
    </div>
  );
};

export default Video;
