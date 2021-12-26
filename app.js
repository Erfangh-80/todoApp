import express from 'express';
import connectDB from './config/db';
import todoRoutes from './routes/todoRoute';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Connected to DB
connectDB()

//routes
app.use("/todo", todoRoutes)

app.listen(3000, () => { console.log("server Runing") })
