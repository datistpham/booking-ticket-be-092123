import * as React from "react"
import Box from "@mui/material/Box"
import Slider from "@mui/material/Slider"

function valuetext(value) {
  return `${value}K`
}

export default function FilterRangeCost(props) {
    const marks = [
        {
            value: props.mincost?.cost_adult,
            label: <div style={{marginLeft: 16}}>{props.mincost?.cost_adult}</div>,
        },
        {
            value: props.maxcost?.cost_adult,
            label: <div style={{marginRight: 16}}>{props.maxcost?.cost_adult}</div>,
        },
    ];
      
  const [value, setValue] = React.useState([props.mincost?.cost_adult, props.maxcost?.cost_adult])

  const handleChange = async (event, newValue) => {
    setValue(newValue)
    props.setfindbyrangecost(()=> newValue)
  }

  return (
    <Box sx={{ width: 260 }}>
      <Slider
        getAriaLabel={() => "Cost range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={props.mincost?.cost_adult}
        max={props.maxcost?.cost_adult}
        step={1000}
        className="weweopekoqpeqowp"
        marks={marks}

      />
    </Box>
  )
}