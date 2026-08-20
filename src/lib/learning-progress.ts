import { z } from "zod";
import type { LearningPlanState } from "@/lib/learning-plan";

const dateKeyPattern = /^\d{4}-\d{2}-\d{2}$/;

export const learningCompletionSchema = z.object({
  id: z.string().min(1).max(200),
  sessionDate: z.string().regex(dateKeyPattern),
  completedAt: z.string().datetime({ offset: true }),
  lessonSequence: z.number().int().positive(),
  lessonId: z.string().min(1).max(100),
  lessonTitle: z.string().min(1).max(300),
  durationMinutes: z.number().int().nonnegative(),
});

export const learningProgressSchema = z.object({
  version: z.literal(1),
  completions: z.array(learningCompletionSchema).max(20_000),
});

export type LearningCompletion = z.infer<typeof learningCompletionSchema>;
export type LearningProgress = z.infer<typeof learningProgressSchema>;

export const emptyLearningProgress: LearningProgress = {
  version: 1,
  completions: [],
};

function sortCompletions(completions: ReadonlyArray<LearningCompletion>) {
  return [...completions].sort((left, right) => {
    return (
      left.sessionDate.localeCompare(right.sessionDate) ||
      left.completedAt.localeCompare(right.completedAt) ||
      left.id.localeCompare(right.id)
    );
  });
}

export function parseLearningProgress(value: unknown): LearningProgress {
  const parsed = learningProgressSchema.parse(value);

  return {
    version: 1,
    completions: sortCompletions(parsed.completions),
  };
}

export function parseLearningProgressJson(json: string) {
  return parseLearningProgress(JSON.parse(json) as unknown);
}

export function mergeLearningProgress(
  current: LearningProgress,
  incoming: LearningProgress,
) {
  const completionsById = new Map(
    current.completions.map((completion) => [completion.id, completion]),
  );
  let added = 0;

  for (const completion of incoming.completions) {
    if (!completionsById.has(completion.id)) {
      completionsById.set(completion.id, completion);
      added += 1;
    }
  }

  return {
    progress: {
      version: 1 as const,
      completions: sortCompletions([...completionsById.values()]),
    },
    added,
  };
}

export function completeCurrentLesson(
  progress: LearningProgress,
  state: LearningPlanState,
  completedAt = new Date(),
) {
  const id = `daily:${state.todayKey}:${state.current.sequence}`;

  if (progress.completions.some((completion) => completion.id === id)) {
    return progress;
  }

  return mergeLearningProgress(progress, {
    version: 1,
    completions: [
      {
        id,
        sessionDate: state.todayKey,
        completedAt: completedAt.toISOString(),
        lessonSequence: state.current.sequence,
        lessonId: state.current.lesson.id,
        lessonTitle: state.current.lesson.titleEn,
        durationMinutes: state.current.lesson.minutes,
      },
    ],
  }).progress;
}
