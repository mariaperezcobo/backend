const http = require ('http')

const server = http.createServer((request, response) =>{
    response.end('<h1>my first server</h1>')
})

server.listen(8080, ()=>{
    console.log('listening on port 8080')
})
//http://127.0.0.1:8080/
//http://localhost:8080/
//npm i -g nodemon
