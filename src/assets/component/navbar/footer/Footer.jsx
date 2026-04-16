import React from "react";
import fb from "../../../facebook.png";
import twitter from "../../../twitter.png";
import insta from "../../../instagram.png";

const Footer = () => {
  return (
    <div className="w-full bg-[#025e21cb] text-white mt-16">
      
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-10 text-center border border-dashed border-gray-500 rounded-lg">

        <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
          KeenKeeper
        </h2>

        <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <p className="text-sm mb-3">Social Links</p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4">
          <img src={fb} alt="fb" className="w-8 h-8 bg-white p-1 rounded-full cursor-pointer" />
          <img src={insta} alt="insta" className="w-8 h-8 bg-white p-1 rounded-full cursor-pointer" />
          <img src={twitter} alt="twitter" className="w-8 h-8 bg-white p-1 rounded-full cursor-pointer" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-xs sm:text-sm">
        
        <p>© 2026 KeenKeeper. All rights reserved.</p>

        <div className="flex gap-4 mt-2 sm:mt-0">
          <span className="cursor-pointer hover:text-white">Privacy Policy</span>
          <span className="cursor-pointer hover:text-white">Terms of Service</span>
          <span className="cursor-pointer hover:text-white">Cookies</span>
        </div>

      </div>

    </div>
  );
};

export default Footer;