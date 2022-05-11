import React from 'react'
import { HashRouter, MemoryRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/home'
import InsertImage from './pages/InsertImage'

const isDev = process.env.NODE_ENV !== 'production'

export const App: React.FC<{}> = () => {
  const Router = isDev ? HashRouter : MemoryRouter

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="insert-image" element={<InsertImage />} />
        </Route>
      </Routes>
    </Router>
  )
}
