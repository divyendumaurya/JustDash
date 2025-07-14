"use client";

import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const productsData = [
  {
    name: "ASOS Ridley High Waist",
    price: "$79.49",
    quantity: 82,
    amount: "$6,518.18",
    trend: "up",
  },
  {
    name: "Marco Lightweight Shirt",
    price: "$128.50",
    quantity: 37,
    amount: "$4,754.50",
    trend: "up",
  },
  {
    name: "Half Sleeve Shirt",
    price: "$39.99",
    quantity: 64,
    amount: "$2,559.36",
    trend: "down",
  },
  {
    name: "Lightweight Jacket",
    price: "$20.00",
    quantity: 184,
    amount: "$3,680.00",
    trend: "up",
  },
  {
    name: "Marco Shoes",
    price: "$79.49",
    quantity: 64,
    amount: "$1,965.81",
    trend: "up",
  },
];

const salesData = [
  { name: "Direct", value: 300.56, color: "#1f2937", percentage: 38.6 },
  { name: "Affiliate", value: 135.18, color: "#8b5cf6", percentage: 22.5 },
  { name: "Sponsored", value: 154.02, color: "#06b6d4", percentage: 25.7 },
  { name: "E-mail", value: 48.96, color: "#10b981", percentage: 13.2 },
];

const CustomPieTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
        <p className="text-sm font-medium text-gray-900 dark:text-white">
          {data.name}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          ${data.value}
        </p>
        <p className="text-sm font-bold" style={{ color: data.color }}>
          {data.percentage}%
        </p>
      </div>
    );
  }
  return null;
};

export default function TablesSection() {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [loadingTable, setLoadingTable] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Top Selling Products */}
      <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Top Selling Products
          </h3>
        </div>
        {loadingTable ? (
          <div className="h-64 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/30">
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {productsData.map((product, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-100 dark:border-gray-700 transition-all duration-200 cursor-pointer ${
                      hoveredRow === index
                        ? "bg-blue-50 dark:bg-blue-900/10 shadow-sm"
                        : "hover:bg-gray-50 dark:hover:bg-gray-700/50"
                    }`}
                    onMouseEnter={() => setHoveredRow(index)}
                    onMouseLeave={() => setHoveredRow(null)}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-600 dark:to-gray-700 rounded-lg flex items-center justify-center">
                          <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                            {product.name.charAt(0)}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {product.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                      {product.price}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {product.quantity}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-bold text-gray-900 dark:text-white">
                          {product.amount}
                        </span>
                        <div
                          className={`w-2 h-2 rounded-full ${
                            product.trend === "up"
                              ? "bg-green-500"
                              : "bg-red-500"
                          }`}
                        ></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Total Sales */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Total Sales
        </h3>
        <div className="relative mb-6">
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
                animationDuration={1000}
              >
                {salesData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    className="hover:opacity-80 transition-opacity duration-200"
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomPieTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                38.6%
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Total</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          {salesData.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div
                  className="w-4 h-4 rounded-full shadow-sm"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {item.name}
                </span>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-gray-900 dark:text-white">
                  ${item.value}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {item.percentage}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
