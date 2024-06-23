import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../components/layouts/DashboardLayout/DashboardLayout";
import MainLayout from "../components/layouts/MainLayout/MainLayout";
import HomePage from "../Pages/Home/HomePage";
import AboutPage from "../Pages/About/AboutPage";
import BranchesPage from "../Pages/Branches/BranchesPage";
import Product from "../Pages/admin/product/Product";
import Order from "../Pages/admin/order/Order";
import Transaction from "../Pages/admin/transaction/Transaction";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/branch",
        element: <BranchesPage />,
      },
      {
        path: "/login",
        element: <div>Login</div>,
      },
      {
        path: "/register",
        element: <div>Register</div>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/admin",
        element: <div>Admin</div>,
      },
      {
        path: "/dashboard/product",
        element: <Product></Product>,
      },
      {
        path: "/dashboard/order",
        element: <Order></Order>,
      },
      {
        path: "/dashboard/transaction",
        element: <Transaction></Transaction>,
      },
    ],
  },
]);
