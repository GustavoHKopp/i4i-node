import { ItemDTO } from "../../interfaces/ItemItenterface";

export default class Product implements ItemDTO{
  name: string
  description: string
  price: number
  id: string
  img_url: string
  constructor( name: string, description: string, price: number, img_url: string){
    this.name = name
    this.description = description
    this.price = price
    this.id = `${Math.floor(Math.random() * (5000000 - 1))}`
    this.img_url = img_url
  }
}