
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimeBlock {
  id: string;
  title: string;
  description?: string;
  day: string; // "monday", "tuesday", etc.
  startTime: string; // "08:00"
  endTime: string; // "10:00"
  category: "focus" | "meeting" | "personal" | "rest";
  recurring: boolean;
}

// Sample data
const timeBlocksData: TimeBlock[] = [
  {
    id: "1",
    title: "Deep Work Session",
    description: "Focused work on current project without distractions",
    day: "monday",
    startTime: "08:00",
    endTime: "10:00",
    category: "focus",
    recurring: true
  },
  {
    id: "2",
    title: "Exercise",
    description: "Morning workout routine",
    day: "monday",
    startTime: "12:00",
    endTime: "13:00",
    category: "personal",
    recurring: true
  },
  {
    id: "3",
    title: "Reading & Research",
    day: "monday",
    startTime: "16:00",
    endTime: "17:30",
    category: "focus",
    recurring: true
  },
  {
    id: "4",
    title: "Meditation",
    day: "tuesday",
    startTime: "07:00",
    endTime: "07:30",
    category: "rest",
    recurring: true
  },
  {
    id: "5",
    title: "Project Planning",
    description: "Strategic planning for ongoing projects",
    day: "tuesday",
    startTime: "09:00",
    endTime: "11:00",
    category: "focus",
    recurring: true
  },
  {
    id: "6",
    title: "Skill Development",
    description: "Learning new technologies",
    day: "wednesday",
    startTime: "14:00",
    endTime: "16:00",
    category: "focus",
    recurring: true
  },
  {
    id: "7",
    title: "Evening Walk",
    day: "wednesday",
    startTime: "18:00",
    endTime: "19:00",
    category: "personal",
    recurring: true
  },
  {
    id: "8",
    title: "Strategic Reading",
    day: "thursday",
    startTime: "09:00",
    endTime: "10:30",
    category: "focus",
    recurring: true
  }
];

const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
const hours = Array.from({ length: 14 }, (_, i) => i + 7); // 7am to 8pm

const TimeBlocking = () => {
  const [selectedDay, setSelectedDay] = useState("monday");
  
  const categoryColors = {
    focus: "bg-blue-900/20 border-blue-700/30 text-blue-400",
    meeting: "bg-purple-900/20 border-purple-700/30 text-purple-400",
    personal: "bg-green-900/20 border-green-700/30 text-green-400",
    rest: "bg-amber-900/20 border-amber-700/30 text-amber-400"
  };

  const categoryName = {
    focus: "Focus Time",
    meeting: "Meeting",
    personal: "Personal",
    rest: "Rest & Recovery"
  };
  
  const dayBlocks = timeBlocksData.filter(block => block.day === selectedDay);
  
  const formatTime = (time: string) => {
    const [hour, minute] = time.split(":");
    const hourNum = parseInt(hour);
    return `${hourNum % 12 === 0 ? 12 : hourNum % 12}:${minute}${hourNum >= 12 ? 'pm' : 'am'}`;
  };
  
  const getBlockPositionStyle = (block: TimeBlock) => {
    const startHour = parseInt(block.startTime.split(":")[0]);
    const startMinute = parseInt(block.startTime.split(":")[1]);
    const endHour = parseInt(block.endTime.split(":")[0]);
    const endMinute = parseInt(block.endTime.split(":")[1]);
    
    const startPosition = (startHour - 7) * 60 + startMinute;
    const duration = (endHour - startHour) * 60 + (endMinute - startMinute);
    
    return {
      top: `${startPosition}px`,
      height: `${duration}px`,
    };
  };
  
  return (
    <div className="space-y-6 animate-fade-in">
      <section className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight mb-1">Time Blocking</h1>
          <p className="text-muted-foreground">Optimize your day with structured time blocks.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> New Time Block
        </Button>
      </section>
      
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {days.map((day) => (
          <Button
            key={day}
            variant={selectedDay === day ? "default" : "outline"}
            className="capitalize"
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </Button>
        ))}
      </div>
      
      <div className="flex gap-4">
        <div className="w-24 flex-shrink-0">
          {hours.map((hour) => (
            <div key={hour} className="h-[60px] border-t border-border text-xs text-muted-foreground py-1">
              {hour % 12 === 0 ? 12 : hour % 12}{hour >= 12 ? 'pm' : 'am'}
            </div>
          ))}
        </div>
        
        <div className="flex-1 relative border border-border rounded-lg min-h-[840px]">
          {hours.map((hour) => (
            <div 
              key={hour} 
              className="absolute w-full h-[1px] bg-border" 
              style={{ top: `${(hour - 7) * 60}px` }}
            />
          ))}
          
          {dayBlocks.map((block) => (
            <div
              key={block.id}
              className={cn(
                "absolute w-[calc(100%-16px)] left-2 rounded-md p-2 border hover:shadow-md transition-shadow",
                categoryColors[block.category]
              )}
              style={getBlockPositionStyle(block)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-sm">{block.title}</h3>
                  <div className="text-xs opacity-80">
                    {formatTime(block.startTime)} - {formatTime(block.endTime)}
                  </div>
                  {block.description && (
                    <p className="text-xs mt-1 opacity-80">{block.description}</p>
                  )}
                </div>
                <div className="text-[10px] rounded-full px-1.5 py-0.5 bg-background/10 whitespace-nowrap">
                  {categoryName[block.category]}
                </div>
              </div>
            </div>
          ))}
          
          {dayBlocks.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
              <CalendarDays className="h-12 w-12 mb-2 opacity-30" />
              <p>No time blocks for this day</p>
              <Button variant="outline" className="mt-4">
                <Plus className="mr-2 h-4 w-4" /> Add Time Block
              </Button>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-6 bg-card border border-border rounded-lg p-4">
        <h2 className="text-lg font-medium mb-4">Time Block Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(categoryColors).map(([category, colorClass]) => (
            <div
              key={category}
              className={cn(
                "p-3 rounded-md border",
                colorClass
              )}
            >
              <span className="font-medium capitalize">{categoryName[category as keyof typeof categoryName]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeBlocking;
