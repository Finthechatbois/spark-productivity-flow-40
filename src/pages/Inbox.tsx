
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Inbox = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <section className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight mb-1">Inbox</h1>
          <p className="text-muted-foreground">Manage your messages and communications.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> New Message
        </Button>
      </section>
      
      <div className="bg-card border border-border rounded-lg p-8 text-center">
        <h2 className="text-lg font-medium mb-2">Inbox</h2>
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

export default Inbox;
