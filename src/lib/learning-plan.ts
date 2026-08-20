import { courseLength, getLessonForSequence } from "@/lib/curriculum";
import type { LearningProgress } from "@/lib/learning-progress";
import { resolveCurrentLessonSequence } from "@/lib/progression";

const bangkokTimeZone = "Asia/Bangkok";

export function getBangkokDateKey(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: bangkokTimeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));

  return `${values.year}-${values.month}-${values.day}`;
}

export function shiftDateKey(dateKey: string, days: number) {
  const [year, month, day] = dateKey.split("-").map(Number);
  const shifted = new Date(Date.UTC(year, month - 1, day + days));
  return shifted.toISOString().slice(0, 10);
}

function formatDayLabel(dateKey: string) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Intl.DateTimeFormat("en", { weekday: "short", timeZone: "UTC" }).format(
    new Date(Date.UTC(year, month - 1, day)),
  );
}

function calculateStreak(completedDates: ReadonlySet<string>, todayKey: string) {
  let cursor = completedDates.has(todayKey) ? todayKey : shiftDateKey(todayKey, -1);
  let streak = 0;

  while (completedDates.has(cursor)) {
    streak += 1;
    cursor = shiftDateKey(cursor, -1);
  }

  return streak;
}

export function getLearningPlanState(progress: LearningProgress, now = new Date()) {
  const todayKey = getBangkokDateKey(now);
  const firstWeeklyDate = shiftDateKey(todayKey, -6);
  const currentSequence = resolveCurrentLessonSequence(todayKey);
  const current = getLessonForSequence(currentSequence);
  const previous = currentSequence > 1 ? getLessonForSequence(currentSequence - 1) : null;
  const next = getLessonForSequence(currentSequence + 1);
  const completedToday = progress.completions.find(
    (completion) =>
      completion.sessionDate === todayKey && completion.lessonSequence === currentSequence,
  );
  const completedDates = new Set(
    progress.completions.map((completion) => completion.sessionDate),
  );
  const todayStudyMinutes = progress.completions
    .filter((completion) => completion.sessionDate === todayKey)
    .reduce((total, completion) => total + completion.durationMinutes, 0);
  const weeklyData = Array.from({ length: 7 }, (_, index) => {
    const date = shiftDateKey(firstWeeklyDate, index);
    const minutes = progress.completions
      .filter((completion) => completion.sessionDate === date)
      .reduce((total, completion) => total + completion.durationMinutes, 0);

    return {
      day: formatDayLabel(date),
      minutes,
    };
  });

  return {
    todayKey,
    todayLabel: new Intl.DateTimeFormat("th-TH", {
      timeZone: bangkokTimeZone,
      dateStyle: "full",
    }).format(now),
    completedToday: Boolean(completedToday),
    completedCount: progress.completions.length,
    currentStreak: calculateStreak(completedDates, todayKey),
    todayStudyMinutes,
    courseLength,
    current,
    previous,
    next,
    weeklyData,
  };
}

export type LearningPlanState = ReturnType<typeof getLearningPlanState>;
