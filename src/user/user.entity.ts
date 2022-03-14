import { ApiProperty } from '@nestjs/swagger';
import { GenericEntity } from 'src/common/generic.entity';
import { SoftwareUserEntity } from 'src/software-user/software-user.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('licencees')
export class UserEntity extends GenericEntity {
  @ApiProperty()
  @Column({
    unique: true,
  })
  title: string;

  @OneToMany(() => SoftwareUserEntity, (softwareUser) => softwareUser.id)
  softwareUser: SoftwareUserEntity[];
}
