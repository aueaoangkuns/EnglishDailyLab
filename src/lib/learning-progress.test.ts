import { describe, expect, it } from "vitest";
import { getLearningPlanState } from "./learning-plan";
import {
  completeCurrentLesson,
  emptyLearningProgress,
  mergeLearningProgress,
  parseLearningProgressJson,
} from "./learning-progress";

describe("browser learning progress", () => {
  it("records a daily completion only once", () => {
    const now = new Date("2026-08-20T02:00:00.000Z");
    const state = getLearningPlanState(emptyLearningProgress, now);
    const first = completeCurrentLesson(emptyLearningProgress, state, now);
    const second = completeCurrentLesson(first, state, now);

    expect(second.completions).toHaveLength(1);
    expect(second.completions[0].lessonTitle).toBe("Introduce yourself with be");
  });

  it("merges imported history without deleting or overwriting existing records", () => {
    const current = parseLearningProgressJson(JSON.stringify({
      version: 1,
      completions: [
        {
          id: "daily:2026-08-20:1",
          sessionDate: "2026-08-20",
          completedAt: "2026-08-20T02:00:00.000Z",
          lessonSequence: 1,
          lessonId: "be-and-introductions",
          lessonTitle: "Verb to be and self-introductions",
          durationMinutes: 30,
        },
      ],
    }));
    const incoming = parseLearningProgressJson(JSON.stringify({
      version: 1,
      completions: [
        current.completions[0],
        {
          id: "daily:2026-08-21:2",
          sessionDate: "2026-08-21",
          completedAt: "2026-08-21T02:00:00.000Z",
          lessonSequence: 2,
          lessonId: "daily-routines",
          lessonTitle: "Daily routines with the present simple",
          durationMinutes: 30,
        },
      ],
    }));

    const result = mergeLearningProgress(current, incoming);

    expect(result.added).toBe(1);
    expect(result.progress.completions).toHaveLength(2);
    expect(result.progress.completions[0]).toEqual(current.completions[0]);
  });
});
