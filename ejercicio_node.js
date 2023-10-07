const fs = require ('fs')


class UserManager {
    
    constructor (filename){
        this.filename = filename
        this.format = 'utf-8'
    }
   

    getUsers = async() => {
        if (!fs.existsSync(this.filename)) return []
        
            return fs.promises.readFile(this.filename, this.format)
            .then (content => JSON.parse(content))
        .catch ((e)=>{
            console.log ('no ncontro el archivo, evuelve [[')
            return []
        })

    }
    createUser = async (firstname, lastname, age, course) =>{
        return this.getUsers()
            .then (users=>{
                users.push({firstname, lastname, age, course})
                return users
            })
            .then( newUsers => fs.promises.writeFile(this.filename, JSON.stringify(newUsers)))
    }

}
async function run(){
    const manager = new UserManager('./users.json')
    await manager.createUser('simon',  'sola', '25',  'backed')
      
    console.log( await manager.getUsers())

}
run()