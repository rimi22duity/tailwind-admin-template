import React from 'react'
import Navbar from '../components/nav/Navbar'
import { Outlet } from 'react-router'
import Asidebar from '../components/aside/Asidebar'
import Herobar from '../components/Herobar'

const MainLayout = ({pageTitle}) => {
    return (
        <>
            <Navbar />
            <Asidebar />
            <Herobar title={pageTitle}/>
            <Outlet/>
        </>
    )
}

export default MainLayout