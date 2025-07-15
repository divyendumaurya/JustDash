import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";

// Components
import { ThemeProvider } from "./components/ThemeProvider";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import RightPanel from "./components/RightPanel";

// Pages

import OrderList from "./Pages/OdersList";

function AppContent({
  darkMode,
  setDarkMode,
  toggleRightPanel,
  rightPanelOpen,
}) {
  const location = useLocation();

  return (
    <>
      <Sidebar currentPath={location.pathname} />
      <Routes>
        <Route
          path="/"
          element={
            <MainContent
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              toggleRightPanel={toggleRightPanel}
              rightPanelOpen={rightPanelOpen}
            />
          }
        >
          {/* This will render in the Outlet */}
          <Route path="orders-list" element={<OrderList />} />
        </Route>
      </Routes>
    </>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [rightPanelOpen, setRightPanelOpen] = useState(true);

  // Load preferences from localStorage on mount
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    const savedPanelState = localStorage.getItem("rightPanelOpen");

    if (savedDarkMode !== null) {
      setDarkMode(JSON.parse(savedDarkMode));
    }

    if (savedPanelState !== null) {
      setRightPanelOpen(JSON.parse(savedPanelState));
    }
  }, []);

  // Apply dark mode to document root and save to localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // Save right panel state to localStorage
  useEffect(() => {
    localStorage.setItem("rightPanelOpen", JSON.stringify(rightPanelOpen));
  }, [rightPanelOpen]);

  const toggleRightPanel = () => {
    setRightPanelOpen(!rightPanelOpen);
  };

  return (
    <ThemeProvider darkMode={darkMode}>
      <Router>
        <div className="min-h-screen">
          <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <AppContent
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              toggleRightPanel={toggleRightPanel}
              rightPanelOpen={rightPanelOpen}
            />

            {/* Framer Motion Right Panel */}
            <AnimatePresence>
              {rightPanelOpen && (
                <motion.div
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "100%", opacity: 0 }}
                  transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 180,
                    mass: 0.5,
                  }}
                  className="w-80 flex-shrink-0 overflow-hidden"
                >
                  <RightPanel />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
