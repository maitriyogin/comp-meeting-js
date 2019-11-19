const products = [
  { id: 1, price: 10, name: "milk" },
  { id: 2, price: 5, name: "eggs" },
  { id: 3, price: 4, name: "bacon" },
  { id: 4, price: 14, name: "whisky" },
  { id: 5, price: 1, name: "ham" },
  { id: 6, price: 8, name: "bread" }
];
const productDetails = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4, name: "whisky", description: "is best lext alone..." },
  { id: 5, name: "ham", description: "is great smoked!" },
  { id: 6 }
];

export const totalSum = (arr = []) => arr.reduce((acc, v) => acc + v.price, 0);

export const filterUnderPrice = (price = 0) => (arr = []) =>
  arr.filter(v => v.price < price);

export const filterOnName = (name = "") => (arr = []) =>
  arr.filter(v => v.name === name);

export const mapReport = (arr = []) =>
  arr.map(({ id, price, name }) => `${id},${name},$${price}`);

export const sortOnPrice = (arr = []) => arr.sort((a, b) => a.price - b.price);
export const getProductDetails = (arr = productDetails) => id =>
  arr.filter(p => p.id === id)[0];
export default products;
