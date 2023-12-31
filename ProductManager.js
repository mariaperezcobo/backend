import fs from 'fs'


export default class ProductManager {

    constructor () {
        this.filename = './productos.json'
        this.format = 'utf-8'
        // this.products=[]
        // this.loadProducts()
        // console.log('se instancio la clase')
        
}

// loadProducts = async () =>{
//     if (!fs.existsSync(this.filename)) {
//         try {
//         const products = await fs.promises.readFile(this.filename, this.format)
//         this.products = JSON.parse(products)
//         console.log('hay archivos!')
//     }catch (error){
//         console.error('error', error)
//     }
// }
// }

// getNextID = () => {
//     const count = this.products.length
//     if (count === 0) return 1
//     const lastProduct = this.products[count-1]
//     return lastProduct.id + 1
// }

// getProducts = async ()=>{
//     return this.products
// }
async getProducts(limit){
    
    try{
        const products = await fs.promises.readFile(this.filename, this.format)
        // this.products = JSON.parse(products)
        // return JSON.parse(products)
        this.products = JSON.parse(products)
        
        if (limit){
            const productsFiltrados = this.products.slice(0,limit)
            return productsFiltrados
        }         

        return this.products
        console.log('hay archivos!')

    }catch (error){
        console.error('error', error)
        
    }
    }

getProductById = async (idProduct)=>{

    try{
        const products = await this.getProducts()

        const validarID = await products.find(product => product.id === idProduct)
        if (!validarID) {console.log("el producto no existe")}
         else {
            console.log('el producto buscado es', {validarID})
            
         } 
         return validarID

    }catch (error){
        console.error('error', error)
        return []
 
    }

}

// createProduct= async (title, description, price, thumbnail, code, stock) =>{
   
    
//     const products = await this.getProducts()

//     if (!title || !description || !price || !thumbnail || !code || !stock ) return console.log("Campos incompletos")
    
//     if (this.products.some((product)=> product.code === code)) return console.log ("El producto ya existe")

// const id = this.getNextID()

// const newProduct={
//     id,
//     title,
//     description, 
//     price, 
//     thumbnail, 
//     code, 
//     stock
// }
// this.products.push(newProduct)

// try{
//     await fs.promises.writeFile(this.filename, JSON.stringify(products))
//     console.log('producto creado')
        
// }catch (error){
//     console.error(error)
// }
// }



// deleteProduct = async (id) =>{
//     const products = await this.getProducts()
   
//     const nuevosProducts = products.filter ((producto)=>producto.id !== id)
//     try{
//         await fs.promises.writeFile(this.filename, JSON.stringify(nuevosProducts))
//         console.log('Quedan los siguientes productos:', nuevosProducts)
        
//     }catch (error){
//         console.error('no se elimino ningun producto', error)
//     }
// }

// updateProductById = async (id, cambio) =>{
//     const products = await this.getProducts()
//     const productModificado = this.products.findIndex (producto => producto.id === id)
    
//     if (productModificado === -1){ console.log('el producto a modificar no existe')}

//     if (cambio.title !== undefined){
//         products[productModificado].title = cambio.title
//     }
//     if (cambio.description !== undefined){
//         products[productModificado].description = cambio.description
//     }
//     if (cambio.price !== undefined) {
//         products[productModificado].price = cambio.price
//     }
//     if (cambio.thumbnail !== undefined){
//         products[productModificado].thumbnail = cambio.thumbnail
//     }
//     if (cambio.code !== undefined){
//         products[productModificado].code = cambio.code
//     }
//     if (cambio.stock !== undefined){
//         products[productModificado].stock = cambio.stock
//     }

//     console.log('el index del prod a modificar es', productModificado)
    

//     try {
//         await fs.promises.writeFile(this.filename, JSON.stringify(products))

//     } catch(error){
//         console.error(error)
//     }
//     }

 
}

// export const productManager = new ProductManager('./productos.json')
// console.log(productManager)