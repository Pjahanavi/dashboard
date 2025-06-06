import React from 'react';

const VisionSection: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          {/* Text Section */}
          <div>
            <h3 className="text-base font-bold text-gray-600 dark:text-gray-400 mb-4 tracking-widest">
              OUR MISSION
            </h3>
            <h3 className="text-6xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight">
              Driving Digital Excellence for a Smarter Tomorrow
            </h3>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
              At JP TECH, our vision is to become a global leader in innovative software solutions, empowering businesses to thrive in a digitally connected world. We envision a future where technology is intuitive, secure, and seamlessly integrated—driving sustainable growth, enhancing user experiences, and transforming challenges into opportunities.
            </p>

            <div className="space-y-5">
              <div className="flex items-start">
                <span className="text-green-500 text-xl mr-3 mt-1">*</span>
                <p className="text-lg italic text-gray-700 dark:text-gray-300">
                  Bridge the gap between business and technology
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 text-xl mr-3 mt-1">*</span>
                <p className="text-lg italic text-gray-700 dark:text-gray-300">
                  Seamless scalability to grow as you grow
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 text-xl mr-3 mt-1">*</span>
                <p className="text-lg italic text-gray-700 dark:text-gray-300">
                  Trusted by clients across multiple industries
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 text-xl mr-3 mt-1">*</span>
                <p className="text-lg italic text-gray-700 dark:text-gray-300">
                  Agile development with real-time collaboration
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/images/ChatGPT Image Jun 5, 2025, 10_42_06 PM.png"
              alt="Team collaboration"
              className="w-full max-w-[600px] h-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
