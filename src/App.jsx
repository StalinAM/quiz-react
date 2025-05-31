import { useQuizStore } from './store/useQuizStore'
import { useState } from 'react'
import { MultipleChoice } from './components/MultipleChoice'
import { CompleteChoice } from './components/CompleteChoice'
import { AllChoice } from './components/AllChoice'
import { QuizTypeSelector } from './components/QuizTypeSelector'
import { MultipleSelectChoice } from './components/MultipleSelectChoice'

function App() {
  const { quizType, setQuizType, questions } = useQuizStore()
  const [score, setScore] = useState(0)

  const handleQuizComplete = (finalScore) => {
    setScore(finalScore)
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-background to-accent/20 px-4 py-8'>
      <div className='max-w-2xl mx-auto'>
        <div className='text-center mb-12 animate-fade-in'>
          <h1 className='text-4xl font-bold mb-4'>Quiz React</h1>
        </div>

        {!quizType ? (
          <QuizTypeSelector onSelect={setQuizType} />
        ) : (
          <div className='animate-scale-in'>
            {quizType === 'multiple' ? (
              <MultipleChoice
                onComplete={handleQuizComplete}
                questions={questions}
              />
            ) : quizType === 'multiple-select' ? (
              <MultipleSelectChoice
                onComplete={handleQuizComplete}
                questions={questions}
              />
            ) : quizType === 'complete' ? (
              <CompleteChoice
                onComplete={handleQuizComplete}
                questions={questions}
              />
            ) : (
              <AllChoice questions={questions} />
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
