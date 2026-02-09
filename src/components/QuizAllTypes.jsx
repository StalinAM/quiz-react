import { useState } from 'react'

export function QuizAllTypes({ questions, onComplete }) {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState({})
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [showCorrect, setShowCorrect] = useState(false)
  const [lastCorrect, setLastCorrect] = useState(null)
  const [answered, setAnswered] = useState(false)

  const q = questions[current]

  const handleChange = (value) => {
    setAnswers((prev) => ({ ...prev, [current]: value }))
  }

  const handleMatchingChange = (idx, value) => {
    setAnswers((prev) => ({
      ...prev,
      [current]: {
        ...prev[current],
        [idx]: value
      }
    }))
  }

  const getCorrectAnswer = () => {
    if (
      q.type === 'single-choice' ||
      q.type === 'dropdown' ||
      q.type === 'true-false' ||
      q.type === 'complete' ||
      q.type === 'open-text'
    ) {
      return q.answer
    } else if (q.type === 'multiple-select') {
      return Array.isArray(q.answers) ? q.answers.join(', ') : ''
    } else if (q.type === 'matching') {
      return q.pairs.map((pair) => `${pair.left} → ${pair.answer}`).join(' | ')
    }
    return ''
  }

  const handleNext = () => {
    setFeedback('')
    setShowCorrect(false)
    setLastCorrect(null)
    setAnswered(false)
    // Elimina la respuesta de la siguiente pregunta
    setAnswers((prev) => {
      const newAnswers = { ...prev }
      delete newAnswers[current + 1]
      return newAnswers
    })
    if (current + 1 < questions.length) {
      setCurrent(current + 1)
    } else {
      setFinished(true)
      if (onComplete) onComplete(score)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (answered) return
    let isCorrect = false
    const userAnswer = answers[current]
    // Solo valida si hay respuesta
    if (q.type === 'single-choice') {
      if (typeof userAnswer === 'undefined') return
      isCorrect = userAnswer === q.answer
    } else if (q.type === 'multiple-select') {
      if (!Array.isArray(userAnswer) || userAnswer.length === 0) return
      const userArr = Array.from(new Set(userAnswer)).sort()
      const correctArr = Array.isArray(q.answers)
        ? Array.from(new Set(q.answers)).sort()
        : []
      isCorrect =
        userArr.length === correctArr.length &&
        userArr.every((a, i) => a === correctArr[i])
    } else if (q.type === 'true-false') {
      if (typeof userAnswer === 'undefined') return
      isCorrect = userAnswer === q.answer
    } else if (q.type === 'complete' || q.type === 'open-text') {
      if (!userAnswer || userAnswer.trim() === '') return
      isCorrect =
        typeof userAnswer === 'string' &&
        userAnswer.trim().toLowerCase() === q.answer.trim().toLowerCase()
    } else if (q.type === 'dropdown') {
      if (typeof userAnswer === 'undefined') return
      isCorrect = userAnswer === q.answer
    } else if (q.type === 'matching') {
      if (!userAnswer || Object.values(userAnswer).length === 0) return
      isCorrect = q.pairs.every(
        (pair, idx) => userAnswer && userAnswer[idx] === pair.answer
      )
    }
    if (!isCorrect) {
      setShowCorrect(true)
      setLastCorrect(getCorrectAnswer())
    } else {
      setShowCorrect(false)
      setLastCorrect(null)
    }
    setFeedback(isCorrect ? '¡Correcto!' : 'Incorrecto')
    setScore((prev) => prev + (isCorrect ? 1 : 0))
    setAnswered(true)
  }

  if (finished) {
    return (
      <div className='text-center mt-4 text-xl font-bold text-green-700'>
        ¡Cuestionario completado!
        <br />
        Puntaje: {score} / {questions.length}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
      <div className='border rounded-2xl p-4'>
        <p className='font-bold text-lg mb-2'>
          {current + 1}. {q.question}
        </p>
        {q.type === 'single-choice' && Array.isArray(q.options) && (
          <div className='flex flex-col gap-2'>
            {q.options.map((opt, i) => (
              <label key={i} className='flex items-center gap-2'>
                <input
                  type='radio'
                  name={`q${current}`}
                  value={opt}
                  checked={answers[current] === opt}
                  onChange={() => handleChange(opt)}
                  required
                  disabled={answered}
                />
                {opt}
              </label>
            ))}
          </div>
        )}
        {q.type === 'multiple-select' && Array.isArray(q.options) && (
          <div className='flex flex-col gap-2'>
            {q.options.map((opt, i) => (
              <label key={i} className='flex items-center gap-2'>
                <input
                  type='checkbox'
                  name={`q${current}`}
                  value={opt}
                  checked={
                    Array.isArray(answers[current]) &&
                    answers[current].includes(opt)
                  }
                  onChange={(e) => {
                    if (answered) return
                    const arr = Array.isArray(answers[current])
                      ? [...answers[current]]
                      : []
                    if (e.target.checked) arr.push(opt)
                    else {
                      const ix = arr.indexOf(opt)
                      if (ix > -1) arr.splice(ix, 1)
                    }
                    handleChange(arr)
                  }}
                  disabled={answered}
                />
                {opt}
              </label>
            ))}
          </div>
        )}
        {q.type === 'true-false' && (
          <div className='flex gap-4'>
            <label className='flex items-center gap-2'>
              <input
                type='radio'
                name={`q${current}`}
                value='Verdadero'
                checked={answers[current] === 'Verdadero'}
                onChange={() => handleChange('Verdadero')}
                required
                disabled={answered}
              />
              Verdadero
            </label>
            <label className='flex items-center gap-2'>
              <input
                type='radio'
                name={`q${current}`}
                value='Falso'
                checked={answers[current] === 'Falso'}
                onChange={() => handleChange('Falso')}
                required
                disabled={answered}
              />
              Falso
            </label>
          </div>
        )}
        {(q.type === 'complete' || q.type === 'open-text') && (
          <input
            type='text'
            className='border rounded px-2 py-1 mt-2 w-full'
            value={answers[current] || ''}
            onChange={(e) => handleChange(e.target.value)}
            placeholder='Escribe tu respuesta...'
            required
            disabled={answered}
          />
        )}
        {q.type === 'dropdown' && Array.isArray(q.options) && (
          <select
            className='border rounded px-2 py-1 mt-2 w-full'
            value={answers[current] || ''}
            onChange={(e) => handleChange(e.target.value)}
            required
            disabled={answered}
          >
            <option value='' disabled>
              Selecciona una opción...
            </option>
            {q.options.map((opt, i) => (
              <option key={i} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        )}
        {q.type === 'matching' && Array.isArray(q.pairs) && (
          <div className='flex flex-col gap-4 mt-2'>
            {q.pairs.map((pair, idx) => (
              <div key={idx} className='flex items-center gap-4'>
                <span className='font-semibold'>{pair.left}</span>
                <select
                  className='border rounded px-2 py-1'
                  value={answers[current]?.[idx] || ''}
                  onChange={(e) => handleMatchingChange(idx, e.target.value)}
                  required
                  disabled={answered}
                >
                  <option value='' disabled>
                    Selecciona...
                  </option>
                  {/* Genera opciones a partir de todas las respuestas posibles */}
                  {q.pairs.map((p, i) => (
                    <option key={i} value={p.answer}>
                      {p.answer}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        )}
      </div>
      {!answered ? (
        <button
          type='submit'
          className='bg-green-600 text-white py-2 px-6 rounded-xl font-bold'
        >
          Enviar respuesta
        </button>
      ) : (
        <button
          type='button'
          onClick={handleNext}
          className='bg-blue-600 text-white py-2 px-6 rounded-xl font-bold'
        >
          Siguiente
        </button>
      )}
      {feedback && (
        <div
          className={`text-center text-lg font-bold ${feedback === '¡Correcto!' ? 'text-green-700' : 'text-red-600'}`}
        >
          {feedback}
          {showCorrect && lastCorrect && (
            <div className='mt-2 text-base text-blue-700'>
              Respuesta correcta:{' '}
              <span className='font-semibold'>{lastCorrect}</span>
            </div>
          )}
        </div>
      )}
    </form>
  )
}
