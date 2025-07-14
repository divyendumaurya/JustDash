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
} from "lucide-react";

const menuItems = [
  { icon: Home, label: "Overview", active: false },
  { icon: FolderOpen, label: "Projects", active: false },
];

const dashboardItems = [
  { icon: BarChart3, label: "Default", active: false },
  { icon: ShoppingCart, label: "eCommerce", active: true },
  { icon: FolderOpen, label: "Projects", active: false },
  { icon: BookOpen, label: "Online Courses", active: false },
];

const pageItems = [
  { icon: User, label: "User Profile", active: false },
  { icon: Home, label: "Overview", active: false },
  { icon: FolderOpen, label: "Projects", active: false },
  { icon: FileText, label: "Campaigns", active: false },
  { icon: FileText, label: "Documents", active: false },
  { icon: Users, label: "Followers", active: false },
  { icon: Settings, label: "Account", active: false },
  { icon: Building, label: "Corporate", active: false },
  { icon: FileText, label: "Blog", active: false },
  { icon: Rss, label: "Social", active: false },
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col transition-all duration-300 shadow-sm">
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
              <SidebarItem key={index} {...item} />
            ))}
          </nav>
        </div>

        <div>
          <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
            Recently
          </h3>
          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <SidebarItem key={index} {...item} disabled />
            ))}
          </nav>
        </div>

        <div>
          <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
            Dashboards
          </h3>
          <nav className="space-y-2">
            {dashboardItems.map((item, index) => (
              <SidebarItem key={index} {...item} />
            ))}
          </nav>
        </div>

        <div>
          <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
            Pages
          </h3>
          <nav className="space-y-2">
            {pageItems.map((item, index) => (
              <SidebarItem key={index} {...item} disabled />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

function SidebarItem({ icon: Icon, label, active, disabled }) {
  return (
    <a
      href="#"
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
    </a>
  );
}
