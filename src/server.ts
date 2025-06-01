import app from './apps';
import connectDB from '../config/database';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT ;

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error starting the server:', error);
        process.exit(1);
    }
};

startServer();
export default startServer;