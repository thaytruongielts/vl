export interface Question {
  id: number;
  original: string;
  start: string;
  acceptableAnswers: string[];
  hint: string;
}

export type GameStatus = 'idle' | 'correct' | 'wrong';