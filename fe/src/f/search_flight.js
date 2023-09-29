import axios from "axios"
import { fake_sleep } from "./fake_sleep"
import { API_URL } from "../config"

export const search_flight_= async (setsearchflight, setresultsearch, a,b,c,d,e, setloading)=> {
    const res= axios({
        url: API_URL + "/api/v2/airport/codeairport",
        method: "get",
        responseType: "json",
        timeout: 100000,
        timeoutErrorMessage: "timeout request",
        params: {
            code_airport_origin: a?.split(".")[0],
            code_airport_destination: a?.split(".")[1],
        }
    })

    const ress= axios({
        url: API_URL + "/api/v4/airport/fullsearch",
        method: "post",
        responseType: "json",
        timeout: 100000,
        timeoutErrorMessage: "timeout request",
        data: {
            data: {
                origin: a?.split(".")[0],
                destination: a?.split(".")[1],
                dt: b,
                ps: c, 
                sc: d,
                roundtrip: e
            },
            from_client: "desktop"
        }
    })
    setloading(()=> true)
    await fake_sleep(2000)
    const result= await Promise.all([res, ress])
    const finalresult1= await result[0].data
    const finalresult2= await result[1].data
    // const result= await res.data
    setloading(()=> false)
    setresultsearch(()=> finalresult2)
    return setsearchflight(()=> finalresult1)
}