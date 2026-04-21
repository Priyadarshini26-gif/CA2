import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Orders from "../pages/orders.jsx";
import OrderDetail from "../pages/OrderDetail.jsx";
import Stats from "../pages/stats.jsx";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/orders" replace />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:id" element={<OrderDetail />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
