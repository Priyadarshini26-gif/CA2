import { useContext, useEffect } from "react";
import { AppContext } from "../context/appContext.jsx";

const Stats = () => {
  const { state } = useContext(AppContext);

  const totalOrders = state.data.length;

  const deliveredOrders = state.data.filter(
    (o) => o.status === "delivered"
  ).length;

  const cancelledOrders = state.data.filter(
    (o) => o.status === "cancelled"
  ).length;

  useEffect(() => {
    window.appState = {
      totalOrders,
      deliveredOrders,
      cancelledOrders,
    };
  }, [totalOrders, deliveredOrders, cancelledOrders]);

  return (
    <div>
      <p data-testid="total-orders">{totalOrders}</p>
      <p data-testid="delivered-orders">{deliveredOrders}</p>
      <p data-testid="cancelled-orders">{cancelledOrders}</p>
    </div>
  );
};

export default Stats;
