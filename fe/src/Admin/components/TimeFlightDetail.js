import { Backdrop, CircularProgress, IconButton, Snackbar } from '@mui/material'
import moment from 'moment'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import { detail } from '../../f/detail';
import { delete_ } from '../../f/delete';
import { get_customer_book } from '../../f/get_customer_book';


const TimeFlightDetail = (props) => {
  const location= useLocation()
  const [data, setdata]= useState(()=> 0)
  const [loading, setloading]= useState(()=> false)
  const [opensnack, setopensnack]= useState(()=> false)
  const [detail_, setdetail_]= useState(()=> false)
  const [datacustomer, setdatacustomer]= useState(()=> [])
  return (
    <>
        <div style={{fontSize: 16, display: "flex", flexDirection: "row-reverse", alignItems: "center", justifyContent: 'space-between', width: "100%"}}>
        <div style={{display: "flex", flexDirection: "column", }}>
            <span style={{}}>Ngày bắt đầu : <span style={{color: "green"}}>{moment(props.dayflight, "DD-MM-YYYY").format("DD MMM YYYY")}</span></span>
            <span style={{}}>Ngày kết thúc : <span style={{color: "green"}}>{moment(props.daydestination, "DD-MM-YYYY").format("DD MMM YYYY")}</span></span>
        </div>
        <div>
            <div onClick={()=> {
              if(props.data_id.toString() === props.detail.toString()) {
                  props.setdetail(prev=> 0)
              }
              else {
                  detail(props.x_id, setdata)
                  props.setdetail(prev=> props.data_id)
              }
            }} style={{fontSize: 17, fontWeight: 600, color: "#2e89ff", cursor: "pointer"}}>{props.data_id.toString() === props.detail.toString() ? "Thu gọn" : "Chi tiết"}</div>
        </div>
        </div>
        <div style={{width: "100%", height: props.detail.toString() === props.data_id.toString() ? "auto" : 0, transition: "all 0.2s linear", background: "#fff", marginTop: 8, borderRadius: 10, overflow: "hidden", boxSizing: "border-box", padding: props.detail.toString() === props.data_id.toString() ? 10 : 0}}>
            <div>Thông tin chuyến bay</div>
            <br />
            <div style={{fontSize: 18, fontWeight: 600}}>Số hành khách đã đặt vé: {data}&nbsp;&nbsp;&nbsp;&nbsp; {<span onClick={()=> {
              setdetail_(prev=> !prev)
              if(detail_=== false) {
                get_customer_book(props.id_flight, setdatacustomer)
              }
            }} style={{color: "#2e89ff", cursor: "pointer"}}>{detail_=== true ? "Thu gọn" : "Chi tiết"}</span>} </div>
            {
              detail_=== true &&
              <>
                {
                  datacustomer && datacustomer?.map((item, key)=> 
                  <React.Fragment key={key}>
                    {
                      item?.type_user.toString()=== "agent" &&
                      <div>
                        <div>Kiểu khách hàng: <strong>{item?.type_user}</strong></div>
                        <div>Họ tên đầy đủ: <strong>{item?.name} {item?.surname}</strong></div>
                        <div>Email: <strong>{item?.email}</strong></div>
                        <div>Đã đặt chuyến bay lúc: <strong>{item?.time_book}</strong></div>
                      </div>
                    }
                    <br />
                      {
                      item?.type_user.toString()=== "customer" &&
                      <div>
                        <div>Kiểu khách hàng: <strong>{item?.type_user}</strong></div>
                        <div>Họ tên đầy đủ: <strong>{item?.name} {item?.surname}</strong></div>
                        <div>Ngày tháng năm sinh: <strong>{item?.date_birth}/{item?.month_birth}/{item?.year_birth}</strong></div>
                        <div>Quốc tịch: <strong>{item?.nationality}</strong></div>
                        <div>Email: <strong>{item?.email || "_"}</strong></div>
                        <div>Đã đặt chuyến bay lúc: <strong>{item?.time_book}</strong></div>
                      </div>
                }
                  </React.Fragment>)
                }
              </>
            }
            <br />
            <div style={{fontSize: 18, fontWeight: 600}}>Thời gian bay: 
                {moment.utc(moment(`${props.timearrive} ${props.daydestination}`, "hh:mm DD-MM-YYYY").diff(moment(`${props.timestart} ${props.dayflight}`, "hh:mm DD-MM-YYYY"))).format("h[h]mm[ph]")}
            </div>
            <br />
            <div>Thời gian khởi hành:&nbsp;
                <span style={{fontSize: 18, fontWeight: 600}}>{moment(props.timestart, "hh:mm").format("hh[h]mm[ph]")}&nbsp;{props.dayflight}</span>
            </div>
            <br />
            <div>Thời gian đến nơi:&nbsp; 
            <span style={{fontSize: 18, fontWeight: 600}}>{moment(props.timearrive, "hh:mm").format("hh[h]mm[ph]")}&nbsp;{props.daydestination}</span>
            </div>
            <br />
            <div>
                Số hiệu máy bay:&nbsp;
                <span style={{fontSize: 18, fontWeight: 600}}>{props.aircraft_number}</span>
            </div>
            <br />
            <div>Hãng máy bay:&nbsp;
                <span style={{fontSize: 18, fontWeight: 600}}>{props.brand}</span>
            </div>
        </div>
        <div onClick={()=> {delete_(props.x_id, location.pathname.split("/")[3], setloading, setopensnack)
            props.setchange(prev=> !prev)
            props.setdata(props.data?.filter(item=> item.id_flight.toString() !== props.x_id.toString()))
        }} style={{width: "100%", fontSize: 17, fontWeight: 600, color: "#ff0000", cursor: "pointer"}}>
            Xóa
        </div>
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
        >
          <>
              <span style={{fontSize: 24, fontWeight: 600, color: "#e4e6eb"}}>Deleting&nbsp;&nbsp;</span>
              <CircularProgress color="inherit" />
          </>
        </Backdrop>
        <Snackbar
          open={opensnack}
          autoHideDuration={3000}
          message="The flight was deleted sucessfully"
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

export default TimeFlightDetail