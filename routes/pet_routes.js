import express from 'express'
import { PetsModel, BookingModel } from '../db.js'


const router = express.Router()

router.get('/', async (req, res) =>res.send(await PetsModel.find().populate({ path: 'profile', select: 'name' })))

router.get('/:id', async (req, res) => {
    try {
        const pet = await PetsModel.findById(req.params.id).populate({ path: 'profile', select: 'name' })
        if (pet) {
            res.send(pet)
        } else {
            res.status(404).send({ error: 'Not Found'})
        }
    }
    catch (err) {
        res.status(404).send({ error: err.message })
    }
})


router.post('/', async (req, res) => {
    try {
        const { profile_image, image2, image3, name, age, type, breed, about } = req.body
        const petObject = await PetsModel.findOne( {type : type})
        const newPet = { profile_image, image2, image3, name, age, type, breed, about }

        const insertedPet = await PetsModel.create(newPet)

        res.status(201).send(await insertedPet.populate({ path: 'profile', select: 'name'}))
    }
    catch (err) {
        res.status(500).send({ error: err.message })
    }
})




export default router