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
    return handler(message);
  },
  receive: function() {
    const that = this;
    return this.handleMessage("Hiya", function(message) {
      return `${message} ${that.name}`;
    });
  }
};
export const deliveryBody2 = {
  name: "Stephen",
  handleMessage: function(message, handler) {
    return handler(message);
  },
  receive: function() {
    return this.handleMessage("Hiya", message => {
      return `${message} ${this.name}`;
    });
  }
};

export const deliveryBody3 = {
  name: "Stephen",
  handleMessage: (message, handler) => handler(message),
  receive: function() {
    return this.handleMessage("Hiya", message => `${message} ${this.name}`);
  }
};

export const deliveryBody4 = (name = "Per Anton") => ({
  handleMessage: (message, handler) => handler(message),
  receive: function() {
    return this.handleMessage("Hiya", message => `${message} ${name}`);
  }
});

export const deliveryBody5 = (name = "Per Anton") => {
  const handleMessage = (message, handler) => handler(message);
  const receive = () => handleMessage("Hiya", message => `${message} ${name}`);
  return { receive };
};
