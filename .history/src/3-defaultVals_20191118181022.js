export function greet(firstName, lastName) {
  return `${firstName}-${lastName}`;
}
export function greet2(firstName = "stephen", lastName = "white") {
  return `${firstName}-${lastName}`;
}
export function greet3({ firstName = "stephen", lastName = "white" }) {
  return `${firstName}-${lastName}`;
}
const cb = ({ firstName, lastName }) => `${firstName}-${lastName}`;
export function greet4AndCall({
  firstName = "stephen",
  lastName = "white",
  cb
}) {
  return `${firstName}-${lastName}`;
}
