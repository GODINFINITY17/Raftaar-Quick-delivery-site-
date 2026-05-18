/** Format amount in Indian Rupees (INR) */
export const formatINR = (amount) => {
  const value = Number(amount);
  if (Number.isNaN(value)) return "₹0";

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: value % 1 === 0 ? 0 : 2,
  }).format(value);
};

export const formatINRCompact = (amount) => {
  const value = Number(amount);
  if (Number.isNaN(value)) return "₹0";
  return `₹${value.toLocaleString("en-IN")}`;
};
