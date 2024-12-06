import { useState } from 'react';
import { Timer } from './Timer';

function App() {
  const [timers, setTimers] = useState([])

  const createTimer = () => {
    setTimers((prev) => [...prev, Date.now()])
  }

  const deleteTimer = (id) => {
    setTimers((prev) => prev.filter((timerId) => timerId !== id))
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6">
      <button
        onClick={createTimer}
        className="px-4 py-2 bg-seapurple rounded-md hover:bg-purple-700 transition"
      >
        Create Timer
      </button>
      <div className="grid gap-4">
        {timers.map((id) => (
          <Timer key={id} id={id} onDelete={deleteTimer} />
        ))}
      </div>
    </div>
  )
}

export default App
