const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 42.12,
    reviews: [],
  },
  {
    id: "bluejean",
    description: "Blue Jeans",
    price: 55.55,
    reviews: [],
  },
];

function getAllProducts() {
  return products;
}

function getProductsByPrice(min, max) {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  });
}

function getProductByID(id) {
  return products.find((product) => {
    return product.id === id;
  });
}

function addNewProduct(id, description, price) {
  const newProduct = {
    id,
    price,
    description,
    reviews: [],
  };

  products.push(newProduct);
  return newProduct;
}

function addReviewToProduct(id, rating, comment) {
  const reviewedProduct = products.find((product) => {
    return product.id === id;
  });

  if (reviewedProduct) {
    const review = { rating: rating, comment: comment };
    reviewedProduct.reviews.push(review);
    return reviewedProduct;
  }
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductByID,
  addNewProduct,
  addReviewToProduct,
};
