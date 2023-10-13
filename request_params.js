import express from 'express'

const app = express()

app.get('/saludo/:name', (req, res)=>{
    console.log(req.params)
    const {name} = req.params
    res.send(`saludos para ${name}`)

})

app.listen(8080)
