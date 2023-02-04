import { PetsModel, BookingModel, dbClose, } from './db.js'

await PetsModel.deleteMany()
await BookingModel.deleteMany()

const pets = [
        {
        "profile_image": "profile image",
        "image2": "image 2",
        "image3": "image 3",
        "name": "Cloud",
        "age": "1",
        "type": "Dog",
        "breed": "Border Collie",
        "about": "good girl"
      },
      {
        "profile_image": "profile image2",
        "image2": "image2 2",
        "image3": "image2 3",
        "name": "tifa",
        "age": "3",
        "type": "Cat",
        "breed": "Ginger",
        "about": "good girl"
      },
      {
        "profile_image": "profile image3",
        "image2": "image3 2",
        "image3": "image3 3",
        "name": "Cid",
        "age": "1",
        "type": "Dog",
        "breed": "dachshund",
        "about": "Sausage dog"
      },
      {
        "profile_image": "profile image4",
        "image2": "image4 2",
        "image3": "image4 3",
        "name": "Barrett",
        "age": "3",
        "type": "Cat",
        "breed": "British shorthair",
        "about": "Gunner"
      },
      {
        "profile_image": "profile image5",
        "image2": "image5 2",
        "image3": "image5 3",
        "name": "Red V",
        "age": "4",
        "type": "Dog",
        "breed": "German Shepherd",
        "about": "Guard dog"
      }

]

const bookings = [
]

await PetsModel.insertMany(pets)

dbClose()