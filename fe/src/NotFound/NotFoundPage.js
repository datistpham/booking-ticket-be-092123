import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from "react-router-dom"

const NotFound404 = (props) => {
  const navigate= useNavigate()
  return (
    <div style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{color: "#b0b3b8", fontSize: 24, fontWeight: 600}}>This Page Isn't Available</div>
      <div style={{textAlign: 'center',color: "#b0b3b8", fontSize: 18}}>The link may be broken, or the page may have been removed. Check to see if the link you're trying to open is correct.</div>
      <br />
      <Button variant='outlined'><div onClick={()=> navigate("/")}>Back to home</div></Button>
      <br />
      <div style={{color: "#2374e1", fontWeight: 600, cursor: "pointer"}} onClick={()=> navigate(-1)}>Go back</div>
    </div>
  )
}

export default NotFound404