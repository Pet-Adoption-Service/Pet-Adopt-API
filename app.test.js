import app from './app.js'
import request from 'supertest'


describe("App tests", () => {
    test('Get home page' , async () => {
        const res = await request(app).get('/')
        expect(res.status).toBe(200)
        expect(res.headers['content-type']).toMatch(/json/i)
        expect(res.body.info).toBeDefined()
        expect(res.body.info).toBe('The Pet Adoption Service')
      })


    describe('Get pets list', () => {
     let res
     
     beforeEach(async() => {
      res = await request(app).get('/pets')
      expect(res.status).toBe(200)
      expect(res.headers['content-type']).toMatch(/json/i)
     })

     it('should be an array', () => {
      expect(res.body).toBeInstanceOf(Array)
      expect(res.body.length).toBe(5)
     })
     
     it('has correct data structure', () => {
      res.body.forEach(el => {
        expect(el._id).toBeDefined()


      })
      
     })


    })
  })
    
    // router.get('/', async (req, res) =>res.send(await PetsModel.find().populate({ path: 'profile', select: 'name' })))

    // //get by id
    // router.get('/:id', async (req, res) => {
    //     try {
    //         const pet = await PetsModel.findById(req.params.id).populate({ path: 'profile', select: 'name' })
    //         if (pet) {
    //             res.send(pet)
    //         } else {
    //             res.status(404).send({ error: 'Not Found'})
    //         }
    //     }
    //     catch (err) {
    //         res.status(404).send({ error: err.message })
    //     }
    // })
    
    
    
    // //Post request
    // router.post('/', async (req, res) => {
    //     try {
    //         const { profile_image, image2, image3, name, age, type, breed, about } = req.body
    //         // const petObject = await PetsModel.findOne( {type : type})
    //         const newPet = { profile_image, image2, image3, name, age, type, breed, about }
    
    //         const insertedPet = await PetsModel.create(newPet)
    
    //         res.status(201).send(await insertedPet.populate({ path: 'profile', select: 'name'}))
    //     }
    //     catch (err) {
    //         res.status(500).send({ error: err.message })
    //     }
    // })
    
    
    // //delete profile
    // router.delete('/:id', async (req, res) => {
    //     try {
    //       const pet = await PetsModel.findByIdAndDelete(req.params.id)
    //       if (pet) {
    //         res.sendStatus(204)
    //       } else {
    //         res.status(404).send({ error: 'Pet not found' })
    //       }
    //     }
    //     catch (err) {
    //       res.status(500).send({ error: err.message })
    //     }
    //   })
    
    // //Update
    // router.put('/:id', async (req, res) => {
    //     const { profile_image, image2, image3, name, age, type, breed, about } = req.body
    //     const newPet = { profile_image, image2, image3, name, age, type, breed, about }
        
    //     try {
    //       const pet = await PetsModel.findByIdAndUpdate(req.params.id, newPet, { returnDocument: 'after' })
    //       if (pet) {
    //         res.send(pet)
    //       } else {
    //         res.status(404).send({ error: 'Pet not found' })
    //       }
    //     }
    //     catch (err) {
    //       res.status(500).send({ error: err.message })
    //     }
    //   })
    
    