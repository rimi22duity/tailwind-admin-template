import React, { useState } from 'react'
import './App.css'
import './main.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import AddTask from './pages/AddTask'
import MainLayout from './layout/MainLayout'
import Dashboard from './pages/Dashboard'

function App() {
  const [pageTitle, setPageTitle] = useState('Dashboard')

  const onRequestingPage = (title) => {
    setPageTitle(title)
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      < Route path='/' element={<MainLayout pageTitle={pageTitle}/>}>
        <Route path='/dashboard' element={<Dashboard onPageLoad={onRequestingPage}/>} />
        <Route path='/add-task' element={<AddTask onPageLoad={onRequestingPage}/>} />
      </Route>

    ))
  return (
    <RouterProvider router={router}/>
  )
}

export default App