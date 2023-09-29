import React from 'react'
import SelectTime from './SelectTime'

const ChooseTimeOriginAndTimeDestination= (props)=> {
    return (
        <div className="tw-3">
            <SelectTime date={"Ngày đi"} check={true} value={props.startdate} setValue={props.setstartdate} />
            <SelectTime date={"Khứ hồi"} check={props.check} value={props.arrivaldate} setValue={props.setarrivaldate} tick={<button onClick={()=> props.setcheck(prev=> !prev)} className="hf-1" style={{backgroundColor: props.check=== false ? "#fff" : "#0194f3", border: props.check=== false ? "1px solid #d9dbcd" : "#0194f3"}}>
                <span></span>
            </button>} />
        </div>
    )
}

export default ChooseTimeOriginAndTimeDestination