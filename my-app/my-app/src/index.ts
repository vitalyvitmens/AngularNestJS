import { AppDataSource } from './data-source'
import { User } from './entity/User'
import { Car } from './entity/Car'
import { Bike } from './entity/bike'

AppDataSource.initialize()
  .then(async () => {
    console.log('Inserting a new user into the database...')
    const user = new User()
    user.firstName = 'Timber'
    user.lastName = 'Saw'
    user.age = 25
    await AppDataSource.manager.save(user)
    console.log('Saved a new user with id: ' + user.id)

    console.log('Loading users from the database...')
    const users = await AppDataSource.manager.find(User)
    console.log('Loaded users: ', users)

    console.log(
      'Here you can setup and run express / fastify / any other framework.'
    )
  })
  .catch((error) => console.log(error))

AppDataSource.initialize()
  .then(async () => {
    console.log('Добавление новой машины в базу...')
    const car = new Car()
    car.make = 'Porshe'
    car.model = 'Caen'
    car.miles = 7000
    await AppDataSource.manager.save(car)
    console.log('Сохранен новый car с id: ' + car.id)

    console.log('Загрузка cars из базы данных...')
    const cars = await AppDataSource.manager.find(Car)
    console.log('Загруженные cars: ', cars)

    console.log(
      'Здесь вы можете настроить и запустить экспресс / fastify / любой другой фреймворк.'
    )
  })
  .catch((error) => console.log(error))

  AppDataSource.initialize()
  .then(async () => {
    console.log('Добавление нового велосипеда в базу...')
    const bike = new Bike()
    bike.make = 'Stels'
    bike.model = '920MD'
    bike.miles = 300
    await AppDataSource.manager.save(bike)
    console.log('Сохранен новый bikes с id: ' + bike.id)

    console.log('Загрузка bikes из базы данных...')
    const bikes = await AppDataSource.manager.find(Bike)
    console.log('Загруженные bikes: ', bikes)

    console.log(
      'Здесь вы можете настроить и запустить экспресс / fastify / любой другой фреймворк.'
    )
  })
  .catch((error) => console.log(error))
