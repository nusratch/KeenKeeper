import React from "react";
import { toast } from "react-toastify";

const Timeline = () => {
  return (
    <div className="bg-gray-50 py-6 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">

        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <img
              src="https://i.pravatar.cc/100"
              alt=""
              className="w-20 h-20 rounded-full mx-auto mb-3"
            />
            <h2 className="font-semibold text-lg">Emma Wilson</h2>

            <div className="flex flex-col items-center gap-2 mt-2">
              <span className="bg-red-100 text-red-500 px-2 py-1 text-xs rounded-full">WORK</span>
              <span className="bg-green-100 text-green-600 px-2 py-1 text-xs rounded-full">FAMILY</span>
            </div>

            <p className="text-gray-500 text-sm mt-3">
              "Former colleague, great mentor"
            </p>

            <p className="text-gray-400 text-xs mt-1">
              Preferred: email
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-4 space-y-3 text-sm">
            <div
              onClick={() => toast.info("Snoozed for 2 weeks ⏰")}
              className="flex items-center gap-3 p-2 shadow-md rounded-lg hover:bg-gray-100 cursor-pointer"
            >
              <span>⏰</span>
              <p className="text-blue-500">Snooze 2 Weeks</p>
            </div>

            <div
              onClick={() => toast.info("Archived 📁")}
              className="flex items-center gap-3 p-2 shadow-md rounded-lg hover:bg-gray-100 cursor-pointer"
            >
              <span>📁</span>
              <p className="text-gray-600">Archive</p>
            </div>

            <div
              onClick={() => toast.error("Deleted 🗑")}
              className="flex items-center gap-3 p-2 shadow-md rounded-lg hover:bg-gray-100 cursor-pointer"
            >
              <span>🗑</span>
              <p className="text-red-500">Delete</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h2 className="text-xl font-semibold">62</h2>
              <p className="text-gray-500 text-sm">Days Since Contact</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h2 className="text-xl font-semibold">30</h2>
              <p className="text-gray-500 text-sm">Goal (Days)</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h2 className="text-xl font-semibold">Feb 27, 2026</h2>
              <p className="text-gray-500 text-sm">Next Due</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <div className="flex justify-between">
              <h3 className="font-semibold">Relationship Goal</h3>
              <p className="text-blue-500 text-sm cursor-pointer">Edit</p>
            </div>
            <p className="text-gray-500 mt-2">
              Connect every <span className="font-semibold">30 days</span>
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold mb-4">Quick Check-in</h3>

            <div className="grid grid-cols-3 gap-4">
              <div
                onClick={() => toast.success("Calling... 📞")}
                className="flex flex-col items-center justify-center p-4 rounded-xl shadow-md hover:bg-gray-50 cursor-pointer"
              >
                <span className="text-xl">📞</span>
                <p className="text-sm mt-2">Call</p>
              </div>

              <div
                onClick={() => toast.info("Opening chat... 💬")}
                className="flex flex-col items-center justify-center p-4 rounded-xl shadow-md hover:bg-gray-50 cursor-pointer"
              >
                <span className="text-xl">💬</span>
                <p className="text-sm mt-2">Text</p>
              </div>

              <div
                onClick={() => toast("Starting video call... 🎥")}
                className="flex flex-col items-center justify-center p-4 rounded-xl shadow-md hover:bg-gray-50 cursor-pointer"
              >
                <span className="text-xl">🎥</span>
                <p className="text-sm mt-2">Video</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Timeline;