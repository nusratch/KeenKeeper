import React from "react";

const Hero = () => {
  const stats = [
    { number: "10", label: "Total Friends" },
    { number: "3", label: "On Track" },
    { number: "6", label: "Need Attention" },
    { number: "12", label: "Interactions This Month" },
  ];

  return (
    
    <div className="w-full flex flex-col items-center mt-20 sm:mt-8 md:mt-10 px-3 sm:px-4">
      
      <div className="w-full max-w-xl sm:max-w-2xl md:max-w-4xl border border-dashed border-gray-300 rounded-lg text-center py-8 sm:py-10 md:py-12 px-4 sm:px-6">
        
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-2 sm:mb-3">
          Friends to keep close in your life
        </h1>

        <p className="text-gray-500 text-xs sm:text-sm md:text-base mb-4 sm:mb-5 max-w-xs sm:max-w-md md:max-w-lg mx-auto leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <button className="bg-green-900 text-white px-4 sm:px-5 py-2 rounded-md text-xs sm:text-sm font-medium hover:bg-green-800 transition">
          + Add a Friend
        </button>
      </div>

      <div className="w-full max-w-xl sm:max-w-2xl md:max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-5 sm:mt-6">
        
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg py-5 text-center shadow-sm"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
              {item.number}
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">
              {item.label}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
};

export default Hero;