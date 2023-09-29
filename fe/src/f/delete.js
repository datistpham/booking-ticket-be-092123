import axios from "axios"
import { fake_sleep } from "./fake_sleep"
import { API_URL } from "../config"

export const delete_= async (id, type, setloading, setopensnack)=> {
    setloading(()=> true)
    await fake_sleep(1500)
    const res= await axios({
        url: API_URL + "/delete",
        method: "post",
        data: {
            id: id,
            type: type
        }
    })
    setloading(()=> false)
    const result= await res.data
    setopensnack(()=> true)
    await fake_sleep(2000)
    setopensnack(()=> false)
    return console.log(result)
}