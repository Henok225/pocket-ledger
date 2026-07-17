export function formatDate(date: string) {
  return new Date(date)
    // .toISOString()
    // .split("T")[0];
    .toLocaleString(
  "en-US",
  {
    month: "short",
    year: "numeric"
  }
);
}
export function formatAmount(amount:number){
  return amount.toFixed(2);
}