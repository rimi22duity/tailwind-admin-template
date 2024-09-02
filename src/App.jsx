import React from 'react'
import './App.css'
import './main.css'
import Navbar from './components/nav/Navbar'
import Asidebar from './components/aside/Asidebar'
import Herobar from './components/Herobar'
import MainContent from './components/MainContent'

function App() {
  return (
    <>
      <Navbar />
      <Asidebar />
      <Herobar />

      <MainContent />
    </>
  )
}

export default App