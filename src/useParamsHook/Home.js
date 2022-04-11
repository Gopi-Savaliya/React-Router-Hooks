import React from 'react';
import { useParams } from 'react-router-dom';

export const Home = () => {
    const { id } = useParams();

  return (
    <>
      <h1>Welcome To Home Page</h1>
      <p>id: {id}</p>
    </>
  )
}