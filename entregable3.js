import express from 'express'

import ProductManager from './ProductManager.js'

const app = express()
const productManager = new ProductManager()

app.get('/', async (req, res)=>{
    try{
        const products = await productManager.getProducts()
        res.send(products)
        console.log(req.params)
        // return res.send ({product: products})
    } catch (err){
        res.send('error')
    }
})

app.get('/products', async (req,res)=>{
    try{
        const limit = parseInt(req.query?.limit)
        
        const products = await productManager.getProducts(limit)
        return res.send ({productos: products})
        
    } catch{
        return res.send (cosole.log('no se encontro el producto'))
    }
})

app.get ('/products/:pid', async (req,res)=>{
    try{
        const idProduct = parseInt(req.params.pid)
        const products = await productManager.getProductById(idProduct)
        return res.send ({productos: products})

    }catch{
        return res.send (console.log('no se encontró el producto'))
    }
})

app.listen(8080, ()=>console.log('servidor corriendo'))
