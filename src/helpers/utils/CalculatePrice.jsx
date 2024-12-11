export const calculatePrice = (price, quantity) => {
    // Ensure that price and quantity are numbers and handle edge cases
    return (parseFloat(price) || 0) * (parseInt(quantity) || 0);
};

export const calculateTotalPrice = (cart) => {
    if (!Array.isArray(cart) || cart.length === 0) return 0;  // Return 0 if cart is empty

    const total = cart.reduce((total, item) => {
        // Calculate total for each item, considering price and quantity
        return total + calculatePrice(item.price, item.quantity);
    }, 0);

    return total;  // Return the total price
};