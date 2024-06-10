import React, { useState } from 'react'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import TerminalInOut from './pages/dashboard/TerminalInOut'
import Login from './pages/onboarding/Login'
import NavbarWeb from './pages/components/NavbarWeb'
import NavbarMobile from './pages/components/NavbarMobile'
import Employee from './pages/human-resource/Employee'
import Role from './pages/human-resource/Role'
import InventoryStatus from './pages/dashboard/InventoryStatus'
import ResetPassword from './pages/reset-password/ResetPassword'


function App() {

  return (
    <>
      <BrowserRouter basename='/'>
        <Routes >
          <Route path='/' element={<Login />} />
        </Routes>
      </BrowserRouter>

      <BrowserRouter basename='/panel'>
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <NavbarWeb />
          <div className="flex flex-col">
            <NavbarMobile />
            <Routes>
              <Route path='/terminal-in-out' element={<TerminalInOut/>} />
              <Route path='/inventory-status' element={<InventoryStatus/>} />
              <Route path='/employee' element={<Employee/>} />
              <Route path='/role' element={<Role/>} />
              <Route path='/reset-password' element={<ResetPassword/>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
