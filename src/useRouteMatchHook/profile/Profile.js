import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { Info } from './Info'
import { Settings } from './Settings'

export const Profile = () => {
  // In react-router-dom v6, useRouteMatch() is not used
  // const {path, url} = useRouteMatch() 
  return (
    <div>
        <h1>Profile</h1>
        <ul>
            {/* <li><Link to={`${url}/info`}>Profile Info</Link></li>
            <li><Link to={`${url}/settings`}>Profile Settings</Link></li> */}
            <li><Link to='info'>Profile Info</Link></li>
            <li><Link to='settings'>Profile Settings</Link></li>
        </ul>
        <Routes>
            {/* <Route path={`${path}/info`} element={<Info />} />
            <Route path={`${path}/settings`} element={<Settings />} /> */}
            <Route path='info' element={<Info />} />
            <Route path='settings' element={<Settings />} />
        </Routes>
    </div>
  )
}
