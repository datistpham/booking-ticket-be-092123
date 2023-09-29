import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}K`;
}

export default function FilterRangeCostHotel(props) {
  const [value, setValue] = React.useState([props.mincost?.cost_adult, props.maxcost?.cost_adult]);
  React.useEffect(()=> {
    setValue(()=> [props.mincost?.cost_adult, props.maxcost?.cost_adult])
  }, [props.mincost?.cost_adult, props.maxcost?.cost_adult])
  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.setListRange(()=> newValue)
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Slider
        getAriaLabel={() => 'Cost hotel range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={props.mincost?.cost_adult}
        max={props.maxcost?.cost_adult}
        step={1000}
      />
    </Box>
  );
}

export function FilterRangeCostHotel2(props) {
  const [value, setValue] = React.useState([props.mincost?.cost_adult, props.maxcost?.cost_adult]);
  React.useEffect(()=> {
    setValue(()=> [parseInt(props.mincost?.cost_adult_hotel) + parseInt(props.mincost?.cost_adult_flight), parseInt(props.maxcost?.cost_adult_hotel)+ parseInt(props.maxcost?.cost_adult_flight)])
  }, [props.mincost?.cost_adult_hotel,props.mincost?.cost_adult_flight, props.maxcost?.cost_adult_flight, props.maxcost?.cost_adult_hotel])
  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.setListRange(()=> newValue)
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Slider
        getAriaLabel={() => 'Cost hotel range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={parseInt(props.mincost?.cost_adult_hotel) + parseInt(props.mincost?.cost_adult_flight)}
        max={parseInt(props.maxcost?.cost_adult_hotel)+ parseInt(props.maxcost?.cost_adult_flight)}
        step={1000}
      />
    </Box>
  );
}
