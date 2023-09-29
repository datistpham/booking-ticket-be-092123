import axios from "axios"
import Fuse from 'fuse.js'
import { API_URL } from "../config"

export const fts= async (setqueryresult, query)=> {
    const res= await axios({
        url: API_URL + "/api/v1/hotel/search",
        method: "post",
        responseType: "json",
        timeout: 100000,
        timeoutErrorMessage: "timeout request",
        data: {
            query_string: query
        }
    })
    const result= await res.data
    const options= {
        keys: [
            "destination",
            "location_travel",
        ]
    }
    const fuse= new Fuse(result, options)
    console.log(fuse.search(query))
    return setqueryresult(()=> fuse.search(query))
}