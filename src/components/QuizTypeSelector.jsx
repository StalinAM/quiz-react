export function QuizTypeSelector({ onSelect }) {
  return (
    <div className='grid md:grid-cols-2 gap-6'>
      <button
        onClick={() => onSelect('multiple')}
        className='quiz-card group hover:scale-105'
      >
        <h3 className='text-xl font-semibold mb-3'>Seleccion multiple</h3>
        <p className='text-muted-foreground'>
          Select the correct answer from multiple options
        </p>
      </button>

      <button
        onClick={() => onSelect('complete')}
        className='quiz-card group hover:scale-105'
      >
        <h3 className='text-xl font-semibold mb-3'>Fill in the Blank</h3>
        <p className='text-muted-foreground'>
          Type in your answer to complete the sentence
        </p>
      </button>
    </div>
  )
}
