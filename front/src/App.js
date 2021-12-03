import Rutas from "./pages/Rutas";
import { StoreProvider } from "./store";

function App() {
  
  return (
    <StoreProvider>
    <Rutas />
    </StoreProvider>
  );
}

export default App;
