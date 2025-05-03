
import GreetingCard from "@/components/dashboard/GreetingCard";
import QuickActions from "@/components/dashboard/QuickActions";
import TaskWidget from "@/components/dashboard/TaskWidget";
import NotesWidget from "@/components/dashboard/NotesWidget";
import CalendarWidget from "@/components/dashboard/CalendarWidget";
import PersonalFinanceWidget from "@/components/dashboard/PersonalFinanceWidget";
import ProjectsWidget from "@/components/dashboard/ProjectsWidget";
import TimeBlockingWidget from "@/components/dashboard/TimeBlockingWidget";

const Dashboard = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <section>
        <h1 className="text-3xl font-semibold tracking-tight mb-1">Personal Hub</h1>
        <p className="text-muted-foreground">Your centralized command center.</p>
      </section>
      
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
