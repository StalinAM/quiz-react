import { useQuizStore } from './store/useQuizStore'
import { useState } from 'react'
import { QuizTypeSelector } from './components/QuizTypeSelector'
import { QuizAllTypes } from './components/QuizAllTypes'
import { AllChoice } from './components/AllChoice'

function App() {
  const { quizType, setQuizType, questions } = useQuizStore()
  const [score, setScore] = useState(0)

  const handleQuizComplete = (finalScore) => {
    setScore(finalScore)
  }

  return (
    <div className='min-h-screen bg-linear-to-b from-background to-accent/20 px-4 py-8'>
      <div className='max-w-2xl mx-auto'>
        <div className='text-center mb-12 animate-fade-in'>
          <h1 className='text-4xl font-bold mb-4'>Quiz React</h1>
        </div>

        {!quizType ? (
          <QuizTypeSelector onSelect={setQuizType} />
        ) : quizType === 'all' ? (
          <div className='animate-scale-in'>
            <AllChoice questions={questions} />
          </div>
        ) : (
          <div className='animate-scale-in'>
            <QuizAllTypes
              questions={questions}
              onComplete={handleQuizComplete}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default App
