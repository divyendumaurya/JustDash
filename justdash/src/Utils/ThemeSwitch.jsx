// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Sun, Moon } from "lucide-react";

// export default function ThemeSwitchOverlay({ show, isDark }) {
//   return (
//     <AnimatePresence>
//       {show && (
//         <motion.div
//           key="theme-overlay"
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 0.9, scale: 1 }}
//           exit={{ opacity: 0, scale: 0 }}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//           className="fixed inset-0 flex items-center justify-center z-50 bg-black/40"
//         >
//           {isDark ? (
//             <Moon size={120} className="text-white" />
//           ) : (
//             <Sun size={120} className="text-yellow-400" />
//           )}
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }
// import { motion, AnimatePresence } from "framer-motion";
// import { Sun, Moon } from "lucide-react";

// export default function ThemeSwitchOverlay({ show, isDark }) {
//   return (
//     <AnimatePresence>
//       {show && (
//         <motion.div
//           key="theme-overlay"
//           initial={{ opacity: 0, scale: 0 }}
//           animate={{ opacity: 0.9, scale: 1 }}
//           exit={{ opacity: 0, scale: 0 }}
//           transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} // Ease out back
//           className="fixed inset-0 flex items-center justify-center z-50 bg-black/40"
//         >
//           <motion.div
//             initial={{ scale: 0, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0, opacity: 0 }}
//             transition={{ type: "spring", stiffness: 120, damping: 12 }}
//             className="flex items-center justify-center"
//           >
//             {isDark ? (
//               <Moon size={120} className="text-white drop-shadow-lg" />
//             ) : (
//               <Sun size={120} className="text-yellow-400 drop-shadow-lg" />
//             )}
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeSwitchOverlay({ show, isDark }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="theme-overlay"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.9, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/40"
        >
          <div className="relative flex items-center justify-center">
            {/* Pulse Circle */}
            <motion.div
              initial={{ scale: 0, opacity: 0.5 }}
              animate={{ scale: 2, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`absolute w-40 h-40 rounded-full ${
                isDark ? "bg-gray-600" : "bg-yellow-300"
              }`}
            />

            {/* Icon */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 14 }}
              className="relative"
            >
              {isDark ? (
                <Moon size={120} className="text-white drop-shadow-lg" />
              ) : (
                <Sun size={120} className="text-yellow-400 drop-shadow-lg" />
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
