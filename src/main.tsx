import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import TrelloThemeProvider from './theme/TrelloThemeProvider.tsx'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './data/react-query/client.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TrelloThemeProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </TrelloThemeProvider>
  </React.StrictMode>,
)
