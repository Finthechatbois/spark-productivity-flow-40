
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Search, Filter, Boxes, Package, Tag, BarChart, ArrowUpDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SelectValue, SelectTrigger, SelectContent, SelectItem, Select } from "@/components/ui/select";

// Sample inventory data
const inventoryItems = [
  { id: "1", name: "Macbook Pro", category: "Electronics", location: "Home Office", quantity: 1, value: "$2,000", lastUpdated: "2025-04-15", tags: ["tech", "work"], warranty: "2026-04-15" },
  { id: "2", name: "Desk Chair", category: "Furniture", location: "Home Office", quantity: 1, value: "$350", lastUpdated: "2025-01-10", tags: ["furniture", "home"], warranty: "2028-01-10" },
  { id: "3", name: "Coffee Maker", category: "Appliances", location: "Kitchen", quantity: 1, value: "$120", lastUpdated: "2025-02-20", tags: ["kitchen", "appliance"], warranty: "2026-02-20" },
  { id: "4", name: "Winter Jackets", category: "Clothing", location: "Master Bedroom Closet", quantity: 3, value: "$450", lastUpdated: "2024-11-15", tags: ["clothing", "seasonal"], warranty: null },
  { id: "5", name: "Tool Set", category: "Tools", location: "Garage", quantity: 1, value: "$200", lastUpdated: "2025-03-05", tags: ["tools", "maintenance"], warranty: "2030-03-05" },
  { id: "6", name: "Smart TV", category: "Electronics", location: "Living Room", quantity: 1, value: "$900", lastUpdated: "2024-12-12", tags: ["tech", "entertainment"], warranty: "2027-12-12" },
  { id: "7", name: "Dining Table Set", category: "Furniture", location: "Dining Room", quantity: 1, value: "$1,200", lastUpdated: "2024-10-25", tags: ["furniture", "home"], warranty: "2029-10-25" },
  { id: "8", name: "Blender", category: "Appliances", location: "Kitchen", quantity: 1, value: "$80", lastUpdated: "2025-01-30", tags: ["kitchen", "appliance"], warranty: "2027-01-30" },
];

// Categories with counts
const categories = [
  { name: "Electronics", count: 3 },
  { name: "Furniture", count: 5 },
  { name: "Appliances", count: 8 },
  { name: "Clothing", count: 15 },
  { name: "Books", count: 24 },
  { name: "Tools", count: 12 },
  { name: "Sports", count: 7 },
  { name: "Kitchen", count: 18 },
];

// Locations with counts
const locations = [
  { name: "Living Room", count: 12 },
  { name: "Home Office", count: 8 },
  { name: "Kitchen", count: 22 },
  { name: "Master Bedroom", count: 15 },
  { name: "Garage", count: 20 },
  { name: "Storage Unit", count: 30 },
  { name: "Basement", count: 14 },
];

const Inventory = () => {
  const [activeTab, setActiveTab] = useState("all-items");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name-asc");
  
  return (
    <div className="space-y-6 animate-fade-in">
      <section className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight mb-1 font-serif">Inventory</h1>
          <p className="text-muted-foreground">Track and manage your personal belongings.</p>
        </div>
        <div className="flex gap-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Item
          </Button>
        </div>
      </section>

      <Tabs defaultValue="all-items" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="all-items">All Items</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="locations">Locations</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="all-items" className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search inventory..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                  <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                  <SelectItem value="value-high">Value (High-Low)</SelectItem>
                  <SelectItem value="value-low">Value (Low-High)</SelectItem>
                  <SelectItem value="recent">Recently Updated</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            {inventoryItems.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl border border-border bg-card hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Package className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">{item.name}</h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1 text-sm">
                        <span className="text-muted-foreground">
                          {item.quantity > 1 ? `${item.quantity} units` : "1 unit"}
                        </span>
                        <span className="text-muted-foreground">•</span>
                        <span>{item.category}</span>
                        <span className="text-muted-foreground">•</span>
                        <span>{item.location}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {item.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="text-lg font-medium">{item.value}</div>
                    <div className="text-xs text-muted-foreground">
                      Updated: {new Date(item.lastUpdated).toLocaleDateString()}
                    </div>
                    {item.warranty && (
                      <div className="text-xs">
                        Warranty: {new Date(item.warranty).toLocaleDateString()}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="categories" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Categories</CardTitle>
              <CardDescription>Organize your items by category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {categories.map((category) => (
                  <div key={category.name} className="p-4 border rounded-lg flex items-center justify-between hover:bg-muted/50 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <Tag className="h-4 w-4 text-primary" />
                      <span>{category.name}</span>
                    </div>
                    <Badge variant="secondary">{category.count}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="locations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Locations</CardTitle>
              <CardDescription>View items by their storage location</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {locations.map((location) => (
                  <div key={location.name} className="p-4 border rounded-lg flex items-center justify-between hover:bg-muted/50 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <Boxes className="h-4 w-4 text-primary" />
                      <span>{location.name}</span>
                    </div>
                    <Badge variant="secondary">{location.count}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Inventory Reports</CardTitle>
              <CardDescription>Analytics and insights about your inventory</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium">Value by Category</h3>
                    <BarChart className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="h-64 bg-muted/30 rounded flex items-center justify-center">
                    <p className="text-muted-foreground text-sm">Category value chart visualization</p>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium">Items by Location</h3>
                    <BarChart className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="h-64 bg-muted/30 rounded flex items-center justify-center">
                    <p className="text-muted-foreground text-sm">Location distribution visualization</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Inventory;
