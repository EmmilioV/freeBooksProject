import PDFReader from "./Components/PDFReader";
import Rutas from "./pages/Rutas";
import { StoreProvider } from "./store";

function App() {
  
  return (
    <StoreProvider>
      <PDFReader />
      <Rutas />
    </StoreProvider>
  );
}

export default App;
