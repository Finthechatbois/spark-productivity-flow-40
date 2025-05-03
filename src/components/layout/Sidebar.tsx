
import { 
  Sidebar as SidebarComponent, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarHeader,
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarTrigger, 
  SidebarFooter
} from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Calendar, FileText, Home, Inbox, ListTodo, Settings, Star, Users } from "lucide-react";

const sidebarItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: ListTodo, label: "Tasks", href: "/tasks" },
  { icon: FileText, label: "Notes", href: "/notes" },
  { icon: Calendar, label: "Calendar", href: "/calendar" },
  { icon: Inbox, label: "Inbox", href: "/inbox" }
];

const toolsItems = [
  { icon: Star, label: "Bookmarks", href: "/bookmarks" },
  { icon: Users, label: "Team", href: "/team" },
  { icon: Settings, label: "Settings", href: "/settings" }
];

const Sidebar = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(() => {
    return location.pathname;
  });

  return (
    <SidebarComponent>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-3">
          <div className="h-6 w-6 rounded-md bg-primary flex items-center justify-center">
            <span className="text-xs font-bold text-primary-foreground">NX</span>
          </div>
          <div className="font-medium text-lg">Nexus</div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    className={cn(
                      activeItem === item.href ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""
                    )}
                    onClick={() => setActiveItem(item.href)}
                    asChild
                  >
                    <Link to={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>Tools</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {toolsItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    className={cn(
                      activeItem === item.href ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""
                    )}
                    onClick={() => setActiveItem(item.href)}
                    asChild
                  >
                    <Link to={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="py-2">
        <div className="px-3">
          {!isMobile && (
            <SidebarTrigger className="w-full">
              <button className="w-full text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center py-1.5 rounded-md">
                <span>Collapse sidebar</span>
              </button>
            </SidebarTrigger>
          )}
        </div>
      </SidebarFooter>
    </SidebarComponent>
  );
};

export default Sidebar;
