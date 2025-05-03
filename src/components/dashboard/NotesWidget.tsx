
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import DashboardWidget from "./DashboardWidget";
import { Calendar, FileText } from "lucide-react";

interface Note {
  id: string;
  title: string;
  excerpt: string;
  updatedAt: string;
  category: string;
}

// Sample data - would come from a real data source
const notes: Note[] = [
  {
    id: "1",
    title: "Technology Strategy 2025",
    excerpt: "Key points for our technology strategy next year...",
    updatedAt: "2025-05-01T10:30:00Z",
    category: "Strategy"
  },
  {
    id: "2",
    title: "Engineering Team Restructuring",
    excerpt: "Thoughts on optimizing our engineering department structure...",
    updatedAt: "2025-04-29T15:45:00Z",
    category: "Management"
  },
  {
    id: "3",
    title: "Cloud Migration Notes",
    excerpt: "Important considerations for our cloud migration project...",
    updatedAt: "2025-04-28T09:15:00Z",
    category: "Infrastructure"
  }
];

const NoteItem = ({ note }: { note: Note }) => {
  const date = new Date(note.updatedAt);
  const formattedDate = date.toLocaleDateString();
  
  return (
    <div className="border-b border-border last:border-0 py-3">
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-medium text-sm">{note.title}</h4>
          <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">{note.excerpt}</p>
        </div>
        <span className="text-xs text-muted-foreground whitespace-nowrap ml-2 mt-0.5">
          {formattedDate}
        </span>
      </div>
      <div className="mt-2 flex items-center gap-2">
        <span className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full">
          {note.category}
        </span>
      </div>
    </div>
  );
};

const NotesWidget = () => {
  return (
    <DashboardWidget title="Recent Notes" fullHeight>
      <div className="space-y-1">
        {notes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
      <div className="mt-4 text-center">
        <Button variant="outline" size="sm" asChild>
          <Link to="/notes">View all notes</Link>
        </Button>
      </div>
    </DashboardWidget>
  );
};

export default NotesWidget;
