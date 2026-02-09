export function AllChoice({ questions }) {
  return (
    <div className='flex flex-col gap-4'>
      {questions.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col gap-2 border rounded-2xl p-4`}
        >
          <p className='font-bold text-lg'>
            {index + 1}. {item.question}
          </p>
          {item.type === 'multiple-select' && Array.isArray(item.answers) ? (
            <p className='text-lg'>
              Respuestas:{' '}
              <span className='font-semibold'>{item.answers.join(', ')}</span>
            </p>
          ) : item.type === 'single-choice' || item.type === 'dropdown' ? (
            <p className='text-lg'>
              Respuesta: <span className='font-semibold'>{item.answer}</span>
            </p>
          ) : item.type === 'true-false' ? (
            <p className='text-lg'>
              Respuesta: <span className='font-semibold'>{item.answer}</span>
            </p>
          ) : item.type === 'complete' || item.type === 'open-text' ? (
            <p className='text-lg'>
              Respuesta: <span className='font-semibold'>{item.answer}</span>
            </p>
          ) : item.type === 'matching' && Array.isArray(item.pairs) ? (
            <div className='flex flex-col gap-2'>
              <span className='font-semibold'>Emparejamiento:</span>
              {item.pairs.map((pair, idx) => (
                <div key={idx} className='ml-4'>
                  {pair.left} →{' '}
                  <span className='font-semibold'>{pair.answer}</span>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  )
}
