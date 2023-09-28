class ProductManager {

    constructor (){
        this.products = []
    }

    getNextID = () => {
        const count = this.products.length
        if (count === 0) return 1
        const lastProduct = this.products[count-1]
        return lastProduct.id + 1
    }

    getCode = (code) => {
        const validarCode = this.products.code
        return this.products.some((product)=> product.code == code)
    }

    getProducts = () => { return this.products}

    addProducts = (title, description, price, thumbnail, code, stock) => {
        if (this.getCode(code)){
            return console.log("el producto ya existe")        }
        
        const id = this.getNextID()

        const product ={
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        this.products.push(product)
    }

}

const productManager = new ProductManager()
productManager.addProducts('calza', 'negra', 20000, 'img', '1452', 5 )
productManager.addProducts('remera', 'blanca', 15000, 'img', '1455', 5 )
console.log(productManager.getProducts())