
import DashboardWidget from "./DashboardWidget";
import { Button } from "@/components/ui/button";
import { FileText, Plus, CalendarPlus, Folder, Clock, Heart, Boxes, Leaf, Home, Cog } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface QuickAction {
  icon: React.ElementType;
  label: string;
  href: string;
  color: string;
}

const quickActions: QuickAction[] = [
  {
    icon: Plus,
    label: "New Task",
    href: "/tasks/new",
    color: "bg-blue-50 text-blue-600 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/40",
  },
  {
    icon: FileText,
    label: "Create Note",
    href: "/notes/new",
    color: "bg-purple-50 text-purple-600 hover:bg-purple-100 dark:bg-purple-900/20 dark:text-purple-400 dark:hover:bg-purple-900/40",
  },
  {
    icon: CalendarPlus,
    label: "Schedule",
    href: "/calendar/new",
    color: "bg-green-50 text-green-600 hover:bg-green-100 dark:bg-green-900/20 dark:text-green-400 dark:hover:bg-green-900/40",
  },
  {
    icon: Folder,
    label: "New Project",
    href: "/projects/new",
    color: "bg-amber-50 text-amber-600 hover:bg-amber-100 dark:bg-amber-900/20 dark:text-amber-400 dark:hover:bg-amber-900/40",
  },
  {
    icon: Clock,
    label: "Time Block",
    href: "/time-blocking/new",
    color: "bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/40",
  },
  {
    icon: Heart,
    label: "Health Log",
    href: "/health/log",
    color: "bg-pink-50 text-pink-600 hover:bg-pink-100 dark:bg-pink-900/20 dark:text-pink-400 dark:hover:bg-pink-900/40",
  },
  {
    icon: Home,
    label: "Home",
    href: "/home",
    color: "bg-sky-50 text-sky-600 hover:bg-sky-100 dark:bg-sky-900/20 dark:text-sky-400 dark:hover:bg-sky-900/40",
  },
  {
    icon: Boxes,
    label: "Inventory",
    href: "/inventory/add",
    color: "bg-indigo-50 text-indigo-600 hover:bg-indigo-100 dark:bg-indigo-900/20 dark:text-indigo-400 dark:hover:bg-indigo-900/40",
  },
  {
    icon: Leaf,
    label: "Garden",
    href: "/garden",
    color: "bg-emerald-50 text-emerald-600 hover:bg-emerald-100 dark:bg-emerald-900/20 dark:text-emerald-400 dark:hover:bg-emerald-900/40",
  },
  {
    icon: Cog,
    label: "Automation",
    href: "/automations/new",
    color: "bg-slate-50 text-slate-600 hover:bg-slate-100 dark:bg-slate-900/20 dark:text-slate-400 dark:hover:bg-slate-900/40",
  }
];

const QuickActions = () => {
  return (
    <DashboardWidget title="Quick Actions">
      <div className="flex flex-wrap gap-2">
        {quickActions.map((action) => (
          <Button
            key={action.label}
            variant="ghost"
            className={cn(
              "h-auto py-1.5 px-2.5 rounded-lg flex items-center gap-1 text-xs font-medium",
              action.color
            )}
            asChild
          >
            <Link to={action.href}>
              <action.icon className="h-3.5 w-3.5" />
              <span>{action.label}</span>
            </Link>
          </Button>
        ))}
      </div>
    </DashboardWidget>
  );
};

export default QuickActions;
