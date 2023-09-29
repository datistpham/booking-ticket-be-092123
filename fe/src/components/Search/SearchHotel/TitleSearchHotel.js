import React from 'react'
import { useLocation } from 'react-router-dom'
import useQuery from '../../../f/get_query_parameter'
import moment from "moment"
import { Link } from 'react-router-dom'

const TitleSearchHotel = (props) => {
  return (
    <div className="aso-1">
        <T1 {...props} />
        <T2 {...props} />
    </div>
  )
}

export default TitleSearchHotel

const T1= (props)=> {
    const location= useLocation()
    const query= useQuery()
    return (
        <div className="dkw-1">
                <div className="oew-2">
                    {
                        props.a=== true ?
                         
                         <div>Combo tiết kiệm từ {location.state?.location_origin && location.state?.location_origin} - {location.state?.location_destination && location.state?.location_destination}</div>
                         
                         :
                        <>
                            Kết quả tìm kiếm của bạn tại:&nbsp;
                            {query.get("l").replace("-", " ")}&nbsp;
                            {location.state.location_travel && ", "+location.state.location_travel}
                        </>
                    }
                </div>
                <div className="ewo-4">
                    {
                        props.a=== true ?
                         
                         <>
                            {moment(query.get("dt").split(".")[0].toString(), "DD-MM-YYYY").format("DD MMM YYYY") +  " - "+ moment(query.get("dt").split(".")[1].toString(), "DD-MM-YYYY").format("DD MMM YYYY")}
                         </>
                         
                         :
                        <>
                            {moment(query.get("spec").split(".")[0].toString(), "DD-MM-YYYY").format("DD MMM YYYY") +  " - "+ moment(query.get("spec").split(".")[1].toString(), "DD-MM-YYYY").format("DD MMM YYYY")}

                        </>
                    }
                </div>
            </div>
    )
}
const T2= (props)=> {
    return (
        <Link to="/booking?q=hotel" style={{textDecoration: "none"}}>
            <div className="iew-1">
                <div className="dsd-1" role={"button"}>
                    <img src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/icon-kit-web/svg/light/ic_system_search_24px-dee9abb8908124af6564d818120f1c08.svg" height="16" width="16" alt="open" />
                    <div className="adw-2">
                    Đổi tìm kiếm
                    </div>
                </div>
            </div>
        </Link>
    )
}