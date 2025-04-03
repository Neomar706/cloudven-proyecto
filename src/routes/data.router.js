import { Router } from 'express';

import { dataController } from '../controllers/data.controller.js';

export const dataRouter = Router();

dataRouter.post('/service-program', dataController.saveDataApplication);

dataRouter.get('/service-program', dataController.getDataApplication);

