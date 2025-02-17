import { useState } from 'react'
import { ProgressBar } from './ProgressBar'

export function MultipleChoice({ questions, onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  const handleAnswerSelect = (answer) => {
    if (selectedAnswer) return
    setSelectedAnswer(answer)
    setShowAnswer(true)
  }

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1)
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowAnswer(false)
    } else {
      onComplete(
        score + (selectedAnswer === questions[currentQuestion].answer ? 1 : 0)
      )
    }
  }

  return (
    <div className=''>
      <ProgressBar progress={(currentQuestion / questions.length) * 100} />

      <div className='quiz-card mt-6'>
        <h2 className='text-2xl font-semibold mb-6'>
          {questions[currentQuestion].question}
        </h2>

        <div className='space-y-4'>
          {questions[currentQuestion].options.map((option) => (
            <div
              key={option}
              onClick={() => handleAnswerSelect(option)}
              className={`border  rounded-2xl px-4 py-2 ${
                selectedAnswer === option ? 'selected' : ''
              } ${
                showAnswer && option === questions[currentQuestion].answer
                  ? 'border-green-500 bg-green-50'
                  : showAnswer &&
                    selectedAnswer === option &&
                    option !== questions[currentQuestion].answer
                  ? 'border-red-500 bg-red-50'
                  : ''
              }`}
            >
              {option}
            </div>
          ))}
        </div>

        <button
          onClick={handleNextQuestion}
          disabled={!selectedAnswer}
          className='mt-8 w-fit px-8 py-2 border bg-primary text-primary-foreground rounded-2xl font-medium 
                   disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 
                   hover:opacity-90'
        >
          {currentQuestion + 1 === questions.length
            ? 'Terminar Quiz'
            : 'Siguiente Pregunta'}
        </button>
      </div>
    </div>
  )
}
