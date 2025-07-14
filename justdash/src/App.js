// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p className="text-red-">
//           Edit <code>src/App.js</code> and save to reload.dadadda
//         </p>
//         <a
//           className="App-link "
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// App.js
// "use client";

// import { useState } from "react";
// import "./App.css";

// // Components
// import { ThemeProvider } from "./components/ThemeProvider";
// import Sidebar from "./components/Sidebar";
// import MainContent from "./components/MainContent";
// import RightPanel from "./components/RightPanel";

// function App() {
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <ThemeProvider darkMode={darkMode}>
//       <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
//         <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 ">
//           <Sidebar />
//           <MainContent darkMode={darkMode} setDarkMode={setDarkMode} />
//           <RightPanel />
//         </div>
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;
// App.js
// "use client";

// import { useState, useEffect } from "react";
// import "./App.css";

// // Components
// import { ThemeProvider } from "./components/ThemeProvider";
// import Sidebar from "./components/Sidebar";
// import MainContent from "./components/MainContent";
// import RightPanel from "./components/RightPanel";

// function App() {
//   const [darkMode, setDarkMode] = useState(false);

//   // Load dark mode preference from localStorage on mount
//   useEffect(() => {
//     const savedDarkMode = localStorage.getItem("darkMode");
//     if (savedDarkMode !== null) {
//       setDarkMode(JSON.parse(savedDarkMode));
//     }
//   }, []);

//   // Apply dark mode to document root and save to localStorage
//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//     localStorage.setItem("darkMode", JSON.stringify(darkMode));
//   }, [darkMode]);

//   return (
//     <ThemeProvider darkMode={darkMode}>
//       <div className="min-h-screen">
//         <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
//           <Sidebar />
//           <MainContent darkMode={darkMode} setDarkMode={setDarkMode} />
//           <RightPanel />
//         </div>
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;

// BELOW WORK

// import { useState, useEffect } from "react";
// import "./App.css";

// // Components
// import { ThemeProvider } from "./components/ThemeProvider";
// import Sidebar from "./components/Sidebar";
// import MainContent from "./components/MainContent";
// import RightPanel from "./components/RightPanel";

// function App() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [rightPanelOpen, setRightPanelOpen] = useState(true);

//   // Load preferences from localStorage on mount
//   useEffect(() => {
//     const savedDarkMode = localStorage.getItem("darkMode");
//     const savedPanelState = localStorage.getItem("rightPanelOpen");

//     if (savedDarkMode !== null) {
//       setDarkMode(JSON.parse(savedDarkMode));
//     }

//     if (savedPanelState !== null) {
//       setRightPanelOpen(JSON.parse(savedPanelState));
//     }
//   }, []);

//   // Apply dark mode to document root and save to localStorage
//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//     localStorage.setItem("darkMode", JSON.stringify(darkMode));
//   }, [darkMode]);

//   // Save right panel state to localStorage
//   useEffect(() => {
//     localStorage.setItem("rightPanelOpen", JSON.stringify(rightPanelOpen));
//   }, [rightPanelOpen]);

//   // Toggle right panel function
//   const toggleRightPanel = () => {
//     setRightPanelOpen(!rightPanelOpen);
//   };

//   return (
//     <ThemeProvider darkMode={darkMode}>
//       <div className="min-h-screen">
//         <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
//           <Sidebar />
//           <MainContent
//             darkMode={darkMode}
//             setDarkMode={setDarkMode}
//             toggleRightPanel={toggleRightPanel}
//             rightPanelOpen={rightPanelOpen}
//           />
//           {/* Animated Right Panel */}
//           <div className="relative">
//             <div
//               className={`w-80 transition-transform duration-300 ease-in-out ${
//                 rightPanelOpen ? "translate-x-0" : "translate-x-full"
//               }`}
//             >
//               <RightPanel />
//             </div>
//           </div>
//         </div>
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;

// App.js
"use client";

// import { useState, useEffect } from "react";
// import "./App.css";

// // Components
// import { ThemeProvider } from "./components/ThemeProvider";
// import Sidebar from "./components/Sidebar";
// import MainContent from "./components/MainContent";
// import RightPanel from "./components/RightPanel";

// function App() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [rightPanelOpen, setRightPanelOpen] = useState(true);

//   // Load preferences from localStorage on mount
//   useEffect(() => {
//     const savedDarkMode = localStorage.getItem("darkMode");
//     const savedPanelState = localStorage.getItem("rightPanelOpen");

//     if (savedDarkMode !== null) {
//       setDarkMode(JSON.parse(savedDarkMode));
//     }

//     if (savedPanelState !== null) {
//       setRightPanelOpen(JSON.parse(savedPanelState));
//     }
//   }, []);

//   // Apply dark mode to document root and save to localStorage
//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//     localStorage.setItem("darkMode", JSON.stringify(darkMode));
//   }, [darkMode]);

//   // Save right panel state to localStorage
//   useEffect(() => {
//     localStorage.setItem("rightPanelOpen", JSON.stringify(rightPanelOpen));
//   }, [rightPanelOpen]);

//   // Toggle right panel function
//   const toggleRightPanel = () => {
//     setRightPanelOpen(!rightPanelOpen);
//   };

//   return (
//     <ThemeProvider darkMode={darkMode}>
//       <div className="min-h-screen">
//         <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
//           <Sidebar />
//           <MainContent
//             darkMode={darkMode}
//             setDarkMode={setDarkMode}
//             toggleRightPanel={toggleRightPanel}
//             rightPanelOpen={rightPanelOpen}
//           />
//           {/* Animated Right Panel */}
//           <div
//             className={`transition-all duration-300 ease-in-out overflow-hidden ${
//               rightPanelOpen ? "w-80 opacity-100" : "w-0 opacity-0"
//             }`}
//           >
//             <RightPanel />
//           </div>
//         </div>
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

// Components
import { ThemeProvider } from "./components/ThemeProvider";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import RightPanel from "./components/RightPanel";

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
      <div className="min-h-screen">
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <Sidebar />
          <MainContent
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
    </ThemeProvider>
  );
}

export default App;
