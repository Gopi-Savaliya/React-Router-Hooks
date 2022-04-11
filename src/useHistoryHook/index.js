import React from 'react';
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { Home } from './Home';

export const UseHistoryHook = () => {
  //useHistory() is replaced by useNavigate() in react-router-dom v6
  let navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  }

  return (
    <>
      <h1>useHistory Hook</h1>
      <hr/>
     <Link to='/home' onClick={handleClick}>Home</Link>  
      <Routes>
        <Route path='/home' element={<Home />} />
      </Routes>

      <button onClick={() => navigate(-2)}>
        Go 2 pages back
      </button>
      <button onClick={() => navigate(-1)}>Go back</button>
      <button onClick={() => navigate(1)}>
        Go forward
      </button>
      <button onClick={() => navigate(2)}>
        Go 2 pages forward
      </button>
    </>
  )
}

// In useHistory()

// const { go, goBack, goForward } = useHistory();
// <button onClick={() => go(-2)}>
//   Go 2 pages back
// </button>
// <button onClick={goBack}>Go back</button>
// <button onClick={goForward}>Go forward</button>
// <button onClick={() => go(2)}>
//   Go 2 pages forward
// </button>
