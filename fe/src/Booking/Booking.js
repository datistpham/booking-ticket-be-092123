import { CircularProgress, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { bookticket } from '../f/book_ticket'
import FormCustomer from './FormCustomer'
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import { loadStripe } from '@stripe/stripe-js';
import axios from "axios"
import { API_URL } from '../config'
import swal from "sweetalert"
import ErrorPage from '../Error/Error'

const stripePromise = loadStripe('pk_test_51KuWAjDq3U6SJ691wGf9YHe0wZC0O51ddczJ4oSBnGTwYgx9VZW4s1GIie1jWY4TiLHoEzuPzdQqtalMuA9twxoS00wCLbL1O7');

const Booking = (props) => {
  const [error, setError]= useState(false)
  const location= useLocation()
  const [total, setTotal]= useState()
  const [amount, setAmount]= useState()
  const [isConfirm, setIsConfirm]= useState(false)
  const [agent, setagent]= useState(()=> ({
    name: "",
    surname: "",
    phonenumber: "",
    email: ""
  }))
  const [alluser, setalluser]= useState(()=> ([]))
  const [loading, setloading]= useState(()=> false)
  const [opensnack, setopensnack]= useState(()=> false)
  const navigate= useNavigate()
  const [accept, setaccept]= useState(()=> false )
  const handlePayment = async () => {
    setloading(true)

    const stripe = await stripePromise;

    // Gọi API của bạn để tạo một đơn đặt hàng (order) trên máy chủ
    const orderData = {
      // Thông tin đặt hàng
    };
    // Gọi API để tạo một phiên (checkout session) trên máy chủ
    const response = await axios(API_URL + '/api/v1/payment/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        orderData,
        quality: amount, 
        total
      },
    });
    setloading(false)
    const session = await response.data;
    localStorage.setItem("payment", JSON.stringify(session))

    // Sử dụng phương thức redirectToCheckout để chuyển hướng người dùng đến trang thanh toán Stripe
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // Xử lý lỗi
      console.error(result.error);
    }
  };

  useEffect(()=> {
    if(location?.state) {
      setTotal(parseInt(location.state?.ps?.split(".")[0]) * parseInt(location.state?.cost_adult) + parseInt(location.state?.ps?.split(".")[1]) * parseInt(location.state?.cost_kid) + parseInt(location.state?.ps?.split(".")[2]) * parseInt(location.state?.cost_baby))
      setAmount(parseInt(location.state?.ps?.split(".")[0]) + parseInt(location.state?.ps?.split(".")[1]) + parseInt(location.state?.ps?.split(".")[2]))
    }
    else {
      // navigate("")
      setError(true)
    }
  }, [location.state])

  return (
    <>
      <div style={{width: "100%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
        {
          error=== true &&  <>
          <div style={{width: "100%", maxWidth: 1024}}>
          <div style={{fontSize: 24, fontWeight: 600}}>Đặt chỗ của tôi</div>
          <div>Điền thông tin của bạn và các hành khách</div>
        </div>
        <br />
        <div style={{fontSize: 24, fontWeight: 600, width: "100%", maxWidth: 1024}}>Thông tin liên hệ</div>
        <br />
        <div className='djefgjegffd' style={{width: "100%", maxWidth: 1024, borderRadius: 10, background: "#fff", boxSizing: "border-box", padding: 10}}>
          <div>Thông tin liên hệ (nhận vé/ phiếu thanh toán)</div>
        </div>
        <div style={{width: "100%", maxWidth: 1024, display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 10, padding: 20, boxSizing: "border-box", background: "#f7f9fa", borderRadius: 7,boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", backgroundColor: "#fff"}}>
          <div className='sdfadfsasdaas' style={{width: "49%"}}>
            <div style={{marginBottom: 10, fontWeight: 600}}>Họ (vd: Nguyen)</div>
            <input onChange={(e)=> setagent(prev=> ({...prev, name: e.target.value}))} type="text" style={{padding: 10, borderRadius: 6, width: "90%", border: "1px solid #cdd0d1"}} />
            <div style={{color: "#687176", fontSize: 12, marginTop: 4 }}>như trên CMND (không dấu)</div>
          </div>
          <div className='sdfadfsasdaas' style={{width: "49%"}}>
            <div style={{marginBottom: 10, fontWeight: 600}}>Tên đệm & tên (vd: Thi Ngoc Anh)</div>
            <input onChange={(e)=> setagent(prev=> ({...prev, surname: e.target.value}))} type="text" style={{padding: 10, borderRadius: 6, width: "90%", border: "1px solid #cdd0d1"}} />
            <div style={{color: "#687176", fontSize: 12, marginTop: 4 }}>như trên CMND (không dấu)</div>
          </div>
          <div className='sdfadfsasdaas' style={{width: "49%"}}>
            <div style={{marginBottom: 10, fontWeight: 600}}>Điện thoại di động</div>
            <input onChange={(e)=> setagent(prev=> ({...prev, phonenumber: e.target.value}))} type="text" style={{padding: 10, borderRadius: 6, width: "90%", border: "1px solid #cdd0d1"}} />
            <div style={{color: "#687176", fontSize: 12, marginTop: 4 }}>VD: +84 901234567 trong đó (+84) là mã quốc gia và 901234567 là số di động</div>
          </div>
          <div className='sdfadfsasdaas' style={{width: "49%"}}>
            <div style={{marginBottom: 10, fontWeight: 600}}>Email</div>
            <input onChange={(e)=> setagent(prev=> ({...prev, email: e.target.value}))} type="text" style={{padding: 10, borderRadius: 6, width: "90%", border: "1px solid #cdd0d1"}} />
            <div style={{color: "#687176", fontSize: 12, marginTop: 4 }}>VD: email@example.com</div>
          </div>
        </div>
        <br />
        <br />
        <div style={{fontSize: 24, fontWeight: 600, width: "100%", maxWidth: 1024}}>Thông tin hành khách</div>
        <br />
        {
          location.state.ps && 
          <>
            {
              Array.from(Array(parseInt(location.state.ps.split(".")[0])).keys()).map((item, key)=> <FormCustomer setaccept={setaccept} setalluser={setalluser} title={"Người lớn "+(parseInt(key) + 1)} key={key} {...item} />)
            }
              
            {
              Array.from(Array(parseInt(location.state.ps.split(".")[1])).keys()).map((item, key)=> <FormCustomer setaccept={setaccept} setalluser={setalluser} title={"Trẻ em "+ (parseInt(key) + 1)} {...item} key={key} />)
            }
            {
              Array.from(Array(parseInt(location.state.ps.split(".")[2])).keys()).map((item, key)=> <FormCustomer setaccept={setaccept} setalluser={setalluser} title={"Em bé "+ (parseInt(key) + 1)} {...item} key={key} />)
            }
          </>
        }
        {
          location.state.detail_customer && 
          <>
            {
              
              Array.from(Array(parseInt(location.state.detail_customer.split(".")[0])).keys()).map((item, key)=> <FormCustomer setaccept={setaccept} setalluser={setalluser} title={"Người lớn "+(parseInt(key) + 1)} key={key} {...item} />)
            }
              
            {
              Array.from(Array(parseInt(location.state.detail_customer.split(".")[1])).keys()).map((item, key)=> <FormCustomer setaccept={setaccept} setalluser={setalluser} title={"Trẻ em "+ (parseInt(key) + 1)} {...item} key={key} />)
            }
            
          </>
        }
        <br />
        <div style={{width: "100%", maxWidth: 1024, display: "flex"}}>
          {
            isConfirm=== false && <button onClick={()=> {
              swal("Thông báo", "Bạn đã xác nhận những thông tin ở trên là chính xác", {buttons: {
                ok: "Xác nhận", 
                cancel: "Đóng"
              }})
              .then(value=> {
                if(value=== "ok") {
                  setIsConfirm(true)
                }
                else {
                  return null
                }
              })
          }} className='sdjsiajwiawa' style={{padding: "8px 40px", background: "#2e89ff", color: "#fff", fontWeight: 600, borderRadius: 8, width: "max-content", cursor: accept=== true ? "pointer" : "not-allowed", display: "flex", justifyContent: "center", alignItems: "center", borderColor: "currentcolor", opacity: accept=== true ? 1 : 0.5}}>
            Xác nhận
          </button>
          }
          {
            isConfirm=== true && <button disabled={accept=== false ? true : false} onClick={()=> {
            handlePayment()
            // bookticket(agent, alluser, location.state.id_flight || location.state.id_hotel, setloading, setopensnack, navigate)
          }} className='sdjsiajwiawa' style={{padding: "8px 40px", background: "#2e89ff", color: "#fff", fontWeight: 600, borderRadius: 8, width: "max-content", cursor: accept=== true ? "pointer" : "not-allowed", display: "flex", justifyContent: "center", alignItems: "center", borderColor: "currentcolor", opacity: accept=== true ? 1 : 0.5}}>
            {loading=== false ? "Thanh toán" : <div style={{width: 38.150, height: 21.6, display: "flex", justifyContent: 'center',alignItems: "center",}}><CircularProgress style={{color: "#fff", width: 21.6, height: 21.6}} /></div>}
          </button>
          }
        </div>
        <br />
        <br />
          </>
        }
        {
          error=== true && <ErrorPage />
        }
      </div>
      <Snackbar
        open={opensnack}
        autoHideDuration={3000}
        message="Booking is successfully"
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
          >
            <div onClick={()=> setopensnack(()=> false)} style={{display: "flex", justifyContent: 'center',alignItems: "center"}}>
              <CloseIcon fontSize="small" />
            </div>
          </IconButton>
        }
      />
    </>
  )
}



export default Booking