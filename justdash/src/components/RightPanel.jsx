import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Bug,
  User,
  Bell,
  CheckCircle,
  AlertCircle,
  Clock,
  Users,
} from "lucide-react";
import * as THREE from "three";

const notifications = [
  {
    icon: Bug,
    title: "You have a bug that needs fixing",
    description: "Critical issue in payment processing",
    time: "Just now",
    type: "bug",
    priority: "high",
  },
  {
    icon: User,
    title: "New user registered",
    description: "john.doe@example.com joined",
    time: "59 minutes ago",
    type: "user",
    priority: "medium",
  },
  {
    icon: Bug,
    title: "You have a bug that needs attention",
    description: "UI rendering issue on mobile",
    time: "12 hours ago",
    type: "bug",
    priority: "low",
  },
  {
    icon: CheckCircle,
    title: "Andi Lane subscribed to you",
    description: "Premium subscription activated",
    time: "Today, 11:59 AM",
    type: "success",
    priority: "medium",
  },
];

const activities = [
  {
    user: "You",
    action: "have a bug that needs fixing",
    time: "Just now",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    type: "bug",
  },
  {
    user: "Released",
    action: "a new version v2.1.0",
    time: "59 minutes ago",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b9e0e4e4?w=32&h=32&fit=crop&crop=face",
    type: "release",
  },
  {
    user: "Submitted",
    action: "a bug report #1234",
    time: "12 hours ago",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
    type: "bug",
  },
  {
    user: "Modified",
    action: "data in Page X dashboard",
    time: "Today, 11:59 AM",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
    type: "edit",
  },
  {
    user: "Deleted",
    action: "a page in Project X",
    time: "Feb 2, 2023",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face",
    type: "delete",
  },
];

const contacts = [
  {
    name: "Natali Craig",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b9e0e4e4?w=40&h=40&fit=crop&crop=face",
    status: "online",
    role: "Designer",
  },
  {
    name: "Drew Cano",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    status: "away",
    role: "Developer",
  },
  {
    name: "Orlando Diggs",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    status: "online",
    role: "Manager",
  },
  {
    name: "Andi Lane",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    status: "offline",
    role: "Analyst",
  },
  {
    name: "Kate Morrison",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
    status: "online",
    role: "Marketing",
  },
  {
    name: "Koray Okumus",
    avatar:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=40&h=40&fit=crop&crop=face",
    status: "away",
    role: "Sales",
  },
];

// Three.js Background Component
const ThreeBackground = () => {
  const mountRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!mountRef.current || shouldReduceMotion) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      320 / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(320, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create floating particles
    const geometry = new THREE.BufferGeometry();
    const particleCount = 50;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      colors[i * 3] = 0.5 + Math.random() * 0.5;
      colors[i * 3 + 1] = 0.5 + Math.random() * 0.5;
      colors[i * 3 + 2] = 0.8 + Math.random() * 0.2;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.x += 0.001;
      particles.rotation.y += 0.002;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [shouldReduceMotion]);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none opacity-30"
    />
  );
};

// Skeleton Loader Component
const SkeletonLoader = ({ className }) => (
  <motion.div
    className={`bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 ${className}`}
    animate={{
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "linear",
    }}
    style={{
      backgroundSize: "200% 100%",
    }}
  />
);

// Enhanced Notification Item
const NotificationItem = ({ notification, index }) => {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        delay: index * 0.1,
      },
    },
  };

  const hoverVariants = {
    hover: {
      scale: shouldReduceMotion ? 1 : 1.02,
      rotateY: shouldReduceMotion ? 0 : 2,
      z: shouldReduceMotion ? 0 : 10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover="hover"
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ perspective: 1000 }}
    >
      <motion.div
        variants={hoverVariants}
        className="flex items-start space-x-3 p-3 rounded-lg bg-white dark:bg-gray-800 shadow-sm cursor-pointer relative overflow-hidden"
        whileTap={{ scale: 0.98 }}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0"
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className={`relative z-10 p-2 rounded-lg shadow-sm ${
            notification.type === "bug"
              ? "bg-red-100 dark:bg-red-900/20"
              : notification.type === "success"
              ? "bg-green-100 dark:bg-green-900/20"
              : "bg-blue-100 dark:bg-blue-900/20"
          }`}
          whileHover={{
            scale: shouldReduceMotion ? 1 : 1.1,
            rotate: shouldReduceMotion ? 0 : [0, -5, 5, 0],
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <notification.icon
              className={`w-4 h-4 ${
                notification.type === "bug"
                  ? "text-red-600 dark:text-red-400"
                  : notification.type === "success"
                  ? "text-green-600 dark:text-green-400"
                  : "text-blue-600 dark:text-blue-400"
              }`}
            />
          </motion.div>
        </motion.div>

        <div className="flex-1 min-w-0 relative z-10">
          <div className="flex items-center justify-between mb-1">
            <motion.p
              className="text-sm font-medium text-gray-900 dark:text-white truncate"
              animate={isHovered ? { x: 2 } : { x: 0 }}
              transition={{ duration: 0.2 }}
            >
              {notification.title}
            </motion.p>
            <motion.div
              className={`w-2 h-2 rounded-full ${
                notification.priority === "high"
                  ? "bg-red-500"
                  : notification.priority === "medium"
                  ? "bg-yellow-500"
                  : "bg-green-500"
              }`}
              animate={
                notification.priority === "high"
                  ? {
                      scale: [1, 1.2, 1],
                      boxShadow: [
                        "0 0 0 0 rgba(239, 68, 68, 0.7)",
                        "0 0 0 4px rgba(239, 68, 68, 0)",
                        "0 0 0 0 rgba(239, 68, 68, 0)",
                      ],
                    }
                  : {}
              }
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <motion.p
            className="text-xs text-gray-600 dark:text-gray-400 mb-1"
            animate={isHovered ? { x: 4 } : { x: 0 }}
            transition={{ duration: 0.2, delay: 0.05 }}
          >
            {notification.description}
          </motion.p>
          <motion.p
            className="text-xs text-gray-500 dark:text-gray-400 flex items-center"
            animate={isHovered ? { x: 6 } : { x: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            <Clock className="w-3 h-3 mr-1" />
            {notification.time}
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Enhanced Activity Item
const ActivityItem = ({ activity, index }) => {
  const shouldReduceMotion = useReducedMotion();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: index * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      whileHover={{
        x: shouldReduceMotion ? 0 : 4,
        transition: { duration: 0.2 },
      }}
      className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
    >
      <div className="relative">
        <AnimatePresence>
          {!imageLoaded && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-10"
            >
              <SkeletonLoader className="w-8 h-8 rounded-full" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.img
          src={activity.avatar}
          alt={activity.user}
          className="w-8 h-8 rounded-full shadow-sm"
          onLoad={() => setImageLoaded(true)}
          whileHover={{
            scale: shouldReduceMotion ? 1 : 1.1,
            rotate: shouldReduceMotion ? 0 : [0, -5, 5, 0],
          }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white dark:border-gray-800 ${
            activity.type === "bug"
              ? "bg-red-500"
              : activity.type === "release"
              ? "bg-green-500"
              : "bg-blue-500"
          }`}
          animate={
            activity.type === "release"
              ? {
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(34, 197, 94, 0.7)",
                    "0 0 0 4px rgba(34, 197, 94, 0)",
                    "0 0 0 0 rgba(34, 197, 94, 0)",
                  ],
                }
              : {}
          }
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      <div className="flex-1 min-w-0">
        <motion.p
          className="text-sm text-gray-900 dark:text-white"
          whileHover={{ x: shouldReduceMotion ? 0 : 2 }}
          transition={{ duration: 0.2 }}
        >
          <span className="font-medium">{activity.user}</span> {activity.action}
        </motion.p>
        <motion.p
          className="text-xs text-gray-500 dark:text-gray-400 flex items-center mt-1"
          whileHover={{ x: shouldReduceMotion ? 0 : 4 }}
          transition={{ duration: 0.2, delay: 0.05 }}
        >
          <Clock className="w-3 h-3 mr-1" />
          {activity.time}
        </motion.p>
      </div>
    </motion.div>
  );
};

// Enhanced Contact Item
const ContactItem = ({ contact, index }) => {
  const shouldReduceMotion = useReducedMotion();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: index * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      whileHover={{
        scale: shouldReduceMotion ? 1 : 1.02,
        y: shouldReduceMotion ? 0 : -2,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200 cursor-pointer group"
    >
      <div className="relative">
        <AnimatePresence>
          {!imageLoaded && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-10"
            >
              <SkeletonLoader className="w-10 h-10 rounded-full" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.img
          src={contact.avatar}
          alt={contact.name}
          className="w-10 h-10 rounded-full shadow-sm"
          onLoad={() => setImageLoaded(true)}
          whileHover={{
            scale: shouldReduceMotion ? 1 : 1.1,
            rotate: shouldReduceMotion ? 0 : [0, -3, 3, 0],
          }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white dark:border-gray-800 ${
            contact.status === "online"
              ? "bg-green-500"
              : contact.status === "away"
              ? "bg-yellow-500"
              : "bg-gray-400"
          }`}
          animate={
            contact.status === "online"
              ? {
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(34, 197, 94, 0.7)",
                    "0 0 0 4px rgba(34, 197, 94, 0)",
                    "0 0 0 0 rgba(34, 197, 94, 0)",
                  ],
                }
              : {}
          }
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      <div className="flex-1 min-w-0">
        <motion.p
          className="text-sm font-medium text-gray-900 dark:text-white truncate"
          whileHover={{ x: shouldReduceMotion ? 0 : 2 }}
          transition={{ duration: 0.2 }}
        >
          {contact.name}
        </motion.p>
        <motion.p
          className="text-xs text-gray-500 dark:text-gray-400"
          whileHover={{ x: shouldReduceMotion ? 0 : 4 }}
          transition={{ duration: 0.2, delay: 0.05 }}
        >
          {contact.role}
        </motion.p>
      </div>

      <motion.div
        className={`w-2 h-2 rounded-full ${
          contact.status === "online"
            ? "bg-green-500"
            : contact.status === "away"
            ? "bg-yellow-500"
            : "bg-gray-400"
        }`}
        animate={
          contact.status === "online"
            ? {
                scale: [1, 1.3, 1],
                opacity: [1, 0.7, 1],
              }
            : {}
        }
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default function RightPanel() {
  const [isLoading, setIsLoading] = useState(true);
  const [expandedSection, setExpandedSection] = useState("activities"); // 'activities' or 'contacts'
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      rotateY: -15,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  if (isLoading) {
    return (
      <div className="w-80 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 flex flex-col">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <SkeletonLoader className="h-6 w-24 rounded" />
            <SkeletonLoader className="h-6 w-16 rounded" />
          </div>
        </div>
        <div className="p-4 space-y-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-start space-x-3">
              <SkeletonLoader className="w-8 h-8 rounded-lg" />
              <div className="flex-1 space-y-2">
                <SkeletonLoader className="h-4 w-3/4 rounded" />
                <SkeletonLoader className="h-3 w-1/2 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-80 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 flex flex-col shadow-xl relative overflow-hidden"
      style={{ perspective: shouldReduceMotion ? "none" : 1000 }}
    >
      {/* Three.js Background */}
      <ThreeBackground />

      {/* Header */}
      <motion.div
        variants={headerVariants}
        className="relative z-10 p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700/50 dark:to-gray-600/50"
      >
        <div className="flex items-center justify-between">
          <motion.h2
            className="text-lg font-semibold text-gray-900 dark:text-white"
            whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Notifications
          </motion.h2>
          <div className="flex items-center space-x-2">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Bell className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </motion.div>
            <motion.span
              className="bg-red-500 text-white text-xs rounded-full px-2 py-1"
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 0 0 rgba(239, 68, 68, 0.7)",
                  "0 0 0 4px rgba(239, 68, 68, 0)",
                  "0 0 0 0 rgba(239, 68, 68, 0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              4
            </motion.span>
          </div>
        </div>
      </motion.div>

      {/* Notifications Section */}
      <motion.div
        variants={sectionVariants}
        className="relative z-10 p-4 space-y-3 border-b border-gray-200 dark:border-gray-700 max-h-80 overflow-y-auto"
      >
        <motion.div
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {notifications.map((notification, index) => (
            <NotificationItem
              key={index}
              notification={notification}
              index={index}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Activities Section */}
      <motion.div
        variants={sectionVariants}
        className="relative z-10 border-b border-gray-200 dark:border-gray-700 overflow-hidden"
      >
        <motion.div
          className="p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors duration-200"
          onClick={() =>
            setExpandedSection(
              expandedSection === "activities" ? null : "activities"
            )
          }
          onHoverStart={() => setExpandedSection("activities")}
          onHoverEnd={() => {
            if (expandedSection !== "activities") {
              setExpandedSection(null);
            }
          }}
          whileHover={{ x: shouldReduceMotion ? 0 : 2 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div className="flex items-center justify-between">
            <motion.h3
              className="text-sm font-semibold text-gray-900 dark:text-white flex items-center"
              whileHover={{ x: shouldReduceMotion ? 0 : 2 }}
              transition={{ duration: 0.2 }}
            >
              <AlertCircle className="w-4 h-4 mr-2" />
              Activities
            </motion.h3>
            <motion.div
              animate={{ rotate: expandedSection === "activities" ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.div>
          </motion.div>

          {/* Preview when collapsed */}
          <AnimatePresence>
            {expandedSection !== "activities" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-2"
              >
                <motion.p
                  className="text-xs text-gray-500 dark:text-gray-400"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {activities.length} recent activities • Click to expand
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Expandable content */}
        <motion.div
          initial={false}
          animate={{
            height: expandedSection === "activities" ? "auto" : 0,
            opacity: expandedSection === "activities" ? 1 : 0,
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            opacity: {
              duration: 0.2,
              delay: expandedSection === "activities" ? 0.1 : 0,
            },
          }}
          className="overflow-hidden"
        >
          <div className="px-4 pb-4 space-y-4 max-h-64 overflow-y-auto">
            <AnimatePresence>
              {expandedSection === "activities" &&
                activities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -20, scale: 0.95 }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                  >
                    <ActivityItem activity={activity} index={index} />
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>

      {/* Contacts Section */}
      <motion.div
        variants={sectionVariants}
        className="relative z-10 flex-1 overflow-hidden"
      >
        <motion.div
          className="p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors duration-200"
          onClick={() =>
            setExpandedSection(
              expandedSection === "contacts" ? null : "contacts"
            )
          }
          onHoverStart={() => setExpandedSection("contacts")}
          onHoverEnd={() => {
            if (expandedSection !== "contacts") {
              setExpandedSection(null);
            }
          }}
          whileHover={{ x: shouldReduceMotion ? 0 : 2 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div className="flex items-center justify-between">
            <motion.h3
              className="text-sm font-semibold text-gray-900 dark:text-white flex items-center"
              whileHover={{ x: shouldReduceMotion ? 0 : 2 }}
              transition={{ duration: 0.2 }}
            >
              <Users className="w-4 h-4 mr-2" />
              Contacts
            </motion.h3>
            <motion.div
              animate={{ rotate: expandedSection === "contacts" ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.div>
          </motion.div>

          {/* Preview when collapsed */}
          <AnimatePresence>
            {expandedSection !== "contacts" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-2 flex items-center space-x-2"
              >
                <div className="flex -space-x-2">
                  {contacts.slice(0, 3).map((contact, index) => (
                    <motion.img
                      key={index}
                      src={contact.avatar}
                      alt={contact.name}
                      className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-800"
                      whileHover={{ scale: 1.1, zIndex: 10 }}
                      transition={{ duration: 0.2 }}
                    />
                  ))}
                  {contacts.length > 3 && (
                    <motion.div
                      className="w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-white dark:border-gray-800 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                        +{contacts.length - 3}
                      </span>
                    </motion.div>
                  )}
                </div>
                <motion.p
                  className="text-xs text-gray-500 dark:text-gray-400"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {contacts.filter((c) => c.status === "online").length} online
                  • Click to expand
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Expandable content */}
        <motion.div
          initial={false}
          animate={{
            height: expandedSection === "contacts" ? "auto" : 0,
            opacity: expandedSection === "contacts" ? 1 : 0,
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            opacity: {
              duration: 0.2,
              delay: expandedSection === "contacts" ? 0.1 : 0,
            },
          }}
          className="overflow-hidden"
        >
          <div className="px-4 pb-4 space-y-3 max-h-64 overflow-y-auto">
            <AnimatePresence>
              {expandedSection === "contacts" &&
                contacts.map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                  >
                    <ContactItem contact={contact} index={index} />
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
