import  express, { response }  from "express"
import pet_routes from "./routes/pet_routes.js"

const app = express()

app.use(express.json())

app.get('/', (req, res) => res.send({ info: 'The Pet Adoption Service' }))

app.use('/pets', pet_routes)

export default app