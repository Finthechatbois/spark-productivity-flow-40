
import GreetingCard from "@/components/dashboard/GreetingCard";
import QuickActions from "@/components/dashboard/QuickActions";
import TaskWidget from "@/components/dashboard/TaskWidget";
import NotesWidget from "@/components/dashboard/NotesWidget";
import CalendarWidget from "@/components/dashboard/CalendarWidget";
import PersonalFinanceWidget from "@/components/dashboard/PersonalFinanceWidget";
import ProjectsWidget from "@/components/dashboard/ProjectsWidget";
import TimeBlockingWidget from "@/components/dashboard/TimeBlockingWidget";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="space-y-8 animate-fade-in pb-8">
      <section>
        <h1 className="text-4xl font-semibold tracking-tight mb-2">Personal Hub</h1>
        <p className="text-muted-foreground">Your centralized command center for life management.</p>
      </section>
      
      <NavigationMenu className="mb-4">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-serif">Quick Navigation</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {[
                  { title: "Home", href: "/home", description: "Manage your home and living spaces" },
                  { title: "Health", href: "/health", description: "Track wellness metrics and activities" },
                  { title: "Garden", href: "/garden", description: "Manage plants and garden activities" },
                  { title: "Inventory", href: "/inventory", description: "Track personal and household items" },
                  { title: "Projects", href: "/projects", description: "Manage personal and professional projects" },
                  { title: "Automations", href: "/automations", description: "Create and manage smart workflows" },
                  { title: "Proxmox", href: "/proxmox", description: "Access your personal Proxmox server" },
                  { title: "Settings", href: "/settings", description: "Customize your dashboard experience" },
                ].map((item) => (
                  <li key={item.title}>
                    <NavigationMenuLink asChild>
                      <Link
                        to={item.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-serif font-medium leading-none">{item.title}</div>
                        <p className="text-sm leading-snug text-muted-foreground">
                          {item.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        <div className="col-span-3 md:col-span-2">
          <GreetingCard />
        </div>
        <div className="col-span-3 md:col-span-1">
          <QuickActions />
        </div>
      </div>
      
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        <div className="col-span-3 md:col-span-1">
          <TaskWidget />
        </div>
        <div className="col-span-3 md:col-span-1">
          <NotesWidget />
        </div>
        <div className="col-span-3 md:col-span-1">
          <CalendarWidget />
        </div>
      </div>
      
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        <div className="col-span-2 md:col-span-1">
          <ProjectsWidget />
        </div>
        <div className="col-span-2 md:col-span-1">
          <TimeBlockingWidget />
        </div>
      </div>
      
      <div className="grid gap-6 grid-cols-1">
        <PersonalFinanceWidget />
      </div>
    </div>
  );
};

export default Dashboard;
