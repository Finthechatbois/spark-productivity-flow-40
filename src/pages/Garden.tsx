
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Plus, Search, Leaf, Calendar, Droplets, Sun, Wind, Thermometer, CloudRain } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// Sample plants data
const plantsData = [
  {
    id: "1",
    name: "Monstera Deliciosa",
    type: "Indoor",
    location: "Living Room",
    wateringSchedule: "Weekly",
    lastWatered: "2025-04-30",
    nextWatering: "2025-05-07",
    waterProgress: 80,
    sunlight: "Bright indirect",
    plantedDate: "2024-10-15",
    status: "Healthy",
    notes: "Repot in June",
  },
  {
    id: "2",
    name: "Peace Lily",
    type: "Indoor",
    location: "Bedroom",
    wateringSchedule: "Twice weekly",
    lastWatered: "2025-05-01",
    nextWatering: "2025-05-04",
    waterProgress: 60,
    sunlight: "Low to medium",
    plantedDate: "2024-12-10",
    status: "Healthy",
    notes: "Mist leaves regularly",
  },
  {
    id: "3",
    name: "Tomato Plants",
    type: "Vegetable",
    location: "Garden Bed 1",
    wateringSchedule: "Daily",
    lastWatered: "2025-05-02",
    nextWatering: "2025-05-03",
    waterProgress: 90,
    sunlight: "Full sun",
    plantedDate: "2025-03-15",
    status: "Growing",
    notes: "Add stakes for support",
  },
  {
    id: "4",
    name: "Basil",
    type: "Herb",
    location: "Kitchen Windowsill",
    wateringSchedule: "Every other day",
    lastWatered: "2025-05-02",
    nextWatering: "2025-05-04",
    waterProgress: 70,
    sunlight: "Medium to bright",
    plantedDate: "2025-04-01",
    status: "Healthy",
    notes: "Harvest regularly to encourage growth",
  },
  {
    id: "5",
    name: "Rose Bush",
    type: "Outdoor",
    location: "Front Garden",
    wateringSchedule: "Twice weekly",
    lastWatered: "2025-04-30",
    nextWatering: "2025-05-03",
    waterProgress: 45,
    sunlight: "Full sun",
    plantedDate: "2024-09-20",
    status: "Blooming",
    notes: "Prune in late spring",
  },
];

// Weather forecast data
const weatherForecast = [
  { day: "Today", temp: "72°F", condition: "Sunny", precipitation: "0%", icon: Sun },
  { day: "Tomorrow", temp: "68°F", condition: "Partly Cloudy", precipitation: "10%", icon: CloudRain },
  { day: "Friday", temp: "65°F", condition: "Rain", precipitation: "80%", icon: CloudRain },
  { day: "Saturday", temp: "70°F", condition: "Cloudy", precipitation: "20%", icon: CloudRain },
  { day: "Sunday", temp: "75°F", condition: "Sunny", precipitation: "0%", icon: Sun },
];

const Garden = () => {
  const [activeTab, setActiveTab] = useState("plants");
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <div className="space-y-6 animate-fade-in">
      <section className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight mb-1 font-serif">Garden Manager</h1>
          <p className="text-muted-foreground">Track your plants and garden activities.</p>
        </div>
        <div className="flex gap-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Plant
          </Button>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {weatherForecast.slice(0, 4).map((forecast, index) => (
          <Card key={index} className={index === 0 ? "bg-primary/10" : ""}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">{forecast.day}</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-semibold">{forecast.temp}</div>
                <p className="text-xs text-muted-foreground">{forecast.condition}</p>
                <p className="text-xs text-muted-foreground">Precip: {forecast.precipitation}</p>
              </div>
              <forecast.icon className="h-8 w-8 text-primary" />
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="plants" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="plants">My Plants</TabsTrigger>
          <TabsTrigger value="tasks">Garden Tasks</TabsTrigger>
          <TabsTrigger value="calendar">Planting Calendar</TabsTrigger>
          <TabsTrigger value="journal">Garden Journal</TabsTrigger>
        </TabsList>

        <TabsContent value="plants" className="space-y-4">
          <div className="relative max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search plants..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="grid gap-4">
            {plantsData.map((plant) => (
              <Card key={plant.id} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="p-6 flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-medium font-serif">{plant.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{plant.type}</span>
                          <span>•</span>
                          <span>{plant.location}</span>
                        </div>
                      </div>
                      <Badge variant={
                        plant.status === "Healthy" ? "outline" : 
                        plant.status === "Growing" ? "secondary" : 
                        "destructive"
                      }>
                        {plant.status}
                      </Badge>
                    </div>
                    
                    <div className="mt-4 space-y-3">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-1 text-sm">
                            <Droplets className="h-3 w-3" />
                            <span>Water</span>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {plant.wateringSchedule}
                          </span>
                        </div>
                        <Progress value={plant.waterProgress} className="h-1" />
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <Sun className="h-3 w-3" />
                          <span>Light</span>
                        </div>
                        <span className="text-xs">{plant.sunlight}</span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>Next Water</span>
                        </div>
                        <span className="text-xs">{new Date(plant.nextWatering).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    {plant.notes && (
                      <div className="mt-3 pt-3 border-t text-sm">
                        <p className="text-muted-foreground">{plant.notes}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="md:w-32 h-auto bg-primary/10 flex items-center justify-center border-t md:border-l md:border-t-0">
                    <Leaf className="h-10 w-10 text-primary/40" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tasks">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Garden Tasks</CardTitle>
              <CardDescription>Upcoming and scheduled garden activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { task: "Water roses and perennials", date: "Today", priority: "High" },
                  { task: "Harvest ready vegetables", date: "Today", priority: "Medium" },
                  { task: "Apply organic fertilizer to tomatoes", date: "Tomorrow", priority: "Medium" },
                  { task: "Prune fruit trees", date: "May 6", priority: "Medium" },
                  { task: "Plant summer bulbs", date: "May 10", priority: "Low" },
                ].map((task, index) => (
                  <div key={index} className="flex items-center gap-3 pb-3 border-b last:border-0 last:pb-0">
                    <div className={`w-2 h-2 rounded-full ${
                      task.priority === "High" ? "bg-red-500" :
                      task.priority === "Medium" ? "bg-yellow-500" : "bg-green-500"
                    }`} />
                    <div className="flex-1">
                      <p>{task.task}</p>
                      <p className="text-sm text-muted-foreground">{task.date}</p>
                    </div>
                    <Button variant="outline" size="sm">Complete</Button>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="border-t pt-4">
              <Button className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Add Task
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="calendar">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Planting Calendar</CardTitle>
              <CardDescription>Optimal planting times for your zone</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Planting calendar content will go here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="journal">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Garden Journal</CardTitle>
              <CardDescription>Record observations and track progress</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Garden journal content will go here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Garden;
