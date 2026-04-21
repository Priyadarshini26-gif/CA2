import { useContext } from "react";
import { AppContext } from "../context/AppContextObject.jsx";
import OrderItem from "../components/orderItem.jsx";

const Orders = () => {
  const { state } = useContext(AppContext);

  const ordersList = Array.isArray(state.data) ? state.data : [];

  const validOrders = ordersList.filter((order) => {
    return (
      order?.items?.length > 0 &&
      typeof order?.totalAmount === "number" &&
      order?.totalAmount > 0
    );
  });

  return (
    <div>
      <h1>Orders</h1>
      {ordersList.length === 0 ? (
        <p>Loading orders...</p>
      ) : validOrders.length === 0 ? (
        <p>No valid orders found</p>
      ) : (
        validOrders.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))
      )}
    </div>
  );
};

export default Orders;
