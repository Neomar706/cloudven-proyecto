import express from 'express';
import cors from 'cors';

import { userRouter } from './routes/user.router.js';
import { dataRouter } from './routes/data.router.js';
import { contactRouter } from './routes/contact.router.js';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/v1/user', userRouter);
app.use('/api/v1/data', dataRouter);
app.use('/api/v1/contact', contactRouter);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});