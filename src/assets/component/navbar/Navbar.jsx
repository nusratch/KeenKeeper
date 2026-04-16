import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "../../../App.css";
import logo from "../../logo.png";
import { FaHome, FaClock, FaChartLine } from "react-icons/fa";

const Nav = () => {
  const [active, setActive] = useState("Home");

  const menu = [
    { name: "Home", icon: <FaHome />, path: "/", msg: "Going to Home 🏠" },
    { name: "Timeline", icon: <FaClock />, path: "/timeline", msg: "Opening Timeline ⏳" },
    { name: "Stats", icon: <FaChartLine />, path: "/stats", msg: "Viewing Stats 📊" },
  ];

  return (
    <div className="w-screen bg-white border-b border-gray-200 relative left-1/2 right-1/2 -mx-[50vw]">
      <div className="w-full px-6 lg:px-8 flex items-center justify-between h-16">
        
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-8 object-contain" />
        </div>

        <div className="hidden md:flex items-center bg-gray-100 p-1 rounded-lg gap-2">
          {menu.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => {
                setActive(item.name);
                toast.success(item.msg);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition ${
                active === item.name
                  ? "bg-green-900 text-white"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-40 right-0"
            >
              {menu.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={() => {
                      setActive(item.name);
                      toast.success(item.msg);
                    }}
                    className="flex items-center gap-2"
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Nav;