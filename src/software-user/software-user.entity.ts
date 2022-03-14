import { GenericEntity } from 'src/common/generic.entity';
import { SoftwareTitleEntity } from 'src/software/software.entity';
import { UserEntity } from 'src/user/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  UpdateDateColumn,
} from 'typeorm';

@Entity('software_user')
export class SoftwareUserEntity extends GenericEntity {
  @ManyToOne(
    () => SoftwareTitleEntity,
    (softwareTitle: SoftwareTitleEntity) => softwareTitle.licencees,
  )
  softwareTitles: SoftwareTitleEntity[];

  @ManyToOne(
    () => UserEntity,
    (licencee: UserEntity) => licencee.softwareTitles,
  )
  licencees: UserEntity[];
}
