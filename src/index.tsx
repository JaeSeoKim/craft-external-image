import React from 'react'
import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'

import { App } from './app'
import DomConsole from './components/DomConsole'
import './style.css'

const init = () => {
  const appNode = document.getElementById('react-root')
  ReactDOM.createRoot(appNode!).render(
    <React.StrictMode>
      <DomConsole>
        <ErrorBoundary
          fallback={<div>something has problem</div>}
          onError={(error, info) => {
            console.error(info.componentStack, error)
          }}
        >
          <App />
        </ErrorBoundary>
      </DomConsole>
    </React.StrictMode>,
  )
}

init()
