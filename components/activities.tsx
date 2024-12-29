import { TrendingUp } from "lucide-react";
import { ChartBarActivitiesLabel } from "./activities-bar-chart-label";

const Activities = () => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center space-x-4">
        <div>Atividades</div>
        <div className="text-xs p-1 flex items-center bg-green-500/20 rounded-md text-green-500">
          +12% &nbsp; <TrendingUp className="h-4 w-4" />
        </div>
      </div>
      <div className="text-4xl">
        83<span className="text-foreground/40">%</span>
      </div>
      <ChartBarActivitiesLabel />
    </div>
  );
};

export default Activities;
