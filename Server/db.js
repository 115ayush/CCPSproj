const mongoose = require('mongoose');

const mongoURL = "mongodb+srv://ayushpatel:gbpAUOqTUwlzhZ2m@cluster0.2hfmvuz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const urldb="mongodb://localhost:27017/ccpsdb";
const connectDB = async () => {
  try {
    await mongoose.connect(urldb, {
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


