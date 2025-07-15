import { Search, Sun, Moon, BellDot, Grid3X3 } from "lucide-react";
import KPICards from "./KPICards";
import Charts from "./Charts";
import TablesSection from "./TableSection";
import ThemeSwitchOverlay from "../Utils/ThemeSwitch";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function MainContent({
  darkMode,
  setDarkMode,
  toggleRightPanel,
  rightPanelOpen,
}) {
  const location = useLocation();
  const isDashboard = location.pathname === "/";
  const [showOverlay, setShowOverlay] = useState(false);

  const handleThemeToggle = () => {
    setShowOverlay(true);

    // Change theme immediately for instant visual feedback
    setDarkMode((prev) => !prev);

    // Hide overlay after animation completes
    setTimeout(() => {
      setShowOverlay(false);
    }, 800);
  };

  return (
    <div className="flex-1 overflow-auto relative">
      <ThemeSwitchOverlay show={showOverlay} isDark={darkMode} />

      {/* Enhanced Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 transition-colors duration-300">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Dashboards
              </span>
              <span className="text-sm text-gray-400">/</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Default
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200"
              />
            </div>

            <button
              onClick={handleThemeToggle}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 hover:shadow-sm transform hover:scale-105 active:scale-95"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>

            <button
              onClick={toggleRightPanel}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 hover:shadow-sm transform hover:scale-105 active:scale-95"
            >
              <BellDot className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>

            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 hover:shadow-sm transform hover:scale-105 active:scale-95">
              <Grid3X3 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <Outlet context={{ darkMode, setDarkMode, toggleRightPanel }} />
        {isDashboard && (
          <>
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                eCommerce
              </h1>
            </div>

            {/* Pass rightPanelOpen to KPICards */}
            <KPICards rightPanelOpen={rightPanelOpen} />
            <Charts rightPanelOpen={rightPanelOpen} />
            <TablesSection rightPanelOpen={rightPanelOpen} />
          </>
        )}
      </div>
    </div>
  );
}
