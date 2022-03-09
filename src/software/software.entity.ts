import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/user.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('software_title')
export class SoftwareTitle extends BaseEntity {
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

  @ManyToMany(() => User)
  @JoinTable()
  licencee: User;
}
