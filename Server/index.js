const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = 4001;

// MongoDB URI
const URI = "mongodb://localhost:27017/ccpsdb";

// Connect to MongoDB
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define User Schema and Model
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  isCoordi: Number,
});
const User = mongoose.model("User", userSchema);

// Define Student Schema and Model
const studentSchema = new mongoose.Schema({
  name: String,
  post: String,
  Discipline: String,
  email: String,
  imageUrl: String
});
const Student = mongoose.model("Student", studentSchema);

// Define Company Schema and Model
const companySchema = new mongoose.Schema({
  name: String,
  hrname: String,
  Description: String,
  hremail: String,
  memMail: String,
  isContacted: Number,
});
const Companies = mongoose.model("Companies", companySchema);

// Login Endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.status(200).json({ exists: 1, data: { email: user.email, isCoordi: user.isCoordi } });
    } else {
      res.status(200).json({ exists: 0 });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ exists: 0 });
  }
});

// Students Endpoint
app.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ error: 'Failed to fetch students' });
  }
});

// Companies Endpoint
app.get('/companies', async (req, res) => {
  try {
    const companies = await Companies.find();
    res.status(200).json(companies);
  } catch (error) {
    console.error('Error fetching companies:', error);
    res.status(500).json({ error: 'Failed to fetch companies' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
