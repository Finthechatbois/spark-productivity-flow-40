
import DashboardWidget from "./DashboardWidget";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface TimeBlock {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  category: "focus" | "meeting" | "personal" | "rest";
}

// Sample data
const timeBlocks: TimeBlock[] = [
  {
    id: "1",
    title: "Deep Work Session",
    startTime: "08:00",
    endTime: "10:00",
    category: "focus"
  },
  {
    id: "2",
    title: "Exercise",
    startTime: "12:00",
    endTime: "13:00",
    category: "personal"
  },
  {
    id: "3",
    title: "Reading & Research",
    startTime: "16:00",
    endTime: "17:30",
    category: "focus"
  },
  {
    id: "4",
    title: "Meditation",
    startTime: "18:00",
    endTime: "18:30",
    category: "rest"
  }
];

const TimeBlockItem = ({ block }: { block: TimeBlock }) => {
  const categoryStyles = {
    focus: "bg-blue-900/20 border-blue-700/30 text-blue-400",
    meeting: "bg-purple-900/20 border-purple-700/30 text-purple-400",
    personal: "bg-green-900/20 border-green-700/30 text-green-400",
    rest: "bg-amber-900/20 border-amber-700/30 text-amber-400"
  };

  return (
    <div className={cn(
      "p-2 rounded-md border mb-2 flex items-center justify-between",
      categoryStyles[block.category]
    )}>
      <div className="flex items-center gap-2">
        <div className="flex flex-col">
          <span className="text-sm font-medium">{block.title}</span>
          <span className="text-xs opacity-80">{block.startTime} - {block.endTime}</span>
        </div>
      </div>
      <div className="text-xs rounded-full px-2 py-0.5 bg-background/10">
        {block.category}
      </div>
    </div>
  );
};

const TimeBlockingWidget = () => {
  return (
    <DashboardWidget 
      title={<div className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> Time Blocks</div>}
      description="Today's focused time blocks" 
      fullHeight
    >
      <div>
        {timeBlocks.map((block) => (
          <TimeBlockItem key={block.id} block={block} />
        ))}
      </div>
      <div className="mt-4 text-center">
        <Button variant="outline" size="sm" asChild>
          <Link to="/time-blocking">Manage time blocks</Link>
        </Button>
      </div>
    </DashboardWidget>
  );
};

export default TimeBlockingWidget;
