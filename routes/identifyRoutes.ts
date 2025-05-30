import express from 'express';
import { identifyController } from './identifyController';
import { validateIdentifyRequest } from './middleware/validationMiddleware';
import { errorHandler } from './middleware/errorHandler';

const router = express.Router();

// Use validation middleware before controller
router.post('/identify', validateIdentifyRequest, identifyController);

// Use error handling middleware after routes
router.use(errorHandler);

export default router;
