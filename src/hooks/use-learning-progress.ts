"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { getLearningPlanState } from "@/lib/learning-plan";
import {
  completeCurrentLesson,
  emptyLearningProgress,
  mergeLearningProgress,
  parseLearningProgressJson,
  type LearningProgress,
} from "@/lib/learning-progress";

const storageKey = "english-daily-lab.progress.v1";

function readStoredProgress() {
  const stored = window.localStorage.getItem(storageKey);

  if (!stored) {
    return emptyLearningProgress;
  }

  try {
    return parseLearningProgressJson(stored);
  } catch {
    return emptyLearningProgress;
  }
}

function writeStoredProgress(progress: LearningProgress) {
  window.localStorage.setItem(storageKey, JSON.stringify(progress));
}

export function useLearningProgress() {
  const [progress, setProgress] = useState<LearningProgress>(emptyLearningProgress);
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const initialize = window.setTimeout(() => {
      setProgress(readStoredProgress());
      setNow(new Date());
    }, 0);

    const clock = window.setInterval(() => setNow(new Date()), 60_000);
    const handleStorage = (event: StorageEvent) => {
      if (event.key === storageKey) {
        setProgress(readStoredProgress());
      }
    };

    window.addEventListener("storage", handleStorage);

    return () => {
      window.clearTimeout(initialize);
      window.clearInterval(clock);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const state = useMemo(
    () => (now ? getLearningPlanState(progress, now) : null),
    [now, progress],
  );

  const completeToday = useCallback(() => {
    if (!state) {
      return;
    }

    setProgress((current) => {
      const next = completeCurrentLesson(current, state);
      writeStoredProgress(next);
      return next;
    });
  }, [state]);

  const exportProgress = useCallback(() => {
    const blob = new Blob([JSON.stringify(progress, null, 2)], {
      type: "application/json;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    const dateKey = state?.todayKey ?? "backup";

    link.href = url;
    link.download = `english-daily-lab-progress-${dateKey}.json`;
    link.click();
    URL.revokeObjectURL(url);
  }, [progress, state?.todayKey]);

  const importProgress = useCallback(
    async (file: File) => {
      const incoming = parseLearningProgressJson(await file.text());
      const merged = mergeLearningProgress(progress, incoming);

      writeStoredProgress(merged.progress);
      setProgress(merged.progress);

      return merged;
    },
    [progress],
  );

  return {
    state,
    progress,
    completeToday,
    exportProgress,
    importProgress,
  };
}
