import mongoose from 'mongoose';

const connectionDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/todoApp")
        console.log("DB Connected");
    } catch (err) {
        console.log(err);
        process.exit()
    }
}

module.exports = connectionDB;