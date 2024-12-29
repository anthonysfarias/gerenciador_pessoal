"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertEventosGeral } from "./chart-eventos-geral-alert";


export function ChartEventosGeral() {
  return (
    <Card className="flex flex-col h-[19.7rem]">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">Eventos Hoje <div className="bg-primary/10 text-primary px-1 rounded-sm">3</div></CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0 space-y-3">
       <AlertEventosGeral />
       <AlertEventosGeral />
       <AlertEventosGeral />
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        
      </CardFooter>
    </Card>
  );
}
