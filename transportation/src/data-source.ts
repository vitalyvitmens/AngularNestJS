import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { User } from "./entity/User"
import { Car } from './entity/Car'
import { Bike } from './entity/bike'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'vitalyvitmens',
  password: '',
  database: 'transportation',
  synchronize: true,
  logging: false,
  entities: [User, Car, Bike],
  migrations: [],
  subscribers: [],
})

// для инициализации начального соединения с базой регистрируем все сущности
// и "синхронизируем" схему базы данных, вызываем метод "initialize()" только что созданной базы данных
// один раз в начальной загрузке вашего приложения
AppDataSource.initialize()
  .then(() => {
    // здесь вы можете начать работать с вашей базой данных
  })
  .catch((error) => console.log(error))
