import app from './app.js'
import request from 'supertest'

describe("App tests", () => {
    test('Create a new pet', async () => {
        const res = await request(app).post('/pets').send({
        })
    
        expect(res.status).toBe(201)
        expect(res.body._id).toBeDefined()
      })

})