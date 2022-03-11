import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from 'src/user/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { GenericEntity } from 'src/common/generic.entity';

@Entity('software_titles')
export class SoftwareTitleEntity extends GenericEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

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

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  modified: Date;

  @ManyToMany(() => UserEntity)
  @JoinTable()
  licencee: UserEntity;
}
