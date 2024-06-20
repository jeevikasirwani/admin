import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./pages/dashboard";
import { Suspense, lazy } from "react";
import Loader from "./components/loader";
const Customers = lazy(() => import("./pages/customers"));
const Transaction = lazy(() => import("./pages/transaction"));
const Products = lazy(() => import("./pages/products"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/transactions" element={<Transaction />} />
          <Route path="/admin/customers" element={<Customers />} />
        </Routes>

        {/* charts */}
        {/* apps */}
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
