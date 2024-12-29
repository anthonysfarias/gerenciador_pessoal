import { TrendingDown } from "lucide-react";
import { ChartPieDonutGeral } from "./pie-chart-donut-text-geral";

const ProjectsGeral = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-4">
        <div>Projetos</div>
        <div className="text-xs p-1 flex items-center bg-red-500/20 rounded-md text-red-500">
          -12% &nbsp; <TrendingDown className="h-4 w-4" />
        </div>
      </div>
      <div>
        <ChartPieDonutGeral />
      </div>
    </div>
  );
};

export default ProjectsGeral;
