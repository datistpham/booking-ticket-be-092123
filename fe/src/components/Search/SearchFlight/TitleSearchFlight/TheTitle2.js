import moment from 'moment'
import React from 'react'
import useQuery from '../../../../f/get_query_parameter'

const TheTitle2 = (props) => {
  const query= useQuery()
  return (
    <div className="ewo-4">
    {moment(`${query.get("dt").toString()}`, "DD-MM-YYYY").format("ddd, DD MMM YYYY")} | {query.get("ps").split(".").reduce((part, a)=> parseInt(part) + parseInt(a), 0)} passengers | {query.get("sc")}
    </div>
  )
}

export default TheTitle2