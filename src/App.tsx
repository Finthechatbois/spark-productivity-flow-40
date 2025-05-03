
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppShell from "./components/layout/AppShell";
import { ThemeProvider } from "next-themes";

// Pages
import Index from "./pages/Index";
import Tasks from "./pages/Tasks";
import Notes from "./pages/Notes";
import Calendar from "./pages/Calendar";
import Inbox from "./pages/Inbox";
import Bookmarks from "./pages/Bookmarks";
import Team from "./pages/Team";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" attribute="class">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route 
              path="/tasks" 
              element={
                <AppShell>
                  <Tasks />
                </AppShell>
              } 
            />
            <Route 
              path="/notes" 
              element={
                <AppShell>
                  <Notes />
                </AppShell>
              } 
            />
            <Route 
              path="/calendar" 
              element={
                <AppShell>
                  <Calendar />
                </AppShell>
              } 
            />
            <Route 
              path="/inbox" 
              element={
                <AppShell>
                  <Inbox />
                </AppShell>
              } 
            />
            <Route 
              path="/bookmarks" 
              element={
                <AppShell>
                  <Bookmarks />
                </AppShell>
              } 
            />
            <Route 
              path="/team" 
              element={
                <AppShell>
                  <Team />
                </AppShell>
              } 
            />
            <Route 
              path="/settings" 
              element={
                <AppShell>
                  <Settings />
                </AppShell>
              } 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
