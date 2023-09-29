import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { id_admin } from '../../Constant'
import { login } from '../../f/login'
import { logout } from '../../f/logout'
import { loginfacebook } from '../firebase/facebook'
import { keeplogin, logingoogle, signout } from '../firebase/google'

const LoginIndex = (props) => { 
  const [open, setopen]= useState(()=> false)
  const [user, setuser]= useState(()=> ({
      name: "",
      email: "",
      photo: "",
      phonenumer: ""
  }))
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
  useEffect(()=> {
    keeplogin(props.setuid, setuser)
  }, [props.setuid])
  const [data, setdata]= useState(()=> ({
    account: "",
    password: "",
  }))
  const [wrong, setwrong]= useState(()=> false)
  if(props.uid?.length> 0) {
      return (
        <div style={{display: "flex", justifyContent: "center", position: "relative", alignItems: "center", gap: 10, cursor: "pointer"}}>
            <div style={{userSelect: "none", display: "flex", justifyContent: 'center',alignItems: "center", gap: 10}} onClick={()=> setopen(prev=> !prev)}>
                <img referrerPolicy='no-referrer' src={user.photo} alt="open" style={{width: 36, height: 36, objectFit: "cover", borderRadius: "50%"}} />
                {user.name}
            </div>
            <div>   
                <img importance="low" loading="lazy" src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/393c6a1dee81cd3dc84df59672d43edb.svg" decoding="async" width="12" height="12" className='dewq-2' alt="open" />
            </div>
            {
                open=== true &&
                <div ref={myRef} style={{position: "absolute", width: 300, boxSizing: "border-box", padding: 16, background: "#fff", borderRadius: 6, top: "100%", right: 0, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", marginTop: 10}}> 
                    <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <img src={user.photo} alt="open" style={{width: 80, height: 80, objectFit: "cover", borderRadius: "50%"}} />
                    </div>
                    <div style={{marginTop: 10}}>
                        Username: {user.name}
                    </div>
                    <div style={{marginTop: 5}}>
                        Email: {user.email}
                    </div>
                    {
                        user.phonenumer?.length> 0
                        &&
                        <div style={{marginTop: 5}}>
                            Phonenumber: {user.phonenumer}
                        </div>
                    }
                    {
                        props?.uid=== id_admin &&
                        <div style={{width: "100%", display: "flex",justifyContent: 'center', alignItems: "center", marginTop: 7}}>
                            <Link to="/admin/manage" state={{uid: props?.uid}} style={{textDecoration: "none"}}>
                                <div onClick={()=> {
                                    setopen(()=> false)
                                }} style={{padding: 10, borderRadius: 10, backgroundColor: "#2e89ff", color: "#fff", fontWeight: 600}}>
                                    Manage app
                                </div>
                            </Link>
                    </div>    
                    }
                    <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginTop: 7}}>
                        <div onClick={()=> {
                            signout(props.setuid, setuser)
                            setopen(()=> false)
                        }} style={{padding: 10, borderRadius: 10, backgroundColor: "#f2f0f5", color: "#3a3b3c", fontWeight: 600}}>
                            Log out
                        </div>
                    </div>    
                </div>
            }
        </div>
      )
  }
  else if(props?.userlogin?.account?.length> 0) return (
    <div style={{display: "flex", justifyContent: "center", position: "relative", alignItems: "center", gap: 10, cursor: "pointer"}}>
            <div style={{userSelect: "none", display: "flex", justifyContent: 'center',alignItems: "center", gap: 10}} onClick={()=> setopen(prev=> !prev)}>
                {props.userlogin.firstname} {props.userlogin.lastname} 
            </div>
            <div>   
                <img importance="low" loading="lazy" src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/393c6a1dee81cd3dc84df59672d43edb.svg" decoding="async" width="12" height="12" className='dewq-2' alt="open" />
            </div>
            {
                open=== true &&
                <div ref={myRef} style={{position: "absolute", width: 300, boxSizing: "border-box", padding: 16, background: "#fff", borderRadius: 6, top: "100%", right: 0, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", marginTop: 10}}> 
                    <div style={{marginTop: 10}}>
                        Username: {props.userlogin.firstname} {props.userlogin.lastname} 
                    </div>
                    <div style={{marginTop: 5}}>
                        Email: {props.userlogin.account}
                    </div>
                    {
                        user.phonenumer?.length> 0
                        &&
                        <div style={{marginTop: 5}}>
                            Phonenumber: {user.phonenumer}
                        </div>
                    }
                    {
                        props?.uid=== id_admin &&
                        <div style={{width: "100%", display: "flex",justifyContent: 'center', alignItems: "center", marginTop: 7}}>
                            <Link to="/admin/manage" state={{uid: props?.uid}} style={{textDecoration: "none"}}>
                                <div onClick={()=> {
                                    setopen(()=> false)
                                }} style={{padding: 10, borderRadius: 10, backgroundColor: "#2e89ff", color: "#fff", fontWeight: 600}}>
                                    Manage app
                                </div>
                            </Link>
                    </div>    
                    }
                    <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginTop: 7}}>
                        <div onClick={()=> {
                            signout(props.setuid, setuser)
                            logout()
                            setopen(()=> false)
                        }} style={{padding: 10, borderRadius: 10, backgroundColor: "#f2f0f5", color: "#3a3b3c", fontWeight: 600}}>
                            Log out
                        </div>
                    </div>    
                </div>
            }
        </div>
  )
  else return (
    <div style={{display: "flex", justifyContent: "center", position: "relative", alignItems: "center", gap: 10, cursor: "pointer"}}>
    <TriggerLogin data={data} setopen={setopen} />
    {/*  */}
    {
        open=== true &&
        <div ref={myRef} style={{position: "absolute", width: 300, boxSizing: "border-box", padding: 16, background: "#fff", borderRadius: 6, top: "100%", right: 0, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", marginTop: 10}}> 
            <div>Đăng nhập tài khoản</div>
            <br />
            <div style={{marginBottom: 8, fontWeight: 600}}>Email hoặc số điện thoại</div>
            <input onChange={(e)=> setdata(prev=> ({...prev, account: e.target.value}))} type="text" style={{width: "100%", padding: 10, boxSizing: "border-box", borderRadius: 6,}} />
            <br />
            <div style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: 'center'}}>
                <div style={{marginBottom: 8, fontWeight: 600}}>
                Mật khẩu
                </div>
                <div style={{color: "#2e89ff", fontSize: 14,  fontWeight: 600}}>
                Quên mật khẩu
                </div>
            </div>
            <input onChange={(e)=> setdata(prev=> ({...prev, password: e.target.value}))} type="password" style={{width: "100%", padding: 10, boxSizing: "border-box", borderRadius: 6}} />
            <div style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: 'flex-start', gap: 5, marginTop: 10}}>
                
                <div onClick={()=> {
                    login(data, setwrong)
                    setopen(prev=> !prev)
                }} 
            
                style={{padding: 10, color: "#fff", backgroundColor: "#ff5e1f", fontWeight: 600, borderRadius: 6, whiteSpace: "nowrap"}}>
                    Đăng nhập
                </div>
                <div>
                {
                    wrong=== true &&
                    <div style={{color: "red"}}>Tài khoản hoặc mật khẩu không chính xác</div>
                }
                <div style={{fontSize: 14}}>Bạn chưa có tài khoản ?</div>
                <div style={{fontSize: 14, fontWeight: 600, color: "#2e89ff"}}>Đăng ký</div>
            </div>
            
        </div>
        <div style={{width: "100%", textAlign: "center", marginTop: 5, fontWeight: 600, fontSize: 13}}>
            Hoặc đăng nhập bằng
        </div>
        <div style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: 'flex-start', gap: 5, marginTop: 10}}>
            <div onClick={()=> loginfacebook()} style={{padding: 10, backgroundColor: "#3b5998", flex: "1 1 0", borderRadius: 6, textAlign: "center", color: "#fff", fontWeight: 600, display: "flex", justifyContent: "center", alignItems: 'center',gap: 7, cursor: "pointer"}}>
            <img referrerPolicy='no-referrer' src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/5f2c27c2674ad4a01c1cd42b2e0884aa.svg" width="16" height="16" alt="open" />
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
  </div>
  )
}
const TriggerLogin= (props)=> {
    return (
        <div style={{display: "flex", justifyContent: "center", position: "relative", alignItems: "center", gap: 10, cursor: "pointer"}}>
            <div style={{width: 24, height: 24, background: "#f2f0f5", display: 'flex', justifyContent: 'center',alignItems: "center", borderRadius: "50%"}}>
            <img importance="low" alt="open" loading="lazy" src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/f/f2ccb8732da6068a2f24a40aea2bdcdd.svg" decoding="async" width="14" height="14" className="awo-2" />
            </div>
            <div onClick={()=> {
                props.setopen(prev=> !prev)
            }}>
                Đăng nhập
            </div>
            <div>
                <img importance="low" loading="lazy" src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/393c6a1dee81cd3dc84df59672d43edb.svg" decoding="async" width="12" height="12" className='dewq-2' alt="open" />
            </div>
        </div> 
    )
}

export default LoginIndex