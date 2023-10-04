import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {  Route, Routes } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { id_admin } from '../Constant'
import AddFlight from './components/AddFlight'
import AddHotel from './components/AddHotel'
import ComponentAdmin from './components/ComponentAdmin'
import OptionTypeAdmin from './components/OptionTypeAdmin'
import MenuIcon from '@mui/icons-material/Menu';
import NotFound404 from '../NotFound/NotFoundPage'

const AdminPage = (props) => {
  const location= useLocation()
  //eslint-disable-next-line
  const [change, setchange]= useState(()=> false)
  const [collapse, setcollapse ]= useState(()=> false)
  if(!location?.state?.uid) return (
    <NotFound404 />
  )
  else if(location.state.uid !== id_admin) return <div>Access denied</div>
  else return (
    <div style={{width: "100%", }}>
      <div style={{width: "100%", display: "flex", gap: 30, height: 60, alignItems: "center", padding: "0 50px", boxSizing: "border-box"}}>
        <MenuIcon onClick={()=> setcollapse(prev=> !prev)} className="gegdesfdgds" style={{cursor: "pointer"}} />
        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/admin/manage/flight" state={{uid: id_admin}} style={{fontSize: 20, fontWeight: 600, textDecoration: "none", color: "#000"}}>
          Chuyến bay
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/admin/manage/hotel" state={{uid: id_admin}} style={{fontSize: 20, fontWeight: 600, textDecoration: "none", color: "#000"}}>
          Khách sạn
        </NavLink>
      </div>
      <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: 'center', height: "calc(100vh - 120px)"}}>
        <Routes>
          {
            ["flight", "hotel"].map((item, key)=> <Route key={key} path={"/"+item+"/*"} element={<OptionTypeAdmin collapse={collapse} type={item} />}></Route>)
          }
        </Routes>

        <Routes>
          {
            ["flight", "hotel"].map((item, key)=> <Route key={key} path={"/"+item+ "/*"} element={<ComponentAdmin setchange={setchange} type={item} />}></Route>)
          }
          <Route path="/flight/add_flight" element={<AddFlight />}></Route>
          <Route path="/hotel/add_hotel" element={<AddHotel />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default AdminPage