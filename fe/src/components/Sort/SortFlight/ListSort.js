import * as React from "react"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import _ from "lodash"
import moment from "moment"

export default function RadioButtonsGroup(props) {
  const [value, setvalue]= React.useState(()=> "Giá thấp nhất")
  const [check, setcheck]= React.useState(()=> false)
  const handleChange = (event) => {
    setvalue(event.target.value);
    switch(event.target.value) {
        case "Giá thấp nhất":
            setcheck(()=> true)
            props.setresultsearch(_.orderBy(props.resultsearch, ['cost_adult'], ['asc']))
            return 
        case "Giá cao nhất":
            setcheck(()=> false)
            props.setresultsearch(_.orderBy(props.resultsearch, ['cost_adult'], ['desc']))
            return
        case "Cất cánh sớm nhất":
            setcheck(()=> false)
            props.setresultsearch(_.orderBy(props.resultsearch, [`c_timeflight`], ['asc']))
            return 
        case "Cất cánh muộn nhất":
            setcheck(()=> false)
            props.setresultsearch(_.orderBy(props.resultsearch, [`c_timeflight`], ['desc']))
            return
        case "Hạ cánh sớm nhất":
            setcheck(()=> false)
            props.setresultsearch(_.orderBy(props.resultsearch, [`c_timedestination`], ['asc']))
            return
        case "Hạ cánh muộn nhất":
            setcheck(()=> false)
            props.setresultsearch(_.orderBy(props.resultsearch, [`c_timedestination`], ['desc']))
            return
        case "Thời gian bay ngắn nhất":
            setcheck(()=> false)
            props.setresultsearch(_.orderBy(props.resultsearch, a=> moment(moment(`${a.timearrive} ${a.daydestination}`, "hh:mm DD-MM-YYYY").diff(moment(`${a.timestart} ${a.dayflight}`, "hh:mm DD-MM-YYYY"), "seconds")), ['asc']))
            return
        default: 
            setcheck(()=> false)
            return
    }
  };
  return (
    <FormControl className="ddsdkeow-1" style={{width: "100%"}}>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="Giá thấp nhất" control={<Radio />} label={<div style={{fontWeight: 600, fontSize: 14}}>Giá thấp nhất</div>} checked={check} />
        <FormControlLabel value="Giá cao nhất" control={<Radio />} label={<div style={{fontWeight: 600, fontSize: 14}}>Giá cao nhất</div>} />
        <FormControlLabel value="Cất cánh sớm nhất" control={<Radio />} label={<div style={{fontWeight: 600, fontSize: 14}}>Cất cánh sớm nhất</div>} />
        <FormControlLabel value="Cất cánh muộn nhất" control={<Radio />} label={<div style={{fontWeight: 600, fontSize: 14}}>Cất cánh muộn nhất</div>} />
        <FormControlLabel value="Hạ cánh sớm nhất" control={<Radio />} label={<div style={{fontWeight: 600, fontSize: 14}}>Hạ cánh sớm nhất</div>} />
        <FormControlLabel value="Hạ cánh muộn nhất" control={<Radio />} label={<div style={{fontWeight: 600, fontSize: 14}}>Hạ cánh muộn nhất</div>} />
        <FormControlLabel value="Thời gian bay ngắn nhất" control={<Radio />} label={<div style={{fontWeight: 600, fontSize: 14}}>Thời gian bay ngắn nhất</div>} />
      </RadioGroup>
    </FormControl>
  )
}