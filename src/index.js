import express from 'express';
import pool from './config/database.js';
import { createBooksTable } from './config/tableSetup.js';
import bookRoutes from './routes/bookRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', bookRoutes);

const startServer = async () => {
    try {
        await pool.connect();
        console.log('Database connected successfully');
        await createBooksTable();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error starting server', error.stack);
        process.exit(1);
    }
};

startServer();