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
"use client";

import { useState } from "react";
import "./App.css";

// Components
import { ThemeProvider } from "./components/ThemeProvider";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import RightPanel from "./components/RightPanel";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider darkMode={darkMode}>
      <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <Sidebar />
          <MainContent darkMode={darkMode} setDarkMode={setDarkMode} />
          <RightPanel />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
