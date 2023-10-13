import express from 'express'

const app = express()

app.get('/saludo', (request, response)=>{
    response.send('<h3>saludos </h3>')
    
})

app.get('/health',(request, response)=>{
    response.send('ok')
})

app.listen(8080,()=>{
    console.log('server is running')
})