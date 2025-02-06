"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookCopy,
  Calendar1,
  ClipboardList,
  Command,
  DollarSign,
  Dumbbell,
  GalleryVerticalEnd,
  LayoutDashboard,
  Map,
  PieChart,
  Settings,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Anthony",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Linux Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Google Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "IBM Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: "Resumo Geral",
          url: "/resumo-geral",
        },
      ],
    },
    {
      title: "Tarefas",
      url: "#",
      icon: ClipboardList,
      items: [
        {
          title: "Lista de Tarefas",
          url: "/tarefas/lista-tarefas",
        },
        {
          title: "Tarefas Concluídas",
          url: "#",
        },
        {
          title: "Categorias",
          url: "#",
        },
        {
          title: "Prioridades",
          url: "#",
        },
      ],
    },
    {
      title: "Calendário",
      url: "#",
      icon: Calendar1,
      items: [
        {
          title: "Agenda Diária",
          url: "#",
        },
        {
          title: "Semana Atual",
          url: "#",
        },
        {
          title: "Planejamento Mensal",
          url: "#",
        },
      ],
    },
    {
      title: "Financeiro",
      url: "#",
      icon: DollarSign,
      items: [
        {
          title: "Controle de Gastos",
          url: "/financeiro/controle-gastos",
        },
        {
          title: "Entradas e Saídas",
          url: "/financeiro/entrada-saida",
        },
        {
          title: "Relatórios Financeiros",
          url: "#",
        },
        {
          title: "Metas Financeiras",
          url: "#",
        },
      ],
    },
    {
      title: "Estudos e Notas",
      url: "#",
      icon: BookCopy,
      items: [
        {
          title: "Bloco de Notas",
          url: "#",
        },
        {
          title: "Materiais Salvos",
          url: "#",
        },
        {
          title: "Progresso de Estudos",
          url: "#",
        },
      ],
    },
    {
      title: "Saúde e Bem-estar",
      url: "#",
      icon: Dumbbell,
      items: [
        {
          title: "Diário de Treinos",
          url: "#",
        },
        {
          title: "Autocuidado",
          url: "#",
        },
        {
          title: "Relatórios de Progresso",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Configurações",
      url: "#",
      icon: Settings,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
