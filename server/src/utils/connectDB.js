const mongoose = require('mongoose');
const mongoUrl = 'mongodb://localhost:27017/task-schedular'
const connectDB = async () => {
    const connectionInstances =  await mongoose.connect(mongoUrl);
    console.log(`\n MongoDB connected !! DB HOST : ${connectionInstances.connection.host}`)

}

module.exports = connectDB;