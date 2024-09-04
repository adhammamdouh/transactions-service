// transaction/src/database/database.providers.ts
import { Sequelize } from 'sequelize-typescript';
import { Card } from '../models/card.model';
import { Transaction } from '../models/transaction.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        models: [Transaction, Card],
      });
      await sequelize.sync();
      return sequelize;
    },
  },
];
