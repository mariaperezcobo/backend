import express from 'express'

const app = express()

const DB = [
    {id:'1', name: 'andrea', lastname: 'berardi', gender: 'F' },
    {id:'2', name: 'matias', lastname: 'herrero', gender: 'M' },
    {id:'3', name: 'lily', lastname: 'jang', gender: 'F' },
    {id:'4', name: 'ruben', lastname: 'pere', gender: 'M' },
]

app.get('/', (req, res)=>{
    let gender = req.query.gender
    if(gender){
        gender = gender.toUpperCase()
        if (gender=='M' || gender == 'F'){
        const userFiltered = DB.filter(user => user.gender === gender)
        return res.send ({users: userFiltered})
        }

    }

    return res.send({users:DB})
})

app.get('/:iduser', (req, res)=>{
  
    const {iduser} = req.params

    const user = DB.find(user => user.id === iduser)
    if(!user) return res.send({error: 'user not found'}) 
    return res.send (user)
    
    })



app.listen(8080, ()=>console.log('listening practia..'))