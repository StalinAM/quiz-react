import { questions } from '../data/questions'

export function QuizTypeSelector({ onSelect }) {
  const unidades = Object.keys(questions)
  const tipos = [
    { key: 'single-choice', label: 'Opción única' },
    { key: 'multiple-select', label: 'Selección múltiple' },
    { key: 'true-false', label: 'Verdadero/Falso' },
    { key: 'open-text', label: 'Texto abierto' },
    { key: 'complete', label: 'Completar' },
    { key: 'matching', label: 'Emparejamiento' }
  ]

  return (
    <div className='flex flex-col gap-8'>
      <div className='grid md:grid-cols-2 gap-6'>
        {unidades.map((unidad) => (
          <button
            key={unidad}
            onClick={() => onSelect(unidad)}
            className='border rounded-2xl py-4 cursor-pointer transition-transform duration-300 ease-in-out group hover:scale-105 bg-white shadow-sm'
          >
            <h3 className='text-xl font-semibold mb-3'>
              {unidad.replace('_', ' ')}
            </h3>
          </button>
        ))}
        <button
          onClick={() => onSelect('all')}
          className='border rounded-2xl py-4 cursor-pointer transition-transform duration-300 ease-in-out group hover:scale-105 col-span-2 bg-white shadow-sm'
        >
          <h3 className='text-xl font-semibold mb-3'>
            Ver todas las preguntas
          </h3>
        </button>
      </div>
      {/* Botones para filtrar por tipo de pregunta */}
      <div className='flex flex-wrap gap-4 justify-center'>
        {tipos.map((tipo) => (
          <button
            key={tipo.key}
            onClick={() => onSelect(tipo.key)}
            className='border rounded-xl py-3 px-6 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 bg-blue-100 hover:bg-blue-200 font-semibold text-blue-900 shadow-sm'
          >
            {tipo.label}
          </button>
        ))}
      </div>
    </div>
  )
}
