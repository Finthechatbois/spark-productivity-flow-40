
import DashboardWidget from "./DashboardWidget";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample data - would come from a real data source
const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 }
];

const projectData = [
  { name: 'Jan', completed: 5, inProgress: 8 },
  { name: 'Feb', completed: 7, inProgress: 10 },
  { name: 'Mar', completed: 9, inProgress: 7 },
  { name: 'Apr', completed: 12, inProgress: 5 },
  { name: 'May', completed: 8, inProgress: 9 }
];

const MetricsWidget = () => {
  return (
    <DashboardWidget title="Department Metrics" description="Performance overview" fullHeight>
      <Tabs defaultValue="budget">
        <TabsList className="grid grid-cols-3 h-8">
          <TabsTrigger value="budget" className="text-xs">Budget</TabsTrigger>
          <TabsTrigger value="projects" className="text-xs">Projects</TabsTrigger>
          <TabsTrigger value="team" className="text-xs">Team</TabsTrigger>
        </TabsList>
        <TabsContent value="budget" className="pt-4">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#8884d8" 
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="text-center">
              <p className="text-xs text-muted-foreground">Spent</p>
              <p className="text-xl font-semibold">$1.2M</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground">Remaining</p>
              <p className="text-xl font-semibold">$800K</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground">Projected</p>
              <p className="text-xl font-semibold">$2.3M</p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="projects" className="pt-4">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={projectData}>
                <defs>
                  <linearGradient id="colorCompleted" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4ade80" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#4ade80" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorInProgress" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="completed" 
                  stroke="#4ade80" 
                  fillOpacity={1} 
                  fill="url(#colorCompleted)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="inProgress" 
                  stroke="#3b82f6" 
                  fillOpacity={1} 
                  fill="url(#colorInProgress)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="text-center">
              <p className="text-xs text-muted-foreground">Total</p>
              <p className="text-xl font-semibold">24</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground">On Track</p>
              <p className="text-xl font-semibold">18</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground">At Risk</p>
              <p className="text-xl font-semibold">6</p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="team" className="pt-4">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">Team Capacity</span>
              <span className="text-sm font-semibold">85%</span>
            </div>
            <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: '85%' }}></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm">Hiring Progress</span>
              <span className="text-sm font-semibold">60%</span>
            </div>
            <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: '60%' }}></div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="border border-border rounded-md p-3 text-center">
                <p className="text-xs text-muted-foreground">Team Size</p>
                <p className="text-xl font-semibold">42</p>
              </div>
              <div className="border border-border rounded-md p-3 text-center">
                <p className="text-xs text-muted-foreground">Open Positions</p>
                <p className="text-xl font-semibold">7</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardWidget>
  );
};

export default MetricsWidget;
