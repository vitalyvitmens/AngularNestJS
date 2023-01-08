import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Bike {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  make: string

  @Column()
  model: string

  @Column()
  miles: number
}
