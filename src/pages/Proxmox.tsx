
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Database, Play, BarChart, Server, HardDrive, Cpu, RefreshCw, PlusCircle, Power, Pause, Settings } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Sample performance data
const performanceData = [
  { time: '12:00', cpu: 45, memory: 60, network: 30 },
  { time: '12:10', cpu: 50, memory: 62, network: 25 },
  { time: '12:20', cpu: 65, memory: 65, network: 40 },
  { time: '12:30', cpu: 70, memory: 68, network: 45 },
  { time: '12:40', cpu: 60, memory: 70, network: 30 },
  { time: '12:50', cpu: 55, memory: 72, network: 35 },
  { time: '13:00', cpu: 48, memory: 68, network: 28 },
];

// Sample virtual machines
const virtualMachines = [
  {
    id: "101",
    name: "Web Server",
    status: "running",
    os: "Ubuntu 22.04",
    ip: "192.168.1.101",
    cpu: "2 vCPU",
    memory: "4 GB",
    storage: "50 GB",
    uptime: "15 days, 7 hours",
    load: 32,
  },
  {
    id: "102",
    name: "Database Server",
    status: "running",
    os: "Debian 11",
    ip: "192.168.1.102",
    cpu: "4 vCPU",
    memory: "8 GB",
    storage: "100 GB",
    uptime: "8 days, 3 hours",
    load: 56,
  },
  {
    id: "103",
    name: "Development Environment",
    status: "stopped",
    os: "CentOS 8",
    ip: "192.168.1.103",
    cpu: "2 vCPU",
    memory: "4 GB",
    storage: "80 GB",
    uptime: "0",
    load: 0,
  },
  {
    id: "104",
    name: "File Server",
    status: "running",
    os: "Ubuntu 20.04",
    ip: "192.168.1.104",
    cpu: "2 vCPU",
    memory: "2 GB",
    storage: "500 GB",
    uptime: "30 days, 12 hours",
    load: 20,
  },
  {
    id: "105",
    name: "Test Environment",
    status: "stopped",
    os: "Alpine Linux",
    ip: "192.168.1.105",
    cpu: "1 vCPU",
    memory: "1 GB",
    storage: "20 GB",
    uptime: "0",
    load: 0,
  },
];

// Sample storage pools
const storagePools = [
  { name: "local-lvm", type: "LVM", size: "1 TB", used: "350 GB", available: "650 GB", usedPercent: 35 },
  { name: "local", type: "Directory", size: "500 GB", used: "125 GB", available: "375 GB", usedPercent: 25 },
  { name: "backup", type: "Directory", size: "2 TB", used: "800 GB", available: "1.2 TB", usedPercent: 40 },
  { name: "ssd-pool", type: "ZFS", size: "512 GB", used: "310 GB", available: "202 GB", usedPercent: 60 },
];

const Proxmox = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [serverStatus, setServerStatus] = useState("connected");
  
  return (
    <div className="space-y-6 animate-fade-in">
      <section className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight mb-1 font-serif">Proxmox Server</h1>
          <div className="flex items-center gap-2">
            <Badge variant={serverStatus === "connected" ? "outline" : "destructive"}>
              {serverStatus === "connected" ? "Connected" : "Disconnected"}
            </Badge>
            <span className="text-muted-foreground">192.168.1.100:8006</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
          <Button size="sm">
            <PlusCircle className="mr-2 h-4 w-4" />
            Create VM
          </Button>
        </div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">CPU Usage</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-2xl font-semibold">48%</div>
            <Progress value={48} className="h-1 mt-2 mb-1" />
            <p className="text-xs text-muted-foreground">8 cores @ 3.6GHz</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Memory</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-2xl font-semibold">12.8 GB</div>
            <Progress value={68} className="h-1 mt-2 mb-1" />
            <p className="text-xs text-muted-foreground">18.0 GB total (68% used)</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Storage</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-2xl font-semibold">1.58 TB</div>
            <Progress value={40} className="h-1 mt-2 mb-1" />
            <p className="text-xs text-muted-foreground">4 TB total (40% used)</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Network</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-2xl font-semibold">35 MB/s</div>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>20 MB/s in</span>
              <span>15 MB/s out</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="virtual-machines">Virtual Machines</TabsTrigger>
          <TabsTrigger value="storage">Storage</TabsTrigger>
          <TabsTrigger value="networking">Networking</TabsTrigger>
          <TabsTrigger value="backups">Backups</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Server Performance</CardTitle>
              <CardDescription>Last 1 hour metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" />
                    <XAxis dataKey="time" tick={{fontSize: 12}} />
                    <YAxis domain={[0, 100]} tick={{fontSize: 12}} />
                    <Tooltip />
                    <Line type="monotone" dataKey="cpu" stroke="#8884d8" strokeWidth={2} name="CPU %" />
                    <Line type="monotone" dataKey="memory" stroke="#82ca9d" strokeWidth={2} name="Memory %" />
                    <Line type="monotone" dataKey="network" stroke="#ffc658" strokeWidth={2} name="Network %" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">System Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { label: "Hostname", value: "proxmox-server" },
                  { label: "Proxmox Version", value: "7.4-3" },
                  { label: "Kernel", value: "5.15.102-1-pve" },
                  { label: "Uptime", value: "45 days, 7 hours" },
                  { label: "CPU Model", value: "AMD Ryzen 7 5800X @ 3.6 GHz" },
                ].map((info, index) => (
                  <div key={index} className="flex justify-between items-center border-b pb-2 last:border-0 last:pb-0">
                    <span className="text-sm font-medium">{info.label}</span>
                    <span className="text-sm text-muted-foreground">{info.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Resource Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <Server className="h-4 w-4 mr-2" />
                        <span className="text-sm font-medium">Virtual Machines</span>
                      </div>
                      <span>5 total (3 running)</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {["running", "running", "running", "stopped", "stopped"].map((status, i) => (
                        <div 
                          key={i} 
                          className={`h-2 rounded-full ${status === "running" ? "bg-green-500" : "bg-gray-300"}`} 
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <HardDrive className="h-4 w-4 mr-2" />
                        <span className="text-sm font-medium">Storage Pools</span>
                      </div>
                      <span>4 pools</span>
                    </div>
                    <Progress value={40} className="h-2" />
                    <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                      <span>1.58 TB used</span>
                      <span>4 TB total</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <Cpu className="h-4 w-4 mr-2" />
                        <span className="text-sm font-medium">Allocated Resources</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>vCPU</span>
                        <span>11 / 16 cores</span>
                      </div>
                      <Progress value={68.75} className="h-1" />
                      <div className="flex justify-between text-xs mt-2">
                        <span>Memory</span>
                        <span>19 GB / 32 GB</span>
                      </div>
                      <Progress value={59.375} className="h-1" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="virtual-machines" className="space-y-4">
          <div className="relative max-w-md mb-4">
            <Input placeholder="Search virtual machines..." className="pl-3" />
          </div>

          <div className="grid gap-4">
            {virtualMachines.map((vm) => (
              <Card key={vm.id} className={
                vm.status === "running" ? "border-l-4 border-l-green-500" : "border-l-4 border-l-gray-300"
              }>
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="p-6 flex-1">
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-medium font-serif">{vm.name}</h3>
                          <Badge variant={vm.status === "running" ? "secondary" : "outline"}>
                            {vm.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {vm.os} • VMID: {vm.id}
                        </p>
                      </div>
                      {vm.status === "running" && (
                        <div className="mt-2 md:mt-0">
                          <div className="text-sm">CPU Load</div>
                          <div className="flex items-center gap-2">
                            <Progress value={vm.load} className="w-24 h-1" />
                            <span className="text-sm">{vm.load}%</span>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-4">
                      <div>
                        <div className="text-xs text-muted-foreground">CPU</div>
                        <div className="text-sm">{vm.cpu}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Memory</div>
                        <div className="text-sm">{vm.memory}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Storage</div>
                        <div className="text-sm">{vm.storage}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">IP Address</div>
                        <div className="text-sm">{vm.ip}</div>
                      </div>
                    </div>
                    
                    {vm.status === "running" && (
                      <div className="text-xs text-muted-foreground mt-2">
                        Uptime: {vm.uptime}
                      </div>
                    )}
                  </div>
                  
                  <div className="bg-secondary/30 p-4 flex md:flex-col gap-2 justify-end border-t md:border-t-0 md:border-l">
                    {vm.status === "running" ? (
                      <>
                        <Button size="sm" variant="outline" className="h-8 text-xs">
                          <Pause className="mr-1 h-3 w-3" /> Stop
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 text-xs">
                          <Settings className="mr-1 h-3 w-3" /> Console
                        </Button>
                      </>
                    ) : (
                      <Button size="sm" variant="outline" className="h-8 text-xs">
                        <Play className="mr-1 h-3 w-3" /> Start
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="storage" className="space-y-4">
          <div className="grid gap-4">
            {storagePools.map((pool, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <div>
                      <CardTitle className="font-serif">{pool.name}</CardTitle>
                      <CardDescription>{pool.type} storage pool</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">Manage</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Storage Usage</span>
                      <span className="text-sm">{pool.usedPercent}%</span>
                    </div>
                    <Progress value={pool.usedPercent} className="h-2" />
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-xs text-muted-foreground">Total Size</div>
                      <div>{pool.size}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Used</div>
                      <div>{pool.used}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Available</div>
                      <div>{pool.available}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="networking">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Network Configuration</CardTitle>
              <CardDescription>Manage network interfaces and settings</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Network configuration content will go here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="backups">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Backup Management</CardTitle>
              <CardDescription>Configure and manage VM backups</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Backup management content will go here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Proxmox;
