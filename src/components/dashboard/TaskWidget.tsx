
import { Check, Clock } from "lucide-react";
import DashboardWidget from "./DashboardWidget";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Task {
  id: string;
  title: string;
  priority: "high" | "medium" | "low";
  dueDate: string;
  completed: boolean;
}

// Sample data - would come from a real data source
const tasks: Task[] = [
  {
    id: "1",
    title: "Review Q2 technology roadmap",
    priority: "high",
    dueDate: "2025-05-05",
    completed: false
  },
  {
    id: "2",
    title: "Meet with infrastructure team",
    priority: "medium",
    dueDate: "2025-05-06",
    completed: false
  },
  {
    id: "3",
    title: "Evaluate new cloud provider options",
    priority: "high",
    dueDate: "2025-05-07",
    completed: false
  },
  {
    id: "4",
    title: "Update department KPIs",
    priority: "medium",
    dueDate: "2025-05-05",
    completed: true
  },
  {
    id: "5",
    title: "Review security audit report",
    priority: "high",
    dueDate: "2025-05-04",
    completed: false
  }
];

const TaskItem = ({ task }: { task: Task }) => {
  const priorityStyles = {
    high: "bg-red-50 text-red-700 border-red-200",
    medium: "bg-amber-50 text-amber-700 border-amber-200",
    low: "bg-green-50 text-green-700 border-green-200",
  };
  
  const isOverdue = new Date(task.dueDate) < new Date() && !task.completed;
  const today = new Date().toISOString().split('T')[0];
  const isToday = task.dueDate === today;
  
  return (
    <div className={cn(
      "py-2 px-3 rounded-md mb-2 flex items-center justify-between",
      task.completed ? "bg-gray-50 opacity-60" : "bg-white"
    )}>
      <div className="flex items-center gap-2">
        <Button 
          size="icon" 
          variant={task.completed ? "outline" : "ghost"} 
          className="h-5 w-5 rounded-full"
        >
          {task.completed ? <Check className="h-3 w-3" /> : null}
        </Button>
        <span className={task.completed ? "line-through text-muted-foreground" : ""}>
          {task.title}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className={cn(
          "text-xs px-2 py-0.5 rounded-full border",
          priorityStyles[task.priority]
        )}>
          {task.priority}
        </span>
        <span className={cn(
          "text-xs flex items-center gap-1",
          isOverdue ? "text-red-600" : "text-muted-foreground"
        )}>
          <Clock className="h-3 w-3" />
          {isToday ? "Today" : new Date(task.dueDate).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

const TaskWidget = () => {
  const activeTasks = tasks.filter(t => !t.completed).slice(0, 4);
  
  return (
    <DashboardWidget title="Priority Tasks" description="Your upcoming tasks" fullHeight>
      <div className="space-y-1">
        {activeTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
      <div className="mt-4 text-center">
        <Button variant="outline" size="sm" asChild>
          <Link to="/tasks">View all tasks</Link>
        </Button>
      </div>
    </DashboardWidget>
  );
};

export default TaskWidget;
