import connection from "../database/init.js"

export const code_aiport= (req, res)=> {
    try {
        connection.query(`SELECT location_airport from airports where code_airport in ('${req.query.code_airport_origin}', '${req.query.code_airport_destination}') order by field (code_airport, '${req.query.code_airport_origin}', '${req.query.code_airport_destination}')`, (err, rows, fields)=> {
            if(err) console.log(err)
            return res.json(rows)
        })
        
    } catch (error) {
        console.log(error)
    }
}
