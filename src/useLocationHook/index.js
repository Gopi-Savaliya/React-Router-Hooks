import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home } from './Home'

export const UseLocationHook = () => {
  return (
    <BrowserRouter>
        <h1>UseLocation Hook</h1>
        <Link to='/home'>Home</Link>
        <Routes>
            <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
