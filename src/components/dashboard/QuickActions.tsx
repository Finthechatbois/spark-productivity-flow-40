
import DashboardWidget from "./DashboardWidget";
import { Button } from "@/components/ui/button";
import { FileText, Plus, CalendarPlus, Send, UserPlus } from "lucide-react";
import { cn } from "@/lib/utils";

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
    color: "bg-blue-50 text-blue-600 hover:bg-blue-100",
  },
  {
    icon: FileText,
    label: "Create Note",
    href: "/notes/new",
    color: "bg-purple-50 text-purple-600 hover:bg-purple-100",
  },
  {
    icon: CalendarPlus,
    label: "Schedule",
    href: "/calendar/new",
    color: "bg-green-50 text-green-600 hover:bg-green-100",
  },
  {
    icon: Send,
    label: "Send Message",
    href: "/inbox/new",
    color: "bg-amber-50 text-amber-600 hover:bg-amber-100",
  },
  {
    icon: UserPlus,
    label: "Add Team Member",
    href: "/team/new",
    color: "bg-red-50 text-red-600 hover:bg-red-100",
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
          >
            <action.icon className="h-3.5 w-3.5" />
            <span>{action.label}</span>
          </Button>
        ))}
      </div>
    </DashboardWidget>
  );
};

export default QuickActions;
