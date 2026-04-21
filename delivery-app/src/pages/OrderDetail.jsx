import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContextObject.jsx";

const OrderDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useContext(AppContext);

  // Validate ID and find order
  const order = state.data.find((o) => o.orderId === parseInt(id));

  if (!order) {
    return (
      <div>
        <h1>Order not found</h1>
        <button onClick={() => navigate("/orders")}>Back to Orders</button>
      </div>
    );
  }

  // Calculate subtotals for each item
  const itemsWithSubtotals = (order.items || []).map((item) => ({
    ...item,
    subtotal: (item.price || 0) * (item.quantity || 0),
  }));

  // Calculate total subtotal
  const totalSubtotal = itemsWithSubtotals.reduce((sum, item) => sum + item.subtotal, 0);

  return (
    <div>
      <h1>Order Details</h1>
      <button onClick={() => navigate("/orders")}>Back to Orders</button>

      <div>
        <h2>Order Information</h2>
        <p>
          <strong>Order ID:</strong> {order.orderId || "N/A"}
        </p>
        <p>
          <strong>Customer:</strong> {order.customerName || "Unknown"}
        </p>
        <p>
          <strong>Restaurant:</strong> {order.restaurant || "N/A"}
        </p>
        <p>
          <strong>Status:</strong> {order.status || "N/A"}
        </p>
        <p>
          <strong>Delivery Time:</strong> {order.deliveryTime || "N/A"} minutes
        </p>
        {order.rating && (
          <p>
            <strong>Rating:</strong> {order.rating}
          </p>
        )}
      </div>

      <div>
        <h2>Items</h2>
        {itemsWithSubtotals.length === 0 ? (
          <p>No items in this order</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {itemsWithSubtotals.map((item, index) => (
                <tr key={index}>
                  <td>{item.name || "N/A"}</td>
                  <td>₹{item.price || 0}</td>
                  <td>{item.quantity || 0}</td>
                  <td>₹{item.subtotal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div>
        <h2>Summary</h2>
        <p>
          <strong>Total Subtotal:</strong> ₹{totalSubtotal}
        </p>
        <p>
          <strong>Total Amount:</strong> ₹{order.totalAmount || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default OrderDetail;
