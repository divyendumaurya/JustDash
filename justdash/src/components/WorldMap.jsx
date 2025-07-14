"use client";

import { useState } from "react";

export default function WorldMap() {
  const [hoveredLocation, setHoveredLocation] = useState(null);

  const locations = [
    { city: "New York", value: "72K", x: "25%", y: "35%", color: "#3b82f6" },
    {
      city: "San Francisco",
      value: "39K",
      x: "15%",
      y: "40%",
      color: "#10b981",
    },
    { city: "Sydney", value: "25K", x: "85%", y: "75%", color: "#f59e0b" },
    { city: "Singapore", value: "61K", x: "75%", y: "55%", color: "#8b5cf6" },
  ];

  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-lg overflow-hidden">
      {/* Enhanced World Map SVG */}
      <svg
        viewBox="0 0 1000 500"
        className="absolute inset-0 w-full h-full opacity-30 dark:opacity-40"
        fill="none"
      >
        {/* Continents outline */}
        <path
          d="M150 200c20-10 40-5 60 5 15 8 25 20 45 25 25 5 50-10 75 0 20 8 35 25 60 25 30 0 50-20 80-10 25 8 40 25 70 25 35 0 60-20 90-15 30 5 50 25 85 25 40 0 70-20 105-15 35 5 60 25 95 25"
          stroke="#3b82f6"
          strokeWidth="2"
          className="animate-pulse"
        />
        <path
          d="M100 300c30-15 60-5 90 10 25 12 45 30 80 35 40 8 80-15 120 0 35 12 60 35 100 35 45 0 80-25 125-15 40 12 70 35 115 35 50 0 90-25 140-15 45 12 80 35 130 35"
          stroke="#10b981"
          strokeWidth="2"
          className="animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <path
          d="M200 350c25-8 50 0 75 8 20 6 35 18 60 20 30 3 60-8 90 0 25 6 45 20 75 20 35 0 65-15 100-8 30 6 55 20 90 20 40 0 75-15 115-8 35 6 65 20 105 20"
          stroke="#8b5cf6"
          strokeWidth="2"
          className="animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </svg>

      {/* Location markers */}
      {locations.map((location, index) => (
        <div
          key={index}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          style={{ left: location.x, top: location.y }}
          onMouseEnter={() => setHoveredLocation(index)}
          onMouseLeave={() => setHoveredLocation(null)}
        >
          {/* Marker with ripple effect */}
          <div className="relative">
            <div
              className="w-4 h-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-125"
              style={{ backgroundColor: location.color }}
            ></div>
            <div
              className="absolute inset-0 w-4 h-4 rounded-full animate-ping opacity-75"
              style={{ backgroundColor: location.color }}
            ></div>
            <div
              className="absolute inset-0 w-4 h-4 rounded-full animate-pulse opacity-50"
              style={{ backgroundColor: location.color }}
            ></div>
          </div>

          {/* Enhanced tooltip */}
          <div
            className={`absolute top-6 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
              hoveredLocation === index
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }`}
          >
            <div className="bg-white dark:bg-gray-800 px-4 py-3 rounded-lg shadow-xl border border-gray-200 dark:border-gray-600 whitespace-nowrap">
              <div className="text-sm font-semibold text-gray-900 dark:text-white">
                {location.city}
              </div>
              <div
                className="text-lg font-bold"
                style={{ color: location.color }}
              >
                {location.value}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Revenue
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
// "use client";

// import { useState } from "react";

// export default function WorldMapWithChart() {
//   const [hoveredLocation, setHoveredLocation] = useState(null);

//   const locations = [
//     { city: "New York", value: 72, x: "25%", y: "35%", color: "#3b82f6" },
//     { city: "San Francisco", value: 39, x: "15%", y: "40%", color: "#10b981" },
//     { city: "Sydney", value: 25, x: "85%", y: "75%", color: "#f59e0b" },
//     { city: "Singapore", value: 61, x: "75%", y: "55%", color: "#8b5cf6" },
//   ];

//   const maxRevenue = Math.max(...locations.map((l) => l.value));

//   return (
//     <div className="">
//       {/* <h3 className="font-semibold text-gray-800 dark:text-white text-lg">
//         Revenue by Location
//       </h3> */}

//       {/* World Map Section */}
//       <div className="relative w-full h-48 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-lg overflow-hidden">
//         {/* Custom SVG Map */}
//         <svg
//           viewBox="0 0 1000 500"
//           className="absolute inset-0 w-full h-full opacity-30 dark:opacity-40"
//           fill="none"
//         >
//           {/* Pulsing Paths */}
//           <path
//             d="M150 200c20-10 40-5 60 5 15 8 25 20 45 25 25 5 50-10 75 0 20 8 35 25 60 25 30 0 50-20 80-10 25 8 40 25 70 25 35 0 60-20 90-15 30 5 50 25 85 25 40 0 70-20 105-15 35 5 60 25 95 25"
//             stroke="#3b82f6"
//             strokeWidth="2"
//             className="animate-pulse"
//           />
//           <path
//             d="M100 300c30-15 60-5 90 10 25 12 45 30 80 35 40 8 80-15 120 0 35 12 60 35 100 35 45 0 80-25 125-15 40 12 70 35 115 35 50 0 90-25 140-15 45 12 80 35 130 35"
//             stroke="#10b981"
//             strokeWidth="2"
//             className="animate-pulse"
//             style={{ animationDelay: "0.5s" }}
//           />
//           <path
//             d="M200 350c25-8 50 0 75 8 20 6 35 18 60 20 30 3 60-8 90 0 25 6 45 20 75 20 35 0 65-15 100-8 30 6 55 20 90 20 40 0 75-15 115-8 35 6 65 20 105 20"
//             stroke="#8b5cf6"
//             strokeWidth="2"
//             className="animate-pulse"
//             style={{ animationDelay: "1s" }}
//           />
//         </svg>

//         {/* Location Markers */}
//         {locations.map((location, index) => (
//           <div
//             key={index}
//             className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
//             style={{ left: location.x, top: location.y }}
//             onMouseEnter={() => setHoveredLocation(index)}
//             onMouseLeave={() => setHoveredLocation(null)}
//           >
//             <div className="relative">
//               <div
//                 className="w-4 h-4 rounded-full shadow-md hover:scale-125 transition-transform"
//                 style={{ backgroundColor: location.color }}
//               ></div>
//               <div
//                 className="absolute inset-0 w-4 h-4 rounded-full animate-ping opacity-75"
//                 style={{ backgroundColor: location.color }}
//               ></div>
//               <div
//                 className="absolute inset-0 w-4 h-4 rounded-full animate-pulse opacity-50"
//                 style={{ backgroundColor: location.color }}
//               ></div>
//             </div>

//             {/* Tooltip */}
//             <div
//               className={`absolute top-6 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
//                 hoveredLocation === index
//                   ? "opacity-100 translate-y-0"
//                   : "opacity-0 translate-y-2"
//               }`}
//             >
//               <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-xl border border-gray-200 dark:border-gray-600 text-center">
//                 <div className="text-sm font-semibold text-gray-900 dark:text-white">
//                   {location.city}
//                 </div>
//                 <div
//                   className="text-lg font-bold"
//                   style={{ color: location.color }}
//                 >
//                   {location.value}K
//                 </div>
//                 <div className="text-xs text-gray-500 dark:text-gray-400">
//                   Revenue
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Revenue Bars Section */}
//       <div className="space-y-3 pt-2">
//         {locations.map((location, index) => (
//           <div key={index}>
//             <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-200">
//               <span>{location.city}</span>
//               <span>{location.value}K</span>
//             </div>
//             <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
//               <div
//                 className="h-2 rounded-full"
//                 style={{
//                   width: `${(location.value / maxRevenue) * 100}%`,
//                   backgroundColor: location.color,
//                 }}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
