import { BrowserRouter as Router } from "react-router-dom";
import React, { useEffect } from "react";
import AppRoutes from "./routes/routes";
import { CartProvider } from "./context/CartContext";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  {/* Initialize AOS Package */}
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <Router>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </Router>
  );
}

export default App;
