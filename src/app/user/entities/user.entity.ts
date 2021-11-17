import { Column, Entity } from 'typeorm'
import { Common } from '../../common/common'

@Entity('users')
export class User extends Common {
    @Column('varchar', {
        nullable: true,
        length: 256,
        name: 'password',
    })
    public password: string | null

    @Column('varchar', {
        nullable: false,
        length: 256,
        name: 'username',
    })
    public username: string

    public toResponseObject = () => {
        return {
            id: this.id,
            username: this.username,
        }
    }
}
