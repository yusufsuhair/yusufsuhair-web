// August 2019, as on the experience timeline.
const CAREER_START = new Date(2019, 7, 1);

export function getYearsOfExperience(): number {
  const now = new Date();
  const years = now.getFullYear() - CAREER_START.getFullYear();
  return now.getMonth() < CAREER_START.getMonth() ? years - 1 : years;
}
