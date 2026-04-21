import { BrowserRouter, Routes, Route } from "react-router-dom";
import Orders from "../pages/orders.jsx";
import Stats from "../pages/stats.jsx";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/orders" element={<Orders />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
