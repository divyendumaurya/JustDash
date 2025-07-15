import { Sun, Moon } from "lucide-react";

export default function ThemeSwitchOverlay({ show, isDark }) {
  if (!show) return null;

  return (
    <>
      <div
        className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-300 ease-out ${
          show ? "opacity-100 bg-black/20" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative flex items-center justify-center">
          {/* Pulse Circle */}
          <div
            className={`absolute w-32 h-32 rounded-full transition-all duration-500 ease-out ${
              isDark ? "bg-yellow-300/30" : "bg-gray-600/30"
            }`}
            style={{
              animation: show ? "pulse-expand 500ms ease-out forwards" : "none",
            }}
          />

          {/* Icon */}
          <div
            className="relative transition-all duration-300 ease-out"
            style={{
              animation: show ? "icon-bounce 400ms ease-out forwards" : "none",
            }}
          >
            {isDark ? (
              //   <Sun size={80} className="text-yellow-400 drop-shadow-lg" />
              <Moon size={80} className="text-white drop-shadow-lg" />
            ) : (
              //   <Moon size={80} className="text-white drop-shadow-lg" />
              <Sun size={80} className="text-yellow-400 drop-shadow-lg" />
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-expand {
          0% {
            transform: scale(0);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.3;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes icon-bounce {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
