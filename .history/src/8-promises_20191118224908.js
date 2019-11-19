import products, { filterOnName, getProductDetails } from "./7-arrays";

export const fetchProduct = name =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      const res = filterOnName(name)(products);
      if (res.length === 0) {
        reject(`No product found with name ${name}!`);
      } else {
        resolve(res);
      }
    }, 500)
  );

export const fetchProductDetails = id =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      const res = getProductDetails(id)();
      if (typeof res === "string") {
        reject(res);
      } else {
        resolve(res);
      }
    }, 500)
  );
