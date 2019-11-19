// spread arrays
const a1 = [1, 2, 3, 4];
export const spread = (a1 = []) => (a2 = []) => [...a1, ...a2];

export const spreadObj = (o1 = {}) => (o2 = {}) => ({ ...o1, ...o2 });
