const fs = require ('fs')

class ProductManager {

    constructor (filename) {
        this.filename = filename
        this.format = 'utf-8'
}

// getNextID = () => {
//     const count = this.products.length
//     if (count === 0) return 1
//     const lastProduct = this.products[count-1]
//     return lastProduct.id + 1
// }

getProducts = async ()=>{
    if (!fs.existsSync(this.filename)) return []

    return fs.promises.readFile(this.filename, this.format)
    .then (content => JSON.parse(content))
    .catch(e =>{
        console.log('no encontro el archivo')
        return []
    })
}

createProduct= async (title, description, price, thumbnail, code, stock) =>{
    if (!title || !description || !price || !thumbnail || !code || !stock ) return console.log("Campos incompletos")
       
    
    // const id = this.getNext()

    return this.getProducts()
    .then (products => {

        products.push({ title, description, price, thumbnail, code, stock})
        return products
    })
    .then (newProduct => fs.promises.writeFile(this.filename, JSON.stringify(newProduct)))
        
}

}

async function run() {
    const managerProduct = new ProductManager ('./products.json')
    await managerProduct.createProduct('2550','clazas','calzas negras','20000','.img.jpg', '001', 29)
    await managerProduct.createProduct('2550','remeras','18000','.img.jpg', '002', 15)
    console.log(await managerProduct.getProducts())
   
}
run()




