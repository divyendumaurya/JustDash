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
    value: "3,781",
    change: "+11.01%",
    trend: "up",
    icon: Users,
    bgColor: "bg-blue-50 dark:bg-blue-900/10",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Orders",
    value: "1,219",
    change: "-0.03%",
    trend: "down",
    icon: ShoppingBag,
    bgColor: "bg-white dark:bg-gray-800",
    iconColor: "text-orange-600 dark:text-orange-400",
  },
  {
    title: "Revenue",
    value: "$695",
    change: "+15.03%",
    trend: "up",
    icon: DollarSign,
    bgColor: "bg-white dark:bg-gray-800",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    title: "Growth",
    value: "30.1%",
    change: "+6.08%",
    trend: "up",
    icon: BarChart3,
    bgColor: "bg-white dark:bg-gray-800",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
];

export default function KPICards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {kpiData.map((kpi, index) => (
        <KPICard key={index} {...kpi} />
      ))}
    </div>
  );
}

function KPICard({
  title,
  value,
  change,
  trend,
  icon: Icon,
  bgColor,
  iconColor,
}) {
  return (
    <div
      className={`${bgColor} p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group`}
    >
      <div className="flex items-center justify-between mb-4">
        <div
          className={`p-2 rounded-lg bg-white dark:bg-gray-700 shadow-sm group-hover:shadow-md transition-shadow duration-300`}
        >
          <Icon className={`w-5 h-5 ${iconColor}`} />
        </div>
        <div
          className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${
            trend === "up"
              ? "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400"
              : "bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400"
          }`}
        >
          {trend === "up" ? (
            <TrendingUp className="w-3 h-3" />
          ) : (
            <TrendingDown className="w-3 h-3" />
          )}
          <span>{change}</span>
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
          {title}
        </h3>
        <p className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {value}
        </p>
      </div>
    </div>
  );
}
