import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class SoftwareTitle {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column('date')
  renewal_date: Date;

  @ApiProperty()
  @Column('money')
  cost: number;

  @ApiProperty()
  @Column()
  billing_cycle: string;

  @ApiProperty()
  @Column()
  administrator: string;

  @ApiProperty()
  @Column('int')
  quantity: number;

  @ApiProperty()
  @Column('boolean', { default: true })
  active: boolean;
}
