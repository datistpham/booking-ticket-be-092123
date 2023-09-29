import "./style/style.sass"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SearchFlight from "./components/Search/SearchFlight/SearchFlight"
import SearchHotel from "./components/Search/SearchHotel/SearchHotel"
import SearchCombo from "./components/ComboHotelFlight/SearchCombo/SearchCombo"
import LoginIndex from "./components/Login/LoginIndex"
import { memo, useEffect, useState } from "react"
import SignupIndex from "./components/Signup/SignupIndex"
import { Link, Navigate } from "react-router-dom"
import Booking from "./Booking/Booking"
import { lazy, Suspense } from "react"
import { CircularProgress } from "@mui/material"
import Container from "./components/Container/Container"
import AdminPage from "./Admin/AdminPage"
import { id_admin } from "./Constant"
import NotFound404 from "./NotFound/NotFoundPage"
import axios from "axios"
import Cookie from "js-cookie"
import CachedIcon from '@mui/icons-material/Cached';
import "./i18n"
import { useTranslation } from "react-i18next"
import HomePage from "./components/HomePage/HomePage"
import { API_URL } from "./config"
import PaymentSuccess from "./Payment/PaymentSuccess"
import PaymentFailure from "./Payment/PaymentFailed"
import ErrorPage from "./Error/Error"
// import moment from "moment"


const PreBookingComponent = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./components/PreBooking/PreBookingComponent")), 500);
  });
});

export const days= ["Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy", "Chủ nhật"]
export const months= ["Thg 1", "Thg 2", "Thg 3", "Thg 4", "Thg 5","Thg 6","Thg 7", "Thg 8", "Thg 9","Thg 10","Thg 11","Thg 12"]
export const locale= {
  localize: {
    day: n=> days[n],
    month: n=> months[n]
  },
  formatLong: {
    date: () => "mm/dd/yyyy"
  }
}

const App=(props)=> {
  const [uid, setuid]= useState(()=> "")
  const [bookplane, setbookplane]= useState(()=> true)
  const { t, i18n }= useTranslation()
  useEffect(()=> {
    (async()=> {
      const res= await axios({
        url: API_URL + "/auto",
        method: 'post',
        data: {
          id: Cookie.get("id")
        },

      })
      const result= await res.data
      setuserlogin(()=> result[0])
    })()
  }, [])
  const [lang, setlang]= useState(localStorage.getItem("lang"))
  const [userlogin, setuserlogin]= useState(()=> [])
  useEffect(()=> {
    const lang= localStorage.getItem("lang")
    if(lang) {
      setlang(lang)
    }
    else {
      setlang("VIE")
    }
  }, [])
  
  return (
    <>
    <Router>
      <div style={{height: 60, width: "100%", background: "#f2f3f3"}}></div>
      <div style={{height: 60, width: "100%", background: "#fff", position: "fixed", left: 0, top: 0, zIndex: 9999, display: "flex", padding: "0 50px", justifyContent: "space-between", backgroundColor: "#fff", alignItems: "center", boxSizing: "border-box"}}>
        <div style={{display: "flex", justifyContent: 'center',alignItems: "center", gap: 50}}>
          <Link to={"/"} style={{textDecoration: "none", color: "#2e89ff", fontSize: 20, fontWeight: 600}}>
            Home
          </Link>
          <div style={{display: "flex", flexDirection: "row", justifyContent: 'center',alignItems: 'center',gap: 20}}>
            <Link onClick={()=> setbookplane(()=> true)} to="/booking?q=flight" style={{color: "#000", fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap"}}>
                {t('Chuyến bay')}
            </Link>
            <Link onClick={()=> setbookplane(()=> false)} to="/booking?q=hotel" style={{color: "#000", fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap"}}>
              {t('Khách sạn')}
            </Link> 
            {/* <Link onClick={()=> setbookplane(()=> undefined)} to="/booking?q=combo" style={{color: "#000", fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap"}}>
            {t('Chuyến bay + khách sạn')}
            </Link> */}
          </div>
        </div>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 10}}>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 10}}>
            <div>{lang}</div>
            <div onClick={()=> {
              if(lang=== "VIE") {
                setlang(()=> "ENG")
                i18n.changeLanguage("eng")
                localStorage.setItem("lang", "ENG")
              }
              else {
                setlang(()=> "VIE")
                i18n.changeLanguage("vie")
                localStorage.setItem("lang", "VIE")
              }
            }} style={{display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer"}}><CachedIcon></CachedIcon></div>
          </div>
          {
            lang=== "VIE" && 
            <img referrerPolicy='no-referrer' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png" alt="" style={{ height: 30, aspectRatio: 3 / 2}} />
          }
          {
            lang=== "ENG" && 
            <img referrerPolicy='no-referrer' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/800px-Flag_of_the_United_Kingdom_%281-2%29.svg.png" alt="" style={{ height: 30,  aspectRatio: 3 / 2}} />
          }
          <br />
          <LoginIndex userlogin={userlogin} uid={uid} setuid={setuid} />
          {
            uid?.length<=0 &&
            <SignupIndex />
          }
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/booking" element={<Container bookplane={bookplane} setbookplane={setbookplane} />}></Route>
        <Route path="/flight/fullsearch" element={<SearchFlight />}></Route>
        <Route path="/hotel/search" element={<SearchHotel />}></Route>
        <Route path="/search/combo" element={<SearchCombo />}></Route>
        <Route path="/pre-booking/:id" element={<Suspense fallback={<Loading/>}><PreBookingComponent /></Suspense>}></Route>
        <Route path="/booking/v2/:id" element={<Booking />}></Route>
        <Route path="/admin/manage/*" element={<AdminPage />}></Route>
        <Route path="/admin/manage/" element={<Navigate to="/admin/manage/flight" state={{uid: id_admin}} />}></Route>
        <Route path="/admin/manage/flight" element={<Navigate state={{uid: id_admin}} to={"/admin/manage/flight/all_flight"} />}></Route>
        <Route path="/admin/manage/hotel" element={<Navigate state={{uid: id_admin}} to={"/admin/manage/hotel/all_hotel"} />}></Route>
        <Route path="/payment/status/success" element={<PaymentSuccess />} />
        <Route path="/payment/status/failure" element={<PaymentFailure />} />
        <Route path={"/error"} element={<ErrorPage />} />
        <Route path="*" element={<NotFound404 />}></Route>
      </Routes>
    </Router>
    </>
  )
}
const Loading= memo(()=> {
  return (
    <div style={{width: "100%", display: "flex", justifyContent: 'center',alignItems: "center"}}><span style={{fontSize: 24, fontWeight: 600, color: "#242526"}}>Loading...&nbsp;&nbsp;</span><CircularProgress /></div>
  )
})

export default App