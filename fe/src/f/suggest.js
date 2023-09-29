import axios from "axios"
import { API_URL } from "../config"

export const suggest= async (setdata, id, location)=> {
    const res= await axios({
        url: API_URL + "/v2/api/suggest/result",
        method: "post",
        timeout: 100000,
        timeoutErrorMessage: "Time out request",
        responseType: "json",
        data: {
            data: {
                id: id,
                location: typeof location=== "string" ? location : {
                    origin: location=== undefined ? "" : location[0], 
                    destination: location=== undefined ? "" : location[1], 
                    dayflight: location=== undefined ? "" : location[2], 
                    daydestination: location=== undefined ? "" : location[3]
                }
            }
        }
    })
    const result= await res.data
    return setdata(()=> result)
}