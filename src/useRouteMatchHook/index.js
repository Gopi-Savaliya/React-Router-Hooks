import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './Header';
import { Home } from './Home';
import './index.css'
import { Profile } from './profile/Profile';

const UseRouteMatchHook = () => {
  return (
    <BrowserRouter>
        <h1>useRouteMatch Hook</h1>
        <hr/>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/profile' element={<Profile />} /> */}
            <Route path='/profile/*' element={<Profile />} />
        </Routes>
    </BrowserRouter>
  )
}

export default UseRouteMatchHook;