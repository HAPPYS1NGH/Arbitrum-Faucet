export function spaceAfterCapital(name) {
  return name
    .split(/(?=[A-Z])/)
    .map((word, index) => <span key={index}>{`${word.toUpperCase()} `} </span>)
}
