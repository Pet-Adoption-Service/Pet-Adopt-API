import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

mongoose.set('strictQuery', true)
async function dbClose() {
    await mongoose.connection.close()
    console.log('db closed')
}

try {
    const m = mongoose.connect(process.env.ATLAS_DB_URL)
    console.log(m.connection.readyState === 1 ? 'Mongoose connection successful' : 'Mongoose connection failed' )
}
catch (err) {
    console.log(err)
}

const petsSchema = new mongoose.Schema({
    profile_image: { type: String, required: true},
    image2: {  type: String, required: false},
    image3: {  type: String, required: false},
    name: {  type: String, required: true},
    age: {  type: String, required: true},
    type: {  type: String, required: true},
    breed: {  type: String, required: true} ,
    about:{  type: String, required: true}
})

const PetsModel = mongoose.model('Pets', petsSchema)

const bookingSchema = new mongoose.Schema({
    petName: { type: String, required: true },
    name: { type: String, required: true},
    date: { type: Date, required: true},
    contactInfo: { type: String, required: true}

})

const BookingModel = mongoose.model('Booking', bookingSchema)



export { PetsModel, BookingModel, dbClose }