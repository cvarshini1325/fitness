import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routers/AppRouter.jsx'
import { FitnessProvider } from './context/FitnessContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FitnessProvider>
      <App />
    </FitnessProvider>
  </StrictMode>,
)
