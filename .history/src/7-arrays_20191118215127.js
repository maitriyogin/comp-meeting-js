const products = [
  { id: 1, price: 10, name: "milk" },
  { id: 2, price: 5, name: "eggs" },
  { id: 3, price: 4, name: "bacon" },
  { id: 4, price: 14, name: "whisky" },
  { id: 5, price: 1, name: "ham" },
  { id: 6, price: 8, name: "bread" }
];

export const totalSum = (arr = []) => arr.reduce((acc, v) => acc + v.price, 0);

export const filterUnderPrice = (price = 0) => (arr = []) =>
  arr.filter(v => v.price < price);
export const mapReport = (arr = []) =>
  arr.map(({ id, price, name }) => `${id}:${name}-$${price}`);
export default products;
