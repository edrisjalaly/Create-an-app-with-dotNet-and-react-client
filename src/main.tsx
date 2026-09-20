import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/layout/styles.css'
import '@fontsource/roboto/300';
import '@fontsource/roboto/400';
import '@fontsource/roboto/500';
import '@fontsource/roboto/700';
import App from './App/layout/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
