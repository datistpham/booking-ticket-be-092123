import React, { useEffect, useRef, useState } from 'react'
import { signup } from '../../f/signup'
import { loginfacebook } from '../firebase/facebook'
import { logingoogle } from '../firebase/google'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const SignupIndex = (props) => {
    const [open, setopen]= useState(()=> false)
    const myRef= useRef()
    const clickoutside= (e)=> {
        if(myRef.current && !myRef.current.contains(e.target)) {
            setopen(()=> false)
        }
    }
    useEffect(()=> {
        document.addEventListener("mousedown", clickoutside)
        return ()=> document.removeEventListener("mousedown", clickoutside)
    }, [])
    const [data, setdata]= useState(()=> ({
        account: "",
        password: "",
        firstname: "",
        lastname: "",
    }))
    const [opensnackbar, setopensnackbar]= useState(()=> false)
    const action = (
        <React.Fragment>
          <Button color="secondary" size="small" onClick={()=> setopensnackbar(()=> false)}>
            UNDO
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={()=> setopensnackbar(()=> false)}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>)
  return (
    <div style={{display: "flex",marginLeft: 20, justifyContent: "center", alignItems: "center", cursor: "pointer", borderRadius: 6, backgroundColor: "#2e89ff", color: "#fff", fontWeight: 600, userSelect: "none"}}>
        <div style={{ padding: 10, userSelect: "none"}} onClick={()=> setopen(prev=> !prev)}>Đăng ký</div>
        {

            open=== true &&
            <div ref={myRef} style={{position: "absolute", width: 300, boxSizing: "border-box", padding: 16, background: "#fff", borderRadius: 6, top: "100%", right: 0, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", marginTop: 10}}> 
                <div style={{color: "#000"}}>Đăng nhập tài khoản</div>
                <br />
                <div style={{marginBottom: 8, fontWeight: 600, color: "#000"}}>Email hoặc số điện thoại</div>
                <input onChange={(e)=> setdata(prev=> ({...prev, account: e.target.value}))} type="text" style={{width: "100%", padding: 10, boxSizing: "border-box", borderRadius: 6,}} />
                <br />
                <div style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: 'center'}}>
                    <div style={{marginBottom: 8, fontWeight: 600, color: "#000"}}>
                    Họ
                    </div>
                </div>
                <input onChange={(e)=> setdata(prev=> ({...prev, firstname: e.target.value}))} type="text" style={{width: "100%", padding: 10, boxSizing: "border-box", borderRadius: 6}} />
                <div style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: 'center'}}>
                    <div style={{marginBottom: 8, fontWeight: 600, color: "#000"}}>
                    Tên
                    </div>
                </div>
                <input onChange={(e)=> setdata(prev=> ({...prev, lastname: e.target.value}))} type="text" style={{width: "100%", padding: 10, boxSizing: "border-box", borderRadius: 6}} autoComplete="off" />
                <div style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: 'center'}}>
                    <div style={{marginBottom: 8, fontWeight: 600, color: "#000"}}>
                    Mật khẩu
                    </div>
                </div>
                <input onChange={(e)=> setdata(prev=> ({...prev, password: e.target.value}))} type="password" style={{width: "100%", padding: 10, boxSizing: "border-box", borderRadius: 6}} />
                <div style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: 'center'}}>
                    <div style={{marginBottom: 8, fontWeight: 600, color: "#000"}}>
                    Xác nhận mật khẩu
                    </div>
                </div>
                <input onChange={(e)=> setdata(prev=> ({...prev, password: e.target.value}))} type="password" style={{width: "100%", padding: 10, boxSizing: "border-box", borderRadius: 6}} />
                <div style={{width: "100%", display: "flex", justifyContent: "flex-start", alignItems: 'flex-start', gap: 10, marginTop: 10}}>
                    <div onClick={async ()=> {
                        await signup(data, setopensnackbar)
                        setopen(()=> false)
                    }} style={{padding: 10, color: "#fff", backgroundColor: "#ff5e1f", fontWeight: 600, borderRadius: 6, whiteSpace: "nowrap"}}>
                    Đăng ký
                    </div>
                    <div>
                    <div style={{fontSize: 14, color: "#000"}}>Bạn đã có tài khoản ?</div>
                    <div style={{fontSize: 14, fontWeight: 600, color: "#2e89ff"}}>Đăng nhập</div>
                </div>
                
            </div>
            <div style={{width: "100%", textAlign: "center", marginTop: 5, fontWeight: 600, fontSize: 13, color: "#000"}}>
                Hoặc đăng nhập bằng
            </div>
            <div style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: 'flex-start', gap: 5, marginTop: 10}}>
                <div onClick={()=> loginfacebook()} style={{padding: 10, backgroundColor: "#3b5998", flex: "1 1 0", borderRadius: 6, textAlign: "center", color: "#fff", fontWeight: 600, display: "flex", justifyContent: "center", alignItems: 'center',gap: 7, cursor: "pointer"}}>
                <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/5f2c27c2674ad4a01c1cd42b2e0884aa.svg" width="16" height="16" alt="open" />
                <div>
                    Facebook
                </div>
                </div>
                <div onClick={()=> logingoogle()} style={{padding: 10, backgroundColor: "#4285f4", flex: "1 1 0", borderRadius: 6, textAlign: "center", color: "#fff", fontWeight: 600, display: "flex", justifyContent: "center", alignItems: 'center',gap: 7, cursor: "pointer"}}>
                <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/c6bf231775a1d162b567c0882e1d7e3b.svg" width="16" height="16" alt="open" />
                <div>
                    Google
                </div>
                </div>
            </div>
            </div>
        }
        <Snackbar
            open={opensnackbar}
            autoHideDuration={6000}
            onClose={()=> setopensnackbar(()=> false)}
            message="Signup is successfully"
            action={action}
        />
    </div>
  )
}

export default SignupIndex