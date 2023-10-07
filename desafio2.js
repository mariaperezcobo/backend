const fs = require ('fs')

class ProductManager {


    constructor (filename) {
        this.filename = filename
        this.format = 'utf-8'
        this.products=[]
        this.loadProducts()
}


loadProducts = async () =>{
    if (!fs.existsSync(this.filename)) {
        try {
        const products = await fs.promises.readFile(this.filename, this.format)
        this.products = JSON.parse(products)
    }catch (error){
        console.error('error', error)
    }
}
}

getNextID = () => {
    const count = this.products.length
    if (count === 0) return 1
    const lastProduct = this.products[count-1]
    return lastProduct.id + 1
}

getProducts = async ()=>{
    return this.products
}


createProduct= async (title, description, price, thumbnail, code, stock) =>{
   
    
    const products = await this.getProducts()

    if (!title || !description || !price || !thumbnail || !code || !stock ) return console.log("Campos incompletos")
    
    
    
    if (this.products.some((product)=> product.code === code)) return console.log ("El producto ya existe")


const id = this.getNextID()

const newProduct={
    id,
    title,
    description, 
    price, 
    thumbnail, 
    code, 
    stock
}
this.products.push(newProduct)

try{
    await fs.promises.writeFile(this.filename, JSON.stringify(products))
    console.log('producto creado')
        
}catch (error){
    console.error(error)
}
}

getProductById = async (id)=>{
    const products = await this.getProducts()
    const validarID = products.find(product => product.id === id)
    if (!validarID) {console.log("el producto no exixte")}
     else {
        console.log('el producto buscado es', {validarID})
     } 
    }

deleteProduct = async (id) =>{
    const products = await this.getProducts()
    // const eliminarProduct = products.indexOf((product)=> product.id === parseInt(id))
    // if (eliminarProduct === -1){
    //     console.log ('no hay productos para eliminar')
    // } else {products.splice (eliminarProduct, 1)}
    const nuevosProducts = products.filter ((producto)=>producto.id !== id)
    try{
        await fs.promises.writeFile(this.filename, JSON.stringify(nuevosProducts))
        console.log('producto eliminado', nuevosProducts)
    }catch (error){
        console.error('no se elimino ningun producto', error)
    }
}


// updateProductById = async (id, cambio) =>{
//     const products = await this.getProducts()
//     for (let key in products){
//         if (products[key].id === id){
//             products[key].title === cambio.title ? cambio.title : products[key].title
//         }
//     }
//     try {
//         await fs.promises.writeFile(this.filename, JSON.stringify(products))
//     } catch(error){
//         console.error(error)
//     }
//     }

 }



async function run() {
    const managerProduct = new ProductManager ('./products2.json')
    await managerProduct.createProduct('calzas','calzas negras',20000,'.img.jpg', 61, 29)
    await managerProduct.createProduct('remeras','remera gris',18000,'.img.jpg', 2, 15)
   
    await managerProduct.createProduct('remeras','remera blanca',16000,'.img.jpg', 52, 22)
    console.log(await managerProduct.getProducts())
    await managerProduct.getProductById(3)
    await managerProduct.deleteProduct(1)
    
    // await managerProduct.updateProductById(2,{title:'buso'})
}
run()




