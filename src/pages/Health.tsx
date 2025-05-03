import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Heart, Activity, Utensils, Moon, Timer, BarChart, Calendar } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Sample health data
const sleepData = [
  { date: 'Apr 27', hours: 7.5 },
  { date: 'Apr 28', hours: 6.8 },
  { date: 'Apr 29', hours: 8.2 },
  { date: 'Apr 30', hours: 7.1 },
  { date: 'May 1', hours: 7.6 },
  { date: 'May 2', hours: 6.9 },
  { date: 'May 3', hours: 7.8 },
];

const stepData = [
  { date: 'Apr 27', steps: 7245 },
  { date: 'Apr 28', steps: 8300 },
  { date: 'Apr 29', steps: 10200 },
  { date: 'Apr 30', steps: 5600 },
  { date: 'May 1', steps: 9100 },
  { date: 'May 2', steps: 7850 },
  { date: 'May 3', steps: 8400 },
];

const Health = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  return (
    <div className="space-y-6 animate-fade-in">
      <section className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight mb-1 font-serif">Health Tracking</h1>
          <p className="text-muted-foreground">Monitor your wellbeing and fitness goals.</p>
        </div>
        <div className="flex gap-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Entry
          </Button>
        </div>
      </section>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
          <TabsTrigger value="sleep">Sleep</TabsTrigger>
          <TabsTrigger value="metrics">Health Metrics</TabsTrigger>
          <TabsTrigger value="goals">Goals</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "Daily Steps", icon: Activity, value: "8,400", target: "10,000", progress: 84, color: "text-blue-600" },
              { title: "Sleep", icon: Moon, value: "7.8 hrs", target: "8 hrs", progress: 97, color: "text-indigo-600" },
              { title: "Nutrition", icon: Utensils, value: "1,850", target: "2,200 cal", progress: 75, color: "text-green-600" },
              { title: "Exercise", icon: Timer, value: "45 min", target: "60 min", progress: 75, color: "text-amber-600" },
            ].map((item, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium font-serif">{item.title}</CardTitle>
                    <div className={`${item.color}`}>
                      <item.icon className="h-4 w-4" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="py-0">
                  <div className="text-2xl font-semibold">{item.value}</div>
                  <Progress value={item.progress} className="h-1 mt-2 mb-1" />
                  <p className="text-xs text-muted-foreground">Target: {item.target}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Sleep Pattern</CardTitle>
                <CardDescription>Last 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={sleepData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" />
                      <XAxis dataKey="date" tick={{fontSize: 12}} />
                      <YAxis domain={[0, 10]} tick={{fontSize: 12}} />
                      <Tooltip />
                      <Line type="monotone" dataKey="hours" stroke="#8884d8" strokeWidth={2} dot={{ r: 4 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Step Count</CardTitle>
                <CardDescription>Last 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={stepData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" />
                      <XAxis dataKey="date" tick={{fontSize: 12}} />
                      <YAxis domain={[0, 12000]} tick={{fontSize: 12}} />
                      <Tooltip />
                      <Line type="monotone" dataKey="steps" stroke="#4ade80" strokeWidth={2} dot={{ r: 4 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Upcoming Health Events</CardTitle>
              <CardDescription>Scheduled appointments and reminders</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { event: "Annual Physical Checkup", date: "May 15, 2025", time: "9:30 AM", location: "Dr. Smith's Office" },
                { event: "Dental Cleaning", date: "May 22, 2025", time: "2:00 PM", location: "Bright Smile Dental" },
                { event: "Eye Examination", date: "June 5, 2025", time: "11:15 AM", location: "Clear Vision Optometry" },
              ].map((appointment, index) => (
                <div key={index} className="flex items-center gap-4 pb-3 border-b last:border-0 last:pb-0 last:mb-0">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <p className="font-medium">{appointment.event}</p>
                    <p className="text-sm text-muted-foreground">{appointment.date} at {appointment.time}</p>
                    <p className="text-xs text-muted-foreground">{appointment.location}</p>
                  </div>
                  <Button variant="outline" size="sm">Reschedule</Button>
                </div>
              ))}
            </CardContent>
            <CardFooter className="border-t pt-4">
              <Button variant="outline" className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Add New Appointment
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Other tab content would be implemented similarly */}
        <TabsContent value="activity">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Activity Tracking</CardTitle>
              <CardDescription>Monitor your exercise and daily movement</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Activity tracking content will go here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="nutrition">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Nutrition Log</CardTitle>
              <CardDescription>Track your diet and nutritional intake</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Nutrition tracking content will go here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sleep">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Sleep Analysis</CardTitle>
              <CardDescription>Monitor your sleep quality and patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Sleep tracking content will go here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="metrics">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Health Metrics</CardTitle>
              <CardDescription>Track key health indicators</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Health metrics content will go here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="goals">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Health Goals</CardTitle>
              <CardDescription>Set and track your health objectives</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Goals tracking content will go here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Health;
