import { ApiProperty } from '@nestjs/swagger';
import { GenericEntity } from 'src/common/generic.entity';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class UserEntity extends GenericEntity {
    @ApiProperty()
    @Column({
        unique: true,
    })
    username: string;

    @ApiProperty()
    @Column('text', { nullable: true })
    role: string;
}
