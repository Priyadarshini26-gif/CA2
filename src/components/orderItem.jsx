import { Link } from "react-router-dom";

const OrderItem = ({ order }) => {
  const customerName = order.customerName || "Unknown";

  return (
    <Link to={`/orders/${order.orderId}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div data-testid="order-item" style={{ padding: "10px", border: "1px solid #ccc", marginBottom: "10px", cursor: "pointer" }}>
        <p>Order ID: {order.orderId}</p>
        <p>Customer: {customerName}</p>
        <p>Restaurant: {order.restaurant}</p>
      </div>
    </Link>
  );
};

export default OrderItem;
