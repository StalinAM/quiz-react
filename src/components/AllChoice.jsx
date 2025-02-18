export function AllChoice({ questions }) {
  return (
    <div className='flex flex-col gap-4'>
      {questions.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col gap-2 border ${
            item.type === 'complete' ? ' border-blue-600 bg-blue-100' : ''
          } rounded-2xl p-4`}
        >
          <p className='font-bold text-lg'>
            {index + 1}. {item.question}
          </p>
          <p className='text-lg'>{item.answer}</p>
        </div>
      ))}
    </div>
  )
}
