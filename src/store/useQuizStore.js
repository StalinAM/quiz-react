import { create } from 'zustand'
import { questions } from '../data/questions'

function arraysEqual(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) return false
  if (a.length !== b.length) return false
  return a.every((v, i) => v === b[i])
}

export const useQuizStore = create((set) => ({
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  quizType: null,
  setQuizType: (unidad) =>
    set({
      quizType: unidad,
      questions:
        unidad === 'all'
          ? Object.values(questions).flat()
          : questions[unidad] || [],
      currentQuestionIndex: 0,
      score: 0
    }),
  setAnswer: (selected) =>
    set((state) => {
      const current = state.questions[state.currentQuestionIndex]
      let isCorrect = false
      if (Array.isArray(current.answers)) {
        // Para selección múltiple
        isCorrect = arraysEqual(
          Array.isArray(selected) ? selected.sort() : [selected],
          current.answers.slice().sort()
        )
      } else {
        // Para respuesta única, completar, true-false, open-text
        isCorrect = selected === current.answer
      }
      return {
        score: isCorrect ? state.score + 1 : state.score,
        currentQuestionIndex: state.currentQuestionIndex + 1
      }
    }),
  resetQuiz: () => set({ currentQuestionIndex: 0, score: 0, quizType: null })
}))
