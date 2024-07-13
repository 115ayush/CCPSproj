const mongoose = require('mongoose');

const mongoURL = "mongodb+srv://bhoomig:UhiP7wV5g5XGf1nJ@cluster0.vykiygq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const url="mongodb://localhost:27017/ccpsdb"
const connectDB = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
