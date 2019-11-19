export function sum(a: number, b: number) {
  return a + b;
}

export const sumArrow1 = (a: number, b: number) => {
  return a + b;
};

export const sumArrow2 = (a: number, b: number) => a + b;

export const deliveryBody = {
  name: "Stephen",
  handleMessage(message: string, handler: (message: string) => string) {
    return handler(message);
  },
  receive() {
    const that = this;
    return this.handleMessage("Hiya", function handler(message: string) {
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
  handleMessage({ message, handler }: IHandleMessage) {
    return handler(message);
  },
  receive() {
    return this.handleMessage({
      message: "Hiya",
      handler: (message: string) => {
        return `${message} ${this.name}`;
      }
    });
  }
};

export const deliveryBody3 = {
  name: "Stephen",
  handleMessage: ({ message, handler }: IHandleMessage) => handler(message),
  receive() {
    return this.handleMessage({
      message: "Hiya",
      handler: (message: string) => `${message} ${this.name}`
    });
  }
};

// arrow functions this refers to the owning object ...
export const deliveryBody4 = (name = "Per Anton") => ({
  handleMessage: ({ message, handler }: IHandleMessage) => handler(message),
  receive() {
    return this.handleMessage({
      message: "Hiya",
      handler: (message: string) => `${message} ${name}`
    });
  }
});

export const deliveryBody5 = (name = "Per Anton") => {
  const handleMessage = ({ message, handler }: IHandleMessage) =>
    handler(message);
  const receive = () =>
    handleMessage({
      message: "Hiya",
      handler: message => `${message} ${name}`
    });
  return { receive };
};
