
import { Clock, ArrowUpRight } from "lucide-react";
import DashboardWidget from "./DashboardWidget";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  name: string;
  progress: number;
  dueDate: string;
  priority: "high" | "medium" | "low";
}

// Sample data
const projects: Project[] = [
  {
    id: "1",
    name: "Home Automation System",
    progress: 68,
    dueDate: "2025-06-15",
    priority: "medium"
  },
  {
    id: "2",
    name: "Personal Knowledge Base",
    progress: 32,
    dueDate: "2025-06-30",
    priority: "high"
  },
  {
    id: "3",
    name: "Smart Home Dashboard",
    progress: 85,
    dueDate: "2025-05-25",
    priority: "low"
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  const priorityColors = {
    high: "text-red-400",
    medium: "text-amber-400",
    low: "text-green-400"
  };
  
  const today = new Date();
  const dueDate = new Date(project.dueDate);
  const daysLeft = Math.ceil((dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  
  return (
    <div className="p-3 rounded-lg border border-border bg-background/40 hover:bg-background/70 transition-colors mb-3">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-medium">{project.name}</h3>
        <span className={cn("text-xs px-2 py-0.5 rounded-full", priorityColors[project.priority])}>
          {project.priority}
        </span>
      </div>
      
      <div className="mb-2">
        <div className="flex justify-between text-xs text-muted-foreground mb-1">
          <span>Progress</span>
          <span>{project.progress}%</span>
        </div>
        <Progress value={project.progress} className="h-2" />
      </div>
      
      <div className="flex justify-between items-center text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          <span>{daysLeft} days left</span>
        </div>
        <Button variant="ghost" size="sm" className="h-7 p-0" asChild>
          <Link to={`/projects/${project.id}`}>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

const ProjectsWidget = () => {
  return (
    <DashboardWidget title="Personal Projects" description="Track your ongoing projects" fullHeight>
      <div className="space-y-1">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="mt-4 text-center">
        <Button variant="outline" size="sm" asChild>
          <Link to="/projects">View all projects</Link>
        </Button>
      </div>
    </DashboardWidget>
  );
};

export default ProjectsWidget;
