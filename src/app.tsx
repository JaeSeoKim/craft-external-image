import React from 'react'
import { HashRouter, MemoryRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/home'

const isDev = process.env.NODE_ENV !== 'production'

export const App: React.FC<{}> = () => {
  const Router = isDev ? HashRouter : MemoryRouter

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="test" element={<div />} />
        </Route>
      </Routes>
    </Router>
  )
}
