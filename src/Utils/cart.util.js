export function calculateTotal(items) {
  return items.reduce((acc, current) => {
    return acc + current.price;
  }, 0);
}
