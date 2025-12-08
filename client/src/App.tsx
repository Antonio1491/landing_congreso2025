import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Landing from "@/pages/landing";
import Congreso from "@/pages/congreso";
import Organizadores from "@/pages/organizadores";
import Ponentes from "@/pages/ponentes";
import PreguntasFrecuentes from "@/pages/preguntas-frecuentes";
import Preparate from "@/pages/preparate";
import Programa from "@/pages/programa";
import Talleres from "@/pages/talleres";
import EventosSociales from "@/pages/eventos-sociales";
import MeridaYucatan from "@/pages/merida-yucatan";
import Conectividad from "@/pages/conectividad";
import Hospedaje from "@/pages/hospedaje";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/congreso" component={Congreso} />
      <Route path="/organizadores" component={Organizadores} />
      <Route path="/ponentes" component={Ponentes} />
      <Route path="/preguntas-frecuentes" component={PreguntasFrecuentes} />
      <Route path="/preparate" component={Preparate} />
      <Route path="/programa" component={Programa} />
      <Route path="/talleres" component={Talleres} />
      <Route path="/eventos-sociales" component={EventosSociales} />
      <Route path="/merida-yucatan" component={MeridaYucatan} />
      <Route path="/conectividad" component={Conectividad} />
      <Route path="/hospedaje" component={Hospedaje} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
