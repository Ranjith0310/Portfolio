export function getYearsOfExperience(): string {
  const start = new Date(2021, 1);
  const now = new Date();
  const months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  return (months / 12).toFixed(1);
}
