export const calculatePrice = (price, quantity) => {
    return (parseFloat(price) || 0) * (parseInt(quantity) || 0);
};

export const calculateTotalPrice = (cart) => {
    if (!Array.isArray(cart) || cart.length === 0) return 0;

    const total = cart.reduce((total, item) => {
        return total + calculatePrice(item.price, item.quantity);
    }, 0);

    return total;
};