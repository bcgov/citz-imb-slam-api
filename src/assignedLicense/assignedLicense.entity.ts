import { ApiProperty } from '@nestjs/swagger';
import { GenericEntity } from 'src/common/generic.entity';
import { LicenseeEntity } from 'src/licensee/licensee.entity';
import { SoftwareTitleEntity } from 'src/software/software.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('assigned_license')
export class AssignedLicenseEntity extends GenericEntity {
    @ApiProperty()
    @Column()
    softwareId: string;

    @ApiProperty()
    @Column()
    licenseeId: string;

    @ManyToOne(
        () => SoftwareTitleEntity,
        (software: SoftwareTitleEntity) => software.licenseeConnection,
        { primary: true },
    )
    @JoinColumn({ name: 'softwareId' })
    software: Promise<SoftwareTitleEntity>;

    @ManyToOne(
        () => LicenseeEntity,
        (licensee) => licensee.softwareConnection,
        {
            primary: true,
        },
    )
    @JoinColumn({ name: 'licenseeId' })
    licensee: Promise<LicenseeEntity>;
}
