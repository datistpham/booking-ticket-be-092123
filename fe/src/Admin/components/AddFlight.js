import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import { Backdrop, Button, CircularProgress, FormControl, IconButton, InputLabel, Snackbar } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { add_flight } from '../../f/add_flight';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import NumberFormat from 'react-number-format';
export const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        isNumericString
        prefix="VND "
      />
    );
  });
const AddFlight = (props) => {
  const [flight, setflight]= useState(()=> ({
    origin: "",
    destination: "",
    brand: "",
    logo_brand: "",
    timestart: "",
    timearrive: "",
    daystart: "",
    daydestination: "",
    aircraft_number: "",
    cost_adult: 0,
    cost_kid: 0,
    cost_baby: 0,
    tax: 0,
    discount: 0,
    seatclass: "",
    package: 0,
    eating: 0,
    entertainment: 0,
    wifi: 0,
    charger: 0
  }))
  
  const [disable, setdisable]= useState(()=> false)
  const handleBlur= (state, setstate1)=> {
    if(flight.origin?.length <=0 || flight.destination?.length<=0 || flight.brand?.length <=0 || flight.logo_brand?.length <=0 || flight.timearrive?.length <=0 || flight.timestart?.length<=0 || flight.daystart?.length <=0 || flight?.daydestination?.length <=0 || 
    flight?.aircraft_number?.length <0 || flight.cost_adult <0 || flight.cost_kid <0 || flight.cost_baby <0 || flight.tax <0 || flight.discount <0 || flight.seatclass?.length < 0) {
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
            
            color={flight.origin?.length <=0 ? "error" : "primary"} helperText={flight.origin?.length <=0 ? <div style={{color: "red"}}>Enter your origin</div> : <></>} onChange={(e)=> setflight(prev=> ({...prev, origin: e.target.value}))} id="outlined-basic" label="Xuất phát từ (Nhập mã của sân bay. Ví dụ: DAN là Đà Nẵng)" variant="outlined" />

        </Box>
        {

        }
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onBlur={()=> handleBlur()}
            color={flight.destination?.length <=0 ? "error" : "primary"} helperText={flight.destination?.length <=0 ? <div style={{color: "red"}}>Enter your destination</div> : <></>}
            onChange={(e)=> setflight(prev=> ({...prev, destination: e.target.value}))} id="outlined-basic" label="Điểm đến (Nhập mã của sân bay. Ví dụ: SGN là Tp HCM)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onBlur={()=> handleBlur()} 
            color={flight.brand?.length <=0 ? "error" : "primary"} helperText={flight.brand?.length <=0 ? <div style={{color: "red"}}>Enter your brand</div> : <></>}
            onChange={(e)=> setflight(prev=> ({...prev, brand: e.target.value}))} id="outlined-basic" label="Hãng hàng không (Ví dụ: Bamboo Airway)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onBlur={()=> handleBlur()}
            color={flight.logo_brand?.length <=0 ? "error" : "primary"} helperText={flight.logo_brand?.length <=0 ? <div style={{color: "red"}}>Enter your logo_brand</div> : <></>}
            onChange={(e)=> setflight(prev=> ({...prev, logo_brand: e.target.value}))} id="outlined-basic" label="Logo hãng hàng không (Url ảnh của hãng)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onBlur={()=> handleBlur()}
            color={flight.timestart?.length <=0 ? "error" : "primary"} helperText={flight.timestart?.length <=0 ? <div style={{color: "red"}}>Enter your timestart</div> : <></>}
            onChange={(e)=> setflight(prev=> ({...prev, timestart: e.target.value}))} id="outlined-basic" label="Giờ khởi hành (Ví dụ: 01:20. Nhập theo định dạng hh:mm)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onBlur={()=> handleBlur()} 
            color={flight.timearrive?.length <=0 ? "error" : "primary"} helperText={flight.timearrive?.length <=0 ? <div style={{color: "red"}}>Enter your timearrive</div> : <></>}
            onChange={(e)=> setflight(prev=> ({...prev, timearrive: e.target.value}))} id="outlined-basic" label="Giờ đến nơi (Ví dụ: 05:30. Nhập theo định dạng hh:mm)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onBlur={()=> handleBlur()}
            color={flight.daystart?.length <=0 ? "error" : "primary"} helperText={flight.daystart?.length <=0 ? <div style={{color: "red"}}>Enter your daystart</div> : <></>}
            onChange={(e)=> setflight(prev=> ({...prev, daystart: e.target.value}))} id="outlined-basic" label="Ngày đi (Ví dụ: 29-05-2022. Nhập theo định dạng DD-MM-YYYY)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onBlur={()=> handleBlur()} 
            color={flight.daydestination?.length <=0 ? "error" : "primary"} helperText={flight.daydestination?.length <=0 ? <div style={{color: "red"}}>Enter your daydestination</div> : <></>}
            onChange={(e)=> setflight(prev=> ({...prev, daydestination: e.target.value}))} id="outlined-basic" label="Ngày đến (Ví dụ: 07-06-2022. Nhập theo định dạng DD-MM-YYYY)" variant="outlined" />
        </Box>

        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onBlur={()=> handleBlur()}
            color={flight.aircraft_number?.length <=0 ? "error" : "primary"} helperText={flight.aircraft_number?.length <=0 ? <div style={{color: "red"}}>Enter your aircraft_number</div> : <></>}
            onChange={(e)=> setflight(prev=> ({...prev, aircraft_number: e.target.value}))} id="outlined-basic" label="Số hiệu máy bay (Ví dụ: VJ-193)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onBlur={()=> handleBlur()} 
            name="numberformat" 
            InputProps={{
            inputComponent: NumberFormatCustom,
            }}
        color={flight.cost_adult <=0 ? "error" : "primary"} helperText={flight.cost_adult <=0 ? <div style={{color: "red"}}>Enter your cost_adult</div> : <></>}
        onChange={(e)=> setflight(prev=> ({...prev, cost_adult: e.target.value}))} id="outlined-basic" label="Giá vé cho người lớn (Đơn vị được tính theo VND)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onBlur={()=> handleBlur()} name="numberformat"InputProps={{
          inputComponent: NumberFormatCustom,
        }} 
        color={flight.cost_kid <=0 ? "error" : "primary"} helperText={flight.cost_kid <=0 ? <div style={{color: "red"}}>Enter your cost_kid</div> : <></>}
        onChange={(e)=> setflight(prev=> ({...prev, cost_kid: e.target.value}))} id="outlined-basic" label="Giá vé cho trẻ em (Đơn vị được tính theo VND)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onBlur={()=> handleBlur()} InputProps={{
          inputComponent: NumberFormatCustom,
        }} name="numberformat"
        color={flight.cost_baby <=0 ? "error" : "primary"} helperText={flight.cost_baby <=0 ? <div style={{color: "red"}}>Enter your cost_baby</div> : <></>}
        onChange={(e)=> setflight(prev=> ({...prev, cost_baby: e.target.value}))} id="outlined-basic" label="Giá vé cho em bé (Đơn vị được tính theo VND)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onBlur={()=> handleBlur()} InputProps={{
          inputComponent: NumberFormatCustom,
        }} 
        color={flight.tax <=0 ? "error" : "primary"} helperText={flight.tax <=0 ? <div style={{color: "red"}}>Enter your tax</div> : <></>}
        name="numberformat"  onChange={(e)=> setflight(prev=> ({...prev, tax: e.target.value}))} id="outlined-basic" label="Thuế (Ví dụ: 20000)" variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onBlur={()=> handleBlur()} InputProps={{
          inputComponent: NumberFormatCustom,
        }} name="numberformat" 
        color={flight.discount <=0 ? "error" : "primary"} helperText={flight.discount <=0 ? <div style={{color: "red"}}>Enter your discount</div> : <></>}
        onChange={(e)=> setflight(prev=> ({...prev, discount: e.target.value}))} id="outlined-basic" label="Giảm giá (Nhập giá giảm cho chuyến bay)" variant="outlined" />
        </Box>
        <Box sx={{ minWidth: 120 }}>

        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
            >
        <FormControl sx={{ minWidth: 120 }} color={flight.seatclass?.length <=0 ? "error" : "primary"} helperText={flight.seatclass?.length <=0 ? <div style={{color: "red"}}>Enter your seatclass</div> : <></>}>
            <InputLabel id="demo-simple-select-label">Hạng ghế (Chọn trong hộp select)</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
              value={flight.seatclass}
              color={flight.seatclass?.length <=0 ? "error" : "primary"} helperText={flight.seatclass?.length <=0 ? <div style={{color: "red"}}>Enter your seatclass</div> : <></>}
            label="Age"
            onChange={(e)=> setflight(prev=> ({...prev, seatclass: e.target.value}))}
            >
            <MenuItem value={"Phổ thông"}>Phổ thông</MenuItem>
            <MenuItem value={"Phổ thông đặc biệt"}>Phổ thông đặc biệt</MenuItem>
            <MenuItem value={"Thương gia"}>Thương gia</MenuItem>
            <MenuItem value={"Hạng nhất"}>Hạng nhất</MenuItem>
            </Select>
        </FormControl>
      </Box>
    </Box>
        <br />
        <div>Tiện ích (Chỉ tích vào những ô mà khách sạn đáp ứng được và chỉ được tích một lần duy nhất)</div>
        <>
            <Checkbox
                onChange={(e)=> setflight(prev=> ({...prev, package: 1}))}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <span>Hành lí</span>
        </>
        <>
            <Checkbox
            onChange={(e)=> setflight(prev=> ({...prev, eating: 1}))}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <span>Ăn uống</span>
        </>
        <>
            <Checkbox
            onChange={(e)=> setflight(prev=> ({...prev, entertainment: 1}))}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <span>Giải trí</span>
        </>
        <>
            <Checkbox
            onChange={(e)=> setflight(prev=> ({...prev, wifi: 1}))}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <span>Wifi</span>
        </>
        <>
            <Checkbox
            onChange={(e)=> setflight(prev=> ({...prev, charger: 1}))}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <span>Cáp sạc</span>
        </>
        <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Button disabled={disable} onClick={()=> add_flight(flight, setloading, setopensnack, navigate)} variant={"outlined"}>Thêm chuyến bay</Button>
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

export default AddFlight