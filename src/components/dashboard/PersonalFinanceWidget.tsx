
import { DollarSign, Wallet, ChartBar, CreditCard } from "lucide-react";
import DashboardWidget from "./DashboardWidget";
import { Progress } from "@/components/ui/progress";

const PersonalFinanceWidget = () => {
  // Sample data for the finance widget
  const finances = {
    balance: 24580,
    income: 8750,
    expenses: 3250,
    savings: 5500,
    savingsGoal: 10000,
    budget: {
      housing: 1200,
      transportation: 450,
      food: 650,
      utilities: 320,
      entertainment: 280,
      other: 350
    }
  };

  // Calculate savings progress percentage
  const savingsProgress = Math.min(100, (finances.savings / finances.savingsGoal) * 100);
  
  return (
    <DashboardWidget 
      title={
        <div className="flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-primary" />
          <span>Personal Finance</span>
        </div>
      }
      description="Track your financial health and progress"
      fullHeight
    >
      <div className="space-y-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-secondary/50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Wallet className="h-4 w-4 text-primary" />
              <p className="text-xs font-medium">Balance</p>
            </div>
            <p className="text-lg font-semibold">${finances.balance.toLocaleString()}</p>
          </div>
          
          <div className="bg-secondary/50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="h-4 w-4 text-primary" />
              <p className="text-xs font-medium">Income</p>
            </div>
            <p className="text-lg font-semibold">${finances.income.toLocaleString()}</p>
          </div>
          
          <div className="bg-secondary/50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <CreditCard className="h-4 w-4 text-primary" />
              <p className="text-xs font-medium">Expenses</p>
            </div>
            <p className="text-lg font-semibold">${finances.expenses.toLocaleString()}</p>
          </div>
          
          <div className="bg-secondary/50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <ChartBar className="h-4 w-4 text-primary" />
              <p className="text-xs font-medium">Savings</p>
            </div>
            <p className="text-lg font-semibold">${finances.savings.toLocaleString()}</p>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-medium">Savings Goal Progress</p>
            <p className="text-sm text-muted-foreground">${finances.savings.toLocaleString()} / ${finances.savingsGoal.toLocaleString()}</p>
          </div>
          <Progress value={savingsProgress} className="h-2" />
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-3">Monthly Budget Breakdown</h4>
          <div className="space-y-3">
            {Object.entries(finances.budget).map(([category, amount]) => (
              <div key={category} className="flex items-center justify-between">
                <div className="text-sm capitalize">{category}</div>
                <div className="text-sm font-medium">${amount.toLocaleString()}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardWidget>
  );
};

export default PersonalFinanceWidget;
