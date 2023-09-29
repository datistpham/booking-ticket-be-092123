import axios from "axios"
import { fake_sleep } from "./fake_sleep"
import { API_URL } from "../config"

export const signup= async (data, setopensnackbar)=> {
    const res= await axios({
        url: API_URL + "/signup",
        method: "post",
        timeout: 100000,
        timeoutErrorMessage: "Time out request",
        responseType: "json",
        data: {
            ...data
        }
    })
    
    const result= await res.data
    setopensnackbar(()=> true)
    await fake_sleep(2000)
    setopensnackbar(()=> false)
    console.log(result)
}