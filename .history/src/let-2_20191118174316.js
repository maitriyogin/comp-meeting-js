// no block scoping
export const var1 = () => {
  var message = "hiya";
  {
    var message = "bye";
  }
  return message;
};

// with block scoping
export const let1 = () => {
  let message = "hiya";
  {
    let message = "bye";
  }
  return message;
};
