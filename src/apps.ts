import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import postRoutes from './routes/postRoutes';


const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true,
    }));
app.use('/users', userRoutes);
app.use ('/posts', postRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

export default app;