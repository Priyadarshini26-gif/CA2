const OrderItem = ({ order }) => {
  const customerName = order.customerName || "Unknown";

  return (
    <div data-testid="order-item">
      <p>{customerName}</p>
      <p>{order.totalAmount}</p>
      {order.rating && <p>{order.rating}</p>}
    </div>
  );
};

export default OrderItem;
