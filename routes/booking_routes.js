import express from 'express'
import { PetsModel, BookingModel } from '../db.js'


const router = express.Router()

router.get('/', async (req, res) =>res.send(await BookingModel.find().populate({ path: 'booking', select: 'petName' })))



export default router