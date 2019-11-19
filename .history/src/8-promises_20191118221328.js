import products, { filterOnName } from "./7-arrays";

const fetchProduct = name =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      const res = filterOnName(name);
      if (res.length === 0) {
        reject(`No Product found with name ${name}!`);
      }
    }, 500)
  );
