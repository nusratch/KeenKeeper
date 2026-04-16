import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Stats = () => {
  const data = [
    { name: "Text", value: 30 },
    { name: "Call", value: 40 },
    { name: "Video", value: 30 },
  ];

  const COLORS = ["#8b5cf6", "#1f2937", "#14b8a6"];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <div className="flex-grow px-4 py-8">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-6">

          <h2 className="text-2xl font-semibold mb-6">
            Friendship Analytics
          </h2>

          <p className="text-sm text-gray-500 mb-4">
            By Interaction Type
          </p>

          <div className="w-full h-[350px]">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={110}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>

                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Stats;