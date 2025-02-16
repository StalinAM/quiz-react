import { useQuizStore } from './store/useQuizStore'

function App() {
  const { questions, currentQuestionIndex, score, setAnswer, resetQuiz } =
    useQuizStore()
  const currentQuestion = questions[currentQuestionIndex]
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100 p-4'>
      <div className='bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center'>
        {currentQuestion ? (
          <>
            <h2 className='text-lg font-semibold mb-4'>
              {currentQuestion.question}
            </h2>
            <div className='grid grid-cols-2 gap-4'>
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setAnswer(option)}
                  className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700'
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div>
            <h2 className='text-xl font-bold'>¡Quiz terminado!</h2>
            <p className='mt-2'>
              Puntaje: {score} / {questions.length}
            </p>
            <button
              onClick={resetQuiz}
              className='mt-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700'
            >
              Reiniciar Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
