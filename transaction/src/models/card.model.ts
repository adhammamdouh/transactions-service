import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  Default,
  HasMany,
} from 'sequelize-typescript';
import { Transaction } from './transaction.model';

@Table({
  tableName: 'cards',
  timestamps: true,
})
export class Card extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id!: string;

  @Column(DataType.UUID)
  user_id!: string;

  @Column
  expiry_date!: Date;

  @Column(DataType.DECIMAL)
  limit!: number;

  @Column(DataType.DECIMAL)
  @Default(0)
  utilization!: number;

  @HasMany(() => Transaction)
  transactions!: Transaction[];
}
