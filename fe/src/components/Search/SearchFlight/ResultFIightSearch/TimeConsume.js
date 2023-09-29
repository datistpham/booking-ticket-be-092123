import moment from 'moment'
import React from 'react'

const TimeConsume = (props) => {
  return (
    <div className="eewo-1">
        <div className="jiew-2">
        {
            moment.utc(moment(`${props.timearrive} ${props.daydestination}`, "hh:mm DD-MM-YYYY").diff(moment(`${props.timestart} ${props.dayflight}`, "hh:mm DD-MM-YYYY"))).format("h[h]mm[ph]")
        }
        </div>
        <div className="owew-2">
            <div className="ewoq-4">

            </div>
        <div className="dwiew-1">

        </div>
            <div className="ewrq-3">

            </div>
        </div>
        <div className="jiew-2">
            Bay thẳng
        </div>
    </div>
  )
}

export default TimeConsume