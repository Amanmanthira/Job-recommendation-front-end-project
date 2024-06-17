import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 text-white py-12">
      <div className="container mx-auto flex flex-col items-center max-sm:text-center">
        <h1 className="text-3xl font-bold mb-4 ">Empowering Your Career with AI Insights.</h1>
        <p className="text-gray-300 text-center mb-6">Experience the future of career guidance through advanced AI algorithms.</p>
        <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition duration-300 ease-in-out">Get in Touch</a>
        <div className="flex mt-8 space-x-4">
          <a href="#facebook">
            {/* Placeholder for AI-Themed Icon */}
            <span className="text-2xl" role="img" aria-label="AI Icon">🤖</span>
          </a>
          <a href="#twitter">
            {/* Placeholder for AI-Themed Icon */}
            <span className="text-2xl" role="img" aria-label="AI Icon">🚀</span>
          </a>
          <a href="https://www.youtube.com/channel/UCjtCbnkIaiCJgj13sEZ9iqw">
            {/* Placeholder for AI-Themed Icon */}
            <span className="text-2xl" role="img" aria-label="AI Icon">🔍</span>
          </a>
        </div>
        <p className="mt-6 text-gray-400">© 2024 JOBPULSE AI. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
