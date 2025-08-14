

// Get saved customers
const customers = JSON.parse(localStorage.getItem("customers")) || [];

// Add the action buttons dynamically to each customer
export const data = customers.map((customer) => ({
  ...customer,
}));
