import { GraficoGeralControleGastos } from "@/components/chart-controle-gastos";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
  import { Separator } from "@/components/ui/separator";
  import { SidebarTrigger } from "@/components/ui/sidebar";
import { Receipt } from "lucide-react";
  
  export default function Home() {
    return (
      <>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Financeiro
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Controle de Gastos</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex items-center py-6 px-5 text-sm font-bold"><Receipt />&nbsp;Resumo Mensal</div>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-4">
          <Card>
                <CardHeader className="font-bold">
                Receitas do Mês
                </CardHeader>
                <CardContent className="text-2xl flex justify-center">
                <p className="px-2 text-slate-50 bg-slate-50/20 w-fit h-fit rounded-full">R$5.000,00</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="font-bold">
                Despesas do Mês
                </CardHeader>
                <CardContent className="text-2xl flex justify-center">
                <p className="px-2 text-red-500 bg-red-500/20 w-fit h-fit rounded-full">-R$3.000,00</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="font-bold">
                Saldo Atual
                </CardHeader>
                <CardContent className="text-2xl flex justify-center">
                <p className="px-2 text-green-500 bg-green-500/20 w-fit h-fit rounded-full">R$2.000,00</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="font-bold">
                Planejamento Mensal
                </CardHeader>
                <CardContent className="text-2xl flex justify-center">
                <p className="px-2 text-purple-500 bg-purple-500/20 w-fit h-fit rounded-full">75%</p>
                </CardContent>
            </Card>
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
          <GraficoGeralControleGastos /></div>
        </div>
      </>
    );
  }
  