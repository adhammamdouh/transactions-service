import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
  Default,
} from 'sequelize-typescript';
import { Card } from './card.model';

@Table({
  tableName: 'transactions',
  timestamps: true,
})
export class Transaction extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id!: string;

  @ForeignKey(() => Card)
  @Column(DataType.UUID)
  card_id!: string;

  @BelongsTo(() => Card)
  card!: Card;

  @Column(DataType.INTEGER)
  processor_id!: number;

  @Column
  type!: string;

  @Column
  status!: string;

  @Column(DataType.DECIMAL)
  amount!: number;

  @Column
  currency!: string;

  @Column
  merchant_id!: string;

  @Column
  transaction_timestamp!: Date;

  @Column(DataType.JSONB)
  data!: any;
}
