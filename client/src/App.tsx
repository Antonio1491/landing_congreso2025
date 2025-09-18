import { Switch, Route } from "wouter";

function Landing() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>¡Congreso Parques Tijuana 2026!</h1>
      <p>Bienvenidos al sitio del congreso</p>
      <p>13-15 mayo 2026, Tijuana</p>
    </div>
  );
}

function NotFound() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Página no encontrada</h1>
      <p>La página que buscas no existe.</p>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return <Router />;
}

export default App;
