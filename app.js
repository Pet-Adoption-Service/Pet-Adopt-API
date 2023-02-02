import  express, { response }  from "express"
import pet_routes from "./routes/pet_routes.js"

const app = express()

app.get('/', (req, res) => res.send({ info: 'The Pet Adoption Service' }))

app.use('/pets', petRoutes)

export default app