import { Bug, User, Bell, CheckCircle, AlertCircle, Clock } from "lucide-react";
import { Users } from "lucide-react"; // Import Users component

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

export default function RightPanel() {
  return (
    <div className="w-80 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 flex flex-col transition-all duration-300 shadow-sm">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Notifications
          </h2>
          <div className="flex items-center space-x-2">
            <Bell className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1">
              4
            </span>
          </div>
        </div>
      </div>

      {/* Enhanced Notifications */}
      <div className="p-4 space-y-3 border-b border-gray-200 dark:border-gray-700 max-h-80 overflow-y-auto">
        {notifications.map((notification, index) => (
          <div
            key={index}
            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 cursor-pointer group"
          >
            <div
              className={`p-2 rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-200 ${
                notification.type === "bug"
                  ? "bg-red-100 dark:bg-red-900/20"
                  : notification.type === "success"
                  ? "bg-green-100 dark:bg-green-900/20"
                  : "bg-blue-100 dark:bg-blue-900/20"
              }`}
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
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {notification.title}
                </p>
                <div
                  className={`w-2 h-2 rounded-full ${
                    notification.priority === "high"
                      ? "bg-red-500"
                      : notification.priority === "medium"
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }`}
                ></div>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                {notification.description}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {notification.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Activities */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex-1">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <AlertCircle className="w-4 h-4 mr-2" />
          Activities
        </h3>
        <div className="space-y-4 max-h-64 overflow-y-auto">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
            >
              <div className="relative">
                <img
                  src={activity.avatar || "/placeholder.svg"}
                  alt={activity.user}
                  className="w-8 h-8 rounded-full shadow-sm"
                />
                <div
                  className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white dark:border-gray-800 ${
                    activity.type === "bug"
                      ? "bg-red-500"
                      : activity.type === "release"
                      ? "bg-green-500"
                      : "bg-blue-500"
                  }`}
                ></div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900 dark:text-white">
                  <span className="font-medium">{activity.user}</span>{" "}
                  {activity.action}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center mt-1">
                  <Clock className="w-3 h-3 mr-1" />
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Contacts */}
      <div className="p-4 flex-1">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <Users className="w-4 h-4 mr-2" />
          Contacts
        </h3>
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200 cursor-pointer group"
            >
              <div className="relative">
                <img
                  src={contact.avatar || "/placeholder.svg"}
                  alt={contact.name}
                  className="w-10 h-10 rounded-full shadow-sm group-hover:shadow-md transition-shadow duration-200"
                />
                <div
                  className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white dark:border-gray-800 ${
                    contact.status === "online"
                      ? "bg-green-500"
                      : contact.status === "away"
                      ? "bg-yellow-500"
                      : "bg-gray-400"
                  }`}
                ></div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {contact.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {contact.role}
                </p>
              </div>
              <div
                className={`w-2 h-2 rounded-full ${
                  contact.status === "online"
                    ? "bg-green-500 animate-pulse"
                    : contact.status === "away"
                    ? "bg-yellow-500"
                    : "bg-gray-400"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
