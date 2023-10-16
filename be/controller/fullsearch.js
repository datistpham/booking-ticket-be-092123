import connection from "../database/init.js"

export const fullsearch= (req, res)=> {
    if(req.body.data.roundtrip != "none") {
        connection.query("SELECT * FROM flight where `origin`=? and `destination`=? and `dayflight`=? and `daydestination`=? and `seatclass`=?",[req.body.data.origin, req.body.data.destination, req.body.data.dt,req.body.data.roundtrip ,req.body.data.sc], (err, rows, fields)=> {
            if(err) console.log(err)
            return res.json(rows)
        })
    }
    connection.query("SELECT * FROM flight where `origin`=? and `destination`=? and `dayflight`=? and `seatclass`=?",[req.body.data.origin, req.body.data.destination, req.body.data.dt, req.body.data.sc], (err, rows, fields)=> {
        if(err) console.log(err)
        return res.json(rows)
    })
}