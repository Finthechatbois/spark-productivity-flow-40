
import { Button } from "@/components/ui/button";

const Settings = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <section>
        <h1 className="text-3xl font-semibold tracking-tight mb-1">Settings</h1>
        <p className="text-muted-foreground">Customize your experience.</p>
      </section>
      
      <div className="bg-card border border-border rounded-lg p-8 text-center">
        <h2 className="text-lg font-medium mb-2">Settings</h2>
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

export default Settings;
