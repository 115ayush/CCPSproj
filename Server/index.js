const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const xlsx = require("xlsx");
const connectDB = require("./db");

const app = express();
const port = 4001;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import Models
const User = require('./models/User');
const Student = require('./models/Student');
const Company = require('./models/Company');

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
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (error) {
    console.error('Error fetching companies:', error);
    res.status(500).json({ error: 'Failed to fetch companies' });
  }
});

// Configure Multer for file upload (using in-memory storage)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Upload Endpoint
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      console.error('No file uploaded');
      return res.status(400).send("No file uploaded.");
    }

    // Read the file buffer
    const workbook = xlsx.read(file.buffer, { type: 'buffer' });

    const sheetName = workbook.SheetNames[0];
   

    const worksheet = workbook.Sheets[sheetName];
   

    const data = xlsx.utils.sheet_to_json(worksheet);
    console.log(`Data from Excel file: ${JSON.stringify(data, null, 2)}`);

    for (const row of data) {
      const company = new Company({
        name: row.name,
        hrname: row.hrname,
        Description: row.Description,
        hrEmail: row.hrEmail, // Ensure this matches hrEmail from Excel
        memMail: row.memMail,
        isContacted: row.isContacted
      });

      await company.save();
    }

    res.status(200).send("File uploaded and data processed successfully.");
  } catch (error) {
    console.error('Error uploading and processing file:', error);
    res.status(500).send("An error occurred while processing the file.");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
