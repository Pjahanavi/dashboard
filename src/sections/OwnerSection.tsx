import React from 'react';

const OwnerSection: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-16 bg-[#e3e6ec] p-10 rounded-xl shadow-lg">
          
          {/* Left: Owner Image */}
          <div className="flex-shrink-0">
            <div className="rounded-full w-[350px] h-[350px] overflow-hidden shadow-md border-4 border-white">
              <img
                src="/images/WhatsApp Image 2025-06-05 at 21.11.18.jpeg"
                alt="P. Jahanavi - Founder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="flex-1 text-left">
            <h2 className="text-2xl font-medium text-gray-700 mb-4">About Us</h2>
            <p className="text-4xl font-semibold text-gray-900 mb-8">
              To bring together the best of technology and our people to supercharge progress.
            </p>

            <div className="text-left bg-white/60 p-6 rounded-lg">
              <p className="text-lg text-gray-800 mb-4 leading-relaxed">
                We look forward to supercharging our growth with optimism and confidence, ready to seize the many opportunities ahead. Our growth strategy for the emerging digital and AI future is built on five strategic objectives.
              </p>



              <p className="text-xl font-semibold text-gray-900 mt-6">P. Jahanavi</p>
              <p className="text-sm text-gray-600">Founder & Director | JP TECH</p>
              <a
                href="#"
                typeof='email'
                className="text-purple-600 font-medium hover:underline mb-4 block"

              >
                pjahanavi2811@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerSection;
