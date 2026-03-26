import React, { lazy } from 'react'
import './App.css'
import Navbar from './components/layouts/Navbar'
import ReturnToMain from './components/layouts/ReturnToMain'
import FloatingWhatsApp from './components/layouts/FloatingWhatsApp'
import Hero from './components/sections/Hero'
import DeferredSection from './components/layouts/DeferredSection'

const About = lazy(() => import('./components/sections/About'))
const Technolgy = lazy(() => import('./components/sections/Technolgy'))
const Skills = lazy(() => import('./components/sections/Skills'))
const Project = lazy(() => import('./components/sections/Project'))
const Service = lazy(() => import('./components/sections/Services'))
const Contact = lazy(() => import('./components/sections/Contact'))
const Footer = lazy(() => import('./components/layouts/Footer'))


function App() {
  return (
      <>
      <div className='min-h-screen bg-black'>
        <ReturnToMain />
        <FloatingWhatsApp />
        <Navbar />
        <main>
          <Hero />
          <DeferredSection component={About} minHeight='85vh' rootMargin='500px 0px' />
          <DeferredSection component={Technolgy} minHeight='95vh' />
          <DeferredSection component={Skills} minHeight='95vh' />
          <DeferredSection component={Project} minHeight='90vh' />
          <DeferredSection component={Service} minHeight='80vh' />
          <DeferredSection component={Contact} minHeight='85vh' />
        </main>
        <DeferredSection component={Footer} minHeight='16rem' rootMargin='250px 0px' />
      </div>
      </>
  )
}

export default App
