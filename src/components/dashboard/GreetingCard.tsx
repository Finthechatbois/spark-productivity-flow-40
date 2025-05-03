
import DashboardWidget from "./DashboardWidget";
import { Clock } from "lucide-react";
import { useEffect, useState } from "react";

const GreetingCard = () => {
  const [greeting, setGreeting] = useState("");
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const getGreeting = () => {
      const hour = time.getHours();
      if (hour < 12) return "Good morning";
      if (hour < 18) return "Good afternoon";
      return "Good evening";
    };

    setGreeting(getGreeting());
    
    const timer = setInterval(() => {
      setTime(new Date());
    }, 60000); // Update every minute
    
    return () => clearInterval(timer);
  }, [time]);

  const formattedTime = time.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit' 
  });
  
  const formattedDate = time.toLocaleDateString([], {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <DashboardWidget
      title={
        <span className="flex items-center gap-2">
          <span>{greeting}, Jason</span>
        </span>
      }
      className="relative overflow-hidden"
    >
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Clock className="h-4 w-4" />
        <span>{formattedTime}</span>
        <span className="mx-1">•</span>
        <span>{formattedDate}</span>
      </div>
      
      <div className="mt-3 grid grid-cols-3 gap-2">
        <div className="bg-secondary rounded-md p-3 text-center">
          <p className="text-xs text-muted-foreground">Tasks</p>
          <p className="text-xl font-semibold">5</p>
          <p className="text-xs text-muted-foreground">due today</p>
        </div>
        <div className="bg-secondary rounded-md p-3 text-center">
          <p className="text-xs text-muted-foreground">Meetings</p>
          <p className="text-xl font-semibold">3</p>
          <p className="text-xs text-muted-foreground">scheduled</p>
        </div>
        <div className="bg-secondary rounded-md p-3 text-center">
          <p className="text-xs text-muted-foreground">Messages</p>
          <p className="text-xl font-semibold">7</p>
          <p className="text-xs text-muted-foreground">unread</p>
        </div>
      </div>
    </DashboardWidget>
  );
};

export default GreetingCard;
