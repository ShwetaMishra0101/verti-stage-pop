import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CircularProgress from './Progress/CircularProgress'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
      {/* <div className="text-center">
        <div className="flex justify-center gap-8 mb-8">
          <a
            href="https://vite.dev"
            target="_blank"
            className="transition-transform hover:scale-110"
          >
            <img src={viteLogo} className="h-24 w-24" alt="Vite logo" />
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            className="transition-transform hover:scale-110"
          >
            <img
              src={reactLogo}
              className="h-24 w-24 animate-spin"
              alt="React logo"
              style={{ animationDuration: '20s' }}
            />
          </a>
        </div>
        <h1 className="text-6xl font-bold text-white mb-8">Vite + React</h1>
        <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md mx-auto">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
          >
            count is {count}
          </button>
          <p className="mt-6 text-gray-700">
            Edit{' '}
            <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
              src/App.tsx
            </code>{' '}
            and save to test HMR
          </p>
        </div>
        <p className="text-white text-opacity-80 mt-8">
          Click on the Vite and React logos to learn more
        </p>
      </div> */}
      <CircularProgress
        percentage={30}
        size={100}
        strokeWidth={10}
        color="blue"
        showPercentage={true}
        moduleIndex={1}
      />
    </div>
  )
}

export default App
