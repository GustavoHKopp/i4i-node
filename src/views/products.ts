import { Router, Request, Response } from "express";
import Product from "../infra/newItem/Item";
import Products from "../infra/products/product";

const route = Router()
export const products = new Products

route.get('/items', (_: Request, res: Response) => {
  res.json(products.getProduct())
})

route.post('/item/add', (req: Request, res: Response) => {
  const {name, description, price, img_url} = req.body
  const newItem = new Product(name, description, price, img_url)
  products.addProduct(newItem)
  res.json(newItem)
})

route.delete('/item/:id', (req: Request, res: Response) => {
  const {id} = req.params
  try{
    products.removeByID(id)
    res.json({ message: 'No content', code: 204 })
  } catch (err) {
    res.json({error: err, code : 400})
  }
})

export { route }