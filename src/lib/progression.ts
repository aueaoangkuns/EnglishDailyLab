export const courseStartDate = "2026-08-20";

const millisecondsPerDay = 24 * 60 * 60 * 1000;

function dateKeyToUtcMilliseconds(dateKey: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateKey);

  if (!match) {
    throw new Error(`Invalid date key: ${dateKey}`);
  }

  const [, year, month, day] = match;
  return Date.UTC(Number(year), Number(month) - 1, Number(day));
}

export function resolveCurrentLessonSequence(
  todayKey: string,
  startDateKey = courseStartDate,
) {
  const elapsedDays = Math.floor(
    (dateKeyToUtcMilliseconds(todayKey) - dateKeyToUtcMilliseconds(startDateKey)) /
      millisecondsPerDay,
  );

  return Math.max(1, elapsedDays + 1);
}
