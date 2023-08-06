import express, { json } from 'express';
import cors from 'cors';
import exampleRouter from './routes/example';

// Create the app
const app = express();

// Middleware
app.use(cors());
app.use(json());

// Routes
app.use('/api/example', exampleRouter);

// Export to use
export default app;