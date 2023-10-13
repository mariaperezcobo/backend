import expres from 'express'

const app = expres()

app.get ('/saludo', (req, res) =>{
    console.log('estamos en el endpoint')
    console.log(req.query)

    const name = req.query.name ?? 'Nicolas'
    const age = req.query.age ?? 'Nicolas'
    res.send(`saludo para ${name}, age ${age}`)


})
app.listen(8080,()=>console.log('listening..'))