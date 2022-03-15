import { ApiProperty } from '@nestjs/swagger';
import { GenericEntity } from 'src/common/generic.entity';
import { AssignedLicenseEntity } from 'src/assignedLicense/assignedLicense.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('licensees')
export class LicenseeEntity extends GenericEntity {
  @ApiProperty()
  @Column({
    unique: true,
  })
  name: string;

  @OneToMany(() => AssignedLicenseEntity, (sl) => sl.licencee)
  softwareConnection: Promise<AssignedLicenseEntity[]>;
}
