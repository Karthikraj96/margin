const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use( bodyParser.urlencoded( {extended : false }) )
app.use( bodyParser.json() )

app.post("/",function(req,res){
    let{cost,mark} = req.body
    let profit = cost*(mark/100);
    let salePrice = profit + cost;
    let gross = (profit/salePrice)*100;
    let data ={"salePrice":salePrice,"profit":profit,"gross":gross}
    res.send(data)
})

app.listen(8001)