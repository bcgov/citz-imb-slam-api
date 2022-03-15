import { ApiProperty } from '@nestjs/swagger';
import { AssignedLicenseEntity } from 'src/assignedLicense/assignedLicense.entity';
import { GenericEntity } from 'src/common/generic.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  UpdateDateColumn,
} from 'typeorm';

@Entity('software_titles')
export class SoftwareTitleEntity extends GenericEntity {
  @ApiProperty()
  @Column({
    unique: true,
  })
  title: string;

  @ApiProperty()
  @Column()
  publisher: string;

  @ApiProperty()
  @Column()
  administrator: string;

  @ApiProperty()
  @Column({
    default: 0,
    nullable: true,
  })
  quantity: number;

  @ApiProperty()
  @Column({
    nullable: true,
  })
  renewal: Date;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  modified: Date;

  @OneToMany(() => AssignedLicenseEntity, (sl) => sl.software)
  licenseeConnection: Promise<AssignedLicenseEntity>;
}
