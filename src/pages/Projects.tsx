
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Filter, Search, Clock, Calendar } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  name: string;
  description: string;
  progress: number;
  dueDate: string;
  priority: "high" | "medium" | "low";
  tags: string[];
}

// Sample project data
const projectsData: Project[] = [
  {
    id: "1",
    name: "Home Automation System",
    description: "Create a comprehensive smart home system with voice control and app integration",
    progress: 68,
    dueDate: "2025-06-15",
    priority: "medium",
    tags: ["personal", "tech", "home"]
  },
  {
    id: "2",
    name: "Personal Knowledge Base",
    description: "Build a system to capture and connect personal notes, research, and ideas",
    progress: 32,
    dueDate: "2025-06-30",
    priority: "high",
    tags: ["productivity", "learning"]
  },
  {
    id: "3",
    name: "Smart Home Dashboard",
    description: "Design and implement a dashboard to monitor and control home automation systems",
    progress: 85,
    dueDate: "2025-05-25",
    priority: "low",
    tags: ["design", "tech", "home"]
  },
  {
    id: "4",
    name: "Personal Finance Tracker",
    description: "Create a comprehensive system to track investments, expenses and financial goals",
    progress: 42,
    dueDate: "2025-07-10",
    priority: "medium",
    tags: ["finance", "personal"]
  },
  {
    id: "5",
    name: "Fitness Monitoring App",
    description: "Develop an app to track health metrics, workouts and nutrition",
    progress: 15,
    dueDate: "2025-08-05",
    priority: "low",
    tags: ["health", "personal"]
  },
];

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const priorityColors = {
    high: "bg-red-50 text-red-700 border-red-200",
    medium: "bg-amber-50 text-amber-700 border-amber-200",
    low: "bg-green-50 text-green-700 border-green-200",
  };
  
  const filteredProjects = projectsData.filter(project => 
    project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  return (
    <div className="space-y-6 animate-fade-in">
      <section className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight mb-1">Projects</h1>
          <p className="text-muted-foreground">Manage your personal projects.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> New Project
        </Button>
      </section>
      
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" className="md:w-auto">
          <Filter className="mr-2 h-4 w-4" /> Filter
        </Button>
      </div>
      
      <div className="grid gap-6 grid-cols-1">
        {filteredProjects.map((project) => (
          <div 
            key={project.id}
            className="p-6 rounded-xl border border-border bg-card transition-shadow hover:shadow-md"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h2 className="text-xl font-medium mb-1">{project.name}</h2>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
              <div className="flex gap-2">
                <span className={cn(
                  "text-xs px-2 py-1 rounded-full border",
                  priorityColors[project.priority]
                )}>
                  {project.priority} priority
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-2">
                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-3" />
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col justify-center gap-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Due: {new Date(project.dueDate).toLocaleDateString()}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>
                    {Math.ceil((new Date(project.dueDate).getTime() - new Date().getTime()) / 
                    (1000 * 60 * 60 * 24))} days remaining
                  </span>
                </div>
                
                <div className="flex gap-2 mt-4">
                  <Button size="sm">View Details</Button>
                  <Button size="sm" variant="outline">Edit</Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
