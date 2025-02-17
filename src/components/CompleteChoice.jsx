import { useState } from 'react'

export function CompleteChoice({ questions, onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answer, setAnswer] = useState('')
  const [score, setScore] = useState(0)
  const [validated, setValidated] = useState(false)
  const [isCorrect, setIsCorrect] = useState(null)

  const handleValidate = () => {
    const correct =
      answer.toLowerCase().trim() ===
      questions[currentQuestion].answer.toLowerCase().trim()

    setIsCorrect(correct)
    setValidated(true)

    if (correct) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
      setAnswer('')
      setValidated(false)
      setIsCorrect(null)
    } else {
      onComplete(score)
    }
  }

  return (
    <div className='animate-fade-in'>
      <div className='quiz-card mt-6'>
        <h2 className='text-2xl font-semibold mb-6'>
          {questions[currentQuestion].question}
        </h2>

        <input
          type='text'
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder='Escribe tu respuesta aquí'
          className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50'
          disabled={validated}
        />

        {validated && (
          <div
            className={`mt-4 p-3 text-white rounded-lg ${
              isCorrect ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            {isCorrect
              ? '¡Correcto!'
              : `Incorrecto. Respuesta: ${questions[currentQuestion].answer}`}
          </div>
        )}

        <div className='mt-4 flex gap-4'>
          <button
            onClick={handleValidate}
            disabled={!answer.trim() || validated}
            className='flex-1 bg-blue-500 text-white py-2 rounded-lg font-medium 
                       disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 
                       hover:bg-blue-600'
          >
            Validar Respuesta
          </button>

          <button
            onClick={handleNextQuestion}
            disabled={!validated}
            className='flex-1 bg-green-500 text-white py-2 rounded-lg font-medium 
                       disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 
                       hover:bg-green-600'
          >
            {currentQuestion + 1 === questions.length
              ? 'Terminar Quiz'
              : 'Siguiente Pregunta'}
          </button>
        </div>
      </div>
    </div>
  )
}
