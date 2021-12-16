const express = require("express")

const connectDB = require("./config/db")

const todoRoutes = require("./routes/todoRoute")
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Connected to DB
connectDB()

//routes
app.use("/todo", todoRoutes)

app.listen(3000, () => { console.log("server Runing") })
