import products, { filterOnName } from "./7-arrays";

export const fetchProduct = name =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      const res = filterOnName(name);
      if (res.length === 0) {
        reject(`No Product found with name ${name}!`);
      } else {
        resolve(res);
      }
    }, 500)
  );
