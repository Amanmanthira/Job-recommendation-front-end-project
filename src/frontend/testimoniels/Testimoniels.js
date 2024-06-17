import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonialsData = [
  {
    id: 1,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod libero vel sollicitudin tempor.",
    author: "John Doe",
    position: "Job Seeker",
  },
  {
    id: 2,
    content: "Sed cursus, elit ac lobortis convallis, justo odio dapibus est, a aliquet ipsum lectus vel enim.",
    author: "Jane Smith",
    position: "Job Seeker",
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between py-10 lg:pt-16 w-full" style={{ background: 'linear-gradient(to right, #92a8d1, #e4e4e4)' }}>
      {/* Image side on the left */}
      <div   data-aos='fade-right' data-aos-duration='2000' className="lg:w-1/2 mb-4 lg:mb-0 lg:ml-8">
        <img className="w-full max-sm:h-96 max-sm:px-6 sm:h-96 sm:w-auto sm:ml-auto sm:mr-auto h-auto  md:w-auto lg:h-screen lg:w-auto animate-float" src="./images/men.png" alt="Testimonial Image" />
      </div>

      {/* Text side on the right */}
      <div   data-aos='fade-left' data-aos-duration='2000' className="lg:w-1/2 px-6 lg:px-12 lg:mt-16 max-sm:text-center sm:text-center">
        <h2 className="text-3xl lg:text-4xl  font-bold mb-4 text-gray-800 seeker">Job seekers talk about JobPulse</h2>
        <p className="text-gray-600 mb-6 seekersub">Many job seekers from all over the world have been helped by our system for decades, and here are their stories</p>
        <div className='slider'>
          <Slider {...settings}>
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 lg:p-8 rounded shadow-md">
                <p className="text-gray-700 mb-4">{testimonial.content}</p>
                <p className="font-semibold text-blue-600">{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.position}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
