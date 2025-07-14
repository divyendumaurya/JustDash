"use client";

import { Search, Sun, Moon, Bell, Grid3X3 } from "lucide-react";
import KPICards from "./KPICards";
import Charts from "./Charts";
import TablesSection from "./TableSection";

export default function MainContent({ darkMode, setDarkMode }) {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Enhanced Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 transition-all duration-300 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Grid3X3 className="w-5 h-5 text-gray-500" />
            <span className="text-gray-500 dark:text-gray-400">Dashboards</span>
            <span className="text-gray-900 dark:text-white font-medium">
              Default
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all duration-300 hover:shadow-sm"
              />
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 hover:shadow-sm"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 hover:shadow-sm">
              <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 hover:shadow-sm">
              <Grid3X3 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            eCommerce
          </h1>
        </div>

        <KPICards />
        <Charts />
        <TablesSection />
      </main>
    </div>
  );
}
