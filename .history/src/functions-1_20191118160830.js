export function sum(a, b) {
  return a + b;
}

export const sumArrow1 = (a, b) => {
  return a + b;
};

export const sumArrow2 = (a, b) => a + b;

export const deliveryBody = {
  name: "Stephen",
  handleMessage: function(message, handler) {
    handler(message);
  },
  receive: function() {
    const that = this;
    this.handleMessage("Hiya, ", function(message) {
      console.log(`message ${that.name}`);
    });
  }
};
