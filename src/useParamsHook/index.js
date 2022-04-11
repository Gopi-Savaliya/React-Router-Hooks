import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home } from './Home';

export const UseParamsHook = () => {
  return (
    <BrowserRouter>
        <h1>UseParams Hook</h1>
        <Link to='/home/1234'>Home</Link>
        <Routes>
            <Route path='/home/:id' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
