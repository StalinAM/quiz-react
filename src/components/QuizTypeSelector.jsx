import { questions } from '../data/questions'

export function QuizTypeSelector({ onSelect }) {
  const unidades = Object.keys(questions)
  return (
    <div className='grid md:grid-cols-2 gap-6'>
      {unidades.map((unidad) => (
        <button
          key={unidad}
          onClick={() => onSelect(unidad)}
          className='border rounded-2xl py-4 cursor-pointer transition-transform duration-300 ease-in-out group hover:scale-105'
        >
          <h3 className='text-xl font-semibold mb-3'>
            {unidad.replace('_', ' ')}
          </h3>
        </button>
      ))}
      <button
        onClick={() => onSelect('all')}
        className='border rounded-2xl py-4 cursor-pointer transition-transform duration-300 ease-in-out group hover:scale-105 col-span-2'
      >
        <h3 className='text-xl font-semibold mb-3'>Ver todas las preguntas</h3>
      </button>
    </div>
  )
}
