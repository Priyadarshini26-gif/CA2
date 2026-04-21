import { useContext } from "react";
import { AppContext } from "../context/appContext.jsx";
import OrderItem from "../components/orderItem.jsx";

const Orders = () => {
  const { state } = useContext(AppContext);

  const validOrders = state.data
    .filter((order) => {
      return (
        order?.items?.length > 0 &&
        order?.quantity > 0 &&
        typeof order?.totalAmount === "number"
      );
    })
    .map((order) => order);

  return (
    <div>
      {validOrders.map((order) => (
        <orderItem key={order.id} order={order} />
      ))}
    </div>
  );
};

export default Orders;
