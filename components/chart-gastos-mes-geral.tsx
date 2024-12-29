"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
  { month: "Novembro", gastos_discricionarios: 200, gastos_essenciais: 1890 },
  { month: "Dezembro", gastos_discricionarios: 300, gastos_essenciais: 2000 },
]

const chartConfig = {
  gastos_discricionarios: {
    label: "GD - R$",
    color: "hsl(var(--chart-2))",
  },
  gastos_essenciais: {
    label: "GE - R$",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function GastosMesGeral() {
  return (
    <Card className="h-[19.7rem]">
      <CardHeader>
        <CardTitle>Gastos do Mês</CardTitle>
        <CardDescription>Novembro - Dezembro 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="gastos_essenciais" fill="var(--color-gastos_essenciais)" radius={4} />
            <Bar dataKey="gastos_discricionarios" fill="var(--color-gastos_discricionarios)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  )
}
