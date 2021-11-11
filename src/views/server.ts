import express from 'express'
import cors from 'cors'
import { route as productRoutes } from './products'

const app = express()
const port = 3333
app.use(express.json())
app.use(cors())
app.use(productRoutes)

app.listen(port, () => {
    console.log(`Sever runing at http://localhost:${port}`)
})




