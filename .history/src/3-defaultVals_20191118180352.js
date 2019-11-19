export function greet(firstName, lastName) {
  return `${firstName}-${lastName}`;
}
export function greet2(firstName = "stephen", lastName = "white") {
  return `${firstName}-${lastName}`;
}
