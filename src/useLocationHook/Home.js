import React from 'react'
import { useLocation } from 'react-router-dom';

export const Home = () => {
  const location = useLocation();

  return (
    <>
      <h1>Welcome To Home Page</h1>
      <p>path: {location.pathname}</p>
      <p>state: {new URLSearchParams(location.search).get('id')}</p>
    </>
  )
}
