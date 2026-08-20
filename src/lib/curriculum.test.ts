import { describe, expect, it } from "vitest";
import { courseLength, getLessonForSequence } from "./curriculum";

describe("daily curriculum progression", () => {
  it("starts with the introduction lesson", () => {
    const result = getLessonForSequence(1);

    expect(result.dayInCycle).toBe(1);
    expect(result.cycle).toBe(1);
    expect(result.lesson.id).toBe("be-and-introductions");
  });

  it("moves to a spaced-review cycle after the foundation course", () => {
    const result = getLessonForSequence(courseLength + 1);

    expect(result.dayInCycle).toBe(1);
    expect(result.cycle).toBe(2);
    expect(result.lesson.id).toBe("be-and-introductions");
  });
});
