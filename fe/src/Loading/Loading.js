import { CircularProgress } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'

const Loading = (props) => {
  useEffect(()=> {
    setTimeout(()=> props.setLoading(()=> false), 2000)
  }, [props])
  return (
    <div className='fksflkewjlsa' style={{width: "100%", height: "100%",display: "flex",position: "fixed", justifyContent: "center", alignItems: 'center', top: 0, left: 0, zIndex: 999999999, background: "#fff", gap: 5}}>
        <span style={{fontSize: 24, fontWeight: 600, color: "#3a3b3c"}}>Loading...</span>
        <CircularProgress />
    </div>
  )
}

export default Loading