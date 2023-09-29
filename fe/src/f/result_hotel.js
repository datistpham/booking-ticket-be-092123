import axios from "axios"
import { fake_sleep } from "./fake_sleep"
import { API_URL } from "../config"

export const result_hotel= async (list,a ,b,c, d, setloading)=> {
    setloading(()=> true)
    await fake_sleep(1500)
    const res= await axios({
        url: API_URL + "/v2/api/result/hotel",
        method: "post",
        responseType: "json",
        timeout: 100000,
        timeoutErrorMessage: "timeout request",
        data: {
            data: {
                origin: a.split(".")[0].toString(),
                destination: a.split(".")[1].toString(),
                l: b, 
                c: c,
                d: d
            }   
        }
    })
    const result= await res.data
    setloading(()=> false)
    return list(()=> result)
}