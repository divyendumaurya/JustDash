// "use client";

// import { useState } from "react";
// import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

// const productsData = [
//   {
//     name: "ASOS Ridley High Waist",
//     price: "$79.49",
//     quantity: 82,
//     amount: "$6,518.18",
//     trend: "up",
//   },
//   {
//     name: "Marco Lightweight Shirt",
//     price: "$128.50",
//     quantity: 37,
//     amount: "$4,754.50",
//     trend: "up",
//   },
//   {
//     name: "Half Sleeve Shirt",
//     price: "$39.99",
//     quantity: 64,
//     amount: "$2,559.36",
//     trend: "down",
//   },
//   {
//     name: "Lightweight Jacket",
//     price: "$20.00",
//     quantity: 184,
//     amount: "$3,680.00",
//     trend: "up",
//   },
//   {
//     name: "Marco Shoes",
//     price: "$79.49",
//     quantity: 64,
//     amount: "$1,965.81",
//     trend: "up",
//   },
// ];

// const salesData = [
//   { name: "Direct", value: 300.56, color: "#1f2937", percentage: 38.6 },
//   { name: "Affiliate", value: 135.18, color: "#8b5cf6", percentage: 22.5 },
//   { name: "Sponsored", value: 154.02, color: "#06b6d4", percentage: 25.7 },
//   { name: "E-mail", value: 48.96, color: "#10b981", percentage: 13.2 },
// ];

// const CustomPieTooltip = ({ active, payload }) => {
//   if (active && payload && payload.length) {
//     const data = payload[0].payload;
//     return (
//       <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
//         <p className="text-sm font-medium text-gray-900 dark:text-white">
//           {data.name}
//         </p>
//         <p className="text-sm text-gray-600 dark:text-gray-400">
//           ${data.value}
//         </p>
//         <p className="text-sm font-bold" style={{ color: data.color }}>
//           {data.percentage}%
//         </p>
//       </div>
//     );
//   }
//   return null;
// };

// export default function TablesSection() {
//   const [hoveredRow, setHoveredRow] = useState(null);
//   const [loadingTable, setLoadingTable] = useState(false);

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//       {/* Top Selling Products */}
//       <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
//         <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
//           <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//             Top Selling Products
//           </h3>
//         </div>
//         {loadingTable ? (
//           <div className="h-64 flex items-center justify-center">
//             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
//           </div>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/30">
//                   <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
//                     Name
//                   </th>
//                   <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
//                     Price
//                   </th>
//                   <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
//                     Quantity
//                   </th>
//                   <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
//                     Amount
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {productsData.map((product, index) => (
//                   <tr
//                     key={index}
//                     className={`border-b border-gray-100 dark:border-gray-700 transition-all duration-200 cursor-pointer ${
//                       hoveredRow === index
//                         ? "bg-blue-50 dark:bg-blue-900/10 shadow-sm"
//                         : "hover:bg-gray-50 dark:hover:bg-gray-700/50"
//                     }`}
//                     onMouseEnter={() => setHoveredRow(index)}
//                     onMouseLeave={() => setHoveredRow(null)}
//                   >
//                     <td className="px-6 py-4">
//                       <div className="flex items-center space-x-3">
//                         <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-600 dark:to-gray-700 rounded-lg flex items-center justify-center">
//                           <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
//                             {product.name.charAt(0)}
//                           </span>
//                         </div>
//                         <span className="text-sm font-medium text-gray-900 dark:text-white">
//                           {product.name}
//                         </span>
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
//                       {product.price}
//                     </td>
//                     <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
//                       {product.quantity}
//                     </td>
//                     <td className="px-6 py-4">
//                       <div className="flex items-center space-x-2">
//                         <span className="text-sm font-bold text-gray-900 dark:text-white">
//                           {product.amount}
//                         </span>
//                         <div
//                           className={`w-2 h-2 rounded-full ${
//                             product.trend === "up"
//                               ? "bg-green-500"
//                               : "bg-red-500"
//                           }`}
//                         ></div>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>

//       {/* Total Sales */}
//       <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
//         <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
//           Total Sales
//         </h3>
//         <div className="relative mb-6">
//           <ResponsiveContainer width="100%" height={200}>
//             <PieChart>
//               <Pie
//                 data={salesData}
//                 cx="50%"
//                 cy="50%"
//                 innerRadius={60}
//                 outerRadius={80}
//                 paddingAngle={2}
//                 dataKey="value"
//                 animationDuration={1000}
//               >
//                 {salesData.map((entry, index) => (
//                   <Cell
//                     key={`cell-${index}`}
//                     fill={entry.color}
//                     className="hover:opacity-80 transition-opacity duration-200"
//                   />
//                 ))}
//               </Pie>
//               <Tooltip content={<CustomPieTooltip />} />
//             </PieChart>
//           </ResponsiveContainer>
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="text-center">
//               <p className="text-3xl font-bold text-gray-900 dark:text-white">
//                 38.6%
//               </p>
//               <p className="text-xs text-gray-500 dark:text-gray-400">Total</p>
//             </div>
//           </div>
//         </div>
//         <div className="space-y-4">
//           {salesData.map((item, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 cursor-pointer"
//             >
//               <div className="flex items-center space-x-3">
//                 <div
//                   className="w-4 h-4 rounded-full shadow-sm"
//                   style={{ backgroundColor: item.color }}
//                 ></div>
//                 <span className="text-sm font-medium text-gray-900 dark:text-white">
//                   {item.name}
//                 </span>
//               </div>
//               <div className="text-right">
//                 <div className="text-sm font-bold text-gray-900 dark:text-white">
//                   ${item.value}
//                 </div>
//                 <div className="text-xs text-gray-500 dark:text-gray-400">
//                   {item.percentage}%
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

// import { useState, useMemo } from "react";
// import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
// import { motion } from "framer-motion";

// // Sample data
// const productsData = [
//   {
//     name: "ASOS Ridley High Waist",
//     price: "$79.49",
//     quantity: 82,
//     amount: "$6,518.18",
//     trend: "up",
//   },
//   {
//     name: "Marco Lightweight Shirt",
//     price: "$128.50",
//     quantity: 37,
//     amount: "$4,754.50",
//     trend: "up",
//   },
//   {
//     name: "Half Sleeve Shirt",
//     price: "$39.99",
//     quantity: 64,
//     amount: "$2,559.36",
//     trend: "down",
//   },
//   {
//     name: "Lightweight Jacket",
//     price: "$20.00",
//     quantity: 184,
//     amount: "$3,680.00",
//     trend: "up",
//   },
//   {
//     name: "Marco Shoes",
//     price: "$79.49",
//     quantity: 64,
//     amount: "$1,965.81",
//     trend: "up",
//   },
// ];

// const salesData = [
//   { name: "Direct", value: 300.56, color: "#000000", percentage: 38.6 },
//   { name: "Affiliate", value: 135.18, color: "#10b981", percentage: 17.4 },
//   { name: "Sponsored", value: 154.02, color: "#8b5cf6", percentage: 19.8 },
//   { name: "E-mail", value: 48.96, color: "#06b6d4", percentage: 6.3 },
// ];

// // Custom Tooltip for Pie
// const CustomPieTooltip = ({ active, payload }) => {
//   if (active && payload && payload.length) {
//     const data = payload[0].payload;
//     return (
//       <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
//         <p className="text-sm font-medium text-gray-900 dark:text-white">
//           {data.name}
//         </p>
//         <p className="text-sm text-gray-600 dark:text-gray-400">
//           ${data.value}
//         </p>
//         <p className="text-sm font-bold" style={{ color: data.color }}>
//           {data.percentage}%
//         </p>
//       </div>
//     );
//   }
//   return null;
// };

// export default function DashboardSection() {
//   const maxPercentage = useMemo(() => {
//     return Math.max(...salesData.map((item) => item.percentage));
//   }, []);

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//       {/* ✅ Top Selling Products */}
//       <motion.div
//         className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
//           <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//             Top Selling Products
//           </h3>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/30">
//                 {["Name", "Price", "Quantity", "Amount"].map((header, idx) => (
//                   <th
//                     key={idx}
//                     className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider"
//                   >
//                     {header}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {productsData.map((product, index) => (
//                 <motion.tr
//                   key={index}
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                   className="border-b border-gray-100 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200"
//                 >
//                   <td className="px-6 py-4">
//                     <div className="flex items-center space-x-3">
//                       <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-600 dark:to-gray-700 rounded-lg flex items-center justify-center">
//                         <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
//                           {product.name.charAt(0)}
//                         </span>
//                       </div>
//                       <span className="text-sm font-medium text-gray-900 dark:text-white">
//                         {product.name}
//                       </span>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
//                     {product.price}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
//                     {product.quantity}
//                   </td>
//                   <td className="px-6 py-4">
//                     <div className="flex items-center space-x-2">
//                       <span className="text-sm font-bold text-gray-900 dark:text-white">
//                         {product.amount}
//                       </span>
//                       <motion.div
//                         className={`w-2.5 h-2.5 rounded-full ${
//                           product.trend === "up" ? "bg-green-500" : "bg-red-500"
//                         }`}
//                         whileHover={{ scale: 1.5 }}
//                         transition={{ duration: 0.3 }}
//                       />
//                     </div>
//                   </td>
//                 </motion.tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </motion.div>

//       {/* ✅ Total Sales */}
//       <motion.div
//         className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
//         initial={{ opacity: 0, x: 50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
//       >
//         <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
//           Total Sales
//         </h3>

//         <div className="relative mb-6 shadow-lg rounded-full bg-white dark:bg-gray-800">
//           <ResponsiveContainer width="100%" height={200}>
//             <PieChart>
//               <Pie
//                 data={salesData}
//                 cx="50%"
//                 cy="50%"
//                 innerRadius={60}
//                 outerRadius={80}
//                 paddingAngle={2}
//                 dataKey="value"
//                 animationDuration={800}
//                 cornerRadius={10}
//               >
//                 {salesData.map((entry, index) => (
//                   <Cell
//                     key={`cell-${index}`}
//                     fill={entry.color}
//                     className="hover:opacity-80 transition-opacity duration-200"
//                   />
//                 ))}
//               </Pie>
//               <Tooltip content={<CustomPieTooltip />} />
//             </PieChart>
//           </ResponsiveContainer>

//           <div className="absolute inset-0 flex items-center justify-center">
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ delay: 0.3, duration: 0.5 }}
//               className="text-center"
//             >
//               <p className="text-3xl font-bold text-gray-900 dark:text-white">
//                 {maxPercentage}%
//               </p>
//               <p className="text-xs text-gray-500 dark:text-gray-400">Total</p>
//             </motion.div>
//           </div>
//         </div>

//         <div className="space-y-4">
//           {salesData.map((item, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.02 }}
//               transition={{ type: "spring", stiffness: 300 }}
//               className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 cursor-pointer"
//             >
//               <div className="flex items-center space-x-3">
//                 <div
//                   className="w-4 h-4 rounded-full shadow-sm"
//                   style={{ backgroundColor: item.color }}
//                 />
//                 <span className="text-sm font-medium text-gray-900 dark:text-white">
//                   {item.name}
//                 </span>
//               </div>
//               <div className="text-right">
//                 <div className="text-sm font-bold text-gray-900 dark:text-white">
//                   ${item.value}
//                 </div>
//                 <div className="text-xs text-gray-500 dark:text-gray-400">
//                   {item.percentage}%
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// }
import { useState, useMemo, useRef, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import {
  motion,
  AnimatePresence,
  useSpring,
  useTransform,
} from "framer-motion";
import { Search, ChevronDown, ChevronUp, RotateCcw } from "lucide-react";

// Enhanced sample data with more fields for better interactions
const productsData = [
  {
    id: 1,
    name: "ASOS Ridley High Waist",
    price: "$79.49",
    quantity: 82,
    amount: "$6,518.18",
    trend: "up",
    category: "Clothing",
    region: "North America",
    description: "Premium high-waist denim with comfort stretch",
    sales: 82,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Marco Lightweight Shirt",
    price: "$128.50",
    quantity: 37,
    amount: "$4,754.50",
    trend: "up",
    category: "Apparel",
    region: "Europe",
    description: "Breathable cotton blend for all-day comfort",
    sales: 37,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Half Sleeve Shirt",
    price: "$39.99",
    quantity: 64,
    amount: "$2,559.36",
    trend: "down",
    category: "Casual",
    region: "Asia",
    description: "Versatile casual wear for any occasion",
    sales: 64,
    rating: 4.2,
  },
  {
    id: 4,
    name: "Lightweight Jacket",
    price: "$20.00",
    quantity: 184,
    amount: "$3,680.00",
    trend: "up",
    category: "Outerwear",
    region: "North America",
    description: "Weather-resistant lightweight protection",
    sales: 184,
    rating: 4.6,
  },
  {
    id: 5,
    name: "Marco Shoes",
    price: "$79.49",
    quantity: 64,
    amount: "$1,965.81",
    trend: "up",
    category: "Footwear",
    region: "Europe",
    description: "Handcrafted leather with premium finish",
    sales: 64,
    rating: 4.7,
  },
];

const salesData = [
  { name: "Direct", value: 300.56, color: "#000000", percentage: 38.6 },
  { name: "Affiliate", value: 135.18, color: "#10b981", percentage: 17.4 },
  { name: "Sponsored", value: 154.02, color: "#8b5cf6", percentage: 19.8 },
  { name: "E-mail", value: 48.96, color: "#06b6d4", percentage: 6.3 },
];

// Enhanced Table Component with sophisticated animations
const EnhancedTable = ({ data }) => {
  const [sortBy, setSortBy] = useState("sales");
  const [sortOrder, setSortOrder] = useState("desc");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedRow, setExpandedRow] = useState(null);
  const [hoveredRow, setHoveredRow] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 5;

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]);

  const sortedData = useMemo(() => {
    return [...filteredData].sort((a, b) => {
      let aVal = a[sortBy];
      let bVal = b[sortBy];

      if (sortBy === "price" || sortBy === "amount") {
        aVal = parseFloat(aVal.replace(/[$,]/g, ""));
        bVal = parseFloat(bVal.replace(/[$,]/g, ""));
      }

      if (sortOrder === "asc") {
        return aVal > bVal ? 1 : -1;
      }
      return aVal < bVal ? 1 : -1;
    });
  }, [filteredData, sortBy, sortOrder]);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return sortedData.slice(start, start + itemsPerPage);
  }, [sortedData, currentPage]);

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("desc");
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const SkeletonRow = () => (
    <tr className="animate-pulse">
      {[...Array(4)].map((_, i) => (
        <td key={i} className="px-6 py-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
        </td>
      ))}
    </tr>
  );

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Top Selling Products
          </h3>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearch}
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsLoading(!isLoading)}
              className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/30">
              {[
                { key: "name", label: "Name" },
                { key: "price", label: "Price" },
                { key: "quantity", label: "Quantity" },
                { key: "amount", label: "Amount" },
              ].map((header) => (
                <th
                  key={header.key}
                  className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  onClick={() => handleSort(header.key)}
                >
                  <div className="flex items-center space-x-2">
                    <span>{header.label}</span>
                    <motion.div
                      animate={{
                        rotate:
                          sortBy === header.key && sortOrder === "desc"
                            ? 180
                            : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {sortBy === header.key ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4 opacity-30" />
                      )}
                    </motion.div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <AnimatePresence mode="wait">
              {isLoading
                ? [...Array(5)].map((_, i) => (
                    <SkeletonRow key={`skeleton-${i}`} />
                  ))
                : paginatedData.map((product, index) => (
                    <motion.tr
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={`border-b border-gray-100 dark:border-gray-700 cursor-pointer transition-all duration-200 ${
                        hoveredRow === product.id
                          ? "bg-blue-50 dark:bg-blue-900/20 transform scale-[1.02] shadow-lg"
                          : "hover:bg-gray-50 dark:hover:bg-gray-700/50"
                      }`}
                      onMouseEnter={() => setHoveredRow(product.id)}
                      onMouseLeave={() => setHoveredRow(null)}
                      onClick={() =>
                        setExpandedRow(
                          expandedRow === product.id ? null : product.id
                        )
                      }
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <motion.div
                            className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-600 dark:to-gray-700 rounded-lg flex items-center justify-center"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                              {product.name.charAt(0)}
                            </span>
                          </motion.div>
                          <div>
                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                              {product.name}
                            </span>
                            <AnimatePresence>
                              {expandedRow === product.id && (
                                <motion.p
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="text-xs text-gray-500 dark:text-gray-400 mt-1"
                                >
                                  {product.description}
                                </motion.p>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <motion.span
                          className="text-sm font-medium text-gray-900 dark:text-white"
                          animate={{
                            scale: hoveredRow === product.id ? 1.05 : 1,
                          }}
                        >
                          {product.price}
                        </motion.span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {product.quantity}
                          </span>
                          <motion.div
                            className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                            whileHover={{ scale: 1.1 }}
                          >
                            <motion.div
                              className="h-full bg-blue-500 rounded-full"
                              initial={{ width: 0 }}
                              animate={{
                                width: `${(product.quantity / 200) * 100}%`,
                              }}
                              transition={{ duration: 0.8, delay: index * 0.1 }}
                            />
                          </motion.div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <motion.span
                            className="text-sm font-bold text-gray-900 dark:text-white"
                            animate={{
                              scale: hoveredRow === product.id ? 1.1 : 1,
                            }}
                          >
                            {product.amount}
                          </motion.span>
                          <motion.div
                            className={`w-2.5 h-2.5 rounded-full ${
                              product.trend === "up"
                                ? "bg-green-500"
                                : "bg-red-500"
                            }`}
                            whileHover={{ scale: 1.5 }}
                            animate={{
                              scale:
                                hoveredRow === product.id ? [1, 1.2, 1] : 1,
                              boxShadow:
                                hoveredRow === product.id
                                  ? "0 0 10px rgba(59, 130, 246, 0.5)"
                                  : "none",
                            }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      </td>
                    </motion.tr>
                  ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
            {Math.min(currentPage * itemsPerPage, sortedData.length)} of{" "}
            {sortedData.length} results
          </span>

          <div className="flex space-x-2">
            {[...Array(Math.ceil(sortedData.length / itemsPerPage))].map(
              (_, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    currentPage === i + 1
                      ? "bg-blue-500 text-white"
                      : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                  }`}
                >
                  {i + 1}
                </motion.button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// 3D Donut Chart Component
const Interactive3DChart = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [selectedSegment, setSelectedSegment] = useState(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const deltaX = e.movementX || 0;
    const deltaY = e.movementY || 0;

    setRotation((prev) => ({
      x: prev.x + deltaY * 0.5,
      y: prev.y + deltaX * 0.5,
    }));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging]);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Interactive Sales Chart
        </h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setRotation({ x: 0, y: 0 })}
          className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          <RotateCcw className="w-4 h-4 text-gray-600 dark:text-gray-400" />
        </motion.button>
      </div>

      <div
        className="relative mb-6 cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        style={{ userSelect: "none" }}
      >
        <motion.div
          className="relative shadow-lg rounded-full bg-white dark:bg-gray-800"
          style={{
            transformStyle: "preserve-3d",
          }}
          animate={{
            rotateX: rotation.x,
            rotateY: rotation.y,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
        >
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={salesData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
                animationDuration={800}
                cornerRadius={10}
              >
                {salesData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    className="hover:opacity-80 transition-opacity duration-200 cursor-pointer"
                    onClick={() => setSelectedSegment(index)}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomPieTooltip />} />
            </PieChart>
          </ResponsiveContainer>

          {/* 3D depth layers */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-700 dark:to-gray-900 rounded-full opacity-30"
            style={{
              transform: "translateZ(-10px) scale(0.98)",
              filter: "blur(1px)",
            }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400 dark:from-gray-800 dark:to-gray-900 rounded-full opacity-20"
            style={{
              transform: "translateZ(-20px) scale(0.96)",
              filter: "blur(2px)",
            }}
          />
        </motion.div>
      </div>

      <div className="space-y-4">
        {salesData.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02, x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200 ${
              selectedSegment === index
                ? "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
                : "hover:bg-gray-50 dark:hover:bg-gray-700/50"
            }`}
            onClick={() =>
              setSelectedSegment(selectedSegment === index ? null : index)
            }
          >
            <div className="flex items-center space-x-3">
              <motion.div
                className="w-4 h-4 rounded-full shadow-sm"
                style={{ backgroundColor: item.color }}
                animate={{ scale: selectedSegment === index ? 1.2 : 1 }}
                transition={{ duration: 0.2 }}
              />
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {item.name}
              </span>
            </div>
            <div className="text-right">
              <motion.div
                className="text-sm font-bold text-gray-900 dark:text-white"
                animate={{ scale: selectedSegment === index ? 1.1 : 1 }}
              >
                ${item.value}
              </motion.div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {item.percentage}%
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <motion.p
          className="text-xs text-gray-500 dark:text-gray-400"
          animate={{ opacity: isDragging ? 0.5 : 1 }}
        >
          Click and drag to rotate • Click segments to highlight
        </motion.p>
      </div>
    </div>
  );
};

const CustomPieTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
      >
        <p className="text-sm font-medium text-gray-900 dark:text-white">
          {data.name}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          ${data.value}
        </p>
        <p className="text-sm font-bold" style={{ color: data.color }}>
          {data.percentage}%
        </p>
      </motion.div>
    );
  }
  return null;
};

export default function EnhancedDashboard() {
  const [activeView, setActiveView] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Enhanced Table */}
          <div className="lg:col-span-2">
            <EnhancedTable data={productsData} />
          </div>

          {/* Interactive 3D Chart */}
          <div>
            <Interactive3DChart />
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Dashboard with advanced 3D interactions and smooth animations
          </p>
        </motion.div>
      </div>
    </div>
  );
}
