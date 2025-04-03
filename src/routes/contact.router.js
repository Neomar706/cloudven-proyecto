
import { Router } from 'express';

import { contactController } from '../controllers/contact.controller.js';

export const contactRouter = Router();

contactRouter.post('/message', contactController.saveContactMessage);

contactRouter.get('/messages', contactController.getContactMessages);