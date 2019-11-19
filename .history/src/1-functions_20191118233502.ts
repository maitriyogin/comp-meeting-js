export function sum(a: number, b: number) {
  return a + b;
}

export const sumArrow1 = (a: number, b: number) => {
  return a + b;
};

export const sumArrow2 = (a: number, b: number) => a + b;

export const deliveryBody = {
  name: "Stephen",
  handleMessage: function(
    message: string,
    handler: (message: string) => string
  ) {
    return handler(message);
  },
  receive: function() {
    const that = this;
    return this.handleMessage("Hiya", function(message: string) {
      return `${message} ${that.name}`;
    });
  }
};
interface IHandleMessage {
  message: string;
  handler: (message: string) => string;
}
export const deliveryBody2 = {
  name: "Stephen",
  handleMessage: function({ message, handler }: IHandleMessage) {
    return handler(message);
  },
  receive: function() {
    return this.handleMessage("Hiya", (message: string) => {
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

// arrow functions this refers to the owning object ...
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
