import React, { Suspense, lazy, useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import LoadingAnimation from './components/LoadingAnimation'
import './index.css'

const App = lazy(() => import('./App'))

const Main = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <React.StrictMode>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <Suspense fallback={<LoadingAnimation />}>
          <App />
        </Suspense>
      )}
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Main />)