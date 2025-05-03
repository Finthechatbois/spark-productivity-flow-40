
import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DashboardWidgetProps {
  title: string;
  description?: string;
  className?: string;
  children: ReactNode;
  fullHeight?: boolean;
}

const DashboardWidget = ({
  title,
  description,
  className,
  children,
  fullHeight = false,
}: DashboardWidgetProps) => {
  return (
    <Card className={cn("shadow-sm overflow-hidden", fullHeight && "h-full", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
        {description && (
          <CardDescription>{description}</CardDescription>
        )}
      </CardHeader>
      <CardContent className="pb-4">
        {children}
      </CardContent>
    </Card>
  );
};

export default DashboardWidget;
