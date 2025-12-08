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
