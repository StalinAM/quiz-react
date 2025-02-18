export function QuizTypeSelector({ onSelect }) {
  return (
    <div className='grid md:grid-cols-2 gap-6'>
      <button
        onClick={() => onSelect('multiple')}
        className='border rounded-2xl py-4 cursor-pointer transition-transform duration-300 ease-in-out group hover:scale-105'
      >
        <h3 className='text-xl font-semibold mb-3'>Seleccion multiple</h3>
      </button>

      <button
        onClick={() => onSelect('complete')}
        className='border rounded-2xl py-4 cursor-pointer transition-transform duration-300 ease-in-out group hover:scale-105'
      >
        <h3 className='text-xl font-semibold mb-3'>Completar</h3>
      </button>
      <button
        onClick={() => onSelect('all')}
        className='border rounded-2xl py-4 cursor-pointer transition-transform duration-300 ease-in-out group hover:scale-105'
      >
        <h3 className='text-xl font-semibold mb-3'>Ver todas las preguntas</h3>
      </button>
    </div>
  )
}
