export const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("sk-SK", {
        style: "currency",
        currency: "EUR",
    }).format(value);
};