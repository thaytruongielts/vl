import { Question } from './types';

export const QUESTION_DATA: Question[] = [
  {
    id: 1,
    original: "I started learning English 5 years ago.",
    start: "I have",
    acceptableAnswers: [
      "I have been learning English for 5 years.",
      "I have learnt English for 5 years.",
      "I have learned English for 5 years."
    ],
    hint: "S + started/began + V-ing + time ago => S + have/has + P2 + for + time."
  },
  {
    id: 2,
    original: "Run fast or you will miss the bus.",
    start: "If",
    acceptableAnswers: [
      "If you don't run fast, you will miss the bus.",
      "If you do not run fast, you will miss the bus."
    ],
    hint: "Câu mệnh lệnh + or + S + will... => If you don't + V(nguyên thể), S + will..."
  },
  {
    id: 3,
    original: "It's a pity I can't go to the party.",
    start: "I wish",
    acceptableAnswers: [
      "I wish I could go to the party."
    ],
    hint: "It's a pity + S + can't... => I wish + S + could + V."
  },
  {
    id: 4,
    original: "They built this house in 1990.",
    start: "This house",
    acceptableAnswers: [
      "This house was built in 1990."
    ],
    hint: "Câu bị động quá khứ đơn: S + was/were + P2 + (by O) + time."
  },
  {
    id: 5,
    original: "\"I am reading a book now,\" said Tom.",
    start: "Tom said",
    acceptableAnswers: [
      "Tom said he was reading a book then.",
      "Tom said that he was reading a book then."
    ],
    hint: "Tường thuật gián tiếp: Lùi thì (HTTD -> QKTD), đổi ngôi, đổi trạng từ (now -> then)."
  },
  {
    id: 6,
    original: "He is too short to play basketball.",
    start: "He isn't",
    acceptableAnswers: [
      "He isn't tall enough to play basketball."
    ],
    hint: "S + be + too + adj + to V => S + be + not + adj (đối nghĩa) + enough + to V."
  },
  {
    id: 7,
    original: "Although the rain was heavy, they went to school.",
    start: "Despite",
    acceptableAnswers: [
      "Despite the heavy rain, they went to school.",
      "Despite the heavy rain they went to school."
    ],
    hint: "Although + clause => Despite + Noun Phrase / V-ing."
  },
  {
    id: 8,
    original: "She doesn't have a car, so she can't drive to work.",
    start: "If",
    acceptableAnswers: [
      "If she had a car, she could drive to work."
    ],
    hint: "Câu điều kiện loại 2 (trái với hiện tại): If + S + V(qk/were), S + would/could + V."
  },
  {
    id: 9,
    original: "Do you like playing soccer?",
    start: "You",
    acceptableAnswers: [
      "You like playing soccer, don't you?",
      "You like playing soccer, don't you"
    ],
    hint: "Câu hỏi đuôi (Tag question): Vế đầu khẳng định -> đuôi phủ định."
  },
  {
    id: 10,
    original: "Spending the weekend in the countryside is very interesting.",
    start: "It is",
    acceptableAnswers: [
      "It is very interesting to spend the weekend in the countryside."
    ],
    hint: "V-ing + is + adj => It is + adj + to V."
  },
  {
    id: 11,
    original: "The man is my father. You met him yesterday.",
    start: "The man whom",
    acceptableAnswers: [
      "The man whom you met yesterday is my father."
    ],
    hint: "Mệnh đề quan hệ: Whom thay thế cho tân ngữ chỉ người."
  },
  {
    id: 12,
    original: "Why don't we go to the cinema?",
    start: "He suggested",
    acceptableAnswers: [
      "He suggested going to the cinema.",
      "He suggested that we should go to the cinema."
    ],
    hint: "Suggest + V-ing HOẶC Suggest + that + S + (should) + V."
  },
  {
    id: 13,
    original: "No one in my class is as intelligent as Lan.",
    start: "Lan is",
    acceptableAnswers: [
      "Lan is the most intelligent student in my class.",
      "Lan is the most intelligent person in my class.",
      "Lan is the most intelligent in my class."
    ],
    hint: "So sánh hơn nhất: No one + be + as + adj + as + S => S + be + the + most adj / adj-est."
  },
  {
    id: 14,
    original: "I haven't seen her for two years.",
    start: "The last time",
    acceptableAnswers: [
      "The last time I saw her was two years ago."
    ],
    hint: "I haven't + P2 + for + time => The last time I + V(qk) + was + time + ago."
  },
  {
    id: 15,
    original: "She is not old enough to drive a car.",
    start: "She is too",
    acceptableAnswers: [
      "She is too young to drive a car."
    ],
    hint: "Not old enough (không đủ lớn) => Too young (quá trẻ)."
  },
  {
    id: 16,
    original: "Does your brother use the computer every day?",
    start: "Is the",
    acceptableAnswers: [
      "Is the computer used by your brother every day?",
      "Is the computer used by your brother everyday?"
    ],
    hint: "Bị động câu hỏi Yes/No: Do/Does + S + V + O => Am/Is/Are + S(mới) + P2 + by O?"
  },
  {
    id: 17,
    original: "He drives carefully.",
    start: "He is",
    acceptableAnswers: [
      "He is a careful driver."
    ],
    hint: "S + V + adv => S + be + a/an + adj + N(chỉ người)."
  },
  {
    id: 18,
    original: "Let's put the garbage bins around the schoolyard.",
    start: "I suggest",
    acceptableAnswers: [
      "I suggest putting the garbage bins around the schoolyard."
    ],
    hint: "Let's + V => I suggest + V-ing."
  },
  {
    id: 19,
    original: "Unless you study harder, you will fail the exam.",
    start: "If",
    acceptableAnswers: [
      "If you don't study harder, you will fail the exam.",
      "If you do not study harder, you will fail the exam."
    ],
    hint: "Unless = If ... not."
  },
  {
    id: 20,
    original: "This coffee is so hot that I can't drink it.",
    start: "It is such",
    acceptableAnswers: [
      "It is such hot coffee that I can't drink it."
    ],
    hint: "S + be + so + adj + that... => It is + such + (a/an) + adj + N + that..."
  }
];