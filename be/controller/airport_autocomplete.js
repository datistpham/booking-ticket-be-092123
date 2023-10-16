import connection from "../database/init.js"

export const airport_autocomplete= (req, res)=> {
    connection.query("SELECT * FROM airports limit 8", (err, rows, fields)=> {
        if(err) console.log(err)
        return res.json(rows)
    })
}