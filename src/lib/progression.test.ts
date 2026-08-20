import { describe, expect, it } from "vitest";
import { resolveCurrentLessonSequence } from "./progression";

describe("daily lesson progression", () => {
  it("starts at lesson one on the course start date", () => {
    expect(resolveCurrentLessonSequence("2026-08-20")).toBe(1);
  });

  it("selects the same lesson from the date on every device", () => {
    expect(resolveCurrentLessonSequence("2026-08-23")).toBe(4);
  });

  it("does not return a sequence below lesson one", () => {
    expect(resolveCurrentLessonSequence("2026-08-01")).toBe(1);
  });
});
