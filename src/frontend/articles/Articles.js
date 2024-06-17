import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Articles = () => {

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="p-10 text-center">
      <h1 className="font-medium lg:text-4xl mb-8 text-blue-800">Featured Articles</h1>
      <div className="mt-8">
        <hr className="w-60 mx-auto border-2 border-blue-800 " />
      </div>      
      <div data-aos='fade-up' data-aos-duration='2000' className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 lg:px-20">
        <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-lg shadow-gray-400 dark:bg-neutral-700">
          <a href="#!" className="overflow-hidden rounded-t-lg">
            <img
              className="object-cover w-full h-48 brightness-75 hover:brightness-100"
              src="https://www.hays.lu/documents/63301/0/rattraper-entretien-mal-passe-hays+%281%29.jpg/83595a65-a36a-bc83-e5f1-7ced60485529?t=1652862022733"
              alt="Hollywood Sign on The Hill"
            />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-semibold leading-tight text-neutral-800 dark:text-neutral-50">
              Reasons You're Nervous About a New Job
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Nervous about a new job? That's OK. For most job seekers, the phrase "new job" is exciting because it signals opportunities to...
            </p>
          </div>
        </div>
        <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white  dark:bg-neutral-700 shadow-lg shadow-gray-400">
          <a href="#!" className="overflow-hidden rounded-t-lg">
            <img
              className="object-cover w-full h-48 brightness-75 hover:brightness-100"
              src="https://fictionistic.com/wp-content/uploads/2022/03/Awesome-Work-From-Home-Jobs-to-Try.png"
              alt="Palm Springs Road"
            />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-semibold leading-tight text-neutral-800 dark:text-neutral-50">
              How to Write a Cover Letter
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Why do you need to know how to write a cover letter? Picture this: You've found the perfect job, hit the "apply" button, and started the process with...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
