import { Terminal } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function AlertEventosGeral() {
  return (
    <Alert className="border-primary bg-muted/50">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Ir para a academia</AlertTitle>
      <AlertDescription>
        Em 10 minutos
      </AlertDescription>
    </Alert>
  )
}
