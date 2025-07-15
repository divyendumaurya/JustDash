import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import {
  Plus,
  Filter,
  ArrowUpDown,
  Search,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Sun,
  Moon,
  BellDot,
  Grid3X3,
  ChartPie,
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import ThemeSwitchOverlay from "../Utils/ThemeSwitch";

const ordersData = [
  {
    id: "#CM9801",
    user: {
      name: "Natali Craig",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
    statusColor: "blue",
  },
  {
    id: "#CM9802",
    user: {
      name: "Kate Morrison",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
    },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
    statusColor: "green",
  },
  {
    id: "#CM9803",
    user: {
      name: "Drew Cano",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
    },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
    statusColor: "yellow",
  },
  {
    id: "#CM9804",
    user: {
      name: "Orlando Diggs",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
    statusColor: "orange",
  },
  {
    id: "#CM9805",
    user: {
      name: "Andi Lane",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face",
    },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
    statusColor: "red",
  },
  {
    id: "#CM9806",
    user: {
      name: "Lara Craig",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
    statusColor: "blue",
  },
  {
    id: "#CM9807",
    user: {
      name: "Kate Morrison",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
    },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
    statusColor: "green",
  },
  {
    id: "#CM9808",
    user: {
      name: "Drew Cano",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
    },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
    statusColor: "yellow",
  },
  {
    id: "#CM9809",
    user: {
      name: "Orlando Diggs",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
    statusColor: "orange",
  },
  {
    id: "#CM9810",
    user: {
      name: "Andi Lane",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face",
    },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
    statusColor: "red",
  },
];

const getStatusStyles = (color, darkMode) => {
  const styles = {
    blue: darkMode
      ? "bg-blue-900/20 text-blue-300"
      : "bg-blue-100 text-blue-700",
    green: darkMode
      ? "bg-green-900/20 text-green-300"
      : "bg-green-100 text-green-700",
    yellow: darkMode
      ? "bg-yellow-900/20 text-yellow-300"
      : "bg-yellow-100 text-yellow-700",
    orange: darkMode
      ? "bg-orange-900/20 text-orange-300"
      : "bg-orange-100 text-orange-700",
    red: darkMode ? "bg-red-900/20 text-red-300" : "bg-red-100 text-red-700",
  };
  return styles[color] || styles.blue;
};

// Custom tooltip component for the pie chart
const CustomTooltip = ({ active, payload, darkMode }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className={`p-3 rounded-lg shadow-lg border ${
          darkMode
            ? "bg-gray-800 border-gray-600 text-white"
            : "bg-white border-gray-200 text-gray-900"
        }`}
      >
        <p className="font-medium">{payload[0].name}</p>
        <p className="text-sm">
          Count: <span className="font-semibold">{payload[0].value}</span>
        </p>
        <p className="text-sm">
          Percentage:{" "}
          <span className="font-semibold">{payload[0].percent}%</span>
        </p>
      </div>
    );
  }
  return null;
};

export default function OrderList() {
  const { darkMode, setDarkMode, toggleRightPanel } = useOutletContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showPieChart, setShowPieChart] = useState(false);

  const filteredOrders = ordersData.filter(
    (order) =>
      order.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate status distribution
  const statusCounts = filteredOrders.reduce((acc, order) => {
    acc[order.status] = (acc[order.status] || 0) + 1;
    return acc;
  }, {});

  // Prepare data for pie chart
  const pieChartData = Object.entries(statusCounts).map(([status, count]) => ({
    name: status,
    value: count,
    color: getStatusColor(status),
  }));

  function getStatusColor(status) {
    const colorMap = {
      "In Progress": "#3B82F6", // blue
      Complete: "#10B981", // green
      Pending: "#F59E0B", // yellow
      Approved: "#F97316", // orange
      Rejected: "#EF4444", // red
    };
    return colorMap[status] || "#3B82F6";
  }

  const handleThemeToggle = () => {
    setShowOverlay(true);
    setDarkMode((prev) => !prev);
    setTimeout(() => {
      setShowOverlay(false);
    }, 800);
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="flex-1 flex flex-col overflow-hidden">
        <ThemeSwitchOverlay show={showOverlay} isDark={darkMode} />

        {/* Header */}
        <div
          className={`p-6 border-b ${
            darkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <h1
              className={`text-2xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Order List
            </h1>

            {/* Theme Toggle and Pie Chart Button */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <button
                  onMouseEnter={() => setShowPieChart(true)}
                  onMouseLeave={() => setShowPieChart(false)}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    darkMode
                      ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                  }`}
                >
                  <ChartPie className="w-5 h-5" />
                </button>

                {/* Pie Chart Overlay */}
                {showPieChart && (
                  <div
                    className={`absolute top-12 right-0 w-80 h-64 rounded-lg shadow-2xl border z-50 transform transition-all duration-300 ease-out ${
                      darkMode
                        ? "bg-gray-800 border-gray-600"
                        : "bg-white border-gray-200"
                    } ${
                      showPieChart
                        ? "scale-100 opacity-100"
                        : "scale-95 opacity-0"
                    }`}
                    onMouseEnter={() => setShowPieChart(true)}
                    onMouseLeave={() => setShowPieChart(false)}
                  >
                    <div className="p-4 h-full">
                      <h3
                        className={`text-sm font-semibold mb-3 ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Status Distribution
                      </h3>
                      <ResponsiveContainer width="100%" height="80%">
                        <PieChart>
                          <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            innerRadius={30}
                            outerRadius={60}
                            paddingAngle={2}
                            dataKey="value"
                            animationBegin={0}
                            animationDuration={600}
                          >
                            {pieChartData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip
                            content={<CustomTooltip darkMode={darkMode} />}
                            wrapperStyle={{ outline: "none" }}
                          />
                        </PieChart>
                      </ResponsiveContainer>

                      {/* Legend */}
                      <div className="flex flex-wrap gap-2 mt-2">
                        {pieChartData.map((entry, index) => (
                          <div
                            key={index}
                            className="flex items-center text-xs"
                          >
                            <div
                              className="w-3 h-3 rounded-full mr-1"
                              style={{ backgroundColor: entry.color }}
                            />
                            <span
                              className={
                                darkMode ? "text-gray-300" : "text-gray-600"
                              }
                            >
                              {entry.name} ({entry.value})
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* <button
                onClick={handleThemeToggle}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  darkMode
                    ? "bg-gray-700 hover:bg-gray-600 text-yellow-400"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                }`}
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button> */}
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                  darkMode
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white`}
              >
                <Plus className="w-4 h-4" />
              </button>
              <button
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  darkMode
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                <Filter className="w-4 h-4" />
              </button>
              <button
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  darkMode
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                <ArrowUpDown className="w-4 h-4" />
              </button>
            </div>
            <div className="relative">
              <Search
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`pl-10 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-auto">
          <table className="w-full">
            <thead
              className={`sticky top-0 ${
                darkMode ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider">
                  <input
                    type="checkbox"
                    className={`rounded ${
                      darkMode
                        ? "border-gray-600 bg-gray-700"
                        : "border-gray-300 bg-white"
                    }`}
                  />
                </th>
                <th
                  className={`px-6 py-4 text-left text-xs font-medium uppercase tracking-wider ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Order ID
                </th>
                <th
                  className={`px-6 py-4 text-left text-xs font-medium uppercase tracking-wider ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  User
                </th>
                <th
                  className={`px-6 py-4 text-left text-xs font-medium uppercase tracking-wider ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Project
                </th>
                <th
                  className={`px-6 py-4 text-left text-xs font-medium uppercase tracking-wider ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Address
                </th>
                <th
                  className={`px-6 py-4 text-left text-xs font-medium uppercase tracking-wider ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Date
                </th>
                <th
                  className={`px-6 py-4 text-left text-xs font-medium uppercase tracking-wider ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Status
                </th>
                <th
                  className={`px-6 py-4 text-left text-xs font-medium uppercase tracking-wider ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                ></th>
              </tr>
            </thead>
            <tbody
              className={`divide-y ${
                darkMode ? "divide-gray-700" : "divide-gray-200"
              }`}
            >
              {filteredOrders.map((order, index) => (
                <tr
                  key={index}
                  className={`${
                    darkMode
                      ? selectedOrder === index
                        ? "bg-gray-800"
                        : "hover:bg-gray-800"
                      : selectedOrder === index
                      ? "bg-gray-100"
                      : "hover:bg-gray-50"
                  } transition-colors duration-200 cursor-pointer`}
                  onClick={() =>
                    setSelectedOrder(selectedOrder === index ? null : index)
                  }
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className={`rounded ${
                        darkMode
                          ? "border-gray-600 bg-gray-700"
                          : "border-gray-300 bg-white"
                      }`}
                    />
                  </td>
                  <td
                    className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <img
                        src={order.user.avatar}
                        alt={order.user.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <span
                        className={`text-sm font-medium ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {order.user.name}
                      </span>
                    </div>
                  </td>
                  <td
                    className={`px-6 py-4 whitespace-nowrap text-sm ${
                      darkMode ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    {order.project}
                  </td>
                  <td
                    className={`px-6 py-4 whitespace-nowrap text-sm ${
                      darkMode ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    {order.address}
                  </td>
                  <td
                    className={`px-6 py-4 whitespace-nowrap text-sm ${
                      darkMode ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    {order.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyles(
                        order.statusColor,
                        darkMode
                      )}`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full mr-2 ${
                          order.statusColor === "blue"
                            ? "bg-blue-500"
                            : order.statusColor === "green"
                            ? "bg-green-500"
                            : order.statusColor === "yellow"
                            ? "bg-yellow-500"
                            : order.statusColor === "orange"
                            ? "bg-orange-500"
                            : "bg-red-500"
                        }`}
                      ></div>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      className={`transition-colors duration-200 ${
                        darkMode
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-500 hover:text-gray-900"
                      }`}
                    >
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div
          className={`px-6 py-4 border-t ${
            darkMode
              ? "border-gray-700 bg-gray-800"
              : "border-gray-200 bg-gray-50"
          }`}
        >
          <div className="flex items-center justify-center space-x-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              className={`p-2 transition-colors duration-200 ${
                darkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-500 hover:text-gray-900"
              }`}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded text-sm transition-colors duration-200 ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : darkMode
                    ? "text-gray-400 hover:text-white hover:bg-gray-700"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-200"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(Math.min(5, currentPage + 1))}
              className={`p-2 transition-colors duration-200 ${
                darkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-500 hover:text-gray-900"
              }`}
              disabled={currentPage === 5}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
