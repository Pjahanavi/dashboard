import React from 'react';

const WelcomeSection: React.FC = () => {
  return (
    <div 
    className="flex flex-col justify-end items-start px-8 py-16 bg-cover bg-center relative"
    style={{
        backgroundImage: "url('/images/pexels-artempodrez-5716031.jpg')",
        height: "94vh",   // ✅ Set height here
        width: "100%",    // ✅ Optional (usually 100% by default)
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      {/* Content container */}
      <div className="relative z-10 container mx-auto mb-2 px-4">
        
        <h1 className="text-6xl font-bold text-white mb-4">
          WELCOME TO JP TECH!
        </h1>
        <hr/>
        <p className="text-xl text-white max-w-2xl">
        JP Tech is a leading digital consultancy firm specializing in providing expert guidance across diverse sectors such as IT, finance, education, travel, tax, and business partnerships. Our core mission is to empower individuals and businesses, especially in semi-urban and rural regions of India, by bridging the digital divide with reliable and affordable solutions.
        </p>
        <p className="text-xl text-white max-w-2xl"></p>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
};

export default WelcomeSection;