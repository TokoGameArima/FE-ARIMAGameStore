import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/routes";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <Router>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </Router>
  );
}

export default App;
