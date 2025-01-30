import "./App.css";
import ProductsList from "./pages/ProductsList";
import { ThemeProvider } from "styled-components";
import theme from "./assets/styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ProductsList />
      </ThemeProvider>
    </>
  );
}

export default App;
