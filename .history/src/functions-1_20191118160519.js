export function sum(a, b) {
  return a + b;
}

export const sumArrow1 = (a, b) => {
  return a + b;
};

export const sumArrow2 = (a, b) => a + b;

const deliveryBody = {
  name: "Stephen",
  handleMessage: function(message, handler) {
    handler(message);
  }
};
