export const var1 = () => {
  var message = "hiya";
  {
    var message = "bye";
  }
  return message;
};
