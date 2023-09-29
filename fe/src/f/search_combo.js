import axios from "axios"
import { fake_sleep } from "./fake_sleep"
import _ from "lodash"
import { API_URL } from "../config"

export const search_combo= async (origin, destination, dt, cs, sc, location, timein, guest, room, back, setdata, setchunklist, setloading)=> {
    setloading(()=> true)
    await fake_sleep(1000)
    const res= await axios({
        url: API_URL + "/v2/api/result/search/combo",
        method: "post",
        responseType: "json",
        timeout: 100000,
        timeoutErrorMessage: "timeout request",
        data: {
            data: {
                origin: origin,
                destination: destination,
                datestart: dt?.split(".")[0].toString(),
                datearrive: dt?.split(".")[1].toString(),
                customer: cs,
                seatclass: sc,
                location,
                timein,
                guest,
                room,
                back
            }   
        }
    })
    setloading(()=> false)
    const result= await res.data
    setchunklist(()=> _.uniq(result, "name_hotel")?.slice(0, 7))
    return setdata(()=> _.uniq(result, "name_hotel"))
}