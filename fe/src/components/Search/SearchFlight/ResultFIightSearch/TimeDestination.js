import moment from 'moment'
import React from 'react'

const TimeDestination = (props) => {
  return (
    <div>
      <div className="dwo-3">
          {props.timearrive} {moment(`${props.dayflight}`, "DD-MM-YYYY") < moment(`${props.daydestination}`, "DD-MM-YYYY") && "(+1d)"}
      </div>
      <div className="anj-7">
          {props.destination} 
      </div>
    </div>
  )
}

export default TimeDestination