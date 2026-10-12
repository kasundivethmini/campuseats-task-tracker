// AFTER — clear names, no magic numbers, no secrets
const VIP_DISCOUNT = 0.1;

function calculateTotal(price, quantity, customerType) {
  if (price < 0 || quantity < 0) {
    throw new Error("price and quantity must be >= 0");
  }

  const subtotal = price * quantity;

  return customerType === "vip"
    ? subtotal * (1 - VIP_DISCOUNT)
    : subtotal;
}

// Read the API base URL from the environment
const API = import.meta.env.VITE_API_URL || 'http://localhost:5000'; // fallback for local dev if needed

// Use it in your fetch requests:
fetch(`${API}/api/menu`)
  .then(response => response.json())
  .then(data => console.log(data));