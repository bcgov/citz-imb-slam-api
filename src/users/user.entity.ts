import { ApiProperty } from '@nestjs/swagger';
import { GenericEntity } from 'src/common/generic.entity';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class UserEntity extends GenericEntity {
    @ApiProperty()
    @Column('text', { nullable: false })
    username: string;

    @ApiProperty()
    @Column({
        unique: true,
    })
    email: string;

    @ApiProperty()
    @Column('text', { nullable: true })
    role: string;
}
