import { useState } from 'react'
import { ProgressBar } from './ProgressBar'

export function MultipleSelectChoice({ questions, onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState([])
  const [score, setScore] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  const handleToggleAnswer = (option) => {
    if (showAnswer) return
    setSelectedAnswers((prev) =>
      prev.includes(option)
        ? prev.filter((ans) => ans !== option)
        : [...prev, option]
    )
  }

  const handleValidate = () => {
    setShowAnswer(true)
    const correct = arraysEqual(
      selectedAnswers.sort(),
      questions[currentQuestion].answer.sort()
    )
    if (correct) setScore(score + 1)
  }

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswers([])
      setShowAnswer(false)
    } else {
      onComplete(score)
    }
  }

  function arraysEqual(a, b) {
    return a.length === b.length && a.every((val, idx) => val === b[idx])
  }

  return (
    <div>
      <ProgressBar progress={(currentQuestion / questions.length) * 100} />
      <div className='quiz-card mt-6'>
        <h2 className='text-2xl font-semibold mb-6'>
          {questions[currentQuestion].question}
        </h2>
        <div className='space-y-4'>
          {questions[currentQuestion].options.map((option) => (
            <div
              key={option}
              onClick={() => handleToggleAnswer(option)}
              className={`border rounded-2xl px-4 py-2 cursor-pointer ${
                selectedAnswers.includes(option) ? 'bg-blue-200' : ''
              } ${
                showAnswer && questions[currentQuestion].answer.includes(option)
                  ? 'border-green-500 bg-green-50'
                  : showAnswer &&
                    selectedAnswers.includes(option) &&
                    !questions[currentQuestion].answer.includes(option)
                  ? 'border-red-500 bg-red-50'
                  : ''
              }`}
            >
              {option}
            </div>
          ))}
        </div>
        <div className='flex gap-4 mt-8'>
          <button
            onClick={handleValidate}
            disabled={showAnswer || selectedAnswers.length === 0}
            className='flex-1 bg-blue-500 text-white py-2 rounded-lg font-medium 
                       disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 
                       hover:bg-blue-600'
          >
            Validar Respuesta
          </button>
          <button
            onClick={handleNextQuestion}
            disabled={!showAnswer}
            className='flex-1 bg-green-500 text-white py-2 rounded-lg font-medium 
                       disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 
                       hover:bg-green-600'
          >
            {currentQuestion + 1 === questions.length
              ? 'Terminar Quiz'
              : 'Siguiente Pregunta'}
          </button>
        </div>
        {showAnswer && (
          <div className='mt-4'>
            {arraysEqual(
              selectedAnswers.sort(),
              questions[currentQuestion].answer.sort()
            ) ? (
              <div className='p-3 bg-green-500 text-white rounded-lg'>
                ¡Correcto!
              </div>
            ) : (
              <div className='p-3 bg-red-500 text-white rounded-lg'>
                Incorrecto. Respuestas correctas:{' '}
                {questions[currentQuestion].answer.join(', ')}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
