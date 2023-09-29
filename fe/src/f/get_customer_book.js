import axios from "axios"
import { API_URL } from "../config"

export const get_customer_book= async (id, setdata)=> {
    const res= await axios({
        url: API_URL + "/api/v1/get/customer/book",
        method: "post",
        responseType: "json",
        timeout: 100000,
        timeoutErrorMessage: "timeout request",
        data: {
            id: id
        }
    })
    const result= await res.data
    return setdata(()=> result)
}