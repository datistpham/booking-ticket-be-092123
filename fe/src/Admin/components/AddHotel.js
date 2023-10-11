import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import { Backdrop, Button, CircularProgress, IconButton, Snackbar } from '@mui/material';
import { useState } from 'react';
import { add_hotel } from '../../f/add_hotel';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { NumberFormatCustom } from './AddFlight';

const AddHotel = (props) => {
  const [hotel, sethotel]= useState(()=> ({
    code_location: "",
    name_hotel: "",
    photo_hotel: "",
    brand: "",
    logo_brand: "",
    location: "",
    cost_adult: 0,
    cost_kid: 0,
    cost_baby: 0,
    discount: 0,
    type: "",
    available_from: "",
    expire_day: "",
    detail_location: "",
    country_location: "",
    review: 0,
    wifi: 0,
    pool: 0,
    parking: 0,
    restaurant: 0,
    receptionist: 0,
    elevator: 0,
    fitness_center: 0,
    meeting: 0,
    airport_shuttle: 0,
  }))
  const [disable, setdisable]= useState(()=> true)
  const handleBlur= ()=> {
    setdisable(()=> false)
    if(hotel.code_location?.length <=0 || hotel.name_hotel?.length<=0 || hotel.photo_hotel?.length <=0 || hotel.brand?.length <=0 || hotel.type?.length<=0 || hotel.available_from?.length <=0 || hotel?.expire_day?.length <=0 || 
        hotel?.detail_location?.length <=0 || hotel.cost_adult <0 || hotel.cost_kid <0 || hotel.cost_baby <0 || hotel.discount <0 || hotel.country_location?.length <= 0) {
            setdisable(()=> true)
        }
        else {
            setdisable(()=> false)
        }
  }
  
  const [loading, setloading]= useState(()=> false)
  const [opensnack, setopensnack]= useState(()=> false)
  const navigate= useNavigate()
  return (
    <div className="gegfdsesgfdes" style={{flex: "1 1 0", height: "100%", overflowY: "auto", padding: 10, boxSizing: 'border-box', }}>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onBlur={()=> handleBlur()}
            color={hotel.code_location?.length <=0 ? "error" : "primary"} helperText={hotel.code_location?.length <=0 ? <div style={{color: "red"}}>Enter your code_location</div> : <></>} 
             onChange={(e)=> sethotel(prev=> ({...prev, code_location: e.target.value}))} id="outlined-basic" label="Mã vùng (Ví dụ: DAN)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField 
            color={hotel.name_hotel?.length <=0 ? "error" : "primary"} helperText={hotel.name_hotel?.length <=0 ? <div style={{color: "red"}}>Enter your name_hotel</div> : <></>} 
            onBlur={()=> handleBlur()} onChange={(e)=> sethotel(prev=> ({...prev, name_hotel: e.target.value}))} id="outlined-basic" label="Tên khách sạn (Ví dụ: Luxury Hotel)" variant="outlined" />
        </Box>
        <Box
            component="form"
            disable={true}
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField 
            color={hotel.photo_hotel?.length <=0 ? "error" : "primary"} helperText={hotel.photo_hotel?.length <=0 ? <div style={{color: "red"}}>Enter your photo_hotel</div> : <></>} 
            onBlur={()=> handleBlur()} onChange={(e)=> sethotel(prev=> ({...prev, photo_hotel: e.target.value}))} id="outlined-basic" label="Ảnh khách sạn (Nhập đường dẫn ảnh của khách sạn)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField 
            color={hotel.brand?.length <=0 ? "error" : "primary"} helperText={hotel.brand?.length <=0 ? <div style={{color: "red"}}>Enter your brand</div> : <></>} 
            onBlur={()=> handleBlur()} onChange={(e)=> sethotel(prev=> ({...prev, brand: e.target.value}))} id="outlined-basic" label="Hãng khách sạn (Ví dụ: Vin Group)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField 
            color={hotel.location?.length <=0 ? "error" : "primary"} helperText={hotel.location?.length <=0 ? <div style={{color: "red"}}>Enter your location</div> : <></>} 
            onBlur={()=> handleBlur()} onChange={(e)=> sethotel(prev=> ({...prev, location: e.target.value}))} id="outlined-basic" label="Tỉnh / Thành phố (Ví dụ: Đà Nẵng)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField
            color={hotel.available_from?.length <=0 ? "error" : "primary"} helperText={hotel.available_from?.length <=0 ? <div style={{color: "red"}}>Enter your available_from</div> : <></>} 
            onBlur={()=> handleBlur()} onChange={(e)=> sethotel(prev=> ({...prev, available_from: e.target.value}))} id="outlined-basic" label="Có sẵn từ (Ví dụ: 29-05-2022 - Nhập đúng định dạng DD-MM-YYYY)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField
            color={hotel.ex?.length <=0 ? "error" : "primary"} helperText={hotel.ex?.length <=0 ? <div style={{color: "red"}}>Enter your ex</div> : <></>} 
            onBlur={()=> handleBlur()} onChange={(e)=> sethotel(prev=> ({...prev, expire_day: e.target.value}))} id="outlined-basic" label="Ngày hết hạn (Ví dụ: 11-06-2022 - Nhập đúng định dạng DD-MM-YYYY)" variant="outlined" />
        </Box>

        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField
            color={hotel.detail_location?.length <=0 ? "error" : "primary"} helperText={hotel.detail_location?.length <=0 ? <div style={{color: "red"}}>Enter your detail_location</div> : <></>} 
            onBlur={()=> handleBlur()} onChange={(e)=> sethotel(prev=> ({...prev, detail_location: e.target.value}))} id="outlined-basic" label="Địa điểm chi tiết (Ví dụ: Quận Liên Chiểu)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField
            color={hotel.country_location?.length <=0 ? "error" : "primary"} helperText={hotel.country_location?.length <=0 ? <div style={{color: "red"}}>Enter your country_location</div> : <></>} 
            onBlur={()=> handleBlur()} onChange={(e)=> sethotel(prev=> ({...prev, country_location: e.target.value}))} id="outlined-basic" label="Quốc gia (Ví dụ: Việt Nam)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField
            name="numberformat" 
            InputProps={{
            inputComponent: NumberFormatCustom,
            }}
            color={hotel.cost_adult <=0 ? "error" : "primary"} helperText={hotel.cost_adult <=0 ? <div style={{color: "red"}}>Enter your cost_adult</div> : <></>} 
            onBlur={()=> handleBlur()} onChange={(e)=> sethotel(prev=> ({...prev, cost_adult: e.target.value}))} id="outlined-basic" label="Giá vé cho người lớn (Đơn vị tính theo VND)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField
            InputProps={{
                inputComponent: NumberFormatCustom,
                }} 
            color={hotel.cost_kid <=0 ? "error" : "primary"} helperText={hotel.cost_kid <=0 ? <div style={{color: "red"}}>Enter your cost_kid</div> : <></>} 
            onBlur={()=> handleBlur()} onChange={(e)=> sethotel(prev=> ({...prev, cost_kid: e.target.value}))} id="outlined-basic" label="Giá vé cho trẻ em (Đơn vị tính theo VND)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField
            InputProps={{
                inputComponent: NumberFormatCustom,
                }}
            color={hotel.cost_baby <=0 ? "error" : "primary"} helperText={hotel.cost_baby <=0 ? <div style={{color: "red"}}>Enter your cost_baby</div> : <></>} 
            onBlur={()=> handleBlur()} onChange={(e)=> sethotel(prev=> ({...prev, cost_baby: e.target.value}))} id="outlined-basic" label="Giá vé cho em bé (Đơn vị tính theo VND)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField
            color={hotel.type?.length <=0 ? "error" : "primary"} helperText={hotel.type?.length <=0 ? <div style={{color: "red"}}>Enter your type</div> : <></>} 
            onBlur={()=> handleBlur()} onChange={(e)=> sethotel(prev=> ({...prev, type: e.target.value}))} id="outlined-basic" label="Kiểu nơi ở (Ví dụ: Khách sạn hoặc biệt thự)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField 
            InputProps={{
                inputComponent: NumberFormatCustom,
                }}
            color={hotel.discount <=0 ? "error" : "primary"} helperText={hotel.discount <=0 ? <div style={{color: "red"}}>Enter your discount</div> : <></>} 
            onBlur={()=> handleBlur()} onChange={(e)=> sethotel(prev=> ({...prev, discount: e.target.value}))} id="outlined-basic" label="Giảm giá (Thêm giảm giá cho khách sạn)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField
            color={hotel.review <=0 ? "error" : "primary"} helperText={hotel.review <=0 ? <div style={{color: "red"}}>Enter your review</div> : <></>} 
            onBlur={()=> handleBlur()} onChange={(e)=> sethotel(prev=> ({...prev, review: e.target.value}))} id="outlined-basic" label="Đánh giá (Đánh giá theo thang điểm từ 1 đến 5)" variant="outlined" />
        </Box>
        <br />
        <div>Tiện ích (Chỉ tích vào những ô mà khách sạn đáp ứng được và chỉ được tích một lần duy nhất)</div>
        <>
            <Checkbox
                onChange={(e)=> sethotel(prev=> ({...prev, wifi: 1}))}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <span>Wifi</span>
        </>
        <>
            <Checkbox
            onChange={(e)=> sethotel(prev=> ({...prev, pool: 2}))}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <span>Bể bơi</span>
        </>
        <>
            <Checkbox
            onChange={(e)=> sethotel(prev=> ({...prev, parking: 3}))}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <span>Chỗ để xe</span>
        </>
        <>
            <Checkbox
            onChange={(e)=> sethotel(prev=> ({...prev, restaurant: 4}))}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <span>Nhà hàng</span>
        </>
        <>
            <Checkbox
            onChange={(e)=> sethotel(prev=> ({...prev, receptionist: 5}))}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <span>Lễ tân</span>
        </>
        <>
            <Checkbox
            onChange={(e)=> sethotel(prev=> ({...prev, elevator: 6}))}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <span>Thang máy</span>
        </>
        <>
            <Checkbox
            onChange={(e)=> sethotel(prev=> ({...prev, fitness_center: 7}))}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <span>Trung tâm thể dục</span>
        </>
        <>
            <Checkbox
            onChange={(e)=> sethotel(prev=> ({...prev, meeting: 8}))}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <span>Phòng họp</span>
        </>
        <>
            <Checkbox
            onChange={(e)=> sethotel(prev=> ({...prev, airport_shuttle: 9}))}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <span>Đưa đón sân bay</span>
        </>
    
        
        <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Button disabled={disable} onClick={()=> add_hotel(hotel, setloading, setopensnack, navigate)} variant={"outlined"}>Thêm khách sạn</Button>
        </div>
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
        >
          <>
              <span style={{fontSize: 24, fontWeight: 600, color: "#e4e6eb"}}>Adding&nbsp;&nbsp;</span>
              <CircularProgress color="inherit" />
          </>
        </Backdrop>
        <Snackbar
          open={opensnack}
          autoHideDuration={3000}
          message="The flight was added sucessfully"
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
    </div>
  )
}

export default AddHotel