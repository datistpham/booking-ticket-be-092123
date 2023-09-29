import React from 'react'
import useQuery from '../../../../f/get_query_parameter'

const TheTitle1 = (props) => {
  const query= useQuery()
  return (
    <div className="oew-2">
        {props.searchflight[0]?.location_airport && props.searchflight[0]?.location_airport} ({query.get("ap").split(".")[0]}) → {props.searchflight[1]?.location_airport && props.searchflight[1]?.location_airport} ({query.get("ap").split(".")[1]})
    </div>
  )
}

export default TheTitle1