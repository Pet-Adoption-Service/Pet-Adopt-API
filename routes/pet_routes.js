import express from 'express'
import { PetsModel, BookingModel } from '../db.js'


const router = express.Router()

router.get('/', async (req, res) =>res.send(await PetsModel.find().populate({ path: 'name', select: 'name' })))

// router.post('/', async (req, res) => {
//     try { 

//     }

// }



export default router