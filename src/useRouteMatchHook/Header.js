import React from 'react'
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
        <ul>
            <li>
                <Link to='/'>Home</Link>
                <Link to='/profile'>Profile</Link>
            </li>
        </ul>
    </header>
  )
}
