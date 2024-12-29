import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DataTableTarefas } from "./lista-tarefas-table";

const ListaTarefasAccordion = () => {
  return (
    <div>
    <Accordion type="multiple" defaultValue={["item-1", "item-2", "item-3"]} className="space-y-8">
      <AccordionItem value="item-1" className="bg-muted/20 rounded-t-lg p-2">
        <AccordionTrigger className="ml-2 flex items-center justify-start space-x-4"><div className="w-1 h-4 bg-red-500"></div><p>Para fazer </p></AccordionTrigger>
        <AccordionContent className="bg-background rounded-lg p-2">
          <DataTableTarefas />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="bg-muted/20 rounded-t-lg p-2">
        <AccordionTrigger className="ml-2 flex items-center justify-start space-x-4"><div className="w-1 h-4 bg-red-400"></div><p>Em progresso </p></AccordionTrigger>
        <AccordionContent className="bg-background rounded-lg p-2">
          <DataTableTarefas />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="bg-muted/20 rounded-t-lg p-2">
        <AccordionTrigger className="ml-2 flex items-center justify-start space-x-4"><div className="w-1 h-4 bg-red-300"></div><p>Concluídos </p></AccordionTrigger>
        <AccordionContent className="bg-background rounded-lg p-2">
          <DataTableTarefas />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
  );
};

export default ListaTarefasAccordion;
