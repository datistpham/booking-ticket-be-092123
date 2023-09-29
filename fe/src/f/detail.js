import axios from "axios"
import { API_URL } from "../config"

export const detail= async (id, setdata)=> {
    console.log(id)
    const res= await axios({
        url: API_URL + "/detail",
        method: "post",
        data: {
            id: id,
        }
    })
    const result= await res.data
    return setdata(()=> result[0]["COUNT"])
}