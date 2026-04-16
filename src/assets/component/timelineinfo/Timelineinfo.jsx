import React from "react";

const Timelineinfo = () => {
  const timelineData = [
    {
      type: "🤝",
      title: "Meetup with Tom Baker",
      date: "March 29, 2026",
    },
    {
      type: "💬",
      title: "Text with Sarah Chen",
      date: "March 28, 2026",
    },
    {
      type: "🤝",
      title: "Meetup with Olivia Martinez",
      date: "March 26, 2026",
    },
    {
      type: "🎥",
      title: "Video with Aisha Patel",
      date: "March 23, 2026",
    },
    {
      type: "🤝",
      title: "Meetup with Sarah Chen",
      date: "March 21, 2026",
    },
    {
      type: "📞",
      title: "Call with Marcus Johnson",
      date: "March 20, 2026",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">

      <div className="flex-grow px-4 py-6">
        <div className="max-w-5xl mx-auto">

          <div className="bg-white rounded-xl shadow p-5 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Timeline</h2>

            <select className="border rounded-lg px-3 py-2 text-sm text-gray-600">
              <option>Filter timeline</option>
              <option>All</option>
              <option>Call</option>
              <option>Text</option>
              <option>Meetup</option>
              <option>Video</option>
            </select>
          </div>

          <div className="space-y-4">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow p-4 flex items-center gap-4 hover:bg-gray-50 transition"
              >
                <div className="text-xl">{item.type}</div>

                <div>
                  <h3 className="font-medium text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
};

export default Timelineinfo;