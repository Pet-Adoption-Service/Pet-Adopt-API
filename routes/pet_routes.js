import express from 'express'
import { PetsModel, BookingModel } from '../db.js'


const router = express.Router()

router.get('/', async (req, res) =>res.send(await PetsModel.find().populate({ path: 'profile', select: 'name' })))



export default router