import {
  foundationChapterExams,
  type ChapterExamQuestion,
} from "./foundationChapterExams";
import { intermediateChapterExams } from "./intermediateChapterExams";

export type { ChapterExamQuestion };

export function getChapterExamQuestions(
  moduleId: string,
  chapterIndex: number,
): readonly ChapterExamQuestion[] {
  const key = `${moduleId}:${chapterIndex}`;
  return (
    intermediateChapterExams[key] ??
    foundationChapterExams[key] ??
    []
  );
}
