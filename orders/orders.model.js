const orders = [
  {
    date: "2015-11-23",
    subtotal: 90.22,
    items: [
      {
        product: {
          id: "redshoe",
          description: "Old Red Shoe",
          price: 44.22,
        },
        quantity: 2,
      },
    ],
  },
];

function getAllOrders() {
  return orders;
}

module.exports = {
  getAllOrders,
};
