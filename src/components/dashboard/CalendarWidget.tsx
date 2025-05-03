
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import DashboardWidget from "./DashboardWidget";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface Event {
  id: string;
  title: string;
  date: Date;
  time: string;
  type: "meeting" | "reminder" | "deadline";
}

// Sample data - would come from a real data source
const events: Event[] = [
  {
    id: "1",
    title: "Executive Team Meeting",
    date: new Date(2025, 4, 5), // May 5, 2025
    time: "10:00 AM - 11:30 AM",
    type: "meeting"
  },
  {
    id: "2",
    title: "Product Demo with Client",
    date: new Date(2025, 4, 6), // May 6, 2025
    time: "2:00 PM - 3:00 PM",
    type: "meeting"
  },
  {
    id: "3",
    title: "Q2 Report Deadline",
    date: new Date(2025, 4, 7), // May 7, 2025
    time: "EOD",
    type: "deadline"
  },
  {
    id: "4",
    title: "Review Architecture Proposal",
    date: new Date(2025, 4, 5), // May 5, 2025
    time: "3:00 PM - 4:00 PM",
    type: "meeting"
  }
];

const CalendarWidget = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // Get events for the selected date
  const selectedDateEvents = events.filter(
    event => date && event.date.toDateString() === date.toDateString()
  );

  // Function to determine which dates have events
  const isDayWithEvent = (day: Date) => {
    return events.some(event => event.date.toDateString() === day.toDateString());
  };

  return (
    <DashboardWidget title="Calendar" fullHeight>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/2">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border p-0"
            modifiers={{
              hasEvent: isDayWithEvent,
            }}
            modifiersClassNames={{
              hasEvent: "font-bold text-primary", 
            }}
          />
        </div>
        <div className="md:w-1/2 space-y-3">
          <h3 className="text-sm font-medium">
            {date ? date.toLocaleDateString('en-US', { 
              weekday: 'long', 
              month: 'long', 
              day: 'numeric' 
            }) : 'No date selected'}
          </h3>
          
          {selectedDateEvents.length > 0 ? (
            <div className="space-y-2">
              {selectedDateEvents.map(event => (
                <div 
                  key={event.id} 
                  className={cn(
                    "text-sm p-2 rounded-md border",
                    event.type === "meeting" && "bg-blue-50 border-blue-100",
                    event.type === "deadline" && "bg-amber-50 border-amber-100",
                    event.type === "reminder" && "bg-green-50 border-green-100"
                  )}
                >
                  <p className="font-medium">{event.title}</p>
                  <p className="text-xs text-muted-foreground">{event.time}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">No events for this date</p>
          )}
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <Button variant="outline" size="sm" asChild>
          <Link to="/calendar">View full calendar</Link>
        </Button>
      </div>
    </DashboardWidget>
  );
};

export default CalendarWidget;
