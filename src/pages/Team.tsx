
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Team = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <section className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight mb-1">Team</h1>
          <p className="text-muted-foreground">Collaborate and manage your team.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Member
        </Button>
      </section>
      
      <div className="bg-card border border-border rounded-lg p-8 text-center">
        <h2 className="text-lg font-medium mb-2">Team Management</h2>
        <p className="text-muted-foreground mb-4">
          This page will be implemented in a future update.
        </p>
        <Button variant="outline" onClick={() => window.history.back()}>
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default Team;
