import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number=1

    @Column()
    firstName: string='Vitaly'

    @Column()
    lastName: string='Menshikov'

    @Column()
    age: number=45

}

