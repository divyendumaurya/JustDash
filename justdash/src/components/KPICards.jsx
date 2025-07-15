import React, { useState, useEffect, useRef } from "react";
import {
  TrendingUp,
  TrendingDown,
  Users,
  ShoppingBag,
  DollarSign,
  BarChart3,
} from "lucide-react";

const kpiData = [
  {
    title: "Customers",
    value: 3781,
    change: "+11.01%",
    trend: "up",
    icon: Users,
    bgColor:
      "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/10 dark:to-blue-800/20",
    iconColor: "text-blue-600 dark:text-blue-400",
    accentColor: "border-blue-200 dark:border-blue-700",
  },
  {
    title: "Orders",
    value: 1219,
    change: "-0.03%",
    trend: "down",
    icon: ShoppingBag,
    bgColor:
      "bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/10 dark:to-orange-800/20",
    iconColor: "text-orange-600 dark:text-orange-400",
    accentColor: "border-orange-200 dark:border-orange-700",
  },
  {
    title: "Revenue",
    value: 695,
    change: "+15.03%",
    trend: "up",
    icon: DollarSign,
    bgColor:
      "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/10 dark:to-green-800/20",
    iconColor: "text-green-600 dark:text-green-400",
    accentColor: "border-green-200 dark:border-green-700",
  },
  {
    title: "Growth",
    value: 30.1,
    change: "+6.08%",
    trend: "up",
    icon: BarChart3,
    bgColor:
      "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/10 dark:to-purple-800/20",
    iconColor: "text-purple-600 dark:text-purple-400",
    accentColor: "border-purple-200 dark:border-purple-700",
  },
];

// Number counter animation hook
function useAnimatedNumber(targetValue, duration = 2000) {
  const [currentValue, setCurrentValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const startTime = Date.now();
    const startValue = currentValue;
    const difference = targetValue - startValue;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const newValue = startValue + difference * easeOutQuart;

      setCurrentValue(newValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    requestAnimationFrame(animate);
  }, [targetValue, duration]);

  return { currentValue, isAnimating };
}

// Particle system for value changes
function ParticleEffect({ isVisible, trend, position }) {
  const particlesRef = useRef();

  useEffect(() => {
    if (!isVisible || !particlesRef.current) return;

    const particles = [];
    const particleCount = 15;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = `absolute w-1 h-1 rounded-full pointer-events-none ${
        trend === "up" ? "bg-green-400" : "bg-red-400"
      }`;

      const angle = (i / particleCount) * Math.PI * 2;
      const velocity = 2 + Math.random() * 2;
      const x = Math.cos(angle) * velocity;
      const y = Math.sin(angle) * velocity;

      particle.style.left = "50%";
      particle.style.top = "50%";
      particle.style.transform = "translate(-50%, -50%)";
      particle.style.opacity = "1";

      particlesRef.current.appendChild(particle);

      // Animate particle
      let frame = 0;
      const animateParticle = () => {
        frame++;
        const progress = frame / 60;

        if (progress < 1) {
          particle.style.transform = `translate(-50%, -50%) translate(${
            x * progress * 20
          }px, ${y * progress * 20}px)`;
          particle.style.opacity = 1 - progress;
          requestAnimationFrame(animateParticle);
        } else {
          particle.remove();
        }
      };

      requestAnimationFrame(animateParticle);
    }
  }, [isVisible, trend]);

  return (
    <div ref={particlesRef} className="absolute inset-0 overflow-hidden" />
  );
}

// 3D Tilt effect hook
function use3DTilt(ref) {
  const [tilt, setTilt] = useState({ x: 0, y: 0, scale: 1 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      setTilt({
        x: rotateX,
        y: rotateY,
        scale: 1.05,
      });
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setTilt({ x: 0, y: 0, scale: 1 });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return { tilt, isHovered };
}

function KPICard({
  title,
  value,
  change,
  trend,
  icon: Icon,
  bgColor,
  iconColor,
  accentColor,
  rightPanelOpen,
  index,
}) {
  const cardRef = useRef();
  const { tilt, isHovered } = use3DTilt(cardRef);
  const { currentValue, isAnimating } = useAnimatedNumber(
    value,
    2000 + index * 200
  );
  const [showParticles, setShowParticles] = useState(false);
  const [arrowBounce, setArrowBounce] = useState(false);

  useEffect(() => {
    // Staggered entrance animation
    const timer = setTimeout(() => {
      cardRef.current?.classList.add("animate-in");
    }, index * 150);

    return () => clearTimeout(timer);
  }, [index]);

  useEffect(() => {
    if (isAnimating) {
      setShowParticles(true);
      setArrowBounce(true);

      const timer = setTimeout(() => {
        setShowParticles(false);
        setArrowBounce(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const formatValue = (val) => {
    if (title === "Revenue") return `$${Math.round(val)}`;
    if (title === "Growth") return `${val.toFixed(1)}%`;
    return Math.round(val).toLocaleString();
  };

  return (
    <div
      ref={cardRef}
      className={`
        relative overflow-hidden
        ${bgColor} 
        rounded-2xl 
        p-6 
        border-2 ${accentColor}
        shadow-lg
        transition-all 
        duration-700
        ease-out
        opacity-0
        translate-y-8
        ${rightPanelOpen ? "min-h-[140px]" : "min-h-[120px]"}
        cursor-pointer
        animate-in
      `}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${tilt.scale})`,
        transformStyle: "preserve-3d",
        transition: isHovered
          ? "transform 0.1s ease-out"
          : "transform 0.5s ease-out, opacity 0.7s ease-out, translate 0.7s ease-out",
      }}
    >
      {/* Animated background glow */}
      <div
        className={`
          absolute inset-0 
          rounded-2xl 
          transition-opacity 
          duration-300
          ${isHovered ? "opacity-20" : "opacity-0"}
          ${trend === "up" ? "bg-green-400" : "bg-red-400"}
        `}
        style={{
          background: `radial-gradient(circle at 50% 50%, ${
            trend === "up" ? "rgba(34, 197, 94, 0.3)" : "rgba(239, 68, 68, 0.3)"
          } 0%, transparent 70%)`,
        }}
      />

      {/* Particle effects */}
      <ParticleEffect
        isVisible={showParticles}
        trend={trend}
        position={{ x: 0, y: 0 }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between">
          <div
            className={`
              p-4 
              rounded-xl 
              transition-all
              duration-300
              ${isHovered ? "scale-110" : "scale-100"}
              bg-white/80 dark:bg-gray-800/80
              backdrop-blur-sm
              shadow-lg
            `}
            style={{
              transform: `translateZ(20px)`,
            }}
          >
            <Icon
              className={`w-6 h-6 ${iconColor} transition-all duration-300`}
            />
          </div>

          <div
            className={`
              flex items-center space-x-2 
              transition-all duration-300
              ${arrowBounce ? "animate-bounce" : ""}
            `}
            style={{
              transform: `translateZ(10px)`,
            }}
          >
            <div
              className={`
              p-1 rounded-full 
              ${
                trend === "up"
                  ? "bg-green-100 dark:bg-green-900/30"
                  : "bg-red-100 dark:bg-red-900/30"
              }
            `}
            >
              {trend === "up" ? (
                <TrendingUp className="w-4 h-4 text-green-500" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-500" />
              )}
            </div>
            <span
              className={`
                text-sm font-bold 
                px-2 py-1 rounded-full
                ${
                  trend === "up"
                    ? "text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900/30"
                    : "text-red-700 dark:text-red-300 bg-red-100 dark:bg-red-900/30"
                }
              `}
            >
              {change}
            </span>
          </div>
        </div>

        <div className="mt-6" style={{ transform: `translateZ(15px)` }}>
          <div className="flex flex-col space-y-2">
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium uppercase tracking-wide">
              {title}
            </p>
            <div className="relative">
              <p
                className={`
                  font-bold text-gray-900 dark:text-white
                  transition-all duration-300
                  ${rightPanelOpen ? "text-2xl" : "text-3xl"}
                  ${isAnimating ? "scale-110" : "scale-100"}
                `}
                style={{
                  background: isAnimating
                    ? "linear-gradient(45deg, #3B82F6, #8B5CF6, #EF4444, #10B981)"
                    : "inherit",
                  backgroundSize: "400% 400%",
                  animation: isAnimating ? "gradient 2s ease infinite" : "none",
                  WebkitBackgroundClip: isAnimating ? "text" : "unset",
                  WebkitTextFillColor: isAnimating ? "transparent" : "inherit",
                }}
              >
                {formatValue(currentValue)}
              </p>

              {/* Animated underline */}
              <div
                className={`
                  absolute bottom-0 left-0 h-0.5 
                  transition-all duration-1000 ease-out
                  ${trend === "up" ? "bg-green-400" : "bg-red-400"}
                  ${isAnimating ? "w-full" : "w-0"}
                `}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating light effect */}
      <div
        className={`
          absolute top-4 right-4 w-2 h-2 rounded-full
          transition-all duration-1000
          ${isHovered ? "opacity-100 scale-150" : "opacity-0 scale-100"}
          ${trend === "up" ? "bg-green-400" : "bg-red-400"}
          animate-pulse
        `}
        style={{
          transform: `translateZ(30px)`,
          boxShadow: `0 0 20px ${trend === "up" ? "#10B981" : "#EF4444"}`,
        }}
      />
    </div>
  );
}

export default function KPICards({ rightPanelOpen = false }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <div
        className={`
          grid gap-8 
          ${
            rightPanelOpen
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          }
        `}
        style={{
          perspective: "1000px",
        }}
      >
        {kpiData.map((kpi, index) => (
          <KPICard
            key={index}
            title={kpi.title}
            value={kpi.value}
            change={kpi.change}
            trend={kpi.trend}
            icon={kpi.icon}
            bgColor={kpi.bgColor}
            iconColor={kpi.iconColor}
            accentColor={kpi.accentColor}
            rightPanelOpen={rightPanelOpen}
            index={index}
          />
        ))}
      </div>
    </>
  );
}
