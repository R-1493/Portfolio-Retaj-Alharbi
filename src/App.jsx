import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Loading from './components/Loading'

const Home = lazy(() => import('./Pages/home/Home'))
const Project = lazy(() => import('./Pages/project/Project'))
const Contact = lazy(() => import('./Pages/contact/Contact'))
const NotFound = lazy(() => import('./Pages/not found/NotFound'))

const AppContent = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <main className="bg-black min-h-screen">
        <Suspense fallback={<Loading />}>
          <AppContent />
        </Suspense>
      </main>
    </BrowserRouter>
  )
}

export default App
