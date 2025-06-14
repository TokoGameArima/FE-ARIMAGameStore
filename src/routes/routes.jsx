import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Home/Login";
import Register from "../pages/Home/Register";
import NotFound from "../pages/NotFound";
import GamesPage from "../pages/Dashboard/GamesPage";
import CartPage from "../pages/Dashboard/CartPage";
import OrdersPage from "../pages/Dashboard/OrdersPage.jsx";
import ReviewPage from "../pages/Dashboard/ReviewPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import OrdersAdmin from "../pages/Admin/OrdersAdmin.jsx";
import OrderDetail from "../pages/Admin/OrderDetail";
import ProductsAdmin from "../pages/Admin/ProductsAdmin";
import CategoriesAdmin from "../pages/Admin/CategoriesAdmin";
import DevelopersAdmin from "../pages/Admin/DevelopersAdmin";
import Contact from "../pages/Home/Contact";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      <Route
        path="/games"
        element={
          <ProtectedRoute allowedRoles={["user"]}>
            <GamesPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <ProtectedRoute allowedRoles={["user"]}>
            <CartPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders"
        element={
          <ProtectedRoute allowedRoles={["user"]}>
            <OrdersPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/review/:id"
        element={
          <ProtectedRoute allowedRoles={["user"]}>
            <ReviewPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="orders" element={<OrdersAdmin />} />
        <Route path="orders/:id" element={<OrderDetail />} />
        <Route path="products" element={<ProductsAdmin />} />
        <Route path="categories" element={<CategoriesAdmin />} />
        <Route path="developers" element={<DevelopersAdmin />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
