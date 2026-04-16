import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setFriends(data);
          setLoading(false);
        }, 1000);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <div className="w-10 h-10 border-4 border-green-900 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="w-full px-4 sm:px-6 lg:px-12 mt-10 flex justify-center">
      <div className="w-full max-w-xl sm:max-w-2xl md:max-w-4xl">

        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Your Friends
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {friends.map((friend) => (
            <div
              key={friend.id}
              onClick={() => navigate(`/friend/${friend.id}`)}
              className="bg-white shadow-md rounded-xl p-5 text-center cursor-pointer hover:shadow-lg transition"
            >
              <img
                src={friend.picture}
                alt=""
                className="w-16 h-16 mx-auto rounded-full mb-3"
              />

              <h3 className="font-semibold">{friend.name}</h3>

              <p className="text-xs text-gray-400 mb-2">
                {friend.days_since_contact}d ago
              </p>

              <div className="flex justify-center gap-2 mb-2 flex-wrap">
                {friend.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded bg-green-100 text-green-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span
                className={`text-xs px-3 py-1 rounded ${
                  friend.status === "overdue"
                    ? "bg-red-100 text-red-600"
                    : friend.status === "almost-due"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {friend.status === "on-track"
                  ? "On-Track"
                  : friend.status === "almost-due"
                  ? "Almost Due"
                  : "Overdue"}
              </span>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Friends;