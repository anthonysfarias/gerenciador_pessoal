"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { date: "2024-04-01", lucros: 222, perdas: 150 },
  { date: "2024-04-02", lucros: 97, perdas: 180 },
  { date: "2024-04-03", lucros: 167, perdas: 120 },
  { date: "2024-04-04", lucros: 242, perdas: 260 },
  { date: "2024-04-05", lucros: 373, perdas: 290 },
  { date: "2024-04-06", lucros: 301, perdas: 340 },
  { date: "2024-04-07", lucros: 245, perdas: 180 },
  { date: "2024-04-08", lucros: 409, perdas: 320 },
  { date: "2024-04-09", lucros: 59, perdas: 110 },
  { date: "2024-04-10", lucros: 261, perdas: 190 },
  { date: "2024-04-11", lucros: 327, perdas: 350 },
  { date: "2024-04-12", lucros: 292, perdas: 210 },
  { date: "2024-04-13", lucros: 342, perdas: 380 },
  { date: "2024-04-14", lucros: 137, perdas: 220 },
  { date: "2024-04-15", lucros: 120, perdas: 170 },
  { date: "2024-04-16", lucros: 138, perdas: 190 },
  { date: "2024-04-17", lucros: 446, perdas: 360 },
  { date: "2024-04-18", lucros: 364, perdas: 410 },
  { date: "2024-04-19", lucros: 243, perdas: 180 },
  { date: "2024-04-20", lucros: 89, perdas: 150 },
  { date: "2024-04-21", lucros: 137, perdas: 200 },
  { date: "2024-04-22", lucros: 224, perdas: 170 },
  { date: "2024-04-23", lucros: 138, perdas: 230 },
  { date: "2024-04-24", lucros: 387, perdas: 290 },
  { date: "2024-04-25", lucros: 215, perdas: 250 },
  { date: "2024-04-26", lucros: 75, perdas: 130 },
  { date: "2024-04-27", lucros: 383, perdas: 420 },
  { date: "2024-04-28", lucros: 122, perdas: 180 },
  { date: "2024-04-29", lucros: 315, perdas: 240 },
  { date: "2024-04-30", lucros: 454, perdas: 380 },
  { date: "2024-05-01", lucros: 165, perdas: 220 },
  { date: "2024-05-02", lucros: 293, perdas: 310 },
  { date: "2024-05-03", lucros: 247, perdas: 190 },
  { date: "2024-05-04", lucros: 385, perdas: 420 },
  { date: "2024-05-05", lucros: 481, perdas: 390 },
  { date: "2024-05-06", lucros: 498, perdas: 520 },
  { date: "2024-05-07", lucros: 388, perdas: 300 },
  { date: "2024-05-08", lucros: 149, perdas: 210 },
  { date: "2024-05-09", lucros: 227, perdas: 180 },
  { date: "2024-05-10", lucros: 293, perdas: 330 },
  { date: "2024-05-11", lucros: 335, perdas: 270 },
  { date: "2024-05-12", lucros: 197, perdas: 240 },
  { date: "2024-05-13", lucros: 197, perdas: 160 },
  { date: "2024-05-14", lucros: 448, perdas: 490 },
  { date: "2024-05-15", lucros: 473, perdas: 380 },
  { date: "2024-05-16", lucros: 338, perdas: 400 },
  { date: "2024-05-17", lucros: 499, perdas: 420 },
  { date: "2024-05-18", lucros: 315, perdas: 350 },
  { date: "2024-05-19", lucros: 235, perdas: 180 },
  { date: "2024-05-20", lucros: 177, perdas: 230 },
  { date: "2024-05-21", lucros: 82, perdas: 140 },
  { date: "2024-05-22", lucros: 81, perdas: 120 },
  { date: "2024-05-23", lucros: 252, perdas: 290 },
  { date: "2024-05-24", lucros: 294, perdas: 220 },
  { date: "2024-05-25", lucros: 201, perdas: 250 },
  { date: "2024-05-26", lucros: 213, perdas: 170 },
  { date: "2024-05-27", lucros: 420, perdas: 460 },
  { date: "2024-05-28", lucros: 233, perdas: 190 },
  { date: "2024-05-29", lucros: 78, perdas: 130 },
  { date: "2024-05-30", lucros: 340, perdas: 280 },
  { date: "2024-05-31", lucros: 178, perdas: 230 },
  { date: "2024-06-01", lucros: 178, perdas: 200 },
  { date: "2024-06-02", lucros: 470, perdas: 410 },
  { date: "2024-06-03", lucros: 103, perdas: 160 },
  { date: "2024-06-04", lucros: 439, perdas: 380 },
  { date: "2024-06-05", lucros: 88, perdas: 140 },
  { date: "2024-06-06", lucros: 294, perdas: 250 },
  { date: "2024-06-07", lucros: 323, perdas: 370 },
  { date: "2024-06-08", lucros: 385, perdas: 320 },
  { date: "2024-06-09", lucros: 438, perdas: 480 },
  { date: "2024-06-10", lucros: 155, perdas: 200 },
  { date: "2024-06-11", lucros: 92, perdas: 150 },
  { date: "2024-06-12", lucros: 492, perdas: 420 },
  { date: "2024-06-13", lucros: 81, perdas: 130 },
  { date: "2024-06-14", lucros: 426, perdas: 380 },
  { date: "2024-06-15", lucros: 307, perdas: 350 },
  { date: "2024-06-16", lucros: 371, perdas: 310 },
  { date: "2024-06-17", lucros: 475, perdas: 520 },
  { date: "2024-06-18", lucros: 107, perdas: 170 },
  { date: "2024-06-19", lucros: 341, perdas: 290 },
  { date: "2024-06-20", lucros: 408, perdas: 450 },
  { date: "2024-06-21", lucros: 169, perdas: 210 },
  { date: "2024-06-22", lucros: 317, perdas: 270 },
  { date: "2024-06-23", lucros: 480, perdas: 530 },
  { date: "2024-06-24", lucros: 132, perdas: 180 },
  { date: "2024-06-25", lucros: 141, perdas: 190 },
  { date: "2024-06-26", lucros: 434, perdas: 380 },
  { date: "2024-06-27", lucros: 448, perdas: 490 },
  { date: "2024-06-28", lucros: 149, perdas: 200 },
  { date: "2024-06-29", lucros: 103, perdas: 160 },
  { date: "2024-06-30", lucros: 446, perdas: 400 },
]

const chartConfig = {
  views: {
    label: "Lucro/Perda",
  },
  lucros: {
    label: "Lucros",
    color: "hsl(var(--chart-1))",
  },
  perdas: {
    label: "Perdas",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function GraficoGeralControleGastos() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("lucros")

  const total = React.useMemo(
    () => ({
      lucros: chartData.reduce((acc, curr) => acc + curr.lucros, 0),
      perdas: chartData.reduce((acc, curr) => acc + curr.perdas, 0),
    }),
    []
  )

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Gráfico Compacto</CardTitle>
          <CardDescription>
           Transações
          </CardDescription>
        </div>
        <div className="flex">
          {["lucros", "perdas"].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
