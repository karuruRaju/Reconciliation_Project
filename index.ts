import express, { Application } from 'express';
import identifyRoutes from './identifyRoutes';
import { initializeDatabase } from './database';
import { errorHandler } from './middleware/errorHandler';

const app: Application = express();
const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    // Initialize the H2 database connection
    await initializeDatabase();

    app.use(express.json());

    // Mount identify routes with validation middleware included inside routes file
    app.use('/', identifyRoutes);

    // Global error handler (must be after all routes)
    app.use(errorHandler);

    app.listen(PORT, () => {
      import logger from './logger';

logger.info(`Server started on http://localhost:${PORT}`);

    });
  } catch (error) {
    logger.error('Failed to start server: %o', error);

    process.exit(1);
  }
}

startServer();
