import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Home/Login";
import Register from "../pages/Home/Register";
import FAQ from "../pages/Home/FAQ";
import Contact from "../pages/Home/Contact";
import NotFound from "../pages/NotFound";

import GamesPage from "../pages/Dashboard/GamesPage";
import CartPage from "../pages/Dashboard/CartPage";
import OrdersPage from "../pages/Dashboard/OrdersPage";
import ReviewPage from "../pages/Dashboard/ReviewPage";
import ReviewListPage from "../pages/Dashboard/ReviewListPage";

import DashboardAdmin from "../pages/Admin/DashboardAdmin";
import OrdersAdmin from "../pages/Admin/OrdersAdmin";
import OrderDetail from "../pages/Admin/OrderDetail";
import ProductsAdmin from "../pages/Admin/ProductsAdmin";
import CategoriesAdmin from "../pages/Admin/CategoriesAdmin";
import DevelopersAdmin from "../pages/Admin/DevelopersAdmin";

import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
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
        <Route path="/faq" element={<FAQ />} />
      </Route>

      <Route
        element={
          <ProtectedRoute allowedRoles={["user"]}>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/games" element={<GamesPage />} />
        <Route path="/games/:id/reviews" element={<ReviewListPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/review/:id" element={<ReviewPage />} />
      </Route>

      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardAdmin />} />
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
