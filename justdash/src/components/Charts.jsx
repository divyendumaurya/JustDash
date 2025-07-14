// "use client";

// import { useState } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   Tooltip,
// } from "recharts";
// import WorldMap from "./WorldMap";

// const revenueData = [
//   { month: "Jan", current: 20000, previous: 15000 },
//   { month: "Feb", current: 25000, previous: 20000 },
//   { month: "Mar", current: 15000, previous: 25000 },
//   { month: "Apr", current: 30000, previous: 20000 },
//   { month: "May", current: 20000, previous: 30000 },
//   { month: "Jun", current: 35000, previous: 25000 },
// ];

// const projectionsData = [
//   { month: "Jan", projections: 20000, actuals: 18000 },
//   { month: "Feb", projections: 25000, actuals: 22000 },
//   { month: "Mar", projections: 30000, actuals: 28000 },
//   { month: "Apr", projections: 28000, actuals: 25000 },
//   { month: "May", projections: 32000, actuals: 30000 },
//   { month: "Jun", projections: 35000, actuals: 32000 },
// ];

// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
//         <p className="text-sm font-medium text-gray-900 dark:text-white">{`${label}`}</p>
//         {payload.map((entry, index) => (
//           <p key={index} className="text-sm" style={{ color: entry.color }}>
//             {`${entry.name}: $${entry.value.toLocaleString()}`}
//           </p>
//         ))}
//       </div>
//     );
//   }
//   return null;
// };

// export default function Charts() {
//   const [loadingRevenue, setLoadingRevenue] = useState(false);
//   const [loadingProjections, setLoadingProjections] = useState(false);

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//       {/* Revenue Chart */}
//       <div className="lg:col-span-1 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
//         <div className="flex items-center justify-between mb-6">
//           <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//             Revenue
//           </h3>
//           <div className="flex items-center space-x-4 text-xs">
//             <div className="flex items-center space-x-2">
//               <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
//               <span className="text-gray-600 dark:text-gray-400">
//                 Current Week
//               </span>
//               <span className="font-semibold text-gray-900 dark:text-white">
//                 $58,211
//               </span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <div className="w-3 h-3 bg-gray-400 rounded-full border-2 border-dashed border-gray-400"></div>
//               <span className="text-gray-600 dark:text-gray-400">
//                 Previous Week
//               </span>
//               <span className="font-semibold text-gray-900 dark:text-white">
//                 $68,768
//               </span>
//             </div>
//           </div>
//         </div>
//         {loadingRevenue ? (
//           <div className="h-48 flex items-center justify-center">
//             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
//           </div>
//         ) : (
//           <ResponsiveContainer width="100%" height={200}>
//             <LineChart data={revenueData}>
//               <CartesianGrid
//                 strokeDasharray="3 3"
//                 stroke="#e5e7eb"
//                 className="dark:stroke-gray-600"
//               />
//               <XAxis
//                 dataKey="month"
//                 stroke="#6b7280"
//                 fontSize={12}
//                 tickLine={false}
//                 axisLine={false}
//               />
//               <YAxis
//                 stroke="#6b7280"
//                 fontSize={12}
//                 tickLine={false}
//                 axisLine={false}
//                 tickFormatter={(value) => `$${value / 1000}K`}
//               />
//               <Tooltip content={<CustomTooltip />} />
//               <Line
//                 type="monotone"
//                 dataKey="current"
//                 stroke="#3b82f6"
//                 strokeWidth={3}
//                 dot={{ fill: "#3b82f6", strokeWidth: 2, r: 5 }}
//                 activeDot={{
//                   r: 7,
//                   stroke: "#3b82f6",
//                   strokeWidth: 2,
//                   fill: "#fff",
//                 }}
//                 animationDuration={1000}
//               />
//               <Line
//                 type="monotone"
//                 dataKey="previous"
//                 stroke="#9ca3af"
//                 strokeWidth={3}
//                 strokeDasharray="8 8"
//                 dot={{ fill: "#9ca3af", strokeWidth: 2, r: 5 }}
//                 activeDot={{
//                   r: 7,
//                   stroke: "#9ca3af",
//                   strokeWidth: 2,
//                   fill: "#fff",
//                 }}
//                 animationDuration={1000}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         )}
//       </div>

//       {/* Projections vs Actuals */}
//       <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
//         <div className="flex items-center justify-between mb-6">
//           <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//             Projections vs Actuals
//           </h3>
//           <div className="text-xs text-gray-500 dark:text-gray-400">30M</div>
//         </div>
//         {loadingProjections ? (
//           <div className="h-48 flex items-center justify-center">
//             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
//           </div>
//         ) : (
//           <ResponsiveContainer width="100%" height={200}>
//             <BarChart data={projectionsData} barGap={10}>
//               <CartesianGrid
//                 strokeDasharray="3 3"
//                 stroke="#e5e7eb"
//                 className="dark:stroke-gray-600"
//               />
//               <XAxis
//                 dataKey="month"
//                 stroke="#6b7280"
//                 fontSize={12}
//                 tickLine={false}
//                 axisLine={false}
//               />
//               <YAxis
//                 stroke="#6b7280"
//                 fontSize={12}
//                 tickLine={false}
//                 axisLine={false}
//                 tickFormatter={(value) => `${value / 1000}K`}
//               />
//               <Tooltip content={<CustomTooltip />} />
//               <Bar
//                 dataKey="projections"
//                 fill="#93c5fd"
//                 radius={[4, 4, 0, 0]}
//                 animationDuration={1000}
//               />
//               <Bar
//                 dataKey="actuals"
//                 fill="#3b82f6"
//                 radius={[4, 4, 0, 0]}
//                 animationDuration={1000}
//               />
//             </BarChart>
//           </ResponsiveContainer>
//         )}
//       </div>

//       {/* Revenue by Location */}
//       <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
//         <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
//           Revenue by Location
//         </h3>
//         <WorldMap />
//       </div>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
  Tooltip,
} from "recharts";
import WorldMap from "./WorldMap";

const revenueData = [
  { month: "Jan", current: 20000, previous: 15000 },
  { month: "Feb", current: 25000, previous: 20000 },
  { month: "Mar", current: 15000, previous: 25000 },
  { month: "Apr", current: 30000, previous: 20000 },
  { month: "May", current: 20000, previous: 30000 },
  { month: "Jun", current: 35000, previous: 25000 },
];

const projectionsData = [
  { month: "Jan", projections: 20000, actuals: 18000 },
  { month: "Feb", projections: 25000, actuals: 22000 },
  { month: "Mar", projections: 30000, actuals: 28000 },
  { month: "Apr", projections: 28000, actuals: 25000 },
  { month: "May", projections: 32000, actuals: 30000 },
  { month: "Jun", projections: 35000, actuals: 32000 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
        <p className="text-sm font-medium text-gray-900 dark:text-white">{`${label}`}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {`${entry.name}: $${entry.value.toLocaleString()}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function Charts({ rightPanelOpen }) {
  const [loadingRevenue, setLoadingRevenue] = useState(false);
  const [loadingProjections, setLoadingProjections] = useState(false);

  // Adjust grid layout based on right panel state
  const gridLayout = rightPanelOpen
    ? "grid grid-cols-1 gap-6 py-10" // Stack vertically when right panel is open
    : "grid grid-cols-1 lg:grid-cols-3 gap-6 py-10"; // Default 3-column layout

  return (
    <div className={gridLayout}>
      {/* Revenue Chart */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Revenue
          </h3>
          <div className="flex items-center space-x-4 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-gray-600 dark:text-gray-400">
                Current Week
              </span>
              <span className="font-semibold text-gray-900 dark:text-white">
                $58,211
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-400 rounded-full border-2 border-dashed border-gray-400"></div>
              <span className="text-gray-600 dark:text-gray-400">
                Previous Week
              </span>
              <span className="font-semibold text-gray-900 dark:text-white">
                $68,768
              </span>
            </div>
          </div>
        </div>
        {loadingRevenue ? (
          <div className="h-48 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={revenueData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#e5e7eb"
                className="dark:stroke-gray-600"
              />
              <XAxis
                dataKey="month"
                stroke="#6b7280"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#6b7280"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value / 1000}K`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="current"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ fill: "#3b82f6", strokeWidth: 2, r: 5 }}
                activeDot={{
                  r: 7,
                  stroke: "#3b82f6",
                  strokeWidth: 2,
                  fill: "#fff",
                }}
                animationDuration={1000}
              />
              <Line
                type="monotone"
                dataKey="previous"
                stroke="#9ca3af"
                strokeWidth={3}
                strokeDasharray="8 8"
                dot={{ fill: "#9ca3af", strokeWidth: 2, r: 5 }}
                activeDot={{
                  r: 7,
                  stroke: "#9ca3af",
                  strokeWidth: 2,
                  fill: "#fff",
                }}
                animationDuration={1000}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Projections vs Actuals */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Projections vs Actuals
          </h3>
          <div className="text-xs text-gray-500 dark:text-gray-400">30M</div>
        </div>
        {loadingProjections ? (
          <div className="h-48 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={projectionsData} barGap={10}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#e5e7eb"
                className="dark:stroke-gray-600"
              />
              <XAxis
                dataKey="month"
                stroke="#6b7280"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#6b7280"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value / 1000}K`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="projections"
                fill="#93c5fd"
                radius={[4, 4, 0, 0]}
                animationDuration={1000}
              />
              <Bar
                dataKey="actuals"
                fill="#3b82f6"
                radius={[4, 4, 0, 0]}
                animationDuration={1000}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Revenue by Location */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Revenue by Location
        </h3>
        <WorldMap />
      </div>
    </div>
  );
}
