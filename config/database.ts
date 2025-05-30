import { DataSource } from 'typeorm';
import { Contact } from '../models/contactModel';

export const AppDataSource = new DataSource({
  type: 'h2',
  database: 'bitespeeddb',
  // For H2 in-memory mode, use below URL instead of file db
  // url: 'jdbc:h2:mem:bitespeeddb;DB_CLOSE_DELAY=-1',
  synchronize: true,
  logging: false,
  entities: [Contact],
  // If you want file-based H2 db, you might need this config depending on setup
  // extra: {
  //   // H2 specific options here
  // },
});

export const initializeDatabase = async () => {
  try {
    await AppDataSource.initialize();
    console.log('H2 Database connected successfully.');
  } catch (error) {
    console.error('Error during H2 Database initialization', error);
    throw error;
  }
};
