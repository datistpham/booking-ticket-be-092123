import axios from "axios"
import _ from "lodash"
import moment from "moment"
import { fake_sleep } from "./fake_sleep"
import { API_URL } from "../config"
export const bookticket= async (data1, data2, id, setloading, setopensnack, navigate)=> {
    setloading(()=> true)
    await fake_sleep(2000)
    axios({
        url: API_URL + "/booking/ticket",
        method: "post",
        responseType: "json",
        data: {
            id_type: id,
            name: data1.name,
            surname: data1.surname,
            phonenumber: data1.phonenumber,
            email: data1.email,
            type_user: "agent",
            time_book: moment(new Date()).format("HH:mm DD-MM-YYYY")
        }
    })
    // const result= await res.data
    // console.log(result)
    const newdata2= _.unionWith(data2, _.isEqual)
    newdata2?.map(async item=> {
        return axios({
            url: API_URL + "/booking/ticket",
            method: "post",
            responseType: "json",
            data: {
                id_type: id,
                name: item.name,
                surname: item.surname,
                phonenumber: item.phonenumber,
                email: item.email,
                type_user: "customer",
                date_birth: item.date_birth,
                month_birth: item.month_birth,
                year_birth: item.year_birth,
                nationality: item.nationality,
                time_book: moment(new Date()).format("HH:mm DD-MM-YYYY")
            }
        })
        .then(res=> console.log(res.data))
        .catch(err=> console.log(err))
    })
    setopensnack(()=> true)
    setloading(()=> false)
    await fake_sleep(3000)
    setopensnack(()=> false)
    return navigate("/")
}