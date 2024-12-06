import { useState, useEffect } from 'react';

export const Timer = ({ id, onDelete }) => {
  const [time, setTime] = useState(() => {
    const now = new Date()
    return { minutes: now.getMinutes(), seconds: now.getSeconds() }
  })
  const [isRunning, setIsRunning] = useState(true)

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => {
          let { minutes, seconds } = prev
          if (seconds === 0) {
            seconds = 59
            minutes = minutes === 0 ? 59 : minutes - 1
          } else {
            seconds -= 1
          }
          return { minutes, seconds }
        })
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isRunning])

  const pause = () => setIsRunning(false)
  const resume = () => setIsRunning(true)

  return (
    <div className="bg-seapurple p-4 rounded-md shadow-lg text-center">
      <h2 className="text-xl font-bold mb-4">
        {String(time.minutes).padStart(2, '0')}:
        {String(time.seconds).padStart(2, '0')}
      </h2>
      <div className="flex gap-2 justify-center">
        <button
          onClick={pause}
          disabled={!isRunning}
          className={`px-3 py-1 rounded-md ${
            isRunning
              ? 'bg-red-600 hover:bg-red-700'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Pause
        </button>
        <button
          onClick={resume}
          disabled={isRunning}
          className={`px-3 py-1 rounded-md ${
            !isRunning
              ? 'bg-green-600 hover:bg-green-700'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Continue
        </button>
        <button
          onClick={() => onDelete(id)}
          className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  )
}


