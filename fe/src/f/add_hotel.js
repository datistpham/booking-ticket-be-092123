import axios from "axios"
import moment from "moment"
import { id_admin } from "../Constant"
import { fake_sleep } from "./fake_sleep"
import { API_URL } from "../config"

export const add_hotel= async (data, setloading, setopensnackbar, navigate)=> {
    setloading(()=> true)
    await fake_sleep(1500)
    const res= await axios({
        url: API_URL + "/add_hotel" ,
        method: "post",
        data: {
            ...data, available_from: parseInt(moment(data.available_from, 'DD-MM-YYYY').valueOf()), expire_day: parseInt(moment(data.expire_day, "DD-MM-YYYY").valueOf())
        }
    })
    setloading(()=> false)
    const result= await res.data
    setopensnackbar(()=> true)
    await fake_sleep(1500)
    setopensnackbar(()=> false)
    console.log(result)
    return navigate("/admin/manage/hotel/new_hotel", {state: {uid: id_admin}})
}