export function spaceAfterCapital(name) {
  return name
    .split(/(?=[A-Z])/)
    .map((word, index) => <span key={index}>{`${word.toUpperCase()} `} </span>);
}

export function reduceLink(faucetLink) {
  let link = faucetLink.replace("https://", "");
  const length = link.length;
  if (length <= 40) return link.substring(0, 40);
  else
    return (
      link.substring(0, 27) +
      "..." +
      link.substring(link.length - 10, link.length)
    );
}

export const getBackgroundColor = (lastActive) => {
  if (!lastActive) return "bg-electric-blue"; // Default color when loading

  const timeUnit = lastActive.split(" ")[1];
  switch (timeUnit) {
    case "year" || "years":
      return "bg-red";
    case "month" || "months":
      return "bg-orange";
    default:
      return "bg-electric-blue"; // Default color for unknown time units
  }
};
