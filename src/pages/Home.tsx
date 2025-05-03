
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home as HomeIcon, Plus, Settings, ThermometerSun, Lock, Lightbulb, Video, Shield } from "lucide-react";

const Home = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  return (
    <div className="space-y-6 animate-fade-in">
      <section className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight mb-1 font-serif">Home Management</h1>
          <p className="text-muted-foreground">Monitor and control your home environment.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Configure
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Device
          </Button>
        </div>
      </section>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="smart-devices">Smart Devices</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="energy">Energy Usage</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Temperature", icon: ThermometerSun, value: "72°F", trend: "stable", color: "bg-blue-100 text-blue-700" },
              { title: "Security", icon: Shield, value: "Secured", trend: "all systems active", color: "bg-green-100 text-green-700" },
              { title: "Lighting", icon: Lightbulb, value: "5 Active", trend: "2 scheduled", color: "bg-amber-100 text-amber-700" },
            ].map((item, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-serif">{item.title}</CardTitle>
                    <div className={`p-2 rounded-full ${item.color}`}>
                      <item.icon className="h-4 w-4" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-semibold">{item.value}</div>
                  <p className="text-sm text-muted-foreground">{item.trend}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Recent Activity</CardTitle>
                <CardDescription>Latest events in your home</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { event: "Front door unlocked", time: "10:32 AM", icon: Lock },
                  { event: "Living room lights turned on", time: "8:15 AM", icon: Lightbulb },
                  { event: "Security system armed", time: "7:45 AM", icon: Shield },
                  { event: "Thermostat set to 72°F", time: "7:30 AM", icon: ThermometerSun },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center gap-4 pb-3 border-b last:border-0 last:pb-0 last:mb-0">
                    <div className="bg-secondary p-2 rounded-full">
                      <activity.icon className="h-4 w-4" />
                    </div>
                    <div className="flex-grow">
                      <p className="font-medium">{activity.event}</p>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Security Cameras</CardTitle>
                <CardDescription>Live camera feeds</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                {["Front Door", "Back Yard", "Garage", "Living Room"].map((camera, index) => (
                  <div key={index} className="aspect-video bg-muted rounded-md flex items-center justify-center relative">
                    <Video className="h-8 w-8 text-muted-foreground/50" />
                    <div className="absolute bottom-2 left-2 bg-background/80 px-2 py-1 rounded text-xs">
                      {camera}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="smart-devices">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Smart Devices</CardTitle>
              <CardDescription>Manage your connected home devices</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Smart devices management content will go here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Home Security</CardTitle>
              <CardDescription>Monitor your home security system</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Security settings and monitoring will go here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="energy">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Energy Usage</CardTitle>
              <CardDescription>Monitor and optimize your energy consumption</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Energy usage tracking and analytics will go here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="maintenance">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Maintenance</CardTitle>
              <CardDescription>Schedule and track home maintenance tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Maintenance scheduling and records will go here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Home;
