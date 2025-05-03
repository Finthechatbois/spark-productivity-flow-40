
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, Play, Pause, ArrowRight, Settings, Zap, Cog, Webhook, Calendar, Bell } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

// Sample automations
const automations = [
  {
    id: "1",
    name: "Morning Routine",
    description: "Starts morning tasks at 7 AM on weekdays",
    trigger: "Schedule",
    actions: ["Turn on lights", "Start coffee maker", "Open blinds"],
    status: "active",
    lastRun: "2025-05-02 07:00",
    integrations: ["Smart Home", "Calendar"],
  },
  {
    id: "2",
    name: "Email Notifications",
    description: "Sends important email summaries to mobile",
    trigger: "Email Received",
    actions: ["Filter by priority", "Send mobile notification"],
    status: "active", 
    lastRun: "2025-05-02 14:23",
    integrations: ["Email", "Mobile"],
  },
  {
    id: "3",
    name: "Document Backup",
    description: "Automatically backs up documents to cloud storage",
    trigger: "New File",
    actions: ["Filter documents", "Upload to cloud storage"],
    status: "paused",
    lastRun: "2025-04-28 19:42",
    integrations: ["Dropbox", "Google Drive"],
  },
  {
    id: "4",
    name: "Social Media Post",
    description: "Schedules content across platforms",
    trigger: "Manual",
    actions: ["Format content", "Post to Twitter", "Post to LinkedIn"],
    status: "active",
    lastRun: "2025-05-01 08:30",
    integrations: ["Twitter", "LinkedIn"],
  },
  {
    id: "5",
    name: "Weather Alert",
    description: "Sends notification for rain forecasts",
    trigger: "Weather API",
    actions: ["Check forecast", "Send notification if rain > 50%"],
    status: "active",
    lastRun: "2025-05-02 06:00",
    integrations: ["Weather API", "Mobile"],
  },
];

// Sample integrations
const integrations = [
  {
    name: "Email Services",
    connected: true,
    services: ["Gmail", "Outlook"],
    icon: "mail"
  },
  {
    name: "Calendar",
    connected: true,
    services: ["Google Calendar"],
    icon: "calendar"
  },
  {
    name: "Cloud Storage",
    connected: true,
    services: ["Dropbox", "Google Drive"],
    icon: "cloud"
  },
  {
    name: "Smart Home",
    connected: true,
    services: ["HomeKit", "Google Home"],
    icon: "home"
  },
  {
    name: "Social Media",
    connected: false,
    services: ["Twitter", "LinkedIn", "Instagram"],
    icon: "share"
  },
  {
    name: "Notifications",
    connected: true,
    services: ["Mobile", "Desktop", "Email"],
    icon: "bell"
  },
  {
    name: "Weather",
    connected: true,
    services: ["OpenWeather API"],
    icon: "cloud-sun"
  },
  {
    name: "Project Management",
    connected: false,
    services: ["Trello", "Asana", "Monday"],
    icon: "layout"
  },
];

const Automations = () => {
  const [activeTab, setActiveTab] = useState("my-automations");

  return (
    <div className="space-y-6 animate-fade-in">
      <section className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight mb-1 font-serif">Automations</h1>
          <p className="text-muted-foreground">Create and manage automated workflows.</p>
        </div>
        <div className="flex gap-2">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            New Automation
          </Button>
        </div>
      </section>

      <Tabs defaultValue="my-automations" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="my-automations">My Automations</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="logs">Activity Logs</TabsTrigger>
        </TabsList>

        <TabsContent value="my-automations" className="space-y-4">
          <div className="relative max-w-md mb-4">
            <Input placeholder="Search automations..." className="pl-3" />
          </div>

          <div className="grid gap-4">
            {automations.map((automation) => (
              <Card key={automation.id} className={cn(
                "overflow-hidden border-l-4",
                automation.status === "active" ? "border-l-green-500" : "border-l-gray-300"
              )}>
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="p-6 flex-1">
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-medium font-serif">{automation.name}</h3>
                          <Badge variant={automation.status === "active" ? "secondary" : "outline"}>
                            {automation.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {automation.description}
                        </p>
                      </div>
                      <div className="flex gap-2 mt-4 md:mt-0">
                        <Switch 
                          checked={automation.status === "active"}
                          aria-label="Toggle automation"
                        />
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <div className="flex items-center text-sm mb-3">
                        <div className="bg-secondary px-2 py-1 rounded text-xs font-medium">
                          {automation.trigger}
                        </div>
                        <ArrowRight className="h-3 w-3 mx-2 text-muted-foreground" />
                        <div className="flex flex-wrap gap-1">
                          {automation.actions.map((action, index) => (
                            <span key={index} className="bg-secondary px-2 py-1 rounded text-xs font-medium">
                              {action}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        <span className="text-xs text-muted-foreground">Integrations:</span>
                        {automation.integrations.map((integration, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {integration}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="text-xs text-muted-foreground mt-2">
                        Last run: {automation.lastRun}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-secondary/30 p-4 flex md:flex-col gap-2 justify-end border-t md:border-t-0 md:border-l">
                    <Button size="sm" variant="ghost" className="h-8 text-xs">Edit</Button>
                    <Button size="sm" variant="ghost" className="h-8 text-xs">
                      {automation.status === "active" ? 
                        <><Pause className="mr-1 h-3 w-3" /> Pause</> : 
                        <><Play className="mr-1 h-3 w-3" /> Run Now</>
                      }
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "Morning Routine", description: "Automate your morning tasks", icon: Bell },
              { name: "Email Processing", description: "Filter and organize emails automatically", icon: Webhook },
              { name: "File Backup", description: "Backup important files to cloud storage", icon: Zap },
              { name: "Social Media Poster", description: "Schedule and post to social platforms", icon: Calendar },
              { name: "Weather Alerts", description: "Get notified about weather changes", icon: Bell },
              { name: "Document Processing", description: "Process and organize documents", icon: Zap },
            ].map((template, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-serif">{template.name}</CardTitle>
                    <div className="bg-primary/10 p-2 rounded-full">
                      <template.icon className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardFooter className="pt-0">
                  <Button variant="outline" size="sm" className="w-full">Use Template</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {integrations.map((integration, index) => (
              <Card key={index} className={integration.connected ? "" : "opacity-70"}>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-serif">{integration.name}</CardTitle>
                    <Badge variant={integration.connected ? "secondary" : "outline"}>
                      {integration.connected ? "Connected" : "Disconnected"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="flex flex-wrap gap-1">
                    {integration.services.map((service) => (
                      <Badge key={service} variant="outline">{service}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <Button variant="outline" size="sm" className="w-full">
                    <Settings className="mr-1 h-3 w-3" />
                    {integration.connected ? "Configure" : "Connect"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="logs">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Automation Logs</CardTitle>
              <CardDescription>View the history of your automation runs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { automation: "Morning Routine", status: "Success", time: "Today, 7:00 AM", message: "All actions completed successfully" },
                  { automation: "Email Notifications", status: "Success", time: "Today, 2:23 PM", message: "Filtered 3 emails and sent notifications" },
                  { automation: "Weather Alert", status: "Success", time: "Today, 6:00 AM", message: "Forecast checked, no rain predicted" },
                  { automation: "Document Backup", status: "Failed", time: "Apr 28, 7:42 PM", message: "Could not connect to cloud storage" },
                  { automation: "Social Media Post", status: "Success", time: "May 1, 8:30 AM", message: "Posted to 2 platforms successfully" },
                ].map((log, index) => (
                  <div key={index} className="flex items-start gap-3 pb-3 border-b last:border-0 last:pb-0">
                    <div className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${
                      log.status === "Success" ? "bg-green-500" : "bg-red-500"
                    }`} />
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <div>
                          <p className="font-medium">{log.automation}</p>
                          <p className="text-sm text-muted-foreground">{log.time}</p>
                        </div>
                        <Badge variant={log.status === "Success" ? "outline" : "destructive"} className="md:ml-auto">
                          {log.status}
                        </Badge>
                      </div>
                      <p className="text-sm mt-1">{log.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Automations;
