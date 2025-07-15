import { useState } from "react";
import {
  Home,
  FolderOpen,
  BarChart3,
  ShoppingCart,
  User,
  BookOpen,
  Building,
  FileText,
  Rss,
  Settings,
  Users,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar({ currentPath }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: Home, label: "Overview", path: "/" },
    { icon: FolderOpen, label: "Folder Open", disabled: true },
  ];

  const dashboardItems = [
    { icon: BarChart3, label: "Default", disabled: true },
    {
      icon: ShoppingCart,
      label: "eCommerce",
      path: "/",
      active: currentPath === "/",
    },
    {
      icon: FolderOpen,
      label: "Orders List",
      path: "/orders-list",
      active: currentPath === "/orders-list",
    },
    { icon: BookOpen, label: "Online Courses", disabled: true },
  ];

  const pageItems = [
    { icon: User, label: "User Profile", disabled: true },
    { icon: Home, label: "Overview", disabled: true },
    { icon: FolderOpen, label: "Orders List", disabled: true },
    { icon: FileText, label: "Campaigns", disabled: true },
    { icon: FileText, label: "Documents", disabled: true },
    { icon: Users, label: "Followers", disabled: true },
    { icon: Settings, label: "Account", disabled: true },
    { icon: Building, label: "Corporate", disabled: true },
    { icon: FileText, label: "Blog", disabled: true },
    { icon: Rss, label: "Social", disabled: true },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        ) : (
          <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        )}
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed md:relative top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 
          border-r border-gray-200 dark:border-gray-700 flex flex-col 
          transition-all duration-300 shadow-sm z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="font-bold text-xl text-gray-900 dark:text-white">
              ByeWind
            </span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-8">
          <div>
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
              Favorites
            </h3>
            <nav className="space-y-2">
              {menuItems.map((item, index) => (
                <SidebarItem key={index} {...item} onItemClick={closeSidebar} />
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
              Recently
            </h3>
            <nav className="space-y-2">
              {menuItems.map((item, index) => (
                <SidebarItem
                  key={index}
                  {...item}
                  disabled
                  onItemClick={closeSidebar}
                />
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
              Dashboards
            </h3>
            <nav className="space-y-2">
              {dashboardItems.map((item, index) => (
                <SidebarItem key={index} {...item} onItemClick={closeSidebar} />
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
              Pages
            </h3>
            <nav className="space-y-2">
              {pageItems.map((item, index) => (
                <SidebarItem key={index} {...item} onItemClick={closeSidebar} />
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

function SidebarItem({
  icon: Icon,
  label,
  active,
  disabled,
  path = "#",
  onItemClick,
}) {
  const handleClick = () => {
    if (!disabled && onItemClick) {
      onItemClick();
    }
  };

  return (
    <Link
      to={disabled ? "#" : path}
      onClick={handleClick}
      className={`group flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
        active
          ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 shadow-sm border-l-4 border-blue-500"
          : disabled
          ? "text-gray-400 dark:text-gray-600 cursor-not-allowed"
          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
      }`}
    >
      <div className="flex items-center space-x-3">
        <Icon
          className={`w-5 h-5 transition-colors duration-200 ${
            active ? "text-blue-600 dark:text-blue-400" : ""
          }`}
        />
        <span>{label}</span>
      </div>
      {active && <ChevronRight className="w-4 h-4 text-blue-500 opacity-60" />}
    </Link>
  );
}
