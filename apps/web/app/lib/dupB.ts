export function formatUserLabelCopy(firstName: string, lastName: string, age: number) {
  const safeFirst = (firstName ?? "").trim();
  const safeLast = (lastName ?? "").trim();
  const full = `${safeFirst} ${safeLast}`.trim();

  if (!full) return "Unknown user";
  if (age < 0) return `${full} (invalid age)`;
  if (age === 0) return `${full} (newborn)`;
  if (age < 18) return `${full} (minor)`;

  return `${full} (${age})`;
}
