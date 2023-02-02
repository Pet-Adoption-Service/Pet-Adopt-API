import  express, { response }  from "express"


const app = express()

app.get('/', (req, res) => res.send({ info: 'The Pet Adoption Service' }))


export default app