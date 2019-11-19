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

export const scopeCreep2 = () => {
  var fs = [];
  for (var i = 0; i < 10; i++) {
    fs.push(function() {
      return i;
    });
  }
  return fs;
};
