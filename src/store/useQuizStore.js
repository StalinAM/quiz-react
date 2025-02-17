import { create } from 'zustand'
import { questions } from '../data/questions'

export const useQuizStore = create((set) => ({
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  quizType: null,
  setQuizType: (type) =>
    set({
      quizType: type,
      questions: questions.filter((q) => q.type === type),
      currentQuestionIndex: 0,
      score: 0
    }),
  setAnswer: (selected) =>
    set((state) => {
      const isCorrect =
        selected === state.questions[state.currentQuestionIndex].answer
      return {
        score: isCorrect ? state.score + 1 : state.score,
        currentQuestionIndex: state.currentQuestionIndex + 1
      }
    }),
  resetQuiz: () => set({ currentQuestionIndex: 0, score: 0, quizType: null })
}))
