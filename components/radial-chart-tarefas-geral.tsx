"use client";

import { ChartNoAxesColumnIncreasing } from "lucide-react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
const chartData = [
  { browser: "safari", numero_tarefas: 10, fill: "var(--color-safari)" },
];

const chartConfig = {
  numero_tarefas: {
    label: "Quantidade de tarefas",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

// Obtendo o timestamp atual
const timestampAtual = Date.now();

// Criando um objeto Date com o timestamp
const dataAtual = new Date(timestampAtual);

// Formatando a data
const dataFormatada = dataAtual.toLocaleDateString('pt-BR', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
});


export function RedialChartTarefasGeral() {
  return (
    <Card className="flex flex-col h-max">
      <CardHeader className="items-center pb-0">
        <CardTitle>Tarefas pendentes</CardTitle>
        <CardDescription>{dataFormatada}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={0}
            innerRadius={80}
            outerRadius={110}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-primary last:fill-background"
              polarRadius={[86, 0]}
            />
            <RadialBar dataKey="numero_tarefas" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-4xl font-bold"
                        >
                          {chartData[0].numero_tarefas.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground font-semibold"
                        >
                          Tarefas
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Faltam {chartData[0].numero_tarefas} de 30 tarefas hoje{" "}
          <ChartNoAxesColumnIncreasing className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  );
}
