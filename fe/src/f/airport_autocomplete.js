import axios from "axios"
import { API_URL } from "../config"

export const airport_complete= async (setAirportAutocomplete)=> {
    const res= await axios({
        url: API_URL + "/api/v1/airport/autocomplete",
        method: "get",
        responseType: "json",
        timeout: 100000,
        timeoutErrorMessage: "timeout request",
    })
    const result= await res.data
    return setAirportAutocomplete(()=> result)
}