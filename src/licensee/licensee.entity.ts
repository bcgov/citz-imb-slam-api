import { ApiProperty } from '@nestjs/swagger';
import { AssignedLicenseEntity } from 'src/assignedLicense/assignedLicense.entity';
import { GenericEntity } from 'src/common/generic.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('licensees')
export class LicenseeEntity extends GenericEntity {
    @ApiProperty()
    @Column('text', { nullable: false })
    name: string;

    @ApiProperty()
    @Column({
        unique: true,
    })
    email: string;

    @ApiProperty()
    @Column('text', { nullable: false })
    notes: string;

    @ApiProperty()
    @Column('text', { nullable: false })
    role: string;

    @OneToMany(() => AssignedLicenseEntity, (sl) => sl.licensee, {
        cascade: true,
    })
    softwareConnection: Promise<AssignedLicenseEntity[]>;
}
