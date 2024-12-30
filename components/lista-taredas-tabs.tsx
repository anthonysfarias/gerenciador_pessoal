import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CalendarClock, Kanban, List, Plus } from "lucide-react";
import ListaTarefasAccordion from "./lista-tarefas-accordion";
import { KanbanBoard } from "./kanban/KanbanBoard";

const ListaTarefasTabs = () => {
  return (
    <div className="w-full px-4">
      <Tabs defaultValue="lista-tarefas" className="w-full">
        <div className="flex items-start justify-between">
        <TabsList>
          <TabsTrigger value="lista-tarefas"><List size={15}/>&nbsp;Lista</TabsTrigger>
          <TabsTrigger value="linha-do-tempo"><CalendarClock size={15}/>&nbsp;Linha do tempo</TabsTrigger>
          <TabsTrigger value="kanban"><Kanban size={15}/>&nbsp;Kanban</TabsTrigger>
        </TabsList>
  
        <Sheet>
          <SheetTrigger asChild>
            <Button><Plus /> nova tarefa</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when youre done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" value="@peduarte" className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
        <TabsContent value="lista-tarefas" className="mt-4">
          <ListaTarefasAccordion />
        </TabsContent>
        <TabsContent value="linha-do-tempo">Change your password here.</TabsContent>
        <TabsContent value="kanban">
           <KanbanBoard />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ListaTarefasTabs;
